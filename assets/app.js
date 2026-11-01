(function(){
  "use strict";

  /* ---------- Text in both languages ---------- */
  var I18N = {
    ar: {
      demo: "نسخة تجريبية للعرض. الاسم والأسعار والمعلومات للتوضيح فقط.",
      langBtn: "English",
      brand: "فرن الحارة",
      tagline: "فطائر مصرية على الصاج",
      openNow: "مفتوح الآن",
      closedNow: "مغلق الآن",
      closes: "يغلق",
      opens: "يفتح",
      seeMenu: "شوف المنيو",
      hoursAddress: "الأوقات والعنوان",
      featureNote: "على الطريقة المصرية، ينخبز وقت ما تطلب.",
      seeOnMenu: "شوف الفطائر الحلوة",
      orderHS: "اطلب عبر هنقرستيشن",
      orderHSNote: "التوصيل عن طريق تطبيق هنقرستيشن.",
      menuTitle: "المنيو",
      visitTitle: "زورونا",
      todayL: "اليوم",
      itemsFrom: "من",
      navHome: "الرئيسية",
      navMenu: "المنيو",
      navInfo: "المعلومات",
      searchPh: "ابحث في المنيو",
      noResults: "ما فيه نتائج لـ",
      cats: { savory: "فطائر مالحة", sweet: "فطائر حلوة", crepes: "كريب", drinks: "مشروبات" },
      egyptian: "مصري",
      hoursTitle: "أوقات العمل",
      today: "اليوم",
      days: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
      contactTitle: "التواصل",
      addressL: "العنوان",
      addressV: "يُضاف عنوان المحل هنا",
      phoneL: "الهاتف",
      phoneV: "يُضاف رقم المحل هنا",
      aboutTitle: "عن المطعم",
      aboutText: "فطائر ومشلتت وكريب تنخبز طازجة على الصاج طول اليوم، بحشوات سخية. (نص تجريبي، يُستبدل بوصف المطعم)",
      footer: "نسخة تجريبية من تصميم أحمد"
    },
    en: {
      demo: "Demo site. The name, prices and details are examples.",
      langBtn: "عربي",
      brand: "Hara Bakehouse",
      tagline: "Egyptian feteer off the sajj",
      openNow: "Open now",
      closedNow: "Closed now",
      closes: "closes",
      opens: "opens",
      seeMenu: "See the menu",
      hoursAddress: "Hours & address",
      featureNote: "Egyptian style, baked when you order.",
      seeOnMenu: "See the sweet feteer",
      orderHS: "Order on HungerStation",
      orderHSNote: "Delivery is handled by the HungerStation app.",
      menuTitle: "The menu",
      visitTitle: "Visit us",
      todayL: "Today",
      itemsFrom: "from",
      navHome: "Home",
      navMenu: "Menu",
      navInfo: "Info",
      searchPh: "Search the menu",
      noResults: "No results for",
      cats: { savory: "Savory feteer", sweet: "Sweet feteer", crepes: "Crepes", drinks: "Drinks" },
      egyptian: "Egyptian",
      hoursTitle: "Opening hours",
      today: "Today",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      contactTitle: "Contact",
      addressL: "Address",
      addressV: "Shop address goes here",
      phoneL: "Phone",
      phoneV: "Shop number goes here",
      aboutTitle: "About us",
      aboutText: "Feteer, meshaltet and crepes baked fresh on the sajj all day, with generous fillings. (Sample text, to be replaced with the shop's own.)",
      footer: "Demo designed by Ahmad"
    }
  };

  /* ---------- Menu (sample items and prices) ---------- */
  var MENU = [
    { id: "savory", items: [
      { id: "s1", price: 12, ar: ["جبنة", "عكاوي وموزاريلا"], en: ["Cheese", "Akkawi and mozzarella"] },
      { id: "s2", price: 8,  ar: ["زعتر وزيت", "زعتر بلدي وزيت زيتون"], en: ["Zaatar & oil", "Thyme blend and olive oil"] },
      { id: "s3", price: 18, ar: ["لحم مفروم", "لحم متبّل مع بصل وطماطم"], en: ["Minced meat", "Spiced beef with onion and tomato"] },
      { id: "s4", price: 16, ar: ["سجق", "سجق حار مع جبنة"], en: ["Sujuk", "Spicy sujuk with cheese"] },
      { id: "s5", price: 14, ar: ["بيض وجبنة", "بيض مخفوق وجبنة بيضاء"], en: ["Egg & cheese", "Scrambled egg and white cheese"] },
      { id: "s6", price: 20, ar: ["مشكّل", "لحم وسجق وجبنة وخضار"], en: ["Mixed", "Meat, sujuk, cheese and vegetables"] }
    ]},
    { id: "sweet", items: [
      { id: "w1", price: 22, tag: true, ar: ["مشلتت", "طبقات بالسمن، مع عسل وقشطة"], en: ["Meshaltet", "Flaky ghee layers with honey and cream"] },
      { id: "w2", price: 15, ar: ["عسل وقشطة", "قشطة طازجة وعسل"], en: ["Honey & qashta", "Fresh clotted cream and honey"] },
      { id: "w3", price: 14, ar: ["شوكولاتة", "شوكولاتة ذائبة ومكسرات"], en: ["Chocolate", "Melted chocolate and nuts"] },
      { id: "w4", price: 10, ar: ["سكر وسمن", "الطعم الكلاسيكي"], en: ["Sugar & ghee", "The classic"] }
    ]},
    { id: "crepes", items: [
      { id: "c1", price: 18, ar: ["كريب دجاج", "دجاج وفطر وصوص أبيض"], en: ["Chicken crepe", "Chicken, mushroom and white sauce"] },
      { id: "c2", price: 14, ar: ["كريب بطاطس وجبنة", "بطاطس مقرمشة وشيدر"], en: ["Potato & cheese crepe", "Crispy potato and cheddar"] },
      { id: "c3", price: 16, ar: ["كريب شوكولاتة وموز", "موز طازج وشوكولاتة"], en: ["Chocolate & banana crepe", "Fresh banana and chocolate"] },
      { id: "c4", price: 15, ar: ["كريب كراميل", "كراميل مملح وفتات بسكويت"], en: ["Caramel crepe", "Salted caramel and biscuit crumbs"] }
    ]},
    { id: "drinks", items: [
      { id: "d1", price: 5,  ar: ["شاي كرك", "حليب وهيل"], en: ["Karak tea", "Milk and cardamom"] },
      { id: "d2", price: 6,  ar: ["قهوة عربية", "دلة صغيرة"], en: ["Arabic coffee", "Small dallah"] },
      { id: "d3", price: 10, ar: ["ليمون ونعناع", "طازج ومثلج"], en: ["Lemon mint", "Fresh and iced"] },
      { id: "d4", price: 9,  ar: ["سحلب", "سحلب سخن بالقرفة"], en: ["Sahlab", "Warm sahlab with cinnamon"] }
    ]}
  ];

  /* Opening hours by weekday (0 = Sunday). Hours past 24 run into the next morning: 26 = 2am. */
  var HOURS = [
    { o: 7, c: 26 }, { o: 7, c: 26 }, { o: 7, c: 26 }, { o: 7, c: 26 },
    { o: 7, c: 26 }, { o: 13, c: 26 }, { o: 7, c: 26 }
  ];

  /* The shop's HungerStation page, one link per language (opens in a new tab). */
  var HUNGERSTATION = {
    ar: "https://hungerstation.com/sa-ar/restaurants/regions/%D8%A7%D9%84%D9%86%D8%B9%D9%8A%D8%B1%D9%8A%D8%A9/%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D8%A9/%D9%81%D8%B7%D8%A7%D8%A6%D8%B1-%D9%84%D9%85%D8%A9-180411",
    en: "https://hungerstation.com/sa-en/restaurants/regions/alnuayreayh/industrial/lamma-pies-180411"
  };

  var ALL = {};
  MENU.forEach(function(c){ c.items.forEach(function(i){ ALL[i.id] = i; }); });

  /* ---------- Saved language (this browser only) ---------- */
  var page = document.body.getAttribute("data-page") || "home";
  var lang = "ar";
  try { var saved = localStorage.getItem("hb-lang"); if (saved === '"en"' || saved === "en") lang = "en"; } catch (e) {}
  function saveLang(){ try { localStorage.setItem("hb-lang", lang); } catch (e) {} }

  /* ---------- Helpers ---------- */
  function $(id){ return document.getElementById(id); }
  function T(k){ return I18N[lang][k]; }
  function money(n){ return lang === "ar" ? n + " ر.س" : "SAR " + n; }
  function nm(i){ return i[lang][0]; }
  function ds(i){ return i[lang][1]; }
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
  function hoursRange(h){ return fmtHour(h.o) + " – " + fmtHour(h.c); }
  function openState(){
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
      if (typeof v === "string") el.textContent = v;
    });
    document.querySelectorAll("[data-ph]").forEach(function(el){
      var v = T(el.getAttribute("data-ph"));
      el.placeholder = v;
      el.setAttribute("aria-label", v);
    });
    document.querySelectorAll("[data-hs]").forEach(function(a){ a.href = HUNGERSTATION[lang]; });
    document.querySelectorAll("[data-nav]").forEach(function(a){
      if (a.getAttribute("data-nav") === page) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    var s = openState(), sep = lang === "ar" ? "، " : ", ";
    var line = (s.open ? T("openNow") : T("closedNow")) + sep + (s.open ? T("closes") : T("opens")) + " " + fmtHour(s.at);
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
      var f = ALL.w1, cats = T("cats");
      document.querySelector("[data-feat-name]").textContent = nm(f);
      document.querySelector("[data-feat-price]").textContent = money(f.price);
      document.querySelector("[data-feat-desc]").textContent = ds(f) + ".";
      $("catRows").innerHTML = MENU.map(function(c){
        var min = Math.min.apply(null, c.items.map(function(i){ return i.price; }));
        return '<a class="cat-row" href="menu.html#' + c.id + '">' +
          leader('<strong>' + cats[c.id] + '</strong>', '<span class="meta">' + itemsCount(c.items.length) + (lang === "ar" ? "، " : ", ") + T("itemsFrom") + ' ' + money(min) + '</span>') +
        '</a>';
      }).join("");
      $("visitRows").innerHTML =
        '<div class="visit-row">' + leader('<span class="k">' + T("todayL") + '</span>', '<span class="v">' + hoursRange(HOURS[new Date().getDay()]) + '</span>') + '</div>' +
        '<div class="visit-row">' + leader('<span class="k">' + T("addressL") + '</span>', '<span class="v">' + T("addressV") + '</span>') + '</div>';
    }
  };

  /* ---------- Menu ---------- */
  var Menu = {
    active: MENU[0].id, io: null, lock: false, timer: null,
    init: function(){
      $("search").addEventListener("input", Menu.applySearch);
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
    render: function(){
      var cats = T("cats");
      $("tabsInner").innerHTML = MENU.map(function(c){
        return '<button type="button" class="tab" data-tab="' + c.id + '" aria-current="' + (c.id === Menu.active) + '">' + cats[c.id] + '</button>';
      }).join("");
      $("menu").innerHTML = MENU.map(function(c){
        return '<section class="menu-section pad" id="sec-' + c.id + '" data-sec="' + c.id + '"><h2>' + cats[c.id] + '</h2>' +
          c.items.map(function(i){
            var hay = (i.ar.join(" ") + " " + i.en.join(" ")).toLowerCase();
            return '<div class="item" data-row="' + i.id + '" data-search="' + hay + '">' +
              leader('<h3>' + nm(i) + (i.tag ? '<span class="tag">' + T("egyptian") + '</span>' : '') + '</h3>', '<span class="price">' + money(i.price) + '</span>') +
              '<p class="desc">' + ds(i) + '</p></div>';
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
          var ok = !q || r.getAttribute("data-search").indexOf(q) > -1;
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
      $("kvRows").innerHTML = [["addressL", "addressV"], ["phoneL", "phoneV"]].map(function(p){
        return '<div class="kv-row">' + leader('<span class="k">' + T(p[0]) + '</span>', '<span class="v">' + T(p[1]) + '</span>') + '</div>';
      }).join("");
    }
  };

  /* ---------- Wiring ---------- */
  var P = { home: Home, menu: Menu, info: Info }[page] || Home;

  document.addEventListener("click", function(e){
    if (!e.target.closest("[data-lang]")) return;
    lang = lang === "ar" ? "en" : "ar";
    saveLang();
    renderCommon();
    P.render();
  });

  renderCommon();
  if (P.init) P.init();
  P.render();
  if (P.afterFirstRender) P.afterFirstRender();
})();
