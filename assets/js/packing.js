/* Era-aware packing checklist with a live manifest. */
(function () {
  "use strict";

  if (!window.TTB || !document.querySelector("[data-pack-era]")) return;

  var eras = TTB.eras;
  var select = document.querySelector("[data-pack-era]");
  var itemsWrap = document.querySelector("[data-era-items]");
  var bansWrap = document.querySelector("[data-era-bans]");
  var eraHead = document.querySelector("[data-era-head]");
  var eraName = document.querySelector("[data-era-name]");
  var eraCount = document.querySelector("[data-era-count]");
  var climate = document.querySelector("[data-pack-climate]");

  var param = new URLSearchParams(location.search).get("era");
  var selected = param && TTB.getEra(param) ? param : "mughal";

  select.innerHTML = eras.map(function (e) {
    return '<option value="' + e.id + '">' + e.name + " · " + e.year + "</option>";
  }).join("");
  select.value = selected;

  function renderEra() {
    var era = TTB.getEra(selected) || eras[0];
    itemsWrap.innerHTML = era.bring.map(function (item) {
      return '<label class="pack-item">' +
        '<input type="checkbox" data-pack>' +
        '<span class="pack-item__txt">' +
        '<span class="pack-item__name">' + item + "</span>" +
        '<span class="pack-item__note">Required for ' + era.name + ", " + era.year + ". Confirmed at the briefing.</span>" +
        "</span></label>";
    }).join("");
    bansWrap.innerHTML = era.notPermitted.map(function (item) {
      return "<li>" + item + "</li>";
    }).join("");
    eraHead.textContent = "Particular to " + era.year;
    eraName.textContent = era.year;
    eraCount.textContent = era.bring.length + (era.bring.length === 1 ? " item" : " items");
    climate.textContent = era.climate;
    update();
  }

  function update() {
    var boxes = Array.prototype.slice.call(document.querySelectorAll("input[data-pack]"));
    var done = boxes.filter(function (b) { return b.checked; }).length;
    var total = boxes.length;
    var pct = total ? Math.round((done / total) * 100) : 0;

    document.querySelector("[data-pack-count]").textContent = done + " of " + total + " checked";
    document.querySelector("[data-pack-pct]").textContent = pct + "%";
    document.querySelector("[data-pack-bar]").style.width = pct + "%";

    var note;
    if (!done) note = "Nothing checked. The Bureau kit is already at the desk, which is most of it.";
    else if (pct === 100) note = "Complete. Present this list at the corridor desk; the officer will pretend to check it.";
    else if (pct >= 60) note = "Nearly. The letter and the name are the two people forget.";
    else note = "A start. The photograph and the pencil matter more than they look.";
    document.querySelector("[data-pack-note]").textContent = note;
  }

  document.addEventListener("change", function (e) {
    if (e.target.matches("input[data-pack]")) update();
  });

  select.addEventListener("change", function () {
    selected = select.value;
    renderEra();
  });

  document.querySelector("[data-pack-all]").addEventListener("click", function () {
    document.querySelectorAll("input[data-pack]").forEach(function (b) { b.checked = true; });
    update();
  });

  document.querySelector("[data-pack-clear]").addEventListener("click", function () {
    document.querySelectorAll("input[data-pack]").forEach(function (b) { b.checked = false; });
    update();
  });

  var printBtn = document.querySelector("[data-print-list]");
  if (printBtn) printBtn.addEventListener("click", function () { window.print(); });

  renderEra();
})();
