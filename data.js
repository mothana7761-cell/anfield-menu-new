const menuCategories = [
  {
    "id": "breakfast",
    "icon": "🍳",
    "name": {
      "en": "Breakfast",
      "ar": "الفطور",
      "tr": "Kahvaltılar"
    },
    "description": {
      "en": "Breakfast plates and omelets.",
      "ar": "أطباق الفطور والأومليت.",
      "tr": "Kahvaltı tabakları ve omletler."
    }
  },
  {
    "id": "hot-starters",
    "icon": "🍟",
    "name": {
      "en": "Hot Starters",
      "ar": "مقبلات ساخنة",
      "tr": "Ara Sıcaklar"
    },
    "description": {
      "en": "Hot appetizers and snacks.",
      "ar": "مقبلات ساخنة وسناكات.",
      "tr": "Sıcak başlangıçlar."
    }
  },
  {
    "id": "cold-meze",
    "icon": "🧆",
    "name": {
      "en": "Cold Meze",
      "ar": "مقبلات باردة",
      "tr": "Soğuk Mezeler"
    },
    "description": {
      "en": "Cold meze selections.",
      "ar": "تشكيلة مقبلات باردة.",
      "tr": "Soğuk mezeler."
    }
  },
  {
    "id": "toast-panini",
    "icon": "🥪",
    "name": {
      "en": "Toast & Panini",
      "ar": "توست وبانيني",
      "tr": "Toast & Panini"
    },
    "description": {
      "en": "Toast and panini sandwiches.",
      "ar": "توست وساندويش بانيني.",
      "tr": "Tost ve panini."
    }
  },
  {
    "id": "wrap",
    "icon": "🌯",
    "name": {
      "en": "Wrap & Quesadilla",
      "ar": "راب وكاساديا",
      "tr": "Wrap & Quesadilla"
    },
    "description": {
      "en": "Wraps and quesadillas.",
      "ar": "راب وكاساديا.",
      "tr": "Wrap ve quesadilla."
    }
  },
  {
    "id": "pasta-burger",
    "icon": "🍔",
    "name": {
      "en": "Pasta & Burger",
      "ar": "باستا وبرغر",
      "tr": "Makarnalar & Burger"
    },
    "description": {
      "en": "Pasta and burger dishes.",
      "ar": "أطباق الباستا والبرغر.",
      "tr": "Makarna ve burger."
    }
  },
  {
    "id": "salads",
    "icon": "🥗",
    "name": {
      "en": "Salads",
      "ar": "السلطات",
      "tr": "Salatalar"
    },
    "description": {
      "en": "Fresh salads.",
      "ar": "سلطات طازجة.",
      "tr": "Taze salatalar."
    }
  },
  {
    "id": "pizza-pide",
    "icon": "🍕",
    "name": {
      "en": "Pizza & Pide",
      "ar": "بيتزا وبيدا",
      "tr": "Pizzalar & Pideler"
    },
    "description": {
      "en": "Pizza and Turkish pide.",
      "ar": "بيتزا وبيدا تركية.",
      "tr": "Pizza ve pide."
    }
  },
  {
    "id": "kebab",
    "icon": "🥩",
    "name": {
      "en": "Meat Kebabs",
      "ar": "كباب ومشاوي لحم",
      "tr": "Et Kebaplar"
    },
    "description": {
      "en": "Kebab and grilled meat dishes.",
      "ar": "كباب وأطباق لحم مشوي.",
      "tr": "Et kebap çeşitleri."
    }
  },
  {
    "id": "chicken",
    "icon": "🍗",
    "name": {
      "en": "Chicken Grills",
      "ar": "مشاوي الدجاج",
      "tr": "Tavuk Izgaralar"
    },
    "description": {
      "en": "Chicken plates.",
      "ar": "أطباق دجاج.",
      "tr": "Tavuk çeşitleri."
    }
  },
  {
    "id": "steak",
    "icon": "🥩",
    "name": {
      "en": "Steak",
      "ar": "ستيك",
      "tr": "Steak"
    },
    "description": {
      "en": "Steak plates.",
      "ar": "أطباق ستيك.",
      "tr": "Steak çeşitleri."
    }
  },
  {
    "id": "fish",
    "icon": "🐟",
    "name": {
      "en": "Fish",
      "ar": "السمك",
      "tr": "Balıklar"
    },
    "description": {
      "en": "Fish and seafood plates.",
      "ar": "أطباق السمك.",
      "tr": "Balık çeşitleri."
    }
  },
  {
    "id": "desserts",
    "icon": "🍰",
    "name": {
      "en": "Desserts",
      "ar": "الحلويات",
      "tr": "Tatlılar"
    },
    "description": {
      "en": "Sweet desserts.",
      "ar": "حلويات.",
      "tr": "Tatlı çeşitleri."
    }
  },
  {
    "id": "cold-drinks",
    "icon": "🥤",
    "name": {
      "en": "Cold Drinks",
      "ar": "مشروبات باردة",
      "tr": "Soğuk İçecekler"
    },
    "description": {
      "en": "Cold drinks and juices.",
      "ar": "مشروبات باردة وعصائر.",
      "tr": "Soğuk içecekler."
    }
  },
  {
    "id": "coffee",
    "icon": "☕",
    "name": {
      "en": "Coffee & Hot Drinks",
      "ar": "القهوة والمشروبات الساخنة",
      "tr": "Kahveler"
    },
    "description": {
      "en": "Coffee and hot drinks.",
      "ar": "القهوة والمشروبات الساخنة.",
      "tr": "Kahve çeşitleri."
    }
  },
  {
    "id": "fruit-nuts",
    "icon": "🍇",
    "name": {
      "en": "Fruit & Nuts",
      "ar": "فواكه ومكسرات",
      "tr": "Çerez & Meyve"
    },
    "description": {
      "en": "Fruit and nuts plates.",
      "ar": "فواكه ومكسرات.",
      "tr": "Meyve ve çerez."
    }
  },
  {
    "id": "beer",
    "icon": "🍺",
    "name": {
      "en": "Beer",
      "ar": "بيرة",
      "tr": "Biralar"
    },
    "description": {
      "en": "Beer selection.",
      "ar": "أنواع البيرة.",
      "tr": "Bira çeşitleri."
    }
  },
  {
    "id": "vodka",
    "icon": "🍸",
    "name": {
      "en": "Vodka",
      "ar": "فودكا",
      "tr": "Votka"
    },
    "description": {
      "en": "Vodka selection.",
      "ar": "أنواع الفودكا.",
      "tr": "Votka çeşitleri."
    }
  },
  {
    "id": "raki",
    "icon": "🥛",
    "name": {
      "en": "Rakı",
      "ar": "راكي",
      "tr": "Rakı"
    },
    "description": {
      "en": "Rakı selection.",
      "ar": "أنواع الراكي.",
      "tr": "Rakı çeşitleri."
    }
  },
  {
    "id": "wine",
    "icon": "🍷",
    "name": {
      "en": "Wine",
      "ar": "نبيذ",
      "tr": "Şaraplar"
    },
    "description": {
      "en": "Wine selection.",
      "ar": "أنواع النبيذ.",
      "tr": "Şarap çeşitleri."
    }
  },
  {
    "id": "cocktails",
    "icon": "🍹",
    "name": {
      "en": "Cocktails",
      "ar": "كوكتيلات",
      "tr": "Kokteyl"
    },
    "description": {
      "en": "Cocktail menu.",
      "ar": "قائمة الكوكتيلات.",
      "tr": "Kokteyl çeşitleri."
    }
  },
  {
    "id": "whisky",
    "icon": "🥃",
    "name": {
      "en": "Whisky",
      "ar": "ويسكي",
      "tr": "Viski"
    },
    "description": {
      "en": "Whisky selection.",
      "ar": "أنواع الويسكي.",
      "tr": "Viski çeşitleri."
    }
  },
  {
    "id": "liqueur-rum",
    "icon": "🍾",
    "name": {
      "en": "Liqueur & Rum",
      "ar": "ليكور وروم",
      "tr": "Likör & Rom"
    },
    "description": {
      "en": "Liqueur and rum selection.",
      "ar": "ليكور وروم.",
      "tr": "Likör ve rom."
    }
  },
  {
    "id": "starbuzz",
    "icon": "💨",
    "name": {
      "en": "Starbuzz",
      "ar": "ستارباز",
      "tr": "Starbuzz"
    },
    "description": {
      "en": "Starbuzz shisha flavors.",
      "ar": "نكهات أرجيلة ستارباز.",
      "tr": "Starbuzz nargile aromaları."
    }
  },
  {
    "id": "el-fakher",
    "icon": "💨",
    "name": {
      "en": "El Fakher",
      "ar": "الفاخر",
      "tr": "El Fakher"
    },
    "description": {
      "en": "El Fakher shisha flavors.",
      "ar": "نكهات أرجيلة الفاخر.",
      "tr": "El Fakher aromaları."
    }
  },
  {
    "id": "mazaya",
    "icon": "💨",
    "name": {
      "en": "Mazaya",
      "ar": "مزايا",
      "tr": "Mazaya"
    },
    "description": {
      "en": "Mazaya shisha flavors.",
      "ar": "نكهات أرجيلة مزايا.",
      "tr": "Mazaya aromaları."
    }
  },
  {
    "id": "nakhla",
    "icon": "💨",
    "name": {
      "en": "Nakhla",
      "ar": "نخلة",
      "tr": "Nakhla"
    },
    "description": {
      "en": "Nakhla shisha flavors.",
      "ar": "نكهات أرجيلة نخلة.",
      "tr": "Nakhla aromaları."
    }
  },
  {
    "id": "special-shisha",
    "icon": "💨",
    "name": {
      "en": "Special Shisha",
      "ar": "أراجيل خاصة",
      "tr": "Special"
    },
    "description": {
      "en": "Special shisha blends.",
      "ar": "خلطات أرجيلة خاصة.",
      "tr": "Özel nargile karışımları."
    }
  }
];

