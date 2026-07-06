let currentLang="en";
let currentCategoryId=null;

const ui={
  en:{heroKicker:"Welcome to",heroText:"Food, drinks, shisha and great moments in Taksim.",catSmall:"Explore",catTitle:"Menu Categories",catDesc:"Choose a category to view all items.",searchSmall:"Search",searchTitle:"Search Results",selectedSmall:"Selected Category",popularSmall:"Recommended",popularTitle:"Popular Items",back:"← Back",empty:"No items found.",items:"items",ask:"Ask",wa:"Ask on WhatsApp"},
  ar:{heroKicker:"أهلاً بكم في",heroText:"طعام، مشروبات، أرجيلة وأجواء رائعة في تقسيم.",catSmall:"اكتشف",catTitle:"أقسام المنيو",catDesc:"اختر القسم لعرض جميع الأصناف.",searchSmall:"بحث",searchTitle:"نتائج البحث",selectedSmall:"القسم المختار",popularSmall:"مميز",popularTitle:"الأكثر طلبًا",back:"→ رجوع",empty:"لا توجد نتائج.",items:"أصناف",ask:"اسأل",wa:"اسأل على واتساب"},
  tr:{heroKicker:"Hoş geldiniz",heroText:"Taksim’de yemek, içecek, nargile ve keyifli anlar.",catSmall:"Keşfet",catTitle:"Menü Kategorileri",catDesc:"Tüm ürünleri görmek için kategori seçin.",searchSmall:"Arama",searchTitle:"Arama Sonuçları",selectedSmall:"Seçili Kategori",popularSmall:"Önerilen",popularTitle:"Popüler Ürünler",back:"← Geri",empty:"Ürün bulunamadı.",items:"ürün",ask:"Sor",wa:"WhatsApp ile sor"}
};

const categoryImages={
  "breakfast":"breakfast.jpg",
  "hot-starters":"appetizers.jpg",
  "cold-meze":"appetizers.jpg",
  "toast-panini":"toast.jpg",
  "wrap":"wrap.jpg",
  "pasta-burger":"burger.jpg",
  "salads":"salad.jpg",
  "pizza-pide":"pizza.jpg",
  "kebab":"kebab.jpg",
  "chicken":"chicken.jpg",
  "steak":"steak.jpg",
  "fish":"fish.jpg",
  "desserts":"dessert.jpg",
  "cold-drinks":"cold-drinks.jpg",
  "coffee":"hot-drinks.jpg",
  "fruit-nuts":"dessert.jpg",
  "beer":"alcohol.jpg",
  "vodka":"alcohol.jpg",
  "raki":"alcohol.jpg",
  "wine":"alcohol.jpg",
  "cocktails":"mocktails.jpg",
  "whisky":"alcohol.jpg",
  "liqueur-rum":"alcohol.jpg",
  "starbuzz":"shisha.jpg",
  "el-fakher":"shisha.jpg",
  "mazaya":"shisha.jpg",
  "nakhla":"shisha.jpg",
  "special-shisha":"shisha.jpg"
};

function $(id){return document.getElementById(id)}
function txt(obj){return obj?.[currentLang]||obj?.en||""}
function set(id,v){const e=$(id);if(e)e.textContent=v}

function categoryImage(c){
  const file=categoryImages[c.id]||"breakfast.jpg";
  return `images/categories/${file}`;
}

function toggleMenu(force){
  const m=$("sideMenu"),o=$("overlay");
  if(!m||!o)return;
  const open=typeof force==="boolean"?force:!m.classList.contains("open");
  m.classList.toggle("open",open);
  o.classList.toggle("open",open);
  document.body.classList.toggle("lock",open);
}

function scrollToBlock(id){
  toggleMenu(false);
  $(id)?.scrollIntoView({behavior:"smooth"});
}

function setLanguage(lang,btn){
  currentLang=lang;
  document.body.dir=lang==="ar"?"rtl":"ltr";
  document.documentElement.lang=lang;
  document.querySelectorAll(".langs button").forEach(b=>b.classList.remove("active"));
  btn?.classList.add("active");
  renderStatic();
  renderCategories();
  renderPopular();
  if(currentCategoryId)openCategory(currentCategoryId,false);
  if($("searchInput").value)searchMenu(false);
}

function renderStatic(){
  const t=ui[currentLang];
  set("heroKicker",t.heroKicker);
  set("heroText",t.heroText);
  set("catSmall",t.catSmall);
  set("catTitle",t.catTitle);
  set("catDesc",t.catDesc);
  set("searchSmall",t.searchSmall);
  set("searchTitle",t.searchTitle);
  set("selectedSmall",t.selectedSmall);
  set("popularSmall",t.popularSmall);
  set("popularTitle",t.popularTitle);
  $("searchInput").placeholder=currentLang==="ar"?"ابحث في المنيو...":currentLang==="tr"?"Menüde ara...":"Search in menu...";
}

function productsOf(catId){
  return menuItems.filter(p=>p.category===catId);
}

