(function(){
  "use strict";

  /* ---------- Text in both languages ---------- */
  var I18N = {
    ar: {
      demo: "نسخة تجريبية للعرض.",
      langBtn: "English",
      brand: "فطائر لمة",
      tagline: "",
      openNow: "مفتوح الآن",
      closedNow: "مغلق الآن",
      closes: "يغلق",
      opens: "يفتح",
      seeMenu: "شوف المنيو",
      hoursAddress: "الأوقات والعنوان",
      featureNote: "الكريب اللي على اسم المحل.",
      seeOnMenu: "شوف كل الكريب",
      orderHS: "اطلب عبر هنقرستيشن",
      orderHSNote: "التوصيل عن طريق هنقرستيشن. أسعار التطبيق أعلى من أسعار المحل بسبب رسوم الخدمة.",
      filters: { all: "الكل", sweet: "حلو", savory: "مالح", nomeat: "بدون لحم", cheap: "10 ر.س وأقل" },
      tagHot: "حار 🌶️", tagVeg: "بدون لحم 🌱", tagSig: "خاص لمة", tagPop: "الأكثر طلباً",
      kcal: "حوالي {n} سعرة (حسب هنقرستيشن)",
      choose: "اختر", qty: "الكمية", total: "المجموع", close: "إغلاق",
      orderWA: "اطلب عبر واتساب",
      orderWANote: "يفتح واتساب ورسالة الطلب جاهزة، وأنت ترسلها للمحل.",
      waHello: "السلام عليكم، أبغى أطلب:", waFrom: "(من موقع فطائر لمة)",
      directions: "الاتجاهات للمحل", directionsL: "الطريق", directionsV: "افتح الاتجاهات",
      fab: "تواصل معنا", fabWA: "واتساب", fabCall: "اتصال",
      themeBtn: "تبديل الوضع الداكن",
      statsTitle: "إحصائيات الزوار", statsAll: "كل الزيارات", statsToday: "زيارات اليوم",
      statsHome: "الرئيسية", statsMenu: "المنيو", statsInfo: "المعلومات",
      statsWA: "ضغطات واتساب", statsHS: "ضغطات هنقرستيشن", statsCall: "ضغطات الاتصال", statsDir: "ضغطات الاتجاهات",
      statsMe: "لا تحسب زياراتي من هذا الجهاز",
      statsNote: "أرقام تقريبية تبدأ من يوم تشغيل العداد. ما فيه أي بيانات شخصية.",
      statsErr: "ما قدرنا نجيب الأرقام الحين.",
      menuTitle: "المنيو",
      visitTitle: "زورونا",
      todayL: "اليوم",
      itemsFrom: "من",
      navHome: "الرئيسية",
      navMenu: "المنيو",
      navInfo: "المعلومات",
      searchPh: "ابحث في المنيو",
      noResults: "ما فيه نتائج لـ",
      sizes: { shami: "شاميات", saj: "صاج", round: "مدور", leb: "لبناني", s: "صغير", m: "وسط", l: "كبير", fam: "عائلي", crust: "أطراف جبنة" },
      open247: "مفتوح 24 ساعة",
      allDay: "24 ساعة",
      hoursTitle: "أوقات العمل",
      today: "اليوم",
      days: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
      contactTitle: "التواصل",
      addressL: "العنوان",
      addressV: "حي الصناعية، النعيرية",
      mapL: "الخريطة",
      mapV: "افتح في خرائط قوقل",
      phoneL: "الهاتف",
      whatsappL: "واتساب",
      whatsappV: "راسلنا",
      instagramL: "إنستقرام",
      aboutTitle: "عن المطعم",
      aboutText: "فطائر لمة في النعيرية: فطائر على الشاميات والصاج والمدور واللبناني، ومشلتت وكريب وبيتزا ومقالي. مفتوحين 24 ساعة.",
      footer: "نسخة تجريبية من تصميم أحمد"
    },
    en: {
      demo: "Demo site.",
      langBtn: "عربي",
      brand: "Lamma Pies",
      tagline: "With you at every gathering",
      openNow: "Open now",
      closedNow: "Closed now",
      closes: "closes",
      opens: "opens",
      seeMenu: "See the menu",
      hoursAddress: "Hours & address",
      featureNote: "The crepe named after the shop.",
      seeOnMenu: "See all crepes",
      orderHS: "Order on HungerStation",
      orderHSNote: "Delivery is through HungerStation. App prices are higher than in-shop prices because of service fees.",
      filters: { all: "All", sweet: "Sweet", savory: "Savory", nomeat: "No meat", cheap: "SAR 10 or less" },
      tagHot: "Spicy 🌶️", tagVeg: "No meat 🌱", tagSig: "Lamma special", tagPop: "Popular",
      kcal: "About {n} calories (from HungerStation)",
      choose: "Choose", qty: "Quantity", total: "Total", close: "Close",
      orderWA: "Order on WhatsApp",
      orderWANote: "Opens WhatsApp with your order typed out. You send it to the shop.",
      waHello: "Hi, I'd like to order:", waFrom: "(from the Lamma Pies site)",
      directions: "Directions to the shop", directionsL: "Directions", directionsV: "Open directions",
      fab: "Contact us", fabWA: "WhatsApp", fabCall: "Call",
      themeBtn: "Switch dark mode",
      statsTitle: "Visitor stats", statsAll: "All visits", statsToday: "Visits today",
      statsHome: "Home", statsMenu: "Menu", statsInfo: "Info",
      statsWA: "WhatsApp taps", statsHS: "HungerStation taps", statsCall: "Call taps", statsDir: "Directions taps",
      statsMe: "Don't count my visits on this device",
      statsNote: "Rough numbers, counted from the day the counter started. No personal data.",
      statsErr: "Couldn't load the numbers right now.",
      menuTitle: "The menu",
      visitTitle: "Visit us",
      todayL: "Today",
      itemsFrom: "from",
      navHome: "Home",
      navMenu: "Menu",
      navInfo: "Info",
      searchPh: "Search the menu",
      noResults: "No results for",
      sizes: { shami: "Shami", saj: "Saj", round: "Round", leb: "Lebanese", s: "Small", m: "Medium", l: "Large", fam: "Family", crust: "Cheese crust" },
      open247: "Open 24 hours",
      allDay: "24 hours",
      hoursTitle: "Opening hours",
      today: "Today",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      contactTitle: "Contact",
      addressL: "Address",
      addressV: "Industrial district, Nairyah",
      mapL: "Map",
      mapV: "Open in Google Maps",
      phoneL: "Phone",
      whatsappL: "WhatsApp",
      whatsappV: "Message us",
      instagramL: "Instagram",
      aboutTitle: "About us",
      aboutText: "Lamma Pies in Nairyah: fatayer on Shami, saj, round and Lebanese bread, plus meshaltet, crepes, pizza and fried sides. Open 24 hours.",
      footer: "Demo designed by Ahmad"
    }
  };

  /* ---------- Menu, copied from the shop's own menu page (fataer-lammah.menusplus-qr.com) ----------
     p = prices: [size, SAR]. Size "" means one price. Size keys are named in I18N.sizes.
     English names are our own translations. Photos are in assets/menu/. */
  var MENU = [
    { id: "chicken", ar: "الدجاج", en: "Chicken", items: [
      { id: "chicken-1", ar: "بيبروني", en: "Pepperoni", p: [["shami",7],["saj",7],["round",10],["leb",17]], img: "menu/chicken-1.jpg" },
      { id: "chicken-2", ar: "مرتديلا جبن", en: "Mortadella & cheese", p: [["shami",6],["saj",6],["round",10],["leb",16]], img: "menu/chicken-2.jpg" },
      { id: "chicken-3", ar: "نقانق بالجبن", en: "Sausage & cheese", p: [["shami",6],["saj",6],["round",10],["leb",16]], img: "menu/chicken-3.jpg" },
      { id: "chicken-4", ar: "دجاج مكسيكي", en: "Mexican chicken", p: [["shami",10],["saj",10],["round",14],["leb",20]], img: "menu/chicken-4.jpg" },
      { id: "chicken-5", ar: "دجاج فاهيتا", en: "Chicken fajita", p: [["shami",10],["saj",10],["round",14],["leb",20]], img: "menu/chicken-5.jpg" },
      { id: "chicken-6", ar: "دجاج رانش", en: "Chicken ranch", p: [["shami",10],["saj",10],["round",14],["leb",20]], img: "menu/chicken-6.jpg" },
      { id: "chicken-7", ar: "دجاج باربيكيو", en: "BBQ chicken", p: [["shami",10],["saj",10],["round",14],["leb",20]], img: "menu/chicken-7.jpg" }
    ]},
    { id: "crepes", ar: "الكريب", en: "Crepes", items: [
      { id: "crepes-1", ar: "كريب لمة", en: "Lamma crepe", p: [["",22]], img: "menu/crepes-1.jpg" },
      { id: "crepes-2", ar: "كريب ميكس دجاج", en: "Mixed chicken crepe", p: [["",20]], img: "menu/crepes-2.jpg" },
      { id: "crepes-3", ar: "كريب سوبر كرانش", en: "Super crunch crepe", p: [["",18]], img: "menu/crepes-3.jpg" },
      { id: "crepes-4", ar: "ستربس", en: "Strips crepe", p: [["",17]], img: "menu/crepes-4.jpg" },
      { id: "crepes-5", ar: "كريب بيبروني", en: "Pepperoni crepe", p: [["",17]], img: "menu/crepes-5.jpg" },
      { id: "crepes-6", ar: "دجاج", en: "Chicken crepe", p: [["",20]], img: "menu/crepes-6.jpg" },
      { id: "crepes-7", ar: "كريب باربكيو", en: "BBQ crepe", p: [["",17]], img: "menu/crepes-7.jpg" },
      { id: "crepes-8", ar: "كريب رانش", en: "Ranch crepe", p: [["",17]], img: "menu/crepes-8.jpg" },
      { id: "crepes-9", ar: "كريب الاجبان الثلاثة", en: "Three-cheese crepe", p: [["",18]], img: "menu/crepes-9.jpg" },
      { id: "crepes-10", ar: "كريب بانيه", en: "Chicken pané crepe", p: [["",16]], img: "menu/crepes-10.jpg" },
      { id: "crepes-11", ar: "بطاطس", en: "Fries crepe", p: [["",12]], img: "menu/crepes-11.jpg" },
      { id: "crepes-12", ar: "كريب دبي", en: "Dubai crepe", p: [["",18]], img: "menu/crepes-12.jpg" },
      { id: "crepes-13", ar: "نوتيلا", en: "Nutella crepe", p: [["",17]], img: "menu/crepes-13.jpg" }
    ]},
    { id: "meshaltet", ar: "المشلتت", en: "Meshaltet", items: [
      { id: "meshaltet-1", ar: "بيبروني", en: "Pepperoni", p: [["s",15],["m",22],["l",33]], img: "menu/meshaltet-1.jpg" },
      { id: "meshaltet-2", ar: "سجق", en: "Sujuk", p: [["s",15],["m",22],["l",33]], img: "menu/meshaltet-2.jpg" },
      { id: "meshaltet-3", ar: "نوتيلا", en: "Nutella", p: [["s",12],["m",20],["l",30]], img: "menu/meshaltet-3.jpg" },
      { id: "meshaltet-4", ar: "كستر وحليب", en: "Custard & milk", p: [["s",12],["m",20],["l",30]], img: "menu/meshaltet-4.jpg" },
      { id: "meshaltet-5", ar: "لحم", en: "Meat", p: [["s",15],["m",22],["l",33]], img: "menu/meshaltet-5.jpg" },
      { id: "meshaltet-6", ar: "الأجبان الثلاثة", en: "Three cheese", p: [["s",16],["m",23],["l",34]], img: "menu/meshaltet-6.jpg" },
      { id: "meshaltet-7", ar: "نقانق", en: "Sausage", p: [["s",15],["m",22],["l",33]], img: "menu/meshaltet-7.jpg" },
      { id: "meshaltet-8", ar: "قشطة وعسل", en: "Cream & honey", p: [["s",12],["m",20],["l",30]], img: "menu/meshaltet-8.jpg" },
      { id: "meshaltet-9", ar: "دجاج", en: "Chicken", p: [["s",15],["m",22],["l",33]], img: "menu/meshaltet-9.jpg" }
    ]},
    { id: "platters", ar: "الصحون", en: "Platters", items: [
      { id: "platters-1", ar: "صحن ميني تقديم", en: "Mini serving platter", p: [["s",30],["m",44],["l",71],["fam",93]], img: "menu/platters-1.jpg" },
      { id: "platters-2", ar: "صحن صاج مشكل", en: "Mixed saj platter", p: [["s",30],["m",44],["l",71],["fam",93]], img: "menu/platters-2.jpg" },
      { id: "platters-3", ar: "صحن ميني شاميات", en: "Mini Shami platter", p: [["s",30],["m",44],["l",71],["fam",93]], img: "menu/platters-3.jpg" },
      { id: "platters-4", ar: "صحن شاميات", en: "Shami platter", p: [["s",30],["m",44],["l",71],["fam",93]], img: "menu/platters-4.jpg" }
    ]},
    { id: "sfiha", ar: "صفايح اللحم", en: "Meat sfiha", items: [
      { id: "sfiha-1", ar: "كيلو", en: "1 kilo", p: [["",97]], img: "menu/sfiha-1.jpg" },
      { id: "sfiha-2", ar: "نص كيلو", en: "Half kilo", p: [["",48]], img: "menu/sfiha-2.jpg" },
      { id: "sfiha-3", ar: "ربع كيلو", en: "Quarter kilo", p: [["",25]], img: "menu/sfiha-3.jpg" },
      { id: "sfiha-4", ar: "الحبة", en: "Per piece", p: [["",4]], img: "menu/sfiha-4.jpg" }
    ]},
    { id: "meat", ar: "اللحم", en: "Meat", items: [
      { id: "meat-1", ar: "لحم سادة", en: "Plain meat", p: [["round",8],["leb",16]], img: "menu/meat-1.jpg" },
      { id: "meat-2", ar: "لحم جبن", en: "Meat & cheese", p: [["round",9],["leb",17]], img: "menu/meat-2.jpg" }
    ]},
    { id: "falafel", ar: "الفلافل", en: "Falafel", items: [
      { id: "falafel-1", ar: "فلافل جبن", en: "Falafel & cheese", p: [["saj",5],["shami",5]], img: "menu/falafel-1.jpg" },
      { id: "falafel-2", ar: "فلافل لبنه", en: "Falafel & labneh", p: [["saj",5],["shami",5]], img: "menu/falafel-2.jpg" },
      { id: "falafel-3", ar: "فلافل مشكل", en: "Mixed falafel", p: [["saj",5],["shami",5]], img: "menu/falafel-3.jpg" }
    ]},
    { id: "eggs", ar: "البيض", en: "Eggs", items: [
      { id: "eggs-1", ar: "بيض مشكل", en: "Mixed egg", p: [["shami",6],["round",6],["leb",11]], img: "menu/eggs-1.jpg" },
      { id: "eggs-2", ar: "بيض جبن", en: "Egg & cheese", p: [["shami",6],["round",6],["leb",11]], img: "menu/eggs-2.jpg" },
      { id: "eggs-3", ar: "بيض سادة", en: "Plain egg", p: [["shami",5],["round",5],["leb",10]], img: "menu/eggs-3.jpg" }
    ]},
    { id: "spinach", ar: "السبانخ", en: "Spinach", items: [
      { id: "spinach-1", ar: "سبانخ لبنة", en: "Spinach & labneh", p: [["shami",6],["saj",6],["round",10],["leb",16]], img: "menu/spinach-1.jpg" },
      { id: "spinach-2", ar: "سبانخ بالجبنة", en: "Spinach & cheese", p: [["shami",6],["saj",6],["round",10],["leb",16]], img: "menu/spinach-2.jpg" },
      { id: "spinach-3", ar: "سبانخ سادة", en: "Plain spinach", p: [["shami",5],["saj",5],["round",9],["leb",15]], img: "menu/spinach-3.jpg" }
    ]},
    { id: "muhammara", ar: "المحمرة", en: "Muhammara", items: [
      { id: "muhammara-1", ar: "محمرة بالجبن", en: "Muhammara & cheese", p: [["shami",6],["saj",6],["round",10],["leb",16]], img: "menu/muhammara-1.jpg" },
      { id: "muhammara-2", ar: "محمرة باللبنه", en: "Muhammara & labneh", p: [["shami",6],["saj",6],["round",10],["leb",16]], img: "menu/muhammara-2.jpg" },
      { id: "muhammara-3", ar: "محمرة سادة", en: "Plain muhammara", p: [["shami",6],["saj",6],["round",10],["leb",16]], img: "menu/muhammara-3.jpg" }
    ]},
    { id: "cheese", ar: "الأجبان", en: "Cheese", items: [
      { id: "cheese-1", ar: "جبن حلوم", en: "Halloumi", p: [["shami",6],["saj",6],["round",9],["leb",16]], img: "menu/cheese-1.jpg" },
      { id: "cheese-2", ar: "جبن سائل بالعسل", en: "Cream cheese & honey", p: [["shami",7],["saj",7],["round",10],["leb",17]], img: "menu/cheese-2.jpg" },
      { id: "cheese-3", ar: "جبن مشكل", en: "Mixed cheese", p: [["shami",7],["saj",7],["round",10],["leb",17]], img: "menu/cheese-3.jpg" },
      { id: "cheese-4", ar: "جبن حلوم كامل", en: "Whole halloumi", p: [["shami",7],["saj",7],["round",10],["leb",17]], img: "menu/cheese-4.jpg" },
      { id: "cheese-5", ar: "جبن مع الزعتر", en: "Cheese & zaatar", p: [["shami",6],["saj",6],["round",10],["leb",17]], img: "menu/cheese-5.jpg" },
      { id: "cheese-6", ar: "جبن شيدر", en: "Cheddar", p: [["shami",6],["saj",6],["round",9],["leb",16]], img: "menu/cheese-6.jpg" },
      { id: "cheese-7", ar: "جبن قشقوان", en: "Kashkaval", p: [["shami",6],["saj",6],["round",9],["leb",16]], img: "menu/cheese-7.jpg" },
      { id: "cheese-8", ar: "جبن سائل", en: "Cream cheese", p: [["shami",6],["saj",6],["round",9],["leb",16]], img: "menu/cheese-8.jpg" },
      { id: "cheese-9", ar: "جبن عكاوي", en: "Akkawi", p: [["shami",6],["saj",6],["round",9],["leb",16]], img: "menu/cheese-9.jpg" }
    ]},
    { id: "potato", ar: "البطاطا", en: "Potato", items: [
      { id: "potato-1", ar: "بطاطا سادة", en: "Plain potato", p: [["shami",5],["saj",5],["round",9],["leb",15]], img: "menu/potato-1.jpg" },
      { id: "potato-2", ar: "بطاطا خضار", en: "Potato & vegetables", p: [["shami",6],["saj",6],["round",10],["leb",16]], img: "menu/potato-2.jpg" },
      { id: "potato-3", ar: "بطاطا جبن", en: "Potato & cheese", p: [["shami",5],["saj",5],["round",9],["leb",15]], img: "menu/potato-3.jpg" }
    ]},
    { id: "fatteh", ar: "فتة", en: "Fatteh", items: [
      { id: "fatteh-1", ar: "فتة الباذنجان", en: "Eggplant fatteh", p: [["shami",6],["saj",6],["round",10],["leb",15]], img: "menu/fatteh-1.jpg" }
    ]},
    { id: "pizza", ar: "البيتزا", en: "Pizza", items: [
      { id: "pizza-1", ar: "بيتزا لمه", en: "Lamma pizza", p: [["s",16],["m",21],["l",28],["crust",32]], img: "menu/pizza-1.jpg" },
      { id: "pizza-2", ar: "بيتزا ستريبس دجاج", en: "Chicken strips pizza", p: [["s",15],["m",21],["l",28],["crust",32]], img: "menu/pizza-2.jpg" },
      { id: "pizza-3", ar: "بيتزا فلافل", en: "Falafel pizza", p: [["s",13],["m",20],["l",27],["crust",30]], img: "menu/pizza-3.jpg" },
      { id: "pizza-4", ar: "بيتزا سوبر سوبريم", en: "Super supreme pizza", p: [["s",15],["m",21],["l",28],["crust",32]], img: "menu/pizza-4.jpg" },
      { id: "pizza-5", ar: "بيتزا نقانق", en: "Sausage pizza", p: [["s",14],["m",20],["l",27],["crust",30]], img: "menu/pizza-5.jpg" },
      { id: "pizza-6", ar: "بيتزا رانش", en: "Ranch pizza", p: [["s",15],["m",21],["l",28],["crust",32]], img: "menu/pizza-6.jpg" },
      { id: "pizza-7", ar: "بيتزا باربيكيو", en: "BBQ pizza", p: [["s",15],["m",21],["l",28],["crust",32]], img: "menu/pizza-7.jpg" },
      { id: "pizza-8", ar: "بيتزا فاهيتا دجاج", en: "Chicken fajita pizza", p: [["s",14],["m",20],["l",27],["crust",30]], img: "menu/pizza-8.jpg" },
      { id: "pizza-9", ar: "بيتزا لحم", en: "Meat pizza", p: [["s",14],["m",20],["l",27],["crust",30]], img: "menu/pizza-9.jpg" },
      { id: "pizza-10", ar: "بيتزا خضار", en: "Vegetable pizza", p: [["s",12],["m",20],["l",27],["crust",30]], img: "menu/pizza-10.jpg" },
      { id: "pizza-11", ar: "بيتزا بيبروني", en: "Pepperoni pizza", p: [["s",14],["m",20],["l",27],["crust",30]], img: "menu/pizza-11.jpg" },
      { id: "pizza-12", ar: "بيتزا مرجريتا", en: "Margherita pizza", p: [["s",12],["m",20],["l",27],["crust",30]], img: "menu/pizza-12.jpg" }
    ]},
    { id: "drinks", ar: "المشروبات", en: "Drinks", items: [
      { id: "drinks-1", ar: "عصير ربيع", en: "Al Rabie juice", p: [["",2]], img: "menu/drinks-1.jpg" },
      { id: "drinks-2", ar: "ديو", en: "Mountain Dew", p: [["s",3],["fam",12]], img: "menu/drinks-2.jpg" },
      { id: "drinks-3", ar: "سڤن اب", en: "7UP", p: [["s",3],["fam",12]], img: "menu/drinks-3.jpg" },
      { id: "drinks-4", ar: "حمضيات", en: "Mirinda Citrus", p: [["s",3],["fam",12]], img: "menu/drinks-4.jpg" },
      { id: "drinks-5", ar: "بيبسي", en: "Pepsi", p: [["s",3],["fam",12]], img: "menu/drinks-5.jpg" }
    ]},
    { id: "fried", ar: "المقالي", en: "Fried items", items: [
      { id: "fried-1", ar: "كبة", en: "Kibbeh", p: [["s",11],["m",21],["l",32]], img: "menu/fried-1.jpg" },
      { id: "fried-2", ar: "كباجي", en: "Kabaji", p: [["s",10],["m",20],["l",30]], img: "menu/fried-2.jpg" },
      { id: "fried-3", ar: "صحن بطاطس", en: "Fries", p: [["s",5],["m",10],["l",15]], img: "menu/fried-3.jpg" },
      { id: "fried-4", ar: "سمبوسة", en: "Samosa", p: [["s",10],["m",20],["l",30]], img: "menu/fried-4.jpg" },
      { id: "fried-5", ar: "ورق عنب", en: "Stuffed grape leaves", p: [["s",10],["m",20],["l",30]], img: "menu/fried-5.jpg" }
    ]},
    { id: "sweet", ar: "فطائر حلوة", en: "Sweet pies", items: [
      { id: "sweet-1", ar: "بستاشيو", en: "Pistachio", p: [["saj",7],["shami",7]], img: "menu/sweet-1.jpg" },
      { id: "sweet-2", ar: "قشطة وعسل", en: "Cream & honey", p: [["shami",7],["saj",7]], img: "menu/sweet-2.jpg" },
      { id: "sweet-3", ar: "نوتيلا", en: "Nutella", p: [["shami",7],["saj",7]], img: "menu/sweet-3.jpg" }
    ]},
    { id: "zaatar", ar: "الزعتر", en: "Zaatar", items: [
      { id: "zaatar-1", ar: "زعتر محشي الأطراف", en: "Stuffed-crust zaatar", p: [["round",8],["leb",16]], img: null },
      { id: "zaatar-2", ar: "زعتر مع خضار", en: "Zaatar & vegetables", p: [["shami",5],["saj",5],["round",5],["leb",14]], img: "menu/zaatar-2.jpg" },
      { id: "zaatar-3", ar: "زعتر مع رمان", en: "Zaatar & pomegranate", p: [["shami",5],["saj",5],["round",6],["leb",15]], img: "menu/zaatar-3.jpg" },
      { id: "zaatar-4", ar: "زعتر سادة", en: "Plain zaatar", p: [["shami",4],["saj",4],["round",4],["leb",13]], img: "menu/zaatar-4.jpg" }
    ]},
    { id: "labneh", ar: "الالبان", en: "Labneh", items: [
      { id: "labneh-1", ar: "لبنة بالعسل", en: "Labneh & honey", p: [["shami",6],["saj",6],["round",10],["leb",17]], img: "menu/labneh-1.jpg" },
      { id: "labneh-2", ar: "عش البلبل", en: "Bird's nest", p: [["shami",7],["saj",7],["round",10],["leb",16]], img: "menu/labneh-2.jpg" },
      { id: "labneh-3", ar: "لبنه كامل", en: "Whole labneh", p: [["shami",7],["saj",7],["round",10],["leb",16]], img: "menu/labneh-3.jpg" },
      { id: "labneh-4", ar: "لبنه بالجبن", en: "Labneh & cheese", p: [["shami",7],["saj",7],["round",10],["leb",16]], img: "menu/labneh-4.jpg" },
      { id: "labneh-5", ar: "لبنة زعتر", en: "Labneh & zaatar", p: [["shami",6],["saj",6],["round",10],["leb",16]], img: "menu/labneh-5.jpg" }
    ]}
  ];

  /* Opening hours by weekday (0 = Sunday). Hours past 24 run into the next morning: 26 = 2am.
     { o: 0, c: 24 } means open all day. The shop is open 24/7 (from its Google Maps listing). */
  var HOURS = [
    { o: 0, c: 24 }, { o: 0, c: 24 }, { o: 0, c: 24 }, { o: 0, c: 24 },
    { o: 0, c: 24 }, { o: 0, c: 24 }, { o: 0, c: 24 }
  ];

  /* Contact links */
  var CONTACT = {
    phone: "0530011762",
    phoneShown: "053 001 1762",
    whatsapp: "https://wa.me/966530011762",
    maps: "https://maps.app.goo.gl/b4xVdBizNN6Bj2VD6",
    /* Coordinates of the shop's Google Maps pin (from the link above) */
    directions: "https://www.google.com/maps/dir/?api=1&destination=27.4666027,48.4812884",
    instagram: "https://www.instagram.com/lammapie/",
    instagramShown: "@lammapie"
  };

  /* The shop's HungerStation page, one link per language (opens in a new tab). */
  var HUNGERSTATION = {
    ar: "https://hungerstation.com/sa-ar/restaurants/regions/%D8%A7%D9%84%D9%86%D8%B9%D9%8A%D8%B1%D9%8A%D8%A9/%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D8%A9/%D9%81%D8%B7%D8%A7%D8%A6%D8%B1-%D9%84%D9%85%D8%A9-180411",
    en: "https://hungerstation.com/sa-en/restaurants/regions/alnuayreayh/industrial/lamma-pies-180411"
  };

  var ALL = {};
  MENU.forEach(function(c){ c.items.forEach(function(i){ ALL[i.id] = i; }); });
  var FEATURED = "crepes-1";

  /* Extra facts per item.
     sweet / nomeat / hot: used for labels and filters. Only set where the name or the shop's
       HungerStation description makes it clear (hot = only "spicy" in that description).
     sig: named after the shop. pop: best sellers (none yet: ask the shop which ones).
     kcal: calories from the shop's HungerStation listing (left out where it has no match). */
  var META = {
    "chicken-1": { kcal: 720 }, "chicken-2": { kcal: 680 }, "chicken-3": { kcal: 700 }, "chicken-4": { kcal: 630, hot: 1 },
    "chicken-5": { kcal: 600 }, "chicken-6": { kcal: 610 }, "chicken-7": { kcal: 620 },
    "crepes-1": { kcal: 650, sig: 1 }, "crepes-2": { kcal: 600 }, "crepes-3": { kcal: 550 }, "crepes-4": { kcal: 600 },
    "crepes-5": { kcal: 650 }, "crepes-7": { kcal: 620 }, "crepes-8": { kcal: 610 }, "crepes-9": { kcal: 630, nomeat: 1 },
    "crepes-10": { kcal: 640 }, "crepes-11": { kcal: 520, nomeat: 1 }, "crepes-12": { kcal: 700, sweet: 1, nomeat: 1 }, "crepes-13": { kcal: 600, sweet: 1, nomeat: 1 },
    "meshaltet-1": { kcal: 820 }, "meshaltet-2": { kcal: 800 }, "meshaltet-3": { kcal: 800, sweet: 1, nomeat: 1 }, "meshaltet-4": { kcal: 770, sweet: 1, nomeat: 1 },
    "meshaltet-5": { kcal: 780 }, "meshaltet-6": { kcal: 850, nomeat: 1 }, "meshaltet-8": { kcal: 860, sweet: 1, nomeat: 1 }, "meshaltet-9": { kcal: 600 },
    "platters-1": { kcal: 650 }, "platters-2": { kcal: 900 }, "platters-3": { kcal: 750 },
    "sfiha-1": { kcal: 4800 }, "sfiha-2": { kcal: 2400 }, "sfiha-3": { kcal: 1200 }, "sfiha-4": { kcal: 320 },
    "meat-1": { kcal: 380 }, "meat-2": { kcal: 450 },
    "falafel-1": { kcal: 420, nomeat: 1 }, "falafel-2": { kcal: 400, nomeat: 1 }, "falafel-3": { kcal: 430 },
    "eggs-1": { kcal: 360 }, "eggs-2": { kcal: 340, nomeat: 1 }, "eggs-3": { kcal: 280, nomeat: 1 },
    "spinach-1": { kcal: 300, nomeat: 1 }, "spinach-2": { kcal: 320, nomeat: 1 }, "spinach-3": { kcal: 260, nomeat: 1 },
    "muhammara-1": { kcal: 300, nomeat: 1 }, "muhammara-2": { kcal: 280, nomeat: 1 }, "muhammara-3": { kcal: 240, nomeat: 1 },
    "cheese-1": { kcal: 300, nomeat: 1 }, "cheese-2": { kcal: 300, nomeat: 1 }, "cheese-3": { kcal: 340, nomeat: 1 }, "cheese-4": { kcal: 310, nomeat: 1 },
    "cheese-5": { kcal: 290, nomeat: 1 }, "cheese-6": { kcal: 330, nomeat: 1 }, "cheese-7": { kcal: 320, nomeat: 1 }, "cheese-8": { kcal: 250, nomeat: 1 }, "cheese-9": { kcal: 280, nomeat: 1 },
    "potato-1": { kcal: 360, nomeat: 1 }, "potato-2": { kcal: 360, nomeat: 1 }, "potato-3": { kcal: 390, nomeat: 1 },
    "fatteh-1": { kcal: 450, nomeat: 1 },
    "pizza-1": { kcal: 880, sig: 1 }, "pizza-2": { kcal: 800 }, "pizza-3": { kcal: 730, nomeat: 1 }, "pizza-4": { kcal: 850 },
    "pizza-5": { kcal: 760 }, "pizza-6": { kcal: 770 }, "pizza-7": { kcal: 780 }, "pizza-8": { kcal: 750 },
    "pizza-9": { kcal: 800 }, "pizza-10": { kcal: 700, nomeat: 1 }, "pizza-11": { kcal: 820 }, "pizza-12": { kcal: 680, nomeat: 1 },
    "drinks-1": { kcal: 120 }, "drinks-2": { kcal: 170 }, "drinks-3": { kcal: 140 }, "drinks-4": { kcal: 140 }, "drinks-5": { kcal: 150 },
    "fried-2": { kcal: 380 }, "fried-3": { nomeat: 1 }, "fried-4": { kcal: 300 }, "fried-5": { kcal: 280 },
    "sweet-1": { kcal: 470, sweet: 1, nomeat: 1 }, "sweet-2": { kcal: 430, sweet: 1, nomeat: 1 }, "sweet-3": { kcal: 450, sweet: 1, nomeat: 1 },
    "zaatar-1": { kcal: 280, nomeat: 1 }, "zaatar-2": { kcal: 260, nomeat: 1 }, "zaatar-3": { kcal: 250, nomeat: 1 }, "zaatar-4": { kcal: 220, nomeat: 1 },
    "labneh-1": { kcal: 240, nomeat: 1 }, "labneh-2": { kcal: 300, nomeat: 1 }, "labneh-3": { kcal: 200, nomeat: 1 }, "labneh-4": { kcal: 260, nomeat: 1 }, "labneh-5": { kcal: 220, nomeat: 1 }
  };
  function meta(i){ return META[i.id] || {}; }
  function catOf(i){ return i.id.split("-")[0]; }

  /* Offers banner: set to { ar: "...", en: "..." } to show it on the home page; null hides it. */
  var OFFER = null;

  /* Private visitor counter (abacus.jasoncameron.dev, free, no account). Counts only on the live site.
     Open the stats by tapping the footer line 5 times quickly. */
  var COUNTER = { ns: "bloxforlife-lammah-pie", host: "bloxforlife.github.io" };

  /* ---------- Saved language (this browser only) ---------- */
  var page = document.body.getAttribute("data-page") || "home";
  var lang = "ar";
  try { var saved = localStorage.getItem("hb-lang"); if (saved === '"en"' || saved === "en") lang = "en"; } catch (e) {}
  function saveLang(){ try { localStorage.setItem("hb-lang", lang); } catch (e) {} }

  /* ---------- Helpers ---------- */
  function $(id){ return document.getElementById(id); }
  function T(k){ return I18N[lang][k]; }
  function money(n){ return lang === "ar" ? n + " ر.س" : "SAR " + n; }
  function nm(i){ return i[lang]; }
  function low(i){ return Math.min.apply(null, i.p.map(function(x){ return x[1]; })); }
  function oneprice(i){ return i.p.every(function(x){ return x[1] === i.p[0][1]; }); }
  function priceText(i){ return oneprice(i) ? money(i.p[0][1]) : T("itemsFrom") + " " + money(low(i)); }
  function ext(href, text){ return '<a href="' + href + '" target="_blank" rel="noopener">' + text + '</a>'; }
  function esc(t){ return String(t).replace(/[&<>"]/g, function(ch){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]; }); }
  function tagsHtml(i){
    var m = meta(i), out = [];
    if (m.pop) out.push('<span class="tag">' + T("tagPop") + '</span>');
    if (m.sig) out.push('<span class="tag tag-sig">' + T("tagSig") + '</span>');
    if (m.hot) out.push('<span class="tag tag-hot">' + T("tagHot") + '</span>');
    if (m.nomeat) out.push('<span class="tag tag-veg">' + T("tagVeg") + '</span>');
    return out.length ? '<div class="tags">' + out.join("") + '</div>' : '';
  }
  var ICON_CHAT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-4.2A8 8 0 1 1 20 11.5z"/></svg>';
  var ICON_PHONE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>';

  /* ---------- Visitor counter ---------- */
  function counting(){
    if (location.hostname !== COUNTER.host) return false;
    try { if (localStorage.getItem("lamma-nocount") === "1") return false; } catch (e) {}
    return true;
  }
  function count(key){
    if (!counting()) return;
    try { fetch("https://abacus.jasoncameron.dev/hit/" + COUNTER.ns + "/" + key, { keepalive: true, mode: "cors" }).catch(function(){}); } catch (e) {}
  }
  function todayKey(){ return "day-" + new Date(Date.now() + 3 * 36e5).toISOString().slice(0, 10); }
  function itemsCount(n){ return lang === "ar" ? n + " أصناف" : n + " items"; }
  function reduced(){ return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; }
  function leader(left, right){
    return '<div class="lead">' + left + '<span class="dots" aria-hidden="true"></span>' + right + '</div>';
  }
  function fmtHour(h){
    h = h % 24;
    var h12 = h % 12 || 12;
    return lang === "ar" ? h12 + (h < 12 ? " ص" : " م") : h12 + (h < 12 ? "am" : "pm");
  }
  function allDay(h){ return h.o === 0 && h.c >= 24; }
  function hoursRange(h){ return allDay(h) ? T("allDay") : fmtHour(h.o) + " – " + fmtHour(h.c); }
  function openState(){
    if (HOURS.every(allDay)) return { open: true, always: true };
    var now = new Date(), d = now.getDay(), m = now.getHours() + now.getMinutes() / 60;
    var t = HOURS[d], y = HOURS[(d + 6) % 7];
    if (m >= t.o && m < t.c) return { open: true, at: t.c };
    if (m + 24 < y.c) return { open: true, at: y.c };
    return { open: false, at: m < t.o ? t.o : HOURS[(d + 1) % 7].o };
  }

  /* ---------- Shared parts of every page ---------- */
  var TITLES = { menu: "navMenu", info: "navInfo" };
  function renderCommon(){
    var root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-t]").forEach(function(el){
      var v = T(el.getAttribute("data-t"));
      if (typeof v === "string") { el.textContent = v; el.hidden = !v; }
    });
    document.querySelectorAll("[data-ph]").forEach(function(el){
      var v = T(el.getAttribute("data-ph"));
      el.placeholder = v;
      el.setAttribute("aria-label", v);
    });
    document.querySelectorAll("[data-hs]").forEach(function(a){ a.href = HUNGERSTATION[lang]; });
    document.querySelectorAll("[data-dir]").forEach(function(a){ a.href = CONTACT.directions; });
    document.querySelectorAll("[data-theme-btn]").forEach(function(b){ b.setAttribute("aria-label", T("themeBtn")); b.title = T("themeBtn"); });
    Fab.render();
    document.querySelectorAll("[data-nav]").forEach(function(a){
      if (a.getAttribute("data-nav") === page) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    var s = openState(), sep = lang === "ar" ? "، " : ", ";
    var line = s.always ? T("open247") : (s.open ? T("openNow") : T("closedNow")) + sep + (s.open ? T("closes") : T("opens")) + " " + fmtHour(s.at);
    document.querySelectorAll("[data-statusline]").forEach(function(el){
      el.classList.toggle("is-open", s.open);
      var t = el.querySelector("[data-status-text]");
      if (t) t.textContent = line;
    });
    document.title = (TITLES[page] ? T(TITLES[page]) + " · " : "") + T("brand");
  }

  /* ---------- Home ---------- */
  var Home = {
    render: function(){
      var off = $("offer");
      if (off) { off.hidden = !OFFER; if (OFFER) off.textContent = OFFER[lang]; }
      var f = ALL[FEATURED];
      document.querySelector("[data-feat-name]").textContent = nm(f);
      document.querySelector("[data-feat-price]").textContent = priceText(f);
      var fi = document.querySelector("[data-feat-img]");
      if (fi && f.img) { fi.src = "assets/" + f.img; fi.hidden = false; }
      $("catRows").innerHTML = MENU.map(function(c){
        var min = Math.min.apply(null, c.items.map(low));
        return '<a class="cat-row" href="menu#' + c.id + '">' +
          leader('<strong>' + c[lang] + '</strong>', '<span class="meta">' + itemsCount(c.items.length) + (lang === "ar" ? "، " : ", ") + T("itemsFrom") + ' ' + money(min) + '</span>') +
        '</a>';
      }).join("");
      $("visitRows").innerHTML =
        '<div class="visit-row">' + leader('<span class="k">' + T("todayL") + '</span>', '<span class="v">' + hoursRange(HOURS[new Date().getDay()]) + '</span>') + '</div>' +
        '<div class="visit-row">' + leader('<span class="k">' + T("addressL") + '</span>', '<span class="v">' + ext(CONTACT.maps, T("addressV")) + '</span>') + '</div>';
    }
  };

  /* ---------- Menu ---------- */
  var Menu = {
    active: MENU[0].id, io: null, lock: false, timer: null, filter: "all",
    init: function(){
      $("search").addEventListener("input", Menu.applySearch);
      $("filters").addEventListener("click", function(e){
        var b = e.target.closest("[data-filter]");
        if (!b) return;
        Menu.filter = b.getAttribute("data-filter");
        Menu.renderFilters();
        Menu.applySearch();
      });
      $("menu").addEventListener("click", function(e){
        var r = e.target.closest("[data-open]");
        if (r) Sheet.open(r.getAttribute("data-open"), r);
      });
      $("menu").addEventListener("keydown", function(e){
        var r = e.target.closest("[data-open]");
        if (r && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); Sheet.open(r.getAttribute("data-open"), r); }
      });
      $("tabsInner").addEventListener("click", function(e){
        var t = e.target.closest("[data-tab]");
        if (t) Menu.go(t.getAttribute("data-tab"));
      });
    },
    go: function(id){
      var sec = $("sec-" + id);
      if (!sec) return;
      Menu.lock = true;
      Menu.setActive(id, true);
      sec.scrollIntoView({ behavior: reduced() ? "auto" : "smooth" });
      clearTimeout(Menu.timer);
      Menu.timer = setTimeout(function(){ Menu.lock = false; }, 900);
    },
    renderFilters: function(){
      var f = T("filters");
      $("filters").innerHTML = ["all", "sweet", "savory", "nomeat", "cheap"].map(function(k){
        return '<button type="button" class="chip" data-filter="' + k + '" aria-pressed="' + (k === Menu.filter) + '">' + f[k] + '</button>';
      }).join("");
    },
    passes: function(i){
      var m = meta(i), f = Menu.filter;
      if (f === "sweet") return !!m.sweet;
      if (f === "savory") return !m.sweet && catOf(i) !== "drinks";
      if (f === "nomeat") return !!m.nomeat;
      if (f === "cheap") return low(i) <= 10;
      return true;
    },
    render: function(){
      var sizes = T("sizes");
      Menu.renderFilters();
      $("tabsInner").innerHTML = MENU.map(function(c){
        return '<button type="button" class="tab" data-tab="' + c.id + '" aria-current="' + (c.id === Menu.active) + '">' + c[lang] + '</button>';
      }).join("");
      $("menu").innerHTML = MENU.map(function(c){
        return '<section class="menu-section pad" id="sec-' + c.id + '" data-sec="' + c.id + '"><h2>' + c[lang] + '</h2>' +
          c.items.map(function(i){
            var hay = (i.ar + " " + i.en + " " + c.ar + " " + c.en).toLowerCase();
            var pic = i.img ? '<img class="thumb" src="assets/' + i.img + '" alt="" width="80" height="80" loading="lazy" decoding="async">' : '<span class="thumb thumb-empty" aria-hidden="true"></span>';
            var list = i.p.length > 1 ? '<ul class="sizes">' + i.p.map(function(x){
              return '<li><span>' + sizes[x[0]] + '</span> <b>' + x[1] + '</b></li>';
            }).join("") + '</ul>' : '';
            return '<div class="item" role="button" tabindex="0" data-open="' + i.id + '" data-row="' + i.id + '" data-search="' + hay + '">' + pic +
              '<div class="item-body">' + leader('<h3>' + nm(i) + '</h3>', '<span class="price">' + priceText(i) + '</span>') + list + tagsHtml(i) + '</div></div>';
          }).join("") + '</section>';
      }).join("") + '<p class="empty pad" id="empty" hidden></p>';
      Menu.applySearch();
      Menu.observe();
    },
    applySearch: function(){
      var raw = $("search").value.trim(), q = raw.toLowerCase(), any = false;
      MENU.forEach(function(c){
        var sec = $("sec-" + c.id), vis = 0;
        sec.querySelectorAll("[data-row]").forEach(function(r){
          var ok = (!q || r.getAttribute("data-search").indexOf(q) > -1) && Menu.passes(ALL[r.getAttribute("data-row")]);
          r.hidden = !ok;
          if (ok) vis++;
        });
        sec.hidden = !vis;
        var tab = document.querySelector('[data-tab="' + c.id + '"]');
        if (tab) tab.hidden = !vis;
        if (vis) any = true;
      });
      var e = $("empty");
      e.hidden = any;
      if (!any) e.textContent = T("noResults") + " “" + raw + "”";
    },
    setActive: function(id, scrollTab){
      Menu.active = id;
      document.querySelectorAll("[data-tab]").forEach(function(t){
        var on = t.getAttribute("data-tab") === id;
        t.setAttribute("aria-current", on ? "true" : "false");
        if (on && scrollTab) { try { t.scrollIntoView({ block: "nearest", inline: "nearest" }); } catch (err) {} }
      });
    },
    observe: function(){
      if (Menu.io) Menu.io.disconnect();
      if (!("IntersectionObserver" in window)) return;
      Menu.io = new IntersectionObserver(function(entries){
        if (Menu.lock) return;
        entries.forEach(function(en){ if (en.isIntersecting) Menu.setActive(en.target.getAttribute("data-sec"), true); });
      }, { rootMargin: "-130px 0px -60% 0px" });
      document.querySelectorAll("[data-sec]").forEach(function(s){ Menu.io.observe(s); });
    },
    afterFirstRender: function(){
      var h = (location.hash || "").slice(1);
      if ($("sec-" + h)) setTimeout(function(){ Menu.go(h); }, 60);
    }
  };

  /* ---------- Info ---------- */
  var Info = {
    render: function(){
      var today = new Date().getDay(), days = T("days");
      $("hours").innerHTML = HOURS.map(function(h, d){
        var isToday = d === today;
        return '<li' + (isToday ? ' class="today"' : '') + '>' +
          leader('<span>' + days[d] + (isToday ? '<span class="today-tag">' + T("today") + '</span>' : '') + '</span>', '<span>' + hoursRange(h) + '</span>') +
        '</li>';
      }).join("");
      var rows = [
        [T("addressL"), T("addressV")],
        [T("mapL"), ext(CONTACT.maps, T("mapV"))],
        [T("directionsL"), '<a href="' + CONTACT.directions + '" target="_blank" rel="noopener" data-track="dir">' + T("directionsV") + '</a>'],
        [T("phoneL"), '<a href="tel:' + CONTACT.phone + '" dir="ltr" data-track="call">' + CONTACT.phoneShown + '</a>'],
        [T("whatsappL"), ext(CONTACT.whatsapp, T("whatsappV"))],
        [T("instagramL"), '<span dir="ltr">' + ext(CONTACT.instagram, CONTACT.instagramShown) + '</span>']
      ];
      $("kvRows").innerHTML = rows.map(function(r){
        return '<div class="kv-row">' + leader('<span class="k">' + r[0] + '</span>', '<span class="v">' + r[1] + '</span>') + '</div>';
      }).join("");
    }
  };

  /* ---------- Item sheet: big photo, sizes, quantity, order on WhatsApp ---------- */
  var Sheet = {
    el: null, item: null, size: 0, qty: 1, back: null,
    open: function(id, from){
      var i = ALL[id];
      if (!i) return;
      Sheet.item = i; Sheet.size = 0; Sheet.qty = 1; Sheet.back = from || null;
      if (!Sheet.el) {
        Sheet.el = document.createElement("div");
        Sheet.el.className = "sheet-wrap";
        Sheet.el.addEventListener("click", Sheet.onClick);
        document.addEventListener("keydown", function(e){ if (e.key === "Escape" && Sheet.el && !Sheet.el.hidden) Sheet.close(); });
        document.body.appendChild(Sheet.el);
      }
      Sheet.el.hidden = false;
      document.documentElement.classList.add("no-scroll");
      Sheet.draw();
      var c = Sheet.el.querySelector(".sheet-close");
      if (c) c.focus();
    },
    close: function(){
      if (!Sheet.el) return;
      Sheet.el.hidden = true;
      document.documentElement.classList.remove("no-scroll");
      if (Sheet.back) { try { Sheet.back.focus(); } catch (e) {} }
    },
    price: function(){ return Sheet.item.p[Sheet.size][1]; },
    waText: function(){
      var i = Sheet.item, sz = i.p[Sheet.size][0], sizes = T("sizes");
      var name = lang === "ar" ? i.ar : i.en + " / " + i.ar;
      var line = Sheet.qty + " × " + name + (sz ? " (" + sizes[sz] + ")" : "") + " = " + money(Sheet.qty * Sheet.price());
      return T("waHello") + "\n" + line + "\n" + T("waFrom");
    },
    draw: function(){
      var i = Sheet.item, m = meta(i), sizes = T("sizes");
      var photo = i.img ? '<img class="sheet-photo" src="assets/' + i.img.replace("menu/", "menu/lg/") + '" alt="">' : '<div class="sheet-photo" aria-hidden="true"></div>';
      var opts = i.p.length > 1 ? '<p class="sheet-label">' + T("choose") + '</p><div class="opts">' + i.p.map(function(x, k){
        return '<button type="button" class="opt" data-size="' + k + '" aria-pressed="' + (k === Sheet.size) + '">' + sizes[x[0]] + '<small>' + money(x[1]) + '</small></button>';
      }).join("") + '</div>' : '';
      var wa = CONTACT.whatsapp + "?text=" + encodeURIComponent(Sheet.waText());
      Sheet.el.innerHTML =
        '<div class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheetTitle">' +
          '<div class="sheet-head">' + photo + '<button type="button" class="sheet-close" data-close aria-label="' + T("close") + '">✕</button></div>' +
          '<div class="sheet-body">' +
            '<h2 id="sheetTitle">' + esc(nm(i)) + '</h2>' +
            '<p class="sheet-sub">' + esc(lang === "ar" ? i.en : i.ar) + '</p>' +
            tagsHtml(i) +
            (m.kcal ? '<p class="sheet-kcal">' + T("kcal").replace("{n}", m.kcal) + '</p>' : '') +
            opts +
            '<p class="sheet-label">' + T("qty") + '</p>' +
            '<div class="qty"><button type="button" data-qty="-1" aria-label="−">−</button><output aria-live="polite">' + Sheet.qty + '</output><button type="button" data-qty="1" aria-label="+">+</button></div>' +
            '<div class="sheet-total"><span>' + T("total") + '</span><b>' + money(Sheet.qty * Sheet.price()) + '</b></div>' +
            '<a class="btn btn-wa" href="' + wa + '" target="_blank" rel="noopener" data-track="wa">' + ICON_CHAT + '<span>' + T("orderWA") + '</span></a>' +
            '<p class="sheet-note">' + T("orderWANote") + '</p>' +
          '</div>' +
        '</div>';
    },
    onClick: function(e){
      if (e.target === Sheet.el || e.target.closest("[data-close]")) { Sheet.close(); return; }
      var s = e.target.closest("[data-size]");
      if (s) { Sheet.size = +s.getAttribute("data-size"); Sheet.redraw("[data-size=\"" + Sheet.size + "\"]"); return; }
      var q = e.target.closest("[data-qty]");
      if (q) { Sheet.qty = Math.max(1, Math.min(20, Sheet.qty + +q.getAttribute("data-qty"))); Sheet.redraw("[data-qty=\"" + q.getAttribute("data-qty") + "\"]"); }
    },
    redraw: function(focusSel){
      var top = Sheet.el.querySelector(".sheet").scrollTop;
      Sheet.draw();
      Sheet.el.querySelector(".sheet").scrollTop = top;
      var f = Sheet.el.querySelector(focusSel);
      if (f) f.focus();
    }
  };

  /* ---------- Floating contact button (every page) ---------- */
  var Fab = {
    el: null, openState: false,
    render: function(){
      if (!Fab.el) {
        Fab.el = document.createElement("div");
        Fab.el.className = "fab";
        Fab.el.addEventListener("click", function(e){
          if (e.target.closest(".fab-main")) { Fab.openState = !Fab.openState; Fab.render(); }
        });
        document.addEventListener("click", function(e){
          if (Fab.openState && !e.target.closest(".fab")) { Fab.openState = false; Fab.render(); }
        });
        document.body.appendChild(Fab.el);
      }
      Fab.el.innerHTML =
        (Fab.openState ? '<div class="fab-opts">' +
          '<a class="fab-opt" href="' + CONTACT.whatsapp + '" target="_blank" rel="noopener" data-track="fabwa">' + ICON_CHAT + T("fabWA") + '</a>' +
          '<a class="fab-opt" href="tel:' + CONTACT.phone + '" data-track="call">' + ICON_PHONE + T("fabCall") + '</a>' +
        '</div>' : '') +
        '<button type="button" class="fab-main" aria-expanded="' + Fab.openState + '" aria-label="' + T("fab") + '">' + ICON_CHAT + '</button>';
    }
  };

  /* ---------- Private stats panel (tap the footer 5 times) ---------- */
  var Stats = {
    taps: [], el: null,
    tap: function(){
      var now = Date.now();
      Stats.taps = Stats.taps.filter(function(t){ return now - t < 3000; });
      Stats.taps.push(now);
      if (Stats.taps.length >= 5) { Stats.taps = []; Stats.open(); }
    },
    keys: function(){
      return [["statsAll", "views"], ["statsToday", todayKey()], ["statsHome", "page-home"], ["statsMenu", "page-menu"], ["statsInfo", "page-info"],
              ["statsWA", "tap-wa"], ["statsHS", "tap-hs"], ["statsCall", "tap-call"], ["statsDir", "tap-dir"]];
    },
    open: function(){
      if (!Stats.el) {
        Stats.el = document.createElement("div");
        Stats.el.className = "sheet-wrap";
        Stats.el.addEventListener("click", function(e){
          if (e.target === Stats.el || e.target.closest("[data-close]")) Stats.close();
        });
        Stats.el.addEventListener("change", function(e){
          if (e.target.id !== "noCount") return;
          try { localStorage.setItem("lamma-nocount", e.target.checked ? "1" : "0"); } catch (err) {}
        });
        document.body.appendChild(Stats.el);
      }
      var me = false;
      try { me = localStorage.getItem("lamma-nocount") === "1"; } catch (e) {}
      Stats.el.hidden = false;
      document.documentElement.classList.add("no-scroll");
      Stats.el.innerHTML = '<div class="sheet stats" role="dialog" aria-modal="true" aria-labelledby="statsTitle"><div class="sheet-body">' +
        '<div class="lead"><h2 id="statsTitle">' + T("statsTitle") + '</h2><span class="dots" aria-hidden="true" style="visibility:hidden"></span>' +
        '<button type="button" class="opt" data-close>' + T("close") + '</button></div>' +
        Stats.keys().map(function(k){
          return '<div class="kv-row">' + leader('<span class="k">' + T(k[0]) + '</span>', '<span class="v" data-stat="' + k[1] + '">…</span>') + '</div>';
        }).join("") +
        '<label><input type="checkbox" id="noCount"' + (me ? " checked" : "") + '> ' + T("statsMe") + '</label>' +
        '<p class="stats-note">' + T("statsNote") + '</p></div></div>';
      Stats.el.querySelector("[data-close]").focus();
      Stats.keys().forEach(function(k){
        fetch("https://abacus.jasoncameron.dev/get/" + COUNTER.ns + "/" + k[1])
          .then(function(r){ return r.json(); })
          .then(function(d){ Stats.show(k[1], typeof d.value === "number" ? d.value : 0); })
          .catch(function(){ Stats.show(k[1], null); });
      });
    },
    show: function(key, v){
      var el = Stats.el && Stats.el.querySelector('[data-stat="' + key + '"]');
      if (el) el.textContent = v === null ? T("statsErr") : v.toLocaleString(lang === "ar" ? "ar-SA-u-nu-latn" : "en");
    },
    close: function(){
      Stats.el.hidden = true;
      document.documentElement.classList.remove("no-scroll");
    }
  };

  /* ---------- Dark mode: follows the phone unless the moon button picked one ---------- */
  function toggleTheme(){
    var root = document.documentElement, cur = root.getAttribute("data-theme");
    var dark = cur ? cur === "dark" : (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    var next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("lamma-theme", next); } catch (e) {}
  }

  /* ---------- Wiring ---------- */
  var P = { home: Home, menu: Menu, info: Info }[page] || Home;

  document.addEventListener("click", function(e){
    if (e.target.closest("[data-theme-btn]")) { toggleTheme(); return; }
    if (e.target.closest(".foot")) { Stats.tap(); return; }
    var t = e.target.closest("[data-track],[data-hs],[data-dir]");
    if (t) count("tap-" + (t.getAttribute("data-track") || (t.hasAttribute("data-hs") ? "hs" : "dir")).replace("fabwa", "wa"));
    if (!e.target.closest("[data-lang]")) return;
    lang = lang === "ar" ? "en" : "ar";
    saveLang();
    renderCommon();
    P.render();
    if (Sheet.el && !Sheet.el.hidden) Sheet.draw();
  });

  renderCommon();
  if (P.init) P.init();
  P.render();
  if (P.afterFirstRender) P.afterFirstRender();

  count("views"); count(todayKey()); count("page-" + page);

  /* Works offline and can be added to the home screen */
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    window.addEventListener("load", function(){ navigator.serviceWorker.register("sw.js").catch(function(){}); });
  }
})();
