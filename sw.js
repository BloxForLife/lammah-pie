/* Offline support for the Lamma Pies site.
   Always asks the network first, so updates show up right away, and saves a copy of what it gets.
   With no internet it falls back to the saved copy. Nothing here needs bumping when the site changes. */
var CACHE = "lamma-v1";
var CORE = ["./", "menu", "info", "assets/style.css", "assets/app.js", "assets/logo.png", "assets/icon-192.png", "manifest.webmanifest"];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(CORE); }).then(function(){ return self.skipWaiting(); }));
});

self.addEventListener("activate", function(e){
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  var fonts = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (url.origin !== self.location.origin && !fonts) return;
  e.respondWith(
    fetch(req).then(function(res){
      if (res.ok || res.type === "opaque") {
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(req, copy); });
      }
      return res;
    }).catch(function(){
      return caches.match(req)
        .then(function(hit){ return hit || caches.match(req, { ignoreSearch: true }); })
        .then(function(hit){ return hit || (req.mode === "navigate" ? caches.match("./") : null); })
        .then(function(hit){ return hit || Response.error(); });
    })
  );
});
