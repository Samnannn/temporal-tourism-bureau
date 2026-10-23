/* Era dossier: populate the page from ?era=, defaulting to the Mughal court. */
(function () {
  "use strict";

  if (!window.TTB) return;
  var eras = TTB.eras;
  var slug = new URLSearchParams(window.location.search).get("era");
  var era = TTB.getEra(slug) || eras[0];
  var badges = {
    low: "badge--low",
    moderate: "badge--moderate",
    high: "badge--high",
    extreme: "badge--extreme",
    none: "badge--none"
  };

  function set(key, value) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-e="' + key + '"]'), function (el) {
      el.textContent = value;
    });
  }

  function setHTML(key, value) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-e="' + key + '"]'), function (el) {
      el.innerHTML = value;
    });
  }

  if (slug) {
    document.title = era.name + " — Temporal Tourism Bureau";
  }

  set("crumb", era.name);
  set("yearline", "Era " + era.no + " · " + era.yearLong + " · " + era.place);
  set("name", era.name);
  set("tagline", era.tagline);
  set("dossierRef", "Dossier TT/" + era.no);
  set("passRef", "TT / " + era.no);
  set("plate", era.plate);
  set("coordLine", era.coords + " · From the Bureau archive");
  set("climate", era.climate);
  set("hazard", era.hazard);
  set("paradox", era.paradox);
  set("language", era.language);
  set("duration", era.duration);
  set("guide", era.guide);
  set("coords", era.coords);
  set("price", TTB.money(era.price));
  set("ctaLabel", "Era " + era.no + " · from " + TTB.money(era.price));
  set("noteText", "“" + era.note.text + "”");
  set("noteAuthor", era.note.author);
  set("noteRole", era.note.role);

  var img = document.querySelector('[data-e="img"]');
  if (img) { img.src = era.img; img.alt = era.alt; }

  var hz = document.querySelector('[data-e="hazardBadge"]');
  if (hz) { hz.className = "badge " + badges[era.hazardKey]; hz.textContent = "Hazard " + era.hazard.toLowerCase(); }
  var px = document.querySelector('[data-e="paradoxBadge"]');
  if (px) { px.className = "badge " + badges[era.paradoxKey]; px.textContent = "Paradox " + era.paradox.toLowerCase(); }

  setHTML("overview", '<h2 class="sr">Overview</h2><p class="lead-p">' + era.long[0] + "</p><p>" + era.long[1] + "</p>");

  setHTML("sights", era.sights.map(function (s, i) {
    return '<li data-n="0' + (i + 1) + '"><b>' + s.t + "</b><span>" + s.d + "</span></li>";
  }).join(""));

  setHTML("itinerary", era.itinerary.map(function (d) {
    return '<div class="itin-day"><h4>' + d.d + "</h4><p>" + d.t + "</p></div>";
  }).join(""));

  setHTML("bring", era.bring.map(function (b) {
    return "<li>" + b + "</li>";
  }).join(""));

  setHTML("notPermitted", era.notPermitted.map(function (n) {
    return "<li>" + n + "</li>";
  }).join(""));

  Array.prototype.forEach.call(document.querySelectorAll('[data-e="bookLink"], [data-e="bookLink2"]'), function (a) {
    a.setAttribute("href", "booking.html?era=" + era.id);
  });

  var idx = eras.indexOf(era);
  var prev = eras[(idx - 1 + eras.length) % eras.length];
  var next = eras[(idx + 1) % eras.length];
  setHTML("adjacent",
    '<a href="era.html?era=' + prev.id + '"><span class="label">← Previous era · ' + prev.no + "</span><b>" + prev.name + "</b></a>" +
    '<a href="era.html?era=' + next.id + '" style="text-align:right"><span class="label">Next era · ' + next.no + " →</span><b>" + next.name + "</b></a>"
  );

  var meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", "Era dossier " + era.no + ". " + era.place + ", " + era.yearLong + ". " + era.tagline);
})();