const menuItems = [
  {
    "id": "breakfast-cheese-omelet",
    "category": "breakfast",
    "icon": "🍳",
    "price": "390₺",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Cheese Omelet",
      "ar": "أومليت بالجبنة",
      "tr": "Peynirli Omlet"
    },
    "description": {
      "en": "Cheese Omelet",
      "ar": "أومليت بالجبنة",
      "tr": "Peynirli Omlet"
    }
  },
  {
    "id": "breakfast-vegetable-omelet",
    "category": "breakfast",
    "icon": "🍳",
    "price": "400₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Vegetable Omelet",
      "ar": "أومليت بالخضار",
      "tr": "Sebzeli Omlet"
    },
    "description": {
      "en": "Vegetable Omelet",
      "ar": "أومليت بالخضار",
      "tr": "Sebzeli Omlet"
    }
  },
  {
    "id": "breakfast-mixed-omelet",
    "category": "breakfast",
    "icon": "🍳",
    "price": "420₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mixed Omelet",
      "ar": "أومليت مشكل",
      "tr": "Karışık Omlet"
    },
    "description": {
      "en": "Mixed Omelet",
      "ar": "أومليت مشكل",
      "tr": "Karışık Omlet"
    }
  },
  {
    "id": "breakfast-breakfast-plate",
    "category": "breakfast",
    "icon": "🍳",
    "price": "750₺",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Breakfast Plate",
      "ar": "طبق فطور",
      "tr": "Kahvaltı"
    },
    "description": {
      "en": "Breakfast Plate",
      "ar": "طبق فطور",
      "tr": "Kahvaltı"
    }
  },
  {
    "id": "breakfast-menemen",
    "category": "breakfast",
    "icon": "🍳",
    "price": "390₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Menemen",
      "ar": "مينيمن",
      "tr": "Menemen"
    },
    "description": {
      "en": "Menemen",
      "ar": "مينيمن",
      "tr": "Menemen"
    }
  },
  {
    "id": "breakfast-traditional-spread-breakfast",
    "category": "breakfast",
    "icon": "🍳",
    "price": "1400₺",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Traditional Spread Breakfast",
      "ar": "فطور تركي كامل",
      "tr": "Serpme Kahvaltı"
    },
    "description": {
      "en": "Traditional Spread Breakfast",
      "ar": "فطور تركي كامل",
      "tr": "Serpme Kahvaltı"
    }
  },
  {
    "id": "breakfast-omelet",
    "category": "breakfast",
    "icon": "🍳",
    "price": "390₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Omelet",
      "ar": "أومليت",
      "tr": "Omlet"
    },
    "description": {
      "en": "Omelet",
      "ar": "أومليت",
      "tr": "Omlet"
    }
  },
  {
    "id": "hot-starters-soup-of-the-day",
    "category": "hot-starters",
    "icon": "🍟",
    "price": "200₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Soup of the Day",
      "ar": "شوربة اليوم",
      "tr": "Günün Çorbası"
    },
    "description": {
      "en": "Soup of the Day",
      "ar": "شوربة اليوم",
      "tr": "Günün Çorbası"
    }
  },
  {
    "id": "hot-starters-potatoes-with-cheese",
    "category": "hot-starters",
    "icon": "🍟",
    "price": "450₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Potatoes with Cheese",
      "ar": "بطاطا بالجبنة",
      "tr": "Kaşarlı Patates"
    },
    "description": {
      "en": "Potatoes with Cheese",
      "ar": "بطاطا بالجبنة",
      "tr": "Kaşarlı Patates"
    }
  },
  {
    "id": "hot-starters-french-fries",
    "category": "hot-starters",
    "icon": "🍟",
    "price": "390₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "French Fries",
      "ar": "بطاطا مقلية",
      "tr": "Patates"
    },
    "description": {
      "en": "French Fries",
      "ar": "بطاطا مقلية",
      "tr": "Patates"
    }
  },
  {
    "id": "hot-starters-mozzarella-sticks",
    "category": "hot-starters",
    "icon": "🍟",
    "price": "450₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mozzarella Sticks",
      "ar": "أصابع موزاريلا",
      "tr": "Mozzarella Sticks"
    },
    "description": {
      "en": "Mozzarella Sticks",
      "ar": "أصابع موزاريلا",
      "tr": "Mozzarella Sticks"
    }
  },
  {
    "id": "hot-starters-onion-rings",
    "category": "hot-starters",
    "icon": "🍟",
    "price": "450₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Onion Rings",
      "ar": "حلقات بصل",
      "tr": "Soğan Halkası"
    },
    "description": {
      "en": "Onion Rings",
      "ar": "حلقات بصل",
      "tr": "Soğan Halkası"
    }
  },
  {
    "id": "hot-starters-cajun-chicken-basket",
    "category": "hot-starters",
    "icon": "🍟",
    "price": "600₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Cajun Chicken Basket",
      "ar": "سلة دجاج كاجن",
      "tr": "Cajun Tavuk Sepeti"
    },
    "description": {
      "en": "Cajun Chicken Basket",
      "ar": "سلة دجاج كاجن",
      "tr": "Cajun Tavuk Sepeti"
    }
  },
  {
    "id": "hot-starters-hot-appetizer-plate",
    "category": "hot-starters",
    "icon": "🍟",
    "price": "600₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Hot Appetizer Plate",
      "ar": "طبق مقبلات ساخنة",
      "tr": "Sıcak Tabağı"
    },
    "description": {
      "en": "Hot Appetizer Plate",
      "ar": "طبق مقبلات ساخنة",
      "tr": "Sıcak Tabağı"
    }
  },
  {
    "id": "cold-meze-mixed-meze-plate",
    "category": "cold-meze",
    "icon": "🧆",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mixed Meze Plate",
      "ar": "طبق مقبلات مشكلة",
      "tr": "Karışık Meze Tabağı"
    },
    "description": {
      "en": "Mixed Meze Plate",
      "ar": "طبق مقبلات مشكلة",
      "tr": "Karışık Meze Tabağı"
    }
  },
  {
    "id": "cold-meze-hummus",
    "category": "cold-meze",
    "icon": "🧆",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Hummus",
      "ar": "حمص",
      "tr": "Hummus"
    },
    "description": {
      "en": "Hummus",
      "ar": "حمص",
      "tr": "Hummus"
    }
  },
  {
    "id": "cold-meze-cold-shrimp",
    "category": "cold-meze",
    "icon": "🧆",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Cold Shrimp",
      "ar": "جمبري بارد",
      "tr": "Karides Söğüş"
    },
    "description": {
      "en": "Cold Shrimp",
      "ar": "جمبري بارد",
      "tr": "Karides Söğüş"
    }
  },
  {
    "id": "cold-meze-haydari",
    "category": "cold-meze",
    "icon": "🧆",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Haydari",
      "ar": "هيداري",
      "tr": "Haydari"
    },
    "description": {
      "en": "Haydari",
      "ar": "هيداري",
      "tr": "Haydari"
    }
  },
  {
    "id": "cold-meze-red-pepper-meze",
    "category": "cold-meze",
    "icon": "🧆",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Red Pepper Meze",
      "ar": "مقبلات فلفل أحمر",
      "tr": "Kırmızı Biber"
    },
    "description": {
      "en": "Red Pepper Meze",
      "ar": "مقبلات فلفل أحمر",
      "tr": "Kırmızı Biber"
    }
  },
  {
    "id": "cold-meze-eggplant-with-sauce",
    "category": "cold-meze",
    "icon": "🧆",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Eggplant with Sauce",
      "ar": "باذنجان بالصوص",
      "tr": "Patlıcan Soslu"
    },
    "description": {
      "en": "Eggplant with Sauce",
      "ar": "باذنجان بالصوص",
      "tr": "Patlıcan Soslu"
    }
  },
  {
    "id": "cold-meze-spicy-ezme",
    "category": "cold-meze",
    "icon": "🧆",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": true,
    "name": {
      "en": "Spicy Ezme",
      "ar": "إزمه حارة",
      "tr": "Acılı Ezme"
    },
    "description": {
      "en": "Spicy Ezme",
      "ar": "إزمه حارة",
      "tr": "Acılı Ezme"
    }
  },
  {
    "id": "cold-meze-octopus-salad",
    "category": "cold-meze",
    "icon": "🧆",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Octopus Salad",
      "ar": "سلطة أخطبوط",
      "tr": "Ahtapot Salatası"
    },
    "description": {
      "en": "Octopus Salad",
      "ar": "سلطة أخطبوط",
      "tr": "Ahtapot Salatası"
    }
  },
  {
    "id": "cold-meze-anchovy-pickle",
    "category": "cold-meze",
    "icon": "🧆",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Anchovy Pickle",
      "ar": "أنشوفة مخللة",
      "tr": "Hamsi Salamura"
    },
    "description": {
      "en": "Anchovy Pickle",
      "ar": "أنشوفة مخللة",
      "tr": "Hamsi Salamura"
    }
  },
  {
    "id": "cold-meze-stuffed-vine-leaves",
    "category": "cold-meze",
    "icon": "🧆",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Stuffed Vine Leaves",
      "ar": "ورق عنب",
      "tr": "Yaprak Sarma"
    },
    "description": {
      "en": "Stuffed Vine Leaves",
      "ar": "ورق عنب",
      "tr": "Yaprak Sarma"
    }
  },
  {
    "id": "toast-panini-cheese-toast",
    "category": "toast-panini",
    "icon": "🥪",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Cheese Toast",
      "ar": "توست جبنة",
      "tr": "Kaşarlı Tost"
    },
    "description": {
      "en": "Cheese Toast",
      "ar": "توست جبنة",
      "tr": "Kaşarlı Tost"
    }
  },
  {
    "id": "toast-panini-roasted-meat-cheese-toast",
    "category": "toast-panini",
    "icon": "🥪",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Roasted Meat & Cheese Toast",
      "ar": "توست لحم وجبنة",
      "tr": "Kavurmalı Kaşarlı Tost"
    },
    "description": {
      "en": "Roasted Meat & Cheese Toast",
      "ar": "توست لحم وجبنة",
      "tr": "Kavurmalı Kaşarlı Tost"
    }
  },
  {
    "id": "toast-panini-mixed-toast",
    "category": "toast-panini",
    "icon": "🥪",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mixed Toast",
      "ar": "توست مشكل",
      "tr": "Karışık Tost"
    },
    "description": {
      "en": "Mixed Toast",
      "ar": "توست مشكل",
      "tr": "Karışık Tost"
    }
  },
  {
    "id": "toast-panini-chicken-panini",
    "category": "toast-panini",
    "icon": "🥪",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Chicken Panini",
      "ar": "بانيني دجاج",
      "tr": "Tavuklu Panini"
    },
    "description": {
      "en": "Chicken Panini",
      "ar": "بانيني دجاج",
      "tr": "Tavuklu Panini"
    }
  },
  {
    "id": "wrap-beef-panini",
    "category": "wrap",
    "icon": "🌯",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Beef Panini",
      "ar": "بانيني لحم",
      "tr": "Etli Panini"
    },
    "description": {
      "en": "Beef Panini",
      "ar": "بانيني لحم",
      "tr": "Etli Panini"
    }
  },
  {
    "id": "wrap-beef-wrap",
    "category": "wrap",
    "icon": "🌯",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Beef Wrap",
      "ar": "راب لحم",
      "tr": "Etli Dürüm"
    },
    "description": {
      "en": "Beef Wrap",
      "ar": "راب لحم",
      "tr": "Etli Dürüm"
    }
  },
  {
    "id": "wrap-chicken-wrap",
    "category": "wrap",
    "icon": "🌯",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Chicken Wrap",
      "ar": "راب دجاج",
      "tr": "Tavuklu Dürüm"
    },
    "description": {
      "en": "Chicken Wrap",
      "ar": "راب دجاج",
      "tr": "Tavuklu Dürüm"
    }
  },
  {
    "id": "wrap-kofte-wrap",
    "category": "wrap",
    "icon": "🌯",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Kofte Wrap",
      "ar": "راب كفتة",
      "tr": "Köfte Dürüm"
    },
    "description": {
      "en": "Kofte Wrap",
      "ar": "راب كفتة",
      "tr": "Köfte Dürüm"
    }
  },
  {
    "id": "pasta-burger-spaghetti-bolognese",
    "category": "pasta-burger",
    "icon": "🍝",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Spaghetti Bolognese",
      "ar": "سباغيتي بولونيز",
      "tr": "Spagetti Bolonez"
    },
    "description": {
      "en": "Spaghetti Bolognese",
      "ar": "سباغيتي بولونيز",
      "tr": "Spagetti Bolonez"
    }
  },
  {
    "id": "pasta-burger-spaghetti-napolitan",
    "category": "pasta-burger",
    "icon": "🍝",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Spaghetti Napolitan",
      "ar": "سباغيتي نابوليتان",
      "tr": "Spagetti Napoliten"
    },
    "description": {
      "en": "Spaghetti Napolitan",
      "ar": "سباغيتي نابوليتان",
      "tr": "Spagetti Napoliten"
    }
  },
  {
    "id": "pasta-burger-penne-arrabbiata",
    "category": "pasta-burger",
    "icon": "🍝",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Penne Arrabbiata",
      "ar": "بيني أرابياتا",
      "tr": "Penne Arabiata"
    },
    "description": {
      "en": "Penne Arrabbiata",
      "ar": "بيني أرابياتا",
      "tr": "Penne Arabiata"
    }
  },
  {
    "id": "pasta-burger-fettuccine-alfredo",
    "category": "pasta-burger",
    "icon": "🍝",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Fettuccine Alfredo",
      "ar": "فيتوتشيني ألفريدو",
      "tr": "Fettuccine Alfredo"
    },
    "description": {
      "en": "Fettuccine Alfredo",
      "ar": "فيتوتشيني ألفريدو",
      "tr": "Fettuccine Alfredo"
    }
  },
  {
    "id": "pasta-burger-penne-carbonara",
    "category": "pasta-burger",
    "icon": "🍝",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Penne Carbonara",
      "ar": "بيني كاربونارا",
      "tr": "Penne Carbonara"
    },
    "description": {
      "en": "Penne Carbonara",
      "ar": "بيني كاربونارا",
      "tr": "Penne Carbonara"
    }
  },
  {
    "id": "pasta-burger-anfield-burger",
    "category": "pasta-burger",
    "icon": "🍔",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Anfield Burger",
      "ar": "برغر أنفيلد",
      "tr": "Anfield Burger"
    },
    "description": {
      "en": "Anfield Burger",
      "ar": "برغر أنفيلد",
      "tr": "Anfield Burger"
    }
  },
  {
    "id": "pasta-burger-chicken-burger",
    "category": "pasta-burger",
    "icon": "🍔",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Chicken Burger",
      "ar": "برغر دجاج",
      "tr": "Tavuk Burger"
    },
    "description": {
      "en": "Chicken Burger",
      "ar": "برغر دجاج",
      "tr": "Tavuk Burger"
    }
  },
  {
    "id": "pasta-burger-hamburger",
    "category": "pasta-burger",
    "icon": "🍔",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Hamburger",
      "ar": "هامبرغر",
      "tr": "Hamburger"
    },
    "description": {
      "en": "Hamburger",
      "ar": "هامبرغر",
      "tr": "Hamburger"
    }
  },
  {
    "id": "pasta-burger-cheese-burger",
    "category": "pasta-burger",
    "icon": "🍔",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Cheese Burger",
      "ar": "تشيز برغر",
      "tr": "Cheese Burger"
    },
    "description": {
      "en": "Cheese Burger",
      "ar": "تشيز برغر",
      "tr": "Cheese Burger"
    }
  },
  {
    "id": "salads-shepherd-salad",
    "category": "salads",
    "icon": "🥗",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Shepherd Salad",
      "ar": "سلطة تشوبان",
      "tr": "Çoban Salata"
    },
    "description": {
      "en": "Shepherd Salad",
      "ar": "سلطة تشوبان",
      "tr": "Çoban Salata"
    }
  },
  {
    "id": "salads-lettuce-salad",
    "category": "salads",
    "icon": "🥗",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Lettuce Salad",
      "ar": "سلطة خس",
      "tr": "Göbek Salata"
    },
    "description": {
      "en": "Lettuce Salad",
      "ar": "سلطة خس",
      "tr": "Göbek Salata"
    }
  },
  {
    "id": "salads-tuna-salad",
    "category": "salads",
    "icon": "🥗",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Tuna Salad",
      "ar": "سلطة تونة",
      "tr": "Ton Balıklı Salata"
    },
    "description": {
      "en": "Tuna Salad",
      "ar": "سلطة تونة",
      "tr": "Ton Balıklı Salata"
    }
  },
  {
    "id": "salads-caesar-salad",
    "category": "salads",
    "icon": "🥗",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Caesar Salad",
      "ar": "سلطة سيزر",
      "tr": "Sezar Salata"
    },
    "description": {
      "en": "Caesar Salad",
      "ar": "سلطة سيزر",
      "tr": "Sezar Salata"
    }
  },
  {
    "id": "salads-arugula-salad",
    "category": "salads",
    "icon": "🥗",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Arugula Salad",
      "ar": "سلطة جرجير",
      "tr": "Roka Salata"
    },
    "description": {
      "en": "Arugula Salad",
      "ar": "سلطة جرجير",
      "tr": "Roka Salata"
    }
  },
  {
    "id": "salads-greek-salad",
    "category": "salads",
    "icon": "🥗",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Greek Salad",
      "ar": "سلطة يونانية",
      "tr": "Yunan Salata"
    },
    "description": {
      "en": "Greek Salad",
      "ar": "سلطة يونانية",
      "tr": "Yunan Salata"
    }
  },
  {
    "id": "salads-tabouleh-salad",
    "category": "salads",
    "icon": "🥗",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Tabouleh Salad",
      "ar": "تبولة",
      "tr": "Tabouleh Salata"
    },
    "description": {
      "en": "Tabouleh Salad",
      "ar": "تبولة",
      "tr": "Tabouleh Salata"
    }
  },
  {
    "id": "salads-seafood-salad",
    "category": "salads",
    "icon": "🥗",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Seafood Salad",
      "ar": "سلطة مأكولات بحرية",
      "tr": "Deniz Mahsulleri Salatası"
    },
    "description": {
      "en": "Seafood Salad",
      "ar": "سلطة مأكولات بحرية",
      "tr": "Deniz Mahsulleri Salatası"
    }
  },
  {
    "id": "pizza-pide-vegetarian-pizza",
    "category": "pizza-pide",
    "icon": "🍕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Vegetarian Pizza",
      "ar": "بيتزا خضار",
      "tr": "Vejeteryan Pizza"
    },
    "description": {
      "en": "Vegetarian Pizza",
      "ar": "بيتزا خضار",
      "tr": "Vejeteryan Pizza"
    }
  },
  {
    "id": "pizza-pide-mushroom-pizza",
    "category": "pizza-pide",
    "icon": "🍕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mushroom Pizza",
      "ar": "بيتزا فطر",
      "tr": "Mantarlı Pizza"
    },
    "description": {
      "en": "Mushroom Pizza",
      "ar": "بيتزا فطر",
      "tr": "Mantarlı Pizza"
    }
  },
  {
    "id": "pizza-pide-margherita-pizza",
    "category": "pizza-pide",
    "icon": "🍕",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Margherita Pizza",
      "ar": "بيتزا مارغريتا",
      "tr": "Margarita Pizza"
    },
    "description": {
      "en": "Margherita Pizza",
      "ar": "بيتزا مارغريتا",
      "tr": "Margarita Pizza"
    }
  },
  {
    "id": "pizza-pide-mixed-pizza",
    "category": "pizza-pide",
    "icon": "🍕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mixed Pizza",
      "ar": "بيتزا مشكلة",
      "tr": "Karışık Pizza"
    },
    "description": {
      "en": "Mixed Pizza",
      "ar": "بيتزا مشكلة",
      "tr": "Karışık Pizza"
    }
  },
  {
    "id": "pizza-pide-sucuk-pizza",
    "category": "pizza-pide",
    "icon": "🍕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Sucuk Pizza",
      "ar": "بيتزا سجق تركي",
      "tr": "Sucuklu Pizza"
    },
    "description": {
      "en": "Sucuk Pizza",
      "ar": "بيتزا سجق تركي",
      "tr": "Sucuklu Pizza"
    }
  },
  {
    "id": "pizza-pide-chicken-pizza",
    "category": "pizza-pide",
    "icon": "🍕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Chicken Pizza",
      "ar": "بيتزا دجاج",
      "tr": "Tavuklu Pizza"
    },
    "description": {
      "en": "Chicken Pizza",
      "ar": "بيتزا دجاج",
      "tr": "Tavuklu Pizza"
    }
  },
  {
    "id": "pizza-pide-cheese-pide",
    "category": "pizza-pide",
    "icon": "🍕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Cheese Pide",
      "ar": "بيدا بالجبنة",
      "tr": "Kaşarlı Pide"
    },
    "description": {
      "en": "Cheese Pide",
      "ar": "بيدا بالجبنة",
      "tr": "Kaşarlı Pide"
    }
  },
  {
    "id": "pizza-pide-minced-meat-pide",
    "category": "pizza-pide",
    "icon": "🍕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Minced Meat Pide",
      "ar": "بيدا باللحم المفروم",
      "tr": "Kıymalı Pide"
    },
    "description": {
      "en": "Minced Meat Pide",
      "ar": "بيدا باللحم المفروم",
      "tr": "Kıymalı Pide"
    }
  },
  {
    "id": "pizza-pide-diced-meat-pide",
    "category": "pizza-pide",
    "icon": "🍕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Diced Meat Pide",
      "ar": "بيدا بلحم مقطع",
      "tr": "Kuşbaşılı Pide"
    },
    "description": {
      "en": "Diced Meat Pide",
      "ar": "بيدا بلحم مقطع",
      "tr": "Kuşbaşılı Pide"
    }
  },
  {
    "id": "pizza-pide-mixed-pide",
    "category": "pizza-pide",
    "icon": "🍕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mixed Pide",
      "ar": "بيدا مشكلة",
      "tr": "Karışık Pide"
    },
    "description": {
      "en": "Mixed Pide",
      "ar": "بيدا مشكلة",
      "tr": "Karışık Pide"
    }
  },
  {
    "id": "kebab-pottery-kebab",
    "category": "kebab",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Pottery Kebab",
      "ar": "تستي كباب",
      "tr": "Testi Kebab"
    },
    "description": {
      "en": "Pottery Kebab",
      "ar": "تستي كباب",
      "tr": "Testi Kebab"
    }
  },
  {
    "id": "kebab-adana-kebab",
    "category": "kebab",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": true,
    "name": {
      "en": "Adana Kebab",
      "ar": "أضنة كباب",
      "tr": "Adana Kebap"
    },
    "description": {
      "en": "Adana Kebab",
      "ar": "أضنة كباب",
      "tr": "Adana Kebap"
    }
  },
  {
    "id": "kebab-tomato-kebab",
    "category": "kebab",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Tomato Kebab",
      "ar": "كباب بالطماطم",
      "tr": "Domatesli Kebap"
    },
    "description": {
      "en": "Tomato Kebab",
      "ar": "كباب بالطماطم",
      "tr": "Domatesli Kebap"
    }
  },
  {
    "id": "kebab-eggplant-kebab",
    "category": "kebab",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Eggplant Kebab",
      "ar": "كباب بالباذنجان",
      "tr": "Patlıcanlı Kebap"
    },
    "description": {
      "en": "Eggplant Kebab",
      "ar": "كباب بالباذنجان",
      "tr": "Patlıcanlı Kebap"
    }
  },
  {
    "id": "kebab-ottoman-kebab",
    "category": "kebab",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Ottoman Kebab",
      "ar": "كباب عثماني",
      "tr": "Osmanlı Kebap"
    },
    "description": {
      "en": "Ottoman Kebab",
      "ar": "كباب عثماني",
      "tr": "Osmanlı Kebap"
    }
  },
  {
    "id": "kebab-mixed-kebab",
    "category": "kebab",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mixed Kebab",
      "ar": "كباب مشكل",
      "tr": "Karışık Kebap"
    },
    "description": {
      "en": "Mixed Kebab",
      "ar": "كباب مشكل",
      "tr": "Karışık Kebap"
    }
  },
  {
    "id": "kebab-lamb-skewer",
    "category": "kebab",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Lamb Skewer",
      "ar": "شيش لحم غنم",
      "tr": "Kuzu Şiş"
    },
    "description": {
      "en": "Lamb Skewer",
      "ar": "شيش لحم غنم",
      "tr": "Kuzu Şiş"
    }
  },
  {
    "id": "kebab-grilled-meatballs",
    "category": "kebab",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Grilled Meatballs",
      "ar": "كفتة مشوية",
      "tr": "Izgara Köfte"
    },
    "description": {
      "en": "Grilled Meatballs",
      "ar": "كفتة مشوية",
      "tr": "Izgara Köfte"
    }
  },
  {
    "id": "kebab-lamb-chops",
    "category": "kebab",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Lamb Chops",
      "ar": "ريش غنم",
      "tr": "Kuzu Pirzola"
    },
    "description": {
      "en": "Lamb Chops",
      "ar": "ريش غنم",
      "tr": "Kuzu Pirzola"
    }
  },
  {
    "id": "kebab-meat-sac-tava",
    "category": "kebab",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Meat Sac Tava",
      "ar": "لحم ساج",
      "tr": "Et Sac Tava"
    },
    "description": {
      "en": "Meat Sac Tava",
      "ar": "لحم ساج",
      "tr": "Et Sac Tava"
    }
  },
  {
    "id": "chicken-chicken-with-creamy-mushroom-sauce",
    "category": "chicken",
    "icon": "🍗",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Chicken with Creamy Mushroom Sauce",
      "ar": "دجاج بصوص كريمة وفطر",
      "tr": "Tavuk Kremalı Mantar Sosu"
    },
    "description": {
      "en": "Chicken with Creamy Mushroom Sauce",
      "ar": "دجاج بصوص كريمة وفطر",
      "tr": "Tavuk Kremalı Mantar Sosu"
    }
  },
  {
    "id": "chicken-chicken-curry",
    "category": "chicken",
    "icon": "🍗",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Chicken Curry",
      "ar": "دجاج بالكاري",
      "tr": "Tavuk Köri Sosu"
    },
    "description": {
      "en": "Chicken Curry",
      "ar": "دجاج بالكاري",
      "tr": "Tavuk Köri Sosu"
    }
  },
  {
    "id": "chicken-mexican-chicken",
    "category": "chicken",
    "icon": "🍗",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mexican Chicken",
      "ar": "دجاج مكسيكي",
      "tr": "Tavuk Meksika"
    },
    "description": {
      "en": "Mexican Chicken",
      "ar": "دجاج مكسيكي",
      "tr": "Tavuk Meksika"
    }
  },
  {
    "id": "chicken-chicken-with-pesto-sauce",
    "category": "chicken",
    "icon": "🍗",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Chicken with Pesto Sauce",
      "ar": "دجاج بصوص بيستو",
      "tr": "Pesto Soslu Tavuk"
    },
    "description": {
      "en": "Chicken with Pesto Sauce",
      "ar": "دجاج بصوص بيستو",
      "tr": "Pesto Soslu Tavuk"
    }
  },
  {
    "id": "chicken-lamb-shank",
    "category": "chicken",
    "icon": "🍗",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Lamb Shank",
      "ar": "موزات غنم",
      "tr": "Kuzu İncik"
    },
    "description": {
      "en": "Lamb Shank",
      "ar": "موزات غنم",
      "tr": "Kuzu İncik"
    }
  },
  {
    "id": "chicken-chicken-drumstick",
    "category": "chicken",
    "icon": "🍗",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Chicken Drumstick",
      "ar": "دبوس دجاج",
      "tr": "Tavuk Baget"
    },
    "description": {
      "en": "Chicken Drumstick",
      "ar": "دبوس دجاج",
      "tr": "Tavuk Baget"
    }
  },
  {
    "id": "steak-t-bone-steak",
    "category": "steak",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "T-Bone Steak",
      "ar": "تي بون ستيك",
      "tr": "T-Bone Steak"
    },
    "description": {
      "en": "T-Bone Steak",
      "ar": "تي بون ستيك",
      "tr": "T-Bone Steak"
    }
  },
  {
    "id": "steak-veal-chop",
    "category": "steak",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Veal Chop",
      "ar": "ريش عجل",
      "tr": "Dana Pirzola"
    },
    "description": {
      "en": "Veal Chop",
      "ar": "ريش عجل",
      "tr": "Dana Pirzola"
    }
  },
  {
    "id": "steak-lamb-chops-in-casserole",
    "category": "steak",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Lamb Chops in Casserole",
      "ar": "ريش غنم بالفخار",
      "tr": "Güveçte Kuzu Pirzola"
    },
    "description": {
      "en": "Lamb Chops in Casserole",
      "ar": "ريش غنم بالفخار",
      "tr": "Güveçte Kuzu Pirzola"
    }
  },
  {
    "id": "steak-veal-steak",
    "category": "steak",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Veal Steak",
      "ar": "ستيك عجل",
      "tr": "Dana Biftek"
    },
    "description": {
      "en": "Veal Steak",
      "ar": "ستيك عجل",
      "tr": "Dana Biftek"
    }
  },
  {
    "id": "steak-diana-steak",
    "category": "steak",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Diana Steak",
      "ar": "ديانا ستيك",
      "tr": "Diana Steak"
    },
    "description": {
      "en": "Diana Steak",
      "ar": "ديانا ستيك",
      "tr": "Diana Steak"
    }
  },
  {
    "id": "steak-mexican-steak",
    "category": "steak",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mexican Steak",
      "ar": "ستيك مكسيكي",
      "tr": "Meksika Steak"
    },
    "description": {
      "en": "Mexican Steak",
      "ar": "ستيك مكسيكي",
      "tr": "Meksika Steak"
    }
  },
  {
    "id": "steak-mushroom-steak",
    "category": "steak",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mushroom Steak",
      "ar": "ستيك بالفطر",
      "tr": "Mantarlı Steak"
    },
    "description": {
      "en": "Mushroom Steak",
      "ar": "ستيك بالفطر",
      "tr": "Mantarlı Steak"
    }
  },
  {
    "id": "steak-pepper-steak",
    "category": "steak",
    "icon": "🥩",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Pepper Steak",
      "ar": "بيبر ستيك",
      "tr": "Pepper Steak"
    },
    "description": {
      "en": "Pepper Steak",
      "ar": "بيبر ستيك",
      "tr": "Pepper Steak"
    }
  },
  {
    "id": "fish-sea-bream",
    "category": "fish",
    "icon": "🐟",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Sea Bream",
      "ar": "دنيس",
      "tr": "Çupra"
    },
    "description": {
      "en": "Sea Bream",
      "ar": "دنيس",
      "tr": "Çupra"
    }
  },
  {
    "id": "fish-sea-bass",
    "category": "fish",
    "icon": "🐟",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Sea Bass",
      "ar": "قاروص",
      "tr": "Levrek"
    },
    "description": {
      "en": "Sea Bass",
      "ar": "قاروص",
      "tr": "Levrek"
    }
  },
  {
    "id": "fish-mixed-fish",
    "category": "fish",
    "icon": "🐟",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mixed Fish",
      "ar": "سمك مشكل",
      "tr": "Karışık Balık"
    },
    "description": {
      "en": "Mixed Fish",
      "ar": "سمك مشكل",
      "tr": "Karışık Balık"
    }
  },
  {
    "id": "fish-red-mullet",
    "category": "fish",
    "icon": "🐟",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Red Mullet",
      "ar": "بربون",
      "tr": "Barbun"
    },
    "description": {
      "en": "Red Mullet",
      "ar": "بربون",
      "tr": "Barbun"
    }
  },
  {
    "id": "fish-fish-in-tile",
    "category": "fish",
    "icon": "🐟",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Fish in Tile",
      "ar": "سمك بالفخار",
      "tr": "Kiremitte Balık"
    },
    "description": {
      "en": "Fish in Tile",
      "ar": "سمك بالفخار",
      "tr": "Kiremitte Balık"
    }
  },
  {
    "id": "fish-fish-kavurma",
    "category": "fish",
    "icon": "🐟",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Fish Kavurma",
      "ar": "سمك كافورما",
      "tr": "Balık Kavurma"
    },
    "description": {
      "en": "Fish Kavurma",
      "ar": "سمك كافورما",
      "tr": "Balık Kavurma"
    }
  },
  {
    "id": "fish-salmon",
    "category": "fish",
    "icon": "🐟",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Salmon",
      "ar": "سلمون",
      "tr": "Somon"
    },
    "description": {
      "en": "Salmon",
      "ar": "سلمون",
      "tr": "Somon"
    }
  },
  {
    "id": "fish-fried-anchovy",
    "category": "fish",
    "icon": "🐟",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Fried Anchovy",
      "ar": "أنشوفة مقلية",
      "tr": "Hamsi Tava"
    },
    "description": {
      "en": "Fried Anchovy",
      "ar": "أنشوفة مقلية",
      "tr": "Hamsi Tava"
    }
  },
  {
    "id": "fish-natural-sea-bream",
    "category": "fish",
    "icon": "🐟",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Natural Sea Bream",
      "ar": "دنيس بحري طبيعي",
      "tr": "Natürel Deniz Çuprası"
    },
    "description": {
      "en": "Natural Sea Bream",
      "ar": "دنيس بحري طبيعي",
      "tr": "Natürel Deniz Çuprası"
    }
  },
  {
    "id": "fish-natural-sea-bass",
    "category": "fish",
    "icon": "🐟",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Natural Sea Bass",
      "ar": "قاروص بحري طبيعي",
      "tr": "Natürel Deniz Levreği"
    },
    "description": {
      "en": "Natural Sea Bass",
      "ar": "قاروص بحري طبيعي",
      "tr": "Natürel Deniz Levreği"
    }
  },
  {
    "id": "fish-lobster",
    "category": "fish",
    "icon": "🐟",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Lobster",
      "ar": "لوبستر",
      "tr": "Istakoz"
    },
    "description": {
      "en": "Lobster",
      "ar": "لوبستر",
      "tr": "Istakoz"
    }
  },
  {
    "id": "fish-steamed-fish",
    "category": "fish",
    "icon": "🐟",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Steamed Fish",
      "ar": "سمك بالبخار",
      "tr": "Balık Buğlama"
    },
    "description": {
      "en": "Steamed Fish",
      "ar": "سمك بالبخار",
      "tr": "Balık Buğlama"
    }
  },
  {
    "id": "fish-turbot",
    "category": "fish",
    "icon": "🐟",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Turbot",
      "ar": "سمك كالكان",
      "tr": "Kalkan"
    },
    "description": {
      "en": "Turbot",
      "ar": "سمك كالكان",
      "tr": "Kalkan"
    }
  },
  {
    "id": "fish-salt-baked-fish",
    "category": "fish",
    "icon": "🐟",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Salt Baked Fish",
      "ar": "سمك بالملح",
      "tr": "Tuzda Balık"
    },
    "description": {
      "en": "Salt Baked Fish",
      "ar": "سمك بالملح",
      "tr": "Tuzda Balık"
    }
  },
  {
    "id": "desserts-baklava",
    "category": "desserts",
    "icon": "🍰",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Baklava",
      "ar": "بقلاوة",
      "tr": "Baklava"
    },
    "description": {
      "en": "Baklava",
      "ar": "بقلاوة",
      "tr": "Baklava"
    }
  },
  {
    "id": "desserts-kunafa",
    "category": "desserts",
    "icon": "🍰",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Kunafa",
      "ar": "كنافة",
      "tr": "Künefe"
    },
    "description": {
      "en": "Kunafa",
      "ar": "كنافة",
      "tr": "Künefe"
    }
  },
  {
    "id": "desserts-tiramisu",
    "category": "desserts",
    "icon": "🍰",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Tiramisu",
      "ar": "تيراميسو",
      "tr": "Tiramisu"
    },
    "description": {
      "en": "Tiramisu",
      "ar": "تيراميسو",
      "tr": "Tiramisu"
    }
  },
  {
    "id": "desserts-raspberry-cheesecake",
    "category": "desserts",
    "icon": "🍰",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Raspberry Cheesecake",
      "ar": "تشيز كيك توت",
      "tr": "Ahududulu Çizkek"
    },
    "description": {
      "en": "Raspberry Cheesecake",
      "ar": "تشيز كيك توت",
      "tr": "Ahududulu Çizkek"
    }
  },
  {
    "id": "desserts-souffle",
    "category": "desserts",
    "icon": "🍰",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Souffle",
      "ar": "سوفليه",
      "tr": "Suffle"
    },
    "description": {
      "en": "Souffle",
      "ar": "سوفليه",
      "tr": "Suffle"
    }
  },
  {
    "id": "desserts-trilece",
    "category": "desserts",
    "icon": "🍰",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Trilece",
      "ar": "تريليتشا",
      "tr": "Trileçe"
    },
    "description": {
      "en": "Trilece",
      "ar": "تريليتشا",
      "tr": "Trileçe"
    }
  },
  {
    "id": "desserts-ice-cream",
    "category": "desserts",
    "icon": "🍰",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Ice Cream",
      "ar": "آيس كريم",
      "tr": "Dondurma"
    },
    "description": {
      "en": "Ice Cream",
      "ar": "آيس كريم",
      "tr": "Dondurma"
    }
  },
  {
    "id": "cold-drinks-fresh-orange-juice",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "450₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Fresh Orange Juice",
      "ar": "عصير برتقال طازج",
      "tr": "Taze Portakal Suyu"
    },
    "description": {
      "en": "Fresh Orange Juice",
      "ar": "عصير برتقال طازج",
      "tr": "Taze Portakal Suyu"
    }
  },
  {
    "id": "cold-drinks-mojito",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "500₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mojito",
      "ar": "موهيتو",
      "tr": "Mojito"
    },
    "description": {
      "en": "Mojito",
      "ar": "موهيتو",
      "tr": "Mojito"
    }
  },
  {
    "id": "cold-drinks-lemonade",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "450₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Lemonade",
      "ar": "ليموناضة",
      "tr": "Lemonada"
    },
    "description": {
      "en": "Lemonade",
      "ar": "ليموناضة",
      "tr": "Lemonada"
    }
  },
  {
    "id": "cold-drinks-mint-lemonade",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "450₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mint Lemonade",
      "ar": "ليموناضة بالنعناع",
      "tr": "Lemonada Nana"
    },
    "description": {
      "en": "Mint Lemonade",
      "ar": "ليموناضة بالنعناع",
      "tr": "Lemonada Nana"
    }
  },
  {
    "id": "cold-drinks-coca-cola-33cl",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "225₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Coca Cola 33cl",
      "ar": "كوكا كولا 33cl",
      "tr": "Coca Cola 33cl"
    },
    "description": {
      "en": "Coca Cola 33cl",
      "ar": "كوكا كولا 33cl",
      "tr": "Coca Cola 33cl"
    }
  },
  {
    "id": "cold-drinks-fanta-33cl",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "225₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Fanta 33cl",
      "ar": "فانتا 33cl",
      "tr": "Fanta 33cl"
    },
    "description": {
      "en": "Fanta 33cl",
      "ar": "فانتا 33cl",
      "tr": "Fanta 33cl"
    }
  },
  {
    "id": "cold-drinks-sprite-33cl",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "225₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Sprite 33cl",
      "ar": "سبرايت 33cl",
      "tr": "Sprite 33cl"
    },
    "description": {
      "en": "Sprite 33cl",
      "ar": "سبرايت 33cl",
      "tr": "Sprite 33cl"
    }
  },
  {
    "id": "cold-drinks-ice-tea-33cl",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "225₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Ice Tea 33cl",
      "ar": "آيس تي 33cl",
      "tr": "Ice Tea 33cl"
    },
    "description": {
      "en": "Ice Tea 33cl",
      "ar": "آيس تي 33cl",
      "tr": "Ice Tea 33cl"
    }
  },
  {
    "id": "cold-drinks-cappy-33cl",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "225₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Cappy 33cl",
      "ar": "كابي 33cl",
      "tr": "Cappy 33cl"
    },
    "description": {
      "en": "Cappy 33cl",
      "ar": "كابي 33cl",
      "tr": "Cappy 33cl"
    }
  },
  {
    "id": "cold-drinks-red-bull-25cl",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "450₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Red Bull 25cl",
      "ar": "ريد بول 25cl",
      "tr": "Redbull 25cl"
    },
    "description": {
      "en": "Red Bull 25cl",
      "ar": "ريد بول 25cl",
      "tr": "Redbull 25cl"
    }
  },
  {
    "id": "cold-drinks-mineral-water-20cl",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "225₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mineral Water 20cl",
      "ar": "مياه معدنية غازية 20cl",
      "tr": "Soda 20cl"
    },
    "description": {
      "en": "Mineral Water 20cl",
      "ar": "مياه معدنية غازية 20cl",
      "tr": "Soda 20cl"
    }
  },
  {
    "id": "cold-drinks-water",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "100₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Water",
      "ar": "مياه",
      "tr": "Su"
    },
    "description": {
      "en": "Water",
      "ar": "مياه",
      "tr": "Su"
    }
  },
  {
    "id": "cold-drinks-ice-mocha",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "450₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Ice Mocha",
      "ar": "آيس موكا",
      "tr": "Ice Mocha"
    },
    "description": {
      "en": "Ice Mocha",
      "ar": "آيس موكا",
      "tr": "Ice Mocha"
    }
  },
  {
    "id": "cold-drinks-ice-latte",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "450₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Ice Latte",
      "ar": "آيس لاتيه",
      "tr": "Ice Latte"
    },
    "description": {
      "en": "Ice Latte",
      "ar": "آيس لاتيه",
      "tr": "Ice Latte"
    }
  },
  {
    "id": "cold-drinks-frappe",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "450₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Frappe",
      "ar": "فرابيه",
      "tr": "Frappe"
    },
    "description": {
      "en": "Frappe",
      "ar": "فرابيه",
      "tr": "Frappe"
    }
  },
  {
    "id": "cold-drinks-frozen",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "450₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Frozen",
      "ar": "فروزن",
      "tr": "Frozen"
    },
    "description": {
      "en": "Frozen",
      "ar": "فروزن",
      "tr": "Frozen"
    }
  },
  {
    "id": "cold-drinks-milkshake",
    "category": "cold-drinks",
    "icon": "🥤",
    "price": "450₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Milkshake",
      "ar": "ميلك شيك",
      "tr": "Milkshake"
    },
    "description": {
      "en": "Milkshake",
      "ar": "ميلك شيك",
      "tr": "Milkshake"
    }
  },
  {
    "id": "fruit-nuts-fresh-fruit",
    "category": "fruit-nuts",
    "icon": "🍍",
    "price": "1750₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Fresh Fruit",
      "ar": "فواكه طازجة",
      "tr": "Taze Meyve"
    },
    "description": {
      "en": "Fresh Fruit",
      "ar": "فواكه طازجة",
      "tr": "Taze Meyve"
    }
  },
  {
    "id": "fruit-nuts-nuts-plate",
    "category": "fruit-nuts",
    "icon": "🥜",
    "price": "600₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Nuts Plate",
      "ar": "طبق مكسرات",
      "tr": "Çerez Tabağı"
    },
    "description": {
      "en": "Nuts Plate",
      "ar": "طبق مكسرات",
      "tr": "Çerez Tabağı"
    }
  },
  {
    "id": "fruit-nuts-chips",
    "category": "fruit-nuts",
    "icon": "🍟",
    "price": "500₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Chips",
      "ar": "شيبس",
      "tr": "Cips"
    },
    "description": {
      "en": "Chips",
      "ar": "شيبس",
      "tr": "Cips"
    }
  },
  {
    "id": "fruit-nuts-fruit-plate",
    "category": "fruit-nuts",
    "icon": "🍇",
    "price": "2000₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Fruit Plate",
      "ar": "طبق فواكه",
      "tr": "Meyve Tabağı"
    },
    "description": {
      "en": "Fruit Plate",
      "ar": "طبق فواكه",
      "tr": "Meyve Tabağı"
    }
  },
  {
    "id": "coffee-turkish-coffee",
    "category": "coffee",
    "icon": "☕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Turkish Coffee",
      "ar": "قهوة تركية",
      "tr": "Türk Kahvesi"
    },
    "description": {
      "en": "Turkish Coffee",
      "ar": "قهوة تركية",
      "tr": "Türk Kahvesi"
    }
  },
  {
    "id": "coffee-turkish-coffee-with-milk",
    "category": "coffee",
    "icon": "☕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Turkish Coffee with Milk",
      "ar": "قهوة تركية بالحليب",
      "tr": "Sütlü Türk Kahvesi"
    },
    "description": {
      "en": "Turkish Coffee with Milk",
      "ar": "قهوة تركية بالحليب",
      "tr": "Sütlü Türk Kahvesi"
    }
  },
  {
    "id": "coffee-filter-coffee",
    "category": "coffee",
    "icon": "☕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Filter Coffee",
      "ar": "قهوة فلتر",
      "tr": "Filtre Kahve"
    },
    "description": {
      "en": "Filter Coffee",
      "ar": "قهوة فلتر",
      "tr": "Filtre Kahve"
    }
  },
  {
    "id": "coffee-nescafe",
    "category": "coffee",
    "icon": "☕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Nescafe",
      "ar": "نسكافيه",
      "tr": "Nescafe"
    },
    "description": {
      "en": "Nescafe",
      "ar": "نسكافيه",
      "tr": "Nescafe"
    }
  },
  {
    "id": "coffee-americano",
    "category": "coffee",
    "icon": "☕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Americano",
      "ar": "أمريكانو",
      "tr": "Americano"
    },
    "description": {
      "en": "Americano",
      "ar": "أمريكانو",
      "tr": "Americano"
    }
  },
  {
    "id": "coffee-espresso",
    "category": "coffee",
    "icon": "☕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Espresso",
      "ar": "إسبريسو",
      "tr": "Espresso"
    },
    "description": {
      "en": "Espresso",
      "ar": "إسبريسو",
      "tr": "Espresso"
    }
  },
  {
    "id": "coffee-espresso-macchiato",
    "category": "coffee",
    "icon": "☕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Espresso Macchiato",
      "ar": "إسبريسو ماكياتو",
      "tr": "Espresso Macchiato"
    },
    "description": {
      "en": "Espresso Macchiato",
      "ar": "إسبريسو ماكياتو",
      "tr": "Espresso Macchiato"
    }
  },
  {
    "id": "coffee-cappuccino",
    "category": "coffee",
    "icon": "☕",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Cappuccino",
      "ar": "كابتشينو",
      "tr": "Cappuccino"
    },
    "description": {
      "en": "Cappuccino",
      "ar": "كابتشينو",
      "tr": "Cappuccino"
    }
  },
  {
    "id": "coffee-latte",
    "category": "coffee",
    "icon": "☕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Latte",
      "ar": "لاتيه",
      "tr": "Latte"
    },
    "description": {
      "en": "Latte",
      "ar": "لاتيه",
      "tr": "Latte"
    }
  },
  {
    "id": "coffee-mocha",
    "category": "coffee",
    "icon": "☕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mocha",
      "ar": "موكا",
      "tr": "Mocha"
    },
    "description": {
      "en": "Mocha",
      "ar": "موكا",
      "tr": "Mocha"
    }
  },
  {
    "id": "coffee-hot-chocolate",
    "category": "coffee",
    "icon": "☕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Hot Chocolate",
      "ar": "شوكولاتة ساخنة",
      "tr": "Sıcak Çikolata"
    },
    "description": {
      "en": "Hot Chocolate",
      "ar": "شوكولاتة ساخنة",
      "tr": "Sıcak Çikolata"
    }
  },
  {
    "id": "coffee-turkish-tea",
    "category": "coffee",
    "icon": "☕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Turkish Tea",
      "ar": "شاي تركي",
      "tr": "Çay"
    },
    "description": {
      "en": "Turkish Tea",
      "ar": "شاي تركي",
      "tr": "Çay"
    }
  },
  {
    "id": "coffee-apple-tea",
    "category": "coffee",
    "icon": "☕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Apple Tea",
      "ar": "شاي تفاح",
      "tr": "Elma Çayı"
    },
    "description": {
      "en": "Apple Tea",
      "ar": "شاي تفاح",
      "tr": "Elma Çayı"
    }
  },
  {
    "id": "coffee-mint-tea",
    "category": "coffee",
    "icon": "☕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mint Tea",
      "ar": "شاي نعناع",
      "tr": "Nane Çayı"
    },
    "description": {
      "en": "Mint Tea",
      "ar": "شاي نعناع",
      "tr": "Nane Çayı"
    }
  },
  {
    "id": "coffee-green-tea",
    "category": "coffee",
    "icon": "☕",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Green Tea",
      "ar": "شاي أخضر",
      "tr": "Yeşil Çay"
    },
    "description": {
      "en": "Green Tea",
      "ar": "شاي أخضر",
      "tr": "Yeşil Çay"
    }
  },
  {
    "id": "beer-efes-pilsen",
    "category": "beer",
    "icon": "🍺",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Efes Pilsen",
      "ar": "إيفيس بيلسن",
      "tr": "Efes Pilsen"
    },
    "description": {
      "en": "Efes Pilsen",
      "ar": "إيفيس بيلسن",
      "tr": "Efes Pilsen"
    }
  },
  {
    "id": "beer-tuborg-gold",
    "category": "beer",
    "icon": "🍺",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Tuborg Gold",
      "ar": "تيوبورغ جولد",
      "tr": "Tuborg Gold"
    },
    "description": {
      "en": "Tuborg Gold",
      "ar": "تيوبورغ جولد",
      "tr": "Tuborg Gold"
    }
  },
  {
    "id": "beer-corona",
    "category": "beer",
    "icon": "🍺",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Corona",
      "ar": "كورونا",
      "tr": "Corona"
    },
    "description": {
      "en": "Corona",
      "ar": "كورونا",
      "tr": "Corona"
    }
  },
  {
    "id": "beer-heineken",
    "category": "beer",
    "icon": "🍺",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Heineken",
      "ar": "هاينكن",
      "tr": "Heineken"
    },
    "description": {
      "en": "Heineken",
      "ar": "هاينكن",
      "tr": "Heineken"
    }
  },
  {
    "id": "beer-miller",
    "category": "beer",
    "icon": "🍺",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Miller",
      "ar": "ميلر",
      "tr": "Miller"
    },
    "description": {
      "en": "Miller",
      "ar": "ميلر",
      "tr": "Miller"
    }
  },
  {
    "id": "beer-amsterdam",
    "category": "beer",
    "icon": "🍺",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Amsterdam",
      "ar": "أمستردام",
      "tr": "Amsterdam"
    },
    "description": {
      "en": "Amsterdam",
      "ar": "أمستردام",
      "tr": "Amsterdam"
    }
  },
  {
    "id": "beer-carlsberg",
    "category": "beer",
    "icon": "🍺",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Carlsberg",
      "ar": "كارلسبرغ",
      "tr": "Carlsberg"
    },
    "description": {
      "en": "Carlsberg",
      "ar": "كارلسبرغ",
      "tr": "Carlsberg"
    }
  },
  {
    "id": "beer-beck-s",
    "category": "beer",
    "icon": "🍺",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Beck's",
      "ar": "بيكس",
      "tr": "Beck's"
    },
    "description": {
      "en": "Beck's",
      "ar": "بيكس",
      "tr": "Beck's"
    }
  },
  {
    "id": "beer-bomonti-unfiltered",
    "category": "beer",
    "icon": "🍺",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Bomonti Unfiltered",
      "ar": "بومونتي غير مفلترة",
      "tr": "Bomonti Filtresiz"
    },
    "description": {
      "en": "Bomonti Unfiltered",
      "ar": "بومونتي غير مفلترة",
      "tr": "Bomonti Filtresiz"
    }
  },
  {
    "id": "beer-guinness",
    "category": "beer",
    "icon": "🍺",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Guinness",
      "ar": "غينيس",
      "tr": "Guinness"
    },
    "description": {
      "en": "Guinness",
      "ar": "غينيس",
      "tr": "Guinness"
    }
  },
  {
    "id": "vodka-absolut-vodka",
    "category": "vodka",
    "icon": "🍸",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Absolut Vodka",
      "ar": "أبسولوت فودكا",
      "tr": "Absolut Vodka"
    },
    "description": {
      "en": "Absolut Vodka",
      "ar": "أبسولوت فودكا",
      "tr": "Absolut Vodka"
    }
  },
  {
    "id": "vodka-smirnoff",
    "category": "vodka",
    "icon": "🍸",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Smirnoff",
      "ar": "سميرنوف",
      "tr": "Smirnoff"
    },
    "description": {
      "en": "Smirnoff",
      "ar": "سميرنوف",
      "tr": "Smirnoff"
    }
  },
  {
    "id": "vodka-istanblue",
    "category": "vodka",
    "icon": "🍸",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Istanblue",
      "ar": "إستانبلو",
      "tr": "Istanblue"
    },
    "description": {
      "en": "Istanblue",
      "ar": "إستانبلو",
      "tr": "Istanblue"
    }
  },
  {
    "id": "vodka-finlandia",
    "category": "vodka",
    "icon": "🍸",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Finlandia",
      "ar": "فنلنديا",
      "tr": "Finlandia"
    },
    "description": {
      "en": "Finlandia",
      "ar": "فنلنديا",
      "tr": "Finlandia"
    }
  },
  {
    "id": "vodka-binboa",
    "category": "vodka",
    "icon": "🍸",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Binboa",
      "ar": "بينبوا",
      "tr": "Binboa"
    },
    "description": {
      "en": "Binboa",
      "ar": "بينبوا",
      "tr": "Binboa"
    }
  },
  {
    "id": "vodka-grey-goose",
    "category": "vodka",
    "icon": "🍸",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Grey Goose",
      "ar": "غراي غوس",
      "tr": "Grey Goose"
    },
    "description": {
      "en": "Grey Goose",
      "ar": "غراي غوس",
      "tr": "Grey Goose"
    }
  },
  {
    "id": "vodka-bazooka",
    "category": "vodka",
    "icon": "🍸",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Bazooka",
      "ar": "بازوكا",
      "tr": "Bazooka"
    },
    "description": {
      "en": "Bazooka",
      "ar": "بازوكا",
      "tr": "Bazooka"
    }
  },
  {
    "id": "vodka-gilbey-s",
    "category": "vodka",
    "icon": "🍸",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Gilbey’s",
      "ar": "جيلبيز",
      "tr": "Gilbey’s"
    },
    "description": {
      "en": "Gilbey’s",
      "ar": "جيلبيز",
      "tr": "Gilbey’s"
    }
  },
  {
    "id": "vodka-belvedere",
    "category": "vodka",
    "icon": "🍸",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Belvedere",
      "ar": "بلفيدير",
      "tr": "Belvedere"
    },
    "description": {
      "en": "Belvedere",
      "ar": "بلفيدير",
      "tr": "Belvedere"
    }
  },
  {
    "id": "raki-yeni-rak",
    "category": "raki",
    "icon": "🥛",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Yeni Rakı",
      "ar": "يني راكي",
      "tr": "Yeni Rakı"
    },
    "description": {
      "en": "Yeni Rakı",
      "ar": "يني راكي",
      "tr": "Yeni Rakı"
    }
  },
  {
    "id": "raki-tekirda-rak",
    "category": "raki",
    "icon": "🥛",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Tekirdağ Rakı",
      "ar": "تكيرداغ راكي",
      "tr": "Tekirdağ Rakı"
    },
    "description": {
      "en": "Tekirdağ Rakı",
      "ar": "تكيرداغ راكي",
      "tr": "Tekirdağ Rakı"
    }
  },
  {
    "id": "raki-ye-il-efe",
    "category": "raki",
    "icon": "🥛",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Yeşil Efe",
      "ar": "يشيل إيفه",
      "tr": "Yeşil Efe"
    },
    "description": {
      "en": "Yeşil Efe",
      "ar": "يشيل إيفه",
      "tr": "Yeşil Efe"
    }
  },
  {
    "id": "wine-merlot",
    "category": "wine",
    "icon": "🍷",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Merlot",
      "ar": "ميرلو",
      "tr": "Merlot"
    },
    "description": {
      "en": "Merlot",
      "ar": "ميرلو",
      "tr": "Merlot"
    }
  },
  {
    "id": "wine-shiraz",
    "category": "wine",
    "icon": "🍷",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Shiraz",
      "ar": "شيراز",
      "tr": "Shiraz"
    },
    "description": {
      "en": "Shiraz",
      "ar": "شيراز",
      "tr": "Shiraz"
    }
  },
  {
    "id": "wine-kalecik-karas",
    "category": "wine",
    "icon": "🍷",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Kalecik Karası",
      "ar": "كاليجيك كاراسي",
      "tr": "Kalecik Karası"
    },
    "description": {
      "en": "Kalecik Karası",
      "ar": "كاليجيك كاراسي",
      "tr": "Kalecik Karası"
    }
  },
  {
    "id": "wine-k-zg-z",
    "category": "wine",
    "icon": "🍷",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Öküzgözü",
      "ar": "أوكوزغوزو",
      "tr": "Öküzgözü"
    },
    "description": {
      "en": "Öküzgözü",
      "ar": "أوكوزغوزو",
      "tr": "Öküzgözü"
    }
  },
  {
    "id": "wine-chardonnay",
    "category": "wine",
    "icon": "🍷",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Chardonnay",
      "ar": "شاردونيه",
      "tr": "Chardonnay"
    },
    "description": {
      "en": "Chardonnay",
      "ar": "شاردونيه",
      "tr": "Chardonnay"
    }
  },
  {
    "id": "wine-sauvignon-blanc",
    "category": "wine",
    "icon": "🍷",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Sauvignon Blanc",
      "ar": "سوفينيون بلانك",
      "tr": "Sauvignon Blanc"
    },
    "description": {
      "en": "Sauvignon Blanc",
      "ar": "سوفينيون بلانك",
      "tr": "Sauvignon Blanc"
    }
  },
  {
    "id": "whisky-chivas-regal-12",
    "category": "whisky",
    "icon": "🥃",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Chivas Regal 12",
      "ar": "شيفاز 12",
      "tr": "Chivas Regal 12"
    },
    "description": {
      "en": "Chivas Regal 12",
      "ar": "شيفاز 12",
      "tr": "Chivas Regal 12"
    }
  },
  {
    "id": "whisky-chivas-regal-18",
    "category": "whisky",
    "icon": "🥃",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Chivas Regal 18",
      "ar": "شيفاز 18",
      "tr": "Chivas Regal 18"
    },
    "description": {
      "en": "Chivas Regal 18",
      "ar": "شيفاز 18",
      "tr": "Chivas Regal 18"
    }
  },
  {
    "id": "whisky-gentleman-jack",
    "category": "whisky",
    "icon": "🥃",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Gentleman Jack",
      "ar": "جنتلمان جاك",
      "tr": "Gentleman Jack"
    },
    "description": {
      "en": "Gentleman Jack",
      "ar": "جنتلمان جاك",
      "tr": "Gentleman Jack"
    }
  },
  {
    "id": "whisky-jack-daniel-s",
    "category": "whisky",
    "icon": "🥃",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Jack Daniel's",
      "ar": "جاك دانيلز",
      "tr": "Jack Daniel's"
    },
    "description": {
      "en": "Jack Daniel's",
      "ar": "جاك دانيلز",
      "tr": "Jack Daniel's"
    }
  },
  {
    "id": "whisky-j-w-black-label",
    "category": "whisky",
    "icon": "🥃",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "J.W. Black Label",
      "ar": "جوني ووكر بلاك",
      "tr": "J.W. Black Label"
    },
    "description": {
      "en": "J.W. Black Label",
      "ar": "جوني ووكر بلاك",
      "tr": "J.W. Black Label"
    }
  },
  {
    "id": "whisky-j-w-red-label",
    "category": "whisky",
    "icon": "🥃",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "J.W. Red Label",
      "ar": "جوني ووكر ريد",
      "tr": "J.W. Red Label"
    },
    "description": {
      "en": "J.W. Red Label",
      "ar": "جوني ووكر ريد",
      "tr": "J.W. Red Label"
    }
  },
  {
    "id": "whisky-johnnie-walker-18-yrs",
    "category": "whisky",
    "icon": "🥃",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Johnnie Walker 18 YRS",
      "ar": "جوني ووكر 18",
      "tr": "Johnnie Walker 18 YRS"
    },
    "description": {
      "en": "Johnnie Walker 18 YRS",
      "ar": "جوني ووكر 18",
      "tr": "Johnnie Walker 18 YRS"
    }
  },
  {
    "id": "whisky-ballantines",
    "category": "whisky",
    "icon": "🥃",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Ballantines",
      "ar": "بالانتاينز",
      "tr": "Ballantines"
    },
    "description": {
      "en": "Ballantines",
      "ar": "بالانتاينز",
      "tr": "Ballantines"
    }
  },
  {
    "id": "whisky-j-b",
    "category": "whisky",
    "icon": "🥃",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "J&B",
      "ar": "جي آند بي",
      "tr": "J&B"
    },
    "description": {
      "en": "J&B",
      "ar": "جي آند بي",
      "tr": "J&B"
    }
  },
  {
    "id": "whisky-jameson",
    "category": "whisky",
    "icon": "🥃",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Jameson",
      "ar": "جيمسون",
      "tr": "Jameson"
    },
    "description": {
      "en": "Jameson",
      "ar": "جيمسون",
      "tr": "Jameson"
    }
  },
  {
    "id": "whisky-jim-beam",
    "category": "whisky",
    "icon": "🥃",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Jim Beam",
      "ar": "جيم بيم",
      "tr": "Jim Beam"
    },
    "description": {
      "en": "Jim Beam",
      "ar": "جيم بيم",
      "tr": "Jim Beam"
    }
  },
  {
    "id": "whisky-vat-69",
    "category": "whisky",
    "icon": "🥃",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "VAT 69",
      "ar": "فات 69",
      "tr": "VAT 69"
    },
    "description": {
      "en": "VAT 69",
      "ar": "فات 69",
      "tr": "VAT 69"
    }
  },
  {
    "id": "whisky-talisker",
    "category": "whisky",
    "icon": "🥃",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Talisker",
      "ar": "تاليسكر",
      "tr": "Talisker"
    },
    "description": {
      "en": "Talisker",
      "ar": "تاليسكر",
      "tr": "Talisker"
    }
  },
  {
    "id": "liqueur-rum-baileys",
    "category": "liqueur-rum",
    "icon": "🍾",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Baileys",
      "ar": "بيليز",
      "tr": "Baileys"
    },
    "description": {
      "en": "Baileys",
      "ar": "بيليز",
      "tr": "Baileys"
    }
  },
  {
    "id": "liqueur-rum-bacardi",
    "category": "liqueur-rum",
    "icon": "🍾",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Bacardi",
      "ar": "باكاردي",
      "tr": "Bacardi"
    },
    "description": {
      "en": "Bacardi",
      "ar": "باكاردي",
      "tr": "Bacardi"
    }
  },
  {
    "id": "liqueur-rum-martini",
    "category": "liqueur-rum",
    "icon": "🍾",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Martini",
      "ar": "مارتيني",
      "tr": "Martini"
    },
    "description": {
      "en": "Martini",
      "ar": "مارتيني",
      "tr": "Martini"
    }
  },
  {
    "id": "liqueur-rum-tequila",
    "category": "liqueur-rum",
    "icon": "🍾",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Tequila",
      "ar": "تيكيلا",
      "tr": "Tequila"
    },
    "description": {
      "en": "Tequila",
      "ar": "تيكيلا",
      "tr": "Tequila"
    }
  },
  {
    "id": "liqueur-rum-campari",
    "category": "liqueur-rum",
    "icon": "🍾",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Campari",
      "ar": "كامباري",
      "tr": "Campari"
    },
    "description": {
      "en": "Campari",
      "ar": "كامباري",
      "tr": "Campari"
    }
  },
  {
    "id": "liqueur-rum-malibu",
    "category": "liqueur-rum",
    "icon": "🍾",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Malibu",
      "ar": "ماليبو",
      "tr": "Malibu"
    },
    "description": {
      "en": "Malibu",
      "ar": "ماليبو",
      "tr": "Malibu"
    }
  },
  {
    "id": "liqueur-rum-safari",
    "category": "liqueur-rum",
    "icon": "🍾",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Safari",
      "ar": "سفاري",
      "tr": "Safari"
    },
    "description": {
      "en": "Safari",
      "ar": "سفاري",
      "tr": "Safari"
    }
  },
  {
    "id": "liqueur-rum-c-morgan-orange",
    "category": "liqueur-rum",
    "icon": "🍾",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "C. Morgan Orange",
      "ar": "كابتن مورغان أورانج",
      "tr": "C. Morgan Orange"
    },
    "description": {
      "en": "C. Morgan Orange",
      "ar": "كابتن مورغان أورانج",
      "tr": "C. Morgan Orange"
    }
  },
  {
    "id": "liqueur-rum-kahlua",
    "category": "liqueur-rum",
    "icon": "🍾",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Kahlua",
      "ar": "كالوا",
      "tr": "Kahlua"
    },
    "description": {
      "en": "Kahlua",
      "ar": "كالوا",
      "tr": "Kahlua"
    }
  },
  {
    "id": "liqueur-rum-sheridans",
    "category": "liqueur-rum",
    "icon": "🍾",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Sheridans",
      "ar": "شيريدانز",
      "tr": "Sheridans"
    },
    "description": {
      "en": "Sheridans",
      "ar": "شيريدانز",
      "tr": "Sheridans"
    }
  },
  {
    "id": "liqueur-rum-cointreau",
    "category": "liqueur-rum",
    "icon": "🍾",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Cointreau",
      "ar": "كوينترو",
      "tr": "Cointreau"
    },
    "description": {
      "en": "Cointreau",
      "ar": "كوينترو",
      "tr": "Cointreau"
    }
  },
  {
    "id": "liqueur-rum-napoleon-cognac",
    "category": "liqueur-rum",
    "icon": "🍾",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Napoleon Cognac",
      "ar": "نابليون كونياك",
      "tr": "Napoleon Cognac"
    },
    "description": {
      "en": "Napoleon Cognac",
      "ar": "نابليون كونياك",
      "tr": "Napoleon Cognac"
    }
  },
  {
    "id": "liqueur-rum-hennessy-cognac",
    "category": "liqueur-rum",
    "icon": "🍾",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Hennessy Cognac",
      "ar": "هينيسي كونياك",
      "tr": "Hennessy Cognac"
    },
    "description": {
      "en": "Hennessy Cognac",
      "ar": "هينيسي كونياك",
      "tr": "Hennessy Cognac"
    }
  },
  {
    "id": "liqueur-rum-jagermeister",
    "category": "liqueur-rum",
    "icon": "🍾",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Jagermeister",
      "ar": "ياغرمايستر",
      "tr": "Jagermeister"
    },
    "description": {
      "en": "Jagermeister",
      "ar": "ياغرمايستر",
      "tr": "Jagermeister"
    }
  },
  {
    "id": "cocktails-mojito",
    "category": "cocktails",
    "icon": "🍹",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mojito",
      "ar": "موهيتو",
      "tr": "Mojito"
    },
    "description": {
      "en": "Mojito",
      "ar": "موهيتو",
      "tr": "Mojito"
    }
  },
  {
    "id": "cocktails-sex-on-the-beach",
    "category": "cocktails",
    "icon": "🍹",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Sex On The Beach",
      "ar": "سكس أون ذا بيتش",
      "tr": "Sex On The Beach"
    },
    "description": {
      "en": "Sex On The Beach",
      "ar": "سكس أون ذا بيتش",
      "tr": "Sex On The Beach"
    }
  },
  {
    "id": "cocktails-long-island-ice-tea",
    "category": "cocktails",
    "icon": "🍹",
    "price": "Ask",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Long Island Ice Tea",
      "ar": "لونغ آيلاند آيس تي",
      "tr": "Long Island Ice Tea"
    },
    "description": {
      "en": "Long Island Ice Tea",
      "ar": "لونغ آيلاند آيس تي",
      "tr": "Long Island Ice Tea"
    }
  },
  {
    "id": "cocktails-margarita",
    "category": "cocktails",
    "icon": "🍹",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Margarita",
      "ar": "مارغريتا",
      "tr": "Margarita"
    },
    "description": {
      "en": "Margarita",
      "ar": "مارغريتا",
      "tr": "Margarita"
    }
  },
  {
    "id": "cocktails-b-52",
    "category": "cocktails",
    "icon": "🍹",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "B-52",
      "ar": "بي 52",
      "tr": "B-52"
    },
    "description": {
      "en": "B-52",
      "ar": "بي 52",
      "tr": "B-52"
    }
  },
  {
    "id": "cocktails-b-m-w",
    "category": "cocktails",
    "icon": "🍹",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "B.M.W",
      "ar": "بي إم دبليو",
      "tr": "B.M.W"
    },
    "description": {
      "en": "B.M.W",
      "ar": "بي إم دبليو",
      "tr": "B.M.W"
    }
  },
  {
    "id": "cocktails-gin-fizz",
    "category": "cocktails",
    "icon": "🍹",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Gin Fizz",
      "ar": "جن فيز",
      "tr": "Gin Fizz"
    },
    "description": {
      "en": "Gin Fizz",
      "ar": "جن فيز",
      "tr": "Gin Fizz"
    }
  },
  {
    "id": "cocktails-black-jack",
    "category": "cocktails",
    "icon": "🍹",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Black Jack",
      "ar": "بلاك جاك",
      "tr": "Black Jack"
    },
    "description": {
      "en": "Black Jack",
      "ar": "بلاك جاك",
      "tr": "Black Jack"
    }
  },
  {
    "id": "cocktails-black-russian",
    "category": "cocktails",
    "icon": "🍹",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Black Russian",
      "ar": "بلاك روسيان",
      "tr": "Black Russian"
    },
    "description": {
      "en": "Black Russian",
      "ar": "بلاك روسيان",
      "tr": "Black Russian"
    }
  },
  {
    "id": "cocktails-white-russian",
    "category": "cocktails",
    "icon": "🍹",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "White Russian",
      "ar": "وايت روسيان",
      "tr": "White Russian"
    },
    "description": {
      "en": "White Russian",
      "ar": "وايت روسيان",
      "tr": "White Russian"
    }
  },
  {
    "id": "cocktails-aperol-spritz",
    "category": "cocktails",
    "icon": "🍹",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Aperol Spritz",
      "ar": "أبيرول سبريتز",
      "tr": "Aperol Spritz"
    },
    "description": {
      "en": "Aperol Spritz",
      "ar": "أبيرول سبريتز",
      "tr": "Aperol Spritz"
    }
  },
  {
    "id": "cocktails-gin-tonic",
    "category": "cocktails",
    "icon": "🍹",
    "price": "Ask",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Gin Tonic",
      "ar": "جن تونيك",
      "tr": "Cin Tonik"
    },
    "description": {
      "en": "Gin Tonic",
      "ar": "جن تونيك",
      "tr": "Cin Tonik"
    }
  },
  {
    "id": "starbuzz-endless-love",
    "category": "starbuzz",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Endless Love",
      "ar": "إندلس لوف",
      "tr": "Endless Love"
    },
    "description": {
      "en": "Endless Love",
      "ar": "إندلس لوف",
      "tr": "Endless Love"
    }
  },
  {
    "id": "starbuzz-peach",
    "category": "starbuzz",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Peach",
      "ar": "خوخ",
      "tr": "Şeftali"
    },
    "description": {
      "en": "Peach",
      "ar": "خوخ",
      "tr": "Şeftali"
    }
  },
  {
    "id": "starbuzz-love-66",
    "category": "starbuzz",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Love 66",
      "ar": "لوف 66",
      "tr": "Love 66"
    },
    "description": {
      "en": "Love 66",
      "ar": "لوف 66",
      "tr": "Love 66"
    }
  },
  {
    "id": "starbuzz-lady-killer",
    "category": "starbuzz",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Lady Killer",
      "ar": "ليدي كيلر",
      "tr": "Lady Killer"
    },
    "description": {
      "en": "Lady Killer",
      "ar": "ليدي كيلر",
      "tr": "Lady Killer"
    }
  },
  {
    "id": "el-fakher-double-apple",
    "category": "el-fakher",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Double Apple",
      "ar": "تفاحتين",
      "tr": "Çift Elma"
    },
    "description": {
      "en": "Double Apple",
      "ar": "تفاحتين",
      "tr": "Çift Elma"
    }
  },
  {
    "id": "el-fakher-grape",
    "category": "el-fakher",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Grape",
      "ar": "عنب",
      "tr": "Üzüm"
    },
    "description": {
      "en": "Grape",
      "ar": "عنب",
      "tr": "Üzüm"
    }
  },
  {
    "id": "el-fakher-mint",
    "category": "el-fakher",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Mint",
      "ar": "نعناع",
      "tr": "Nane"
    },
    "description": {
      "en": "Mint",
      "ar": "نعناع",
      "tr": "Nane"
    }
  },
  {
    "id": "el-fakher-lemon",
    "category": "el-fakher",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Lemon",
      "ar": "ليمون",
      "tr": "Limon"
    },
    "description": {
      "en": "Lemon",
      "ar": "ليمون",
      "tr": "Limon"
    }
  },
  {
    "id": "el-fakher-orange",
    "category": "el-fakher",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Orange",
      "ar": "برتقال",
      "tr": "Portakal"
    },
    "description": {
      "en": "Orange",
      "ar": "برتقال",
      "tr": "Portakal"
    }
  },
  {
    "id": "el-fakher-blueberries",
    "category": "el-fakher",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Blueberries",
      "ar": "توت أزرق",
      "tr": "Yaban Mersini"
    },
    "description": {
      "en": "Blueberries",
      "ar": "توت أزرق",
      "tr": "Yaban Mersini"
    }
  },
  {
    "id": "el-fakher-gum",
    "category": "el-fakher",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Gum",
      "ar": "علكة",
      "tr": "Sakız"
    },
    "description": {
      "en": "Gum",
      "ar": "علكة",
      "tr": "Sakız"
    }
  },
  {
    "id": "el-fakher-melon",
    "category": "el-fakher",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Melon",
      "ar": "شمام",
      "tr": "Kavun"
    },
    "description": {
      "en": "Melon",
      "ar": "شمام",
      "tr": "Kavun"
    }
  },
  {
    "id": "el-fakher-watermelon",
    "category": "el-fakher",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Watermelon",
      "ar": "بطيخ",
      "tr": "Karpuz"
    },
    "description": {
      "en": "Watermelon",
      "ar": "بطيخ",
      "tr": "Karpuz"
    }
  },
  {
    "id": "el-fakher-strawberry",
    "category": "el-fakher",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Strawberry",
      "ar": "فراولة",
      "tr": "Çilek"
    },
    "description": {
      "en": "Strawberry",
      "ar": "فراولة",
      "tr": "Çilek"
    }
  },
  {
    "id": "el-fakher-peach",
    "category": "el-fakher",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Peach",
      "ar": "خوخ",
      "tr": "Şeftali"
    },
    "description": {
      "en": "Peach",
      "ar": "خوخ",
      "tr": "Şeftali"
    }
  },
  {
    "id": "el-fakher-pineapple",
    "category": "el-fakher",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Pineapple",
      "ar": "أناناس",
      "tr": "Ananas"
    },
    "description": {
      "en": "Pineapple",
      "ar": "أناناس",
      "tr": "Ananas"
    }
  },
  {
    "id": "el-fakher-cappuccino",
    "category": "el-fakher",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Cappuccino",
      "ar": "كابتشينو",
      "tr": "Cappuccino"
    },
    "description": {
      "en": "Cappuccino",
      "ar": "كابتشينو",
      "tr": "Cappuccino"
    }
  },
  {
    "id": "el-fakher-engleezi",
    "category": "el-fakher",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Engleezi",
      "ar": "إنجليزي",
      "tr": "Engleezi"
    },
    "description": {
      "en": "Engleezi",
      "ar": "إنجليزي",
      "tr": "Engleezi"
    }
  },
  {
    "id": "mazaya-lemon-mint",
    "category": "mazaya",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Lemon Mint",
      "ar": "ليمون نعناع",
      "tr": "Limon Nane"
    },
    "description": {
      "en": "Lemon Mint",
      "ar": "ليمون نعناع",
      "tr": "Limon Nane"
    }
  },
  {
    "id": "mazaya-double-apple",
    "category": "mazaya",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Double Apple",
      "ar": "تفاحتين",
      "tr": "Çift Elma"
    },
    "description": {
      "en": "Double Apple",
      "ar": "تفاحتين",
      "tr": "Çift Elma"
    }
  },
  {
    "id": "mazaya-gum-cinnamon",
    "category": "mazaya",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Gum Cinnamon",
      "ar": "علكة وقرفة",
      "tr": "Sakız Tarçın"
    },
    "description": {
      "en": "Gum Cinnamon",
      "ar": "علكة وقرفة",
      "tr": "Sakız Tarçın"
    }
  },
  {
    "id": "mazaya-blueberries",
    "category": "mazaya",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Blueberries",
      "ar": "توت أزرق",
      "tr": "Yaban Mersini"
    },
    "description": {
      "en": "Blueberries",
      "ar": "توت أزرق",
      "tr": "Yaban Mersini"
    }
  },
  {
    "id": "mazaya-grape",
    "category": "mazaya",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Grape",
      "ar": "عنب",
      "tr": "Üzüm"
    },
    "description": {
      "en": "Grape",
      "ar": "عنب",
      "tr": "Üzüm"
    }
  },
  {
    "id": "nakhla-double-apple",
    "category": "nakhla",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": true,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Double Apple",
      "ar": "تفاحتين",
      "tr": "Çift Elma"
    },
    "description": {
      "en": "Double Apple",
      "ar": "تفاحتين",
      "tr": "Çift Elma"
    }
  },
  {
    "id": "nakhla-cappuccino",
    "category": "nakhla",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Cappuccino",
      "ar": "كابتشينو",
      "tr": "Cappuccino"
    },
    "description": {
      "en": "Cappuccino",
      "ar": "كابتشينو",
      "tr": "Cappuccino"
    }
  },
  {
    "id": "special-shisha-special-mix",
    "category": "special-shisha",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Special Mix",
      "ar": "خلطة خاصة",
      "tr": "Özel Karışım"
    },
    "description": {
      "en": "Special Mix",
      "ar": "خلطة خاصة",
      "tr": "Özel Karışım"
    }
  },
  {
    "id": "special-shisha-anfield-special",
    "category": "special-shisha",
    "icon": "💨",
    "price": "700₺",
    "bestSeller": false,
    "special": false,
    "isNew": false,
    "spicy": false,
    "name": {
      "en": "Anfield Special",
      "ar": "أنفيلد خاص",
      "tr": "Anfield Special"
    },
    "description": {
      "en": "Anfield Special",
      "ar": "أنفيلد خاص",
      "tr": "Anfield Special"
    }
  }
];
