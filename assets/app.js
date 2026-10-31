(function(){
  "use strict";

  /* ---------- Text in both languages ---------- */
  var I18N = {
    ar: {
      demo: "نسخة تجريبية للعرض. الاسم والأسعار والمعلومات للتوضيح فقط.",
      langBtn: "English",
      brand: "فرن الحارة",
      tagline: "فطائر مصرية على الصاج",
      featureNote: "على الطريقة المصرية، ينخبز وقت ما تطلب.",
      addToCart: "أضف للسلة",
      menuTitle: "المنيو",
      visitTitle: "زورونا",
      hoursAddress: "الأوقات والعنوان",
      todayL: "اليوم",
      itemsFrom: "من",
      openNow: "مفتوح الآن",
      closedNow: "مغلق الآن",
      closes: "يغلق",
      opens: "يفتح",
      orderNow: "اطلب الآن",
      storeInfo: "معلومات المطعم",
      picks: "مقترحاتنا",
      seeAll: "المنيو كامل",
      categories: "الأقسام",
      navHome: "الرئيسية",
      navMenu: "المنيو",
      navCart: "السلة",
      navInfo: "المعلومات",
      searchPh: "ابحث في المنيو",
      noResults: "ما فيه نتائج لـ",
      cats: { savory: "فطائر مالحة", sweet: "فطائر حلوة", crepes: "كريب", drinks: "مشروبات" },
      egyptian: "مصري",
      add: "أضف",
      remove: "أنقص",
      viewCart: "عرض السلة",
      emptyCart: "سلتك فاضية",
      emptyCartSub: "أضف أصناف من المنيو وبتلقاها هنا.",
      browseMenu: "تصفح المنيو",
      orderType: "نوع الطلب",
      pickup: "استلام من المحل",
      delivery: "توصيل",
      notesL: "ملاحظات على الطلب",
      notesPh: "مثال: بدون بصل، زيادة جبنة",
      itemsLabel: "عدد الأصناف",
      total: "المجموع",
      send: "إرسال الطلب عبر واتساب",
      sendNote: "نسخة تجريبية: في الموقع الحقيقي، هذا الزر يفتح واتساب على رقم المحل والطلب مكتوب.",
      preview: "معاينة رسالة واتساب",
      copy: "نسخ الرسالة",
      copied: "تم نسخ الرسالة.",
      copyFail: "حدد النص وانسخه يدوياً.",
      clear: "إفراغ السلة",
      greeting: "السلام عليكم، حاب أطلب:",
      notesLine: "ملاحظات",
      hoursTitle: "أوقات العمل",
      today: "اليوم",
      days: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
      contactTitle: "التواصل والطلب",
      addressL: "العنوان",
      addressV: "يُضاف عنوان المحل هنا",
      phoneL: "الهاتف",
      phoneV: "يُضاف رقم المحل هنا",
      orderL: "طرق الطلب",
      orderV: "استلام من المحل أو توصيل",
      payL: "الدفع",
      payV: "كاش أو شبكة",
      aboutTitle: "عن المطعم",
      aboutText: "فطائر ومشلتت وكريب تنخبز طازجة على الصاج طول اليوم، بحشوات سخية. (نص تجريبي، يُستبدل بوصف المطعم)",
      footer: "نسخة تجريبية من تصميم Blox"
    },
    en: {
      demo: "Demo site. The name, prices and details are examples.",
      langBtn: "عربي",
      brand: "Hara Bakehouse",
      tagline: "Egyptian feteer off the sajj",
      featureNote: "Egyptian style, baked when you order.",
      addToCart: "Add to cart",
      menuTitle: "The menu",
      visitTitle: "Visit us",
      hoursAddress: "Hours & address",
      todayL: "Today",
      itemsFrom: "from",
      openNow: "Open now",
      closedNow: "Closed now",
      closes: "Closes",
      opens: "Opens",
      orderNow: "Order now",
      storeInfo: "Store info",
      picks: "Our picks",
      seeAll: "Full menu",
      categories: "Categories",
      navHome: "Home",
      navMenu: "Menu",
      navCart: "Cart",
      navInfo: "Info",
      searchPh: "Search the menu",
      noResults: "No results for",
      cats: { savory: "Savory feteer", sweet: "Sweet feteer", crepes: "Crepes", drinks: "Drinks" },
      egyptian: "Egyptian",
      add: "Add",
      remove: "Remove one",
      viewCart: "View cart",
      emptyCart: "Your cart is empty",
      emptyCartSub: "Add items from the menu and they'll show up here.",
      browseMenu: "Browse the menu",
      orderType: "Order type",
      pickup: "Pickup",
      delivery: "Delivery",
      notesL: "Order notes",
      notesPh: "e.g. no onions, extra cheese",
      itemsLabel: "Items",
      total: "Total",
      send: "Send order on WhatsApp",
      sendNote: "Demo: on the real site, this button opens WhatsApp to the shop's number with the order filled in.",
      preview: "Preview WhatsApp message",
      copy: "Copy message",
      copied: "Message copied.",
      copyFail: "Select the text and copy it manually.",
      clear: "Empty cart",
      greeting: "Hi, I'd like to order:",
      notesLine: "Notes",
      hoursTitle: "Opening hours",
      today: "Today",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      contactTitle: "Contact & ordering",
      addressL: "Address",
      addressV: "Shop address goes here",
      phoneL: "Phone",
      phoneV: "Shop number goes here",
      orderL: "Ordering",
      orderV: "Pickup or delivery",
      payL: "Payment",
      payV: "Cash or card",
      aboutTitle: "About us",
      aboutText: "Feteer, meshaltet and crepes baked fresh on the sajj all day, with generous fillings. (Sample text, to be replaced with the shop's own.)",
      footer: "Demo designed by Blox"
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

  var ALL = {}, CAT_OF = {};
  MENU.forEach(function(c){ c.items.forEach(function(i){ ALL[i.id] = i; CAT_OF[i.id] = c.id; }); });

  /* ---------- Saved state (this browser only) ---------- */
  function load(k, d){ try { var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }
  function save(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  var page = document.body.getAttribute("data-page") || "home";
  var lang = load("hb-lang", "ar");
  if (lang !== "ar" && lang !== "en") lang = "ar";
  var cart = load("hb-cart", {});
  if (!cart || typeof cart !== "object") cart = {};
  Object.keys(cart).forEach(function(id){
    var q = Math.floor(Number(cart[id]));
    if (!ALL[id] || !(q > 0)) delete cart[id]; else cart[id] = Math.min(99, q);
  });
  var order = load("hb-order", { type: "pickup", notes: "" });
  if (!order || typeof order !== "object") order = {};
  if (order.type !== "pickup" && order.type !== "delivery") order.type = "pickup";
  if (typeof order.notes !== "string") order.notes = "";

  /* ---------- Helpers ---------- */
  function $(id){ return document.getElementById(id); }
  function T(k){ return I18N[lang][k]; }
  function money(n){ return lang === "ar" ? n + " ر.س" : "SAR " + n; }
  function nm(i){ return i[lang][0]; }
  function ds(i){ return i[lang][1]; }
  function ids(){ return Object.keys(cart).filter(function(id){ return cart[id] > 0; }); }
  function count(){ return ids().reduce(function(a, id){ return a + cart[id]; }, 0); }
  function total(){ return ids().reduce(function(s, id){ return s + cart[id] * ALL[id].price; }, 0); }
  function itemsCount(n){ return lang === "ar" ? n + " أصناف" : n + " items"; }
  function reduced(){ return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; }

  function fmtHour(h){
    h = h % 24;
    var h12 = h % 12 || 12;
    return lang === "ar" ? h12 + (h < 12 ? " ص" : " م") : h12 + (h < 12 ? "am" : "pm");
  }
  function openState(){
    var now = new Date(), d = now.getDay(), m = now.getHours() + now.getMinutes() / 60;
    var t = HOURS[d], y = HOURS[(d + 6) % 7];
    if (m >= t.o && m < t.c) return { open: true, at: t.c };
    if (m + 24 < y.c) return { open: true, at: y.c };
    return { open: false, at: m < t.o ? t.o : HOURS[(d + 1) % 7].o };
  }

  function addHTML(i, wide){
    var q = cart[i.id] || 0;
    if (!q && wide) return '<button type="button" class="btn btn-primary add-wide" data-act="inc" data-id="' + i.id + '">' + T("addToCart") + '</button>';
    if (!q) return '<button type="button" class="add-btn" data-act="inc" data-id="' + i.id + '" aria-label="' + T("add") + ': ' + nm(i) + '">+</button>';
    return '<div class="stepper">' +
      '<button type="button" data-act="dec" data-id="' + i.id + '" aria-label="' + T("remove") + ': ' + nm(i) + '">−</button>' +
      '<span>' + q + '</span>' +
      '<button type="button" data-act="inc" data-id="' + i.id + '" aria-label="' + T("add") + ': ' + nm(i) + '">+</button>' +
    '</div>';
  }
  function refreshAdd(id, act, box){
    document.querySelectorAll('[data-add="' + id + '"]').forEach(function(el){ el.innerHTML = addHTML(ALL[id], el.hasAttribute("data-wide")); });
    if (box) {
      var f = box.querySelector('[data-act="' + act + '"]') || box.querySelector('[data-act="inc"]');
      if (f) f.focus({ preventScroll: true });
    }
  }
  function leader(left, right){
    return '<div class="lead">' + left + '<span class="dots" aria-hidden="true"></span>' + right + '</div>';
  }

  /* ---------- Shared parts of every page ---------- */
  var TITLES = { menu: "navMenu", cart: "navCart", info: "navInfo" };
  function renderBadge(){
    var b = $("navBadge");
    if (!b) return;
    var n = count();
    b.hidden = !n;
    b.textContent = n > 99 ? "99+" : n;
  }
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
    document.querySelectorAll("[data-nav]").forEach(function(a){
      if (a.getAttribute("data-nav") === page) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    var s = openState(), sep = lang === "ar" ? "، " : ", ";
    var line = (s.open ? T("openNow") : T("closedNow")) + sep + (s.open ? T("closes") : T("opens")).toLowerCase() + " " + fmtHour(s.at);
    document.querySelectorAll("[data-statusline]").forEach(function(el){
      el.classList.toggle("is-open", s.open);
      var t = el.querySelector("[data-status-text]");
      if (t) t.textContent = line;
    });
    document.title = (TITLES[page] ? T(TITLES[page]) + " · " : "") + T("brand");
    renderBadge();
  }

  /* ---------- Home ---------- */
  var Home = {
    render: function(){
      var f = ALL.w1, cats = T("cats");
      document.querySelector("[data-feat-name]").textContent = nm(f);
      document.querySelector("[data-feat-price]").textContent = money(f.price);
      document.querySelector("[data-feat-desc]").textContent = ds(f) + ".";
      document.querySelector('[data-add="w1"]').innerHTML = addHTML(f, true);
      $("catRows").innerHTML = MENU.map(function(c){
        var min = Math.min.apply(null, c.items.map(function(i){ return i.price; }));
        return '<a class="cat-row" href="menu.html#' + c.id + '">' +
          leader('<strong>' + cats[c.id] + '</strong>', '<span class="meta">' + itemsCount(c.items.length) + (lang === "ar" ? "، " : ", ") + T("itemsFrom") + ' ' + money(min) + '</span>') +
        '</a>';
      }).join("");
      var h = HOURS[new Date().getDay()];
      $("visitRows").innerHTML =
        '<div class="visit-row">' + leader('<span class="k">' + T("todayL") + '</span>', '<span class="v">' + fmtHour(h.o) + ' – ' + fmtHour(h.c) + '</span>') + '</div>' +
        '<div class="visit-row">' + leader('<span class="k">' + T("addressL") + '</span>', '<span class="v">' + T("addressV") + '</span>') + '</div>' +
        '<div class="visit-row">' + leader('<span class="k">' + T("orderL") + '</span>', '<span class="v">' + T("orderV") + '</span>') + '</div>';
    },
    onCart: function(id, act, box){ refreshAdd(id, act, box); }
  };

  /* ---------- Menu ---------- */
  var Menu = {
    active: MENU[0].id, io: null, lock: false, timer: null,
    init: function(){
      $("search").addEventListener("input", Menu.applySearch);
      $("tabsInner").addEventListener("click", function(e){
        var t = e.target.closest("[data-tab]");
        if (!t) return;
        Menu.go(t.getAttribute("data-tab"));
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
              '<div class="item-main">' +
                leader('<h3>' + nm(i) + (i.tag ? '<span class="tag">' + T("egyptian") + '</span>' : '') + '</h3>', '<span class="price">' + money(i.price) + '</span>') +
                '<p class="desc">' + ds(i) + '</p>' +
              '</div>' +
              '<div class="add" data-add="' + i.id + '">' + addHTML(i) + '</div></div>';
          }).join("") + '</section>';
      }).join("") + '<p class="empty pad" id="empty" hidden></p>';
      Menu.applySearch();
      Menu.observe();
      Menu.cartbar();
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
    cartbar: function(){
      var n = count();
      $("cartbar").hidden = !n;
      document.body.classList.toggle("has-cartbar", n > 0);
      $("cartCount").textContent = n;
      $("cartTotal").textContent = money(total());
    },
    onCart: function(id, act, box){ refreshAdd(id, act, box); Menu.cartbar(); },
    afterFirstRender: function(){
      var h = (location.hash || "").slice(1);
      if ($("sec-" + h)) setTimeout(function(){ Menu.go(h); }, 60);
    }
  };

  /* ---------- Cart ---------- */
  function message(){
    var lines = ids().map(function(id){
      var i = ALL[id];
      return cart[id] + " × " + nm(i) + " (" + money(cart[id] * i.price) + ")";
    });
    var out = [T("greeting")].concat(lines, ["", T("orderType") + ": " + T(order.type)]);
    if (order.notes.trim()) out.push(T("notesLine") + ": " + order.notes.trim());
    out.push(T("total") + ": " + money(total()));
    return out.join("\n");
  }
  var Cart = {
    init: function(){
      document.querySelectorAll("[data-type]").forEach(function(b){
        b.addEventListener("click", function(){
          order.type = b.getAttribute("data-type");
          save("hb-order", order);
          Cart.render();
        });
      });
      $("notes").addEventListener("input", function(){
        order.notes = $("notes").value;
        save("hb-order", order);
        $("msg").value = message();
      });
      $("sendBtn").addEventListener("click", function(){ Cart.toast(T("sendNote")); });
      $("clearBtn").addEventListener("click", function(){
        Object.keys(cart).forEach(function(k){ delete cart[k]; });
        save("hb-cart", cart);
        renderBadge();
        Cart.render();
      });
      $("copyBtn").addEventListener("click", function(){
        var txt = $("msg").value;
        function fallback(){ $("msg").focus(); $("msg").select(); Cart.toast(T("copyFail")); }
        try { navigator.clipboard.writeText(txt).then(function(){ Cart.toast(T("copied")); }, fallback); }
        catch (e) { fallback(); }
      });
    },
    toast: function(text){ var t = $("toast"); t.textContent = text; t.hidden = false; },
    render: function(){
      var list = ids(), empty = !list.length;
      $("cartEmpty").hidden = !empty;
      $("cartFull").hidden = empty;
      if (empty) return;
      $("cartItems").innerHTML = list.map(function(id){
        var i = ALL[id];
        return '<div class="cart-line"><div class="item-main">' +
          leader('<strong>' + nm(i) + '</strong><span class="qty-x">× ' + cart[id] + '</span>', '<span class="price">' + money(i.price * cart[id]) + '</span>') +
          '</div><div class="add" data-add="' + id + '">' + addHTML(i) + '</div></div>';
      }).join("");
      document.querySelectorAll("[data-type]").forEach(function(b){
        b.setAttribute("aria-pressed", b.getAttribute("data-type") === order.type ? "true" : "false");
      });
      if ($("notes").value !== order.notes) $("notes").value = order.notes;
      $("sumRows").innerHTML =
        '<div class="sum">' + leader('<span class="k">' + T("itemsLabel") + '</span>', '<span>' + count() + '</span>') + '</div>' +
        '<div class="sum-total">' + leader('<span>' + T("total") + '</span>', '<span class="price">' + money(total()) + '</span>') + '</div>';
      $("msg").value = message();
    },
    onCart: function(id, act){
      Cart.render();
      var f = document.querySelector('[data-add="' + id + '"] [data-act="' + act + '"]') || document.querySelector('[data-add="' + id + '"] [data-act="inc"]');
      if (f) f.focus({ preventScroll: true });
    }
  };

  /* ---------- Info ---------- */
  var Info = {
    render: function(){
      var today = new Date().getDay(), days = T("days");
      $("hours").innerHTML = HOURS.map(function(h, d){
        var isToday = d === today;
        return '<li' + (isToday ? ' class="today"' : '') + '>' +
          leader('<span>' + days[d] + (isToday ? '<span class="today-tag">' + T("today") + '</span>' : '') + '</span>', '<span>' + fmtHour(h.o) + ' – ' + fmtHour(h.c) + '</span>') +
        '</li>';
      }).join("");
      $("kvRows").innerHTML = [["addressL","addressV"],["phoneL","phoneV"],["orderL","orderV"],["payL","payV"]].map(function(p){
        return '<div class="kv-row">' + leader('<span class="k">' + T(p[0]) + '</span>', '<span class="v">' + T(p[1]) + '</span>') + '</div>';
      }).join("");
    }
  };

  /* ---------- Wiring ---------- */
  var P = { home: Home, menu: Menu, cart: Cart, info: Info }[page] || Home;

  document.addEventListener("click", function(e){
    if (e.target.closest("[data-lang]")) {
      lang = lang === "ar" ? "en" : "ar";
      save("hb-lang", lang);
      renderCommon();
      P.render();
      return;
    }
    var b = e.target.closest("[data-act]");
    if (!b) return;
    var id = b.getAttribute("data-id");
    if (!ALL[id]) return;
    var act = b.getAttribute("data-act");
    var box = b.closest("[data-add]");
    var q = (cart[id] || 0) + (act === "inc" ? 1 : -1);
    if (q > 0) cart[id] = Math.min(99, q); else delete cart[id];
    save("hb-cart", cart);
    renderBadge();
    if (P.onCart) P.onCart(id, act, box);
  });

  window.addEventListener("pageshow", function(e){
    if (!e.persisted) return;
    cart = load("hb-cart", {}) || {};
    renderCommon();
    P.render();
  });

  renderCommon();
  if (P.init) P.init();
  P.render();
  if (P.afterFirstRender) P.afterFirstRender();
})();