function renderCategories(){
  const grid=$("categoryGrid");
  grid.innerHTML="";

  menuCategories.forEach(c=>{
    const count=productsOf(c.id).length;
    const card=document.createElement("article");
    card.className="cat-card";
    card.onclick=()=>openCategory(c.id,true);

    card.innerHTML=`
      <div class="cat-img">
        <img src="${categoryImage(c)}" alt="${txt(c.name)}" onerror="this.style.display='none'">
      </div>
      <div class="cat-body">
        <h3>${txt(c.name)}</h3>
        <p>${txt(c.description)}</p>
        <span>${count} ${ui[currentLang].items}</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

function cardProduct(p){
  const el=document.createElement("article");
  el.className="product-card";
  el.onclick=()=>openModal(p.id);

  const badges=[];
  if(p.bestSeller)badges.push(`<span class="badge gold">Best</span>`);
  if(p.special)badges.push(`<span class="badge gold">Chef</span>`);
  if(p.isNew)badges.push(`<span class="badge green">New</span>`);
  if(p.spicy)badges.push(`<span class="badge">Spicy</span>`);

  el.innerHTML=`
    <div class="prod-img">${p.icon||"🍽️"}</div>
    <div class="prod-body">
      <div class="prod-top">
        <div class="prod-name">${txt(p.name)}</div>
        <div class="prod-price">${p.price||ui[currentLang].ask}</div>
      </div>
      <p class="prod-desc">${txt(p.description)}</p>
      <div class="badges">${badges.join("")}</div>
    </div>
  `;

  return el;
}

function openCategory(id,scroll=true){
  currentCategoryId=id;
  const cat=menuCategories.find(c=>c.id===id);
  const grid=$("productsGrid");

  $("productsSection").classList.remove("hidden");
  set("selectedTitle",txt(cat.name));
  document.querySelector(".back-btn").textContent=ui[currentLang].back;

  grid.innerHTML="";
  const items=productsOf(id);

  if(!items.length){
    grid.innerHTML=`<div class="empty-state">${ui[currentLang].empty}</div>`;
  }

  items.forEach(p=>grid.appendChild(cardProduct(p)));

  if(scroll)$("productsSection").scrollIntoView({behavior:"smooth"});
}

function closeCategory(){
  currentCategoryId=null;
  $("productsSection").classList.add("hidden");
  $("productsGrid").innerHTML="";
  $("categories").scrollIntoView({behavior:"smooth"});
}

function renderPopular(){
  const grid=$("popularGrid");
  grid.innerHTML="";
  menuItems
    .filter(p=>p.bestSeller||p.special||p.isNew)
    .slice(0,8)
    .forEach(p=>grid.appendChild(cardProduct(p)));
}

function searchMenu(scroll=true){
  const q=$("searchInput").value.trim().toLowerCase();
  const sec=$("searchSection"),grid=$("searchGrid");

  if(!q){
    sec.classList.add("hidden");
    grid.innerHTML="";
    return;
  }

  const res=menuItems.filter(p=>
    [p.name.en,p.name.ar,p.name.tr,p.description.en,p.description.ar,p.description.tr]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .includes(q)
  );

  sec.classList.remove("hidden");
  grid.innerHTML="";

  if(!res.length){
    grid.innerHTML=`<div class="empty-state">${ui[currentLang].empty}</div>`;
  }

  res.forEach(p=>grid.appendChild(cardProduct(p)));

  if(scroll)sec.scrollIntoView({behavior:"smooth"});
}

function clearSearch(){
  $("searchInput").value="";
  $("searchSection").classList.add("hidden");
  $("searchGrid").innerHTML="";
}

function quickSearch(q){
  $("searchInput").value=q;
  searchMenu(true);
}

function openModal(id){
  const p=menuItems.find(x=>x.id===id);
  const cat=menuCategories.find(c=>c.id===p.category);

  $("modalCat").textContent=cat?txt(cat.name):"";
  $("modalName").textContent=txt(p.name);
  $("modalDesc").textContent=txt(p.description);
  $("modalPrice").textContent=p.price||ui[currentLang].ask;
  $("modalImg").textContent=p.icon||"🍽️";
  $("modalWa").textContent=ui[currentLang].wa;
  $("modalWa").href="https://wa.me/905313692933?text="+encodeURIComponent("Hello Anfield Cafe Pub, I want to ask about: "+txt(p.name));

  $("modal").classList.remove("hidden");
  document.body.classList.add("lock");
}

function closeModal(){
  $("modal").classList.add("hidden");
  document.body.classList.remove("lock");
}

document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){
    closeModal();
    toggleMenu(false);
  }
});

document.addEventListener("DOMContentLoaded", async ()=>{
  renderStatic();

  if (window.firebaseProductsReady) {
    try {
      await window.firebaseProductsReady;
    } catch (error) {
      console.log("Firebase loading error:", error);
    }
  }

  renderCategories();
  renderPopular();
});
