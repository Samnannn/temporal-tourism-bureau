/* Four-step visa application with a live manifest. */
(function () {
  "use strict";

  if (!window.TTB || !document.querySelector("[data-era-choices]")) return;

  var eras = TTB.eras;
  var form = document.getElementById("visa-form");
  var confirmed = document.querySelector("[data-confirmed]");
  var panels = Array.prototype.slice.call(document.querySelectorAll("[data-step]"));
  var stepper = Array.prototype.slice.call(document.querySelectorAll(".stepper__item"));
  var backBtn = document.querySelector("[data-back]");
  var nextBtn = document.querySelector("[data-next]");
  var submitBtn = document.querySelector("[data-submit]");

  var CODES = {
    mughal: "AGR", alexandria: "ALX", cretaceous: "CRT", vienna: "VIE",
    hagia: "IST", quiet: "LIS", millennium: "NSR", firstautumn: "LVC"
  };
  var CLASSES = {
    standard: { label: "Standard", supp: 0 },
    corridor: { label: "Corridor window", supp: 240 },
    scholar: { label: "Scholar", supp: 180 },
    discreet: { label: "Discreet", supp: 1200 }
  };

  var current = 1;
  var selected = "mughal";
  var pax = 1;
  var cls = "standard";
  var insurance = false;

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* Era cards ------------------------------------------------------------- */
  var eraWrap = $("[data-era-choices]");
  eraWrap.innerHTML = eras.map(function (e) {
    return '<label class="choice' + (e.id === selected ? " is-selected" : "") + '">' +
      '<input type="radio" name="era" value="' + e.id + '"' + (e.id === selected ? " checked" : "") + '>' +
      '<span class="choice__name">' + e.name + "</span>" +
      '<span class="choice__meta">' + e.year + " · " + e.hazard + " hazard</span>" +
      '<span class="choice__desc">' + TTB.money(e.price) + " · " + e.duration + " · " + e.place + "</span>" +
      "</label>";
  }).join("");

  var param = new URLSearchParams(location.search).get("era");
  if (param && TTB.getEra(param)) {
    selected = param;
    $$("input[name=era]", eraWrap).forEach(function (r) { r.checked = r.value === selected; });
    refreshChoiceStates();
  }

  function refreshChoiceStates() {
    $$(".choice", eraWrap).forEach(function (card) {
      var input = $("input", card);
      card.classList.toggle("is-selected", input.checked);
    });
  }

  eraWrap.addEventListener("change", function (e) {
    if (e.target.name === "era") {
      selected = e.target.value;
      refreshChoiceStates();
      updateAll();
    }
  });

  /* Party & class --------------------------------------------------------- */
  var paxOut = $("[data-travellers]");
  $$("[data-count]").forEach(function (b) {
    b.addEventListener("click", function () {
      pax = Math.min(6, Math.max(1, pax + Number(b.getAttribute("data-count"))));
      paxOut.textContent = pax;
      updateAll();
    });
  });

  $$("[data-class-choices] .choice").forEach(function (card) {
    var input = $("input", card);
    input.addEventListener("change", function () {
      cls = input.value;
      $$("[data-class-choices] .choice").forEach(function (c) {
        c.classList.toggle("is-selected", $("input", c).checked);
      });
      updateAll();
    });
  });

  var windowSel = document.getElementById("window");
  var returnSel = document.getElementById("return");
  windowSel.addEventListener("change", updateAll);
  returnSel.addEventListener("change", updateAll);

  var insuranceInput = $("[data-insurance]");
  insuranceInput.addEventListener("change", function () {
    insurance = insuranceInput.checked;
    updateAll();
  });

  /* Pricing --------------------------------------------------------------- */
  function calc() {
    var era = TTB.getEra(selected) || eras[0];
    var sub = (era.price + CLASSES[cls].supp) * pax;
    var ins = insurance ? sub * 0.04 : 0;
    var levy = sub * 0.02;
    var total = Math.round(sub + ins + levy);
    return { era: era, sub: sub, ins: ins, levy: levy, total: total, deposit: Math.round(total * 0.45) };
  }

  function shortOf(sel) {
    var opt = sel.options[sel.selectedIndex];
    return (opt && opt.getAttribute("data-short")) || (opt ? opt.textContent : "");
  }

  function updateManifest() {
    var c = calc();
    $("[data-pass-code]").textContent = CODES[c.era.id] || "TT-" + c.era.no;
    $("[data-pass-year]").textContent = c.era.year;
    $("[data-pass-era]").textContent = c.era.name;
    $("[data-pass-pax]").textContent = String(pax).padStart(2, "0");
    $("[data-pass-class]").textContent = CLASSES[cls].label;
    $("[data-pass-window]").textContent = shortOf(windowSel);
    $("[data-pass-return]").textContent = shortOf(returnSel);
    $("[data-pass-hazard]").textContent = c.era.hazard;
    $("[data-pass-total]").textContent = TTB.money(c.total);
    $("[data-pass-deposit]").textContent = TTB.money(c.deposit);
  }

  function updateAll() {
    updateManifest();
    if (current === 4) renderReview();
  }

  /* Review ---------------------------------------------------------------- */
  function travellerName() {
    var g = document.getElementById("given").value.trim();
    var s = document.getElementById("surname").value.trim();
    var full = (g + " " + s).trim();
    return full || "Not yet named";
  }

  function renderReview() {
    var c = calc();
    var rows = [
      ["Era", c.era.name + " · " + c.era.year],
      ["Departure", shortOf(windowSel) + " · " + shortOf(returnSel)],
      ["Party", pax + (pax === 1 ? " traveller" : " travellers") + " · " + CLASSES[cls].label],
      ["Lead traveller", travellerName()],
      ["Contact", (document.getElementById("email").value.trim() || "Not yet given")],
      ["Paradox insurance", insurance ? "Included · " + TTB.money(Math.round(c.ins)) : "Declined"],
      ["Fare", TTB.money(c.sub)],
      ["Temporal levy (2%)", TTB.money(Math.round(c.levy))],
      ["Total", TTB.money(c.total)],
      ["Deposit due (45%)", TTB.money(c.deposit)]
    ];
    $("[data-review]").innerHTML = rows.map(function (r) {
      return '<div class="review-block__row"><dt>' + r[0] + "</dt><dd>" + r[1] + "</dd></div>";
    }).join("");
  }

  /* Validation ------------------------------------------------------------ */
  function setError(input, on) {
    var field = input.closest(".field");
    if (field) field.classList.toggle("field--error", on);
    return !on;
  }

  function validateStep3() {
    var ok = true;
    var firstBad = null;
    var check = function (input, good) {
      setError(input, !good);
      if (!good) { ok = false; firstBad = firstBad || input; }
    };

    var given = document.getElementById("given");
    var surname = document.getElementById("surname");
    var birth = document.getElementById("birth");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var registry = document.getElementById("registry");

    check(given, given.value.trim().length > 1);
    check(surname, surname.value.trim().length > 1);

    var year = Number(birth.value);
    check(birth, /^\d{4}$/.test(birth.value) && year >= 1900 && year <= 2086);

    check(email, /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim()));
    check(phone, (phone.value.replace(/\D/g, "").length >= 7));
    check(registry, !registry.value.trim() || /^TT-\d{4}-\d{4}$/i.test(registry.value.trim()));

    var consents = $$("[data-consent]");
    var allConsent = consents.every(function (c) { return c.checked; });
    $("[data-err=consent]").classList.toggle("is-on", !allConsent);
    if (!allConsent) { ok = false; firstBad = firstBad || consents[0]; }

    if (firstBad) {
      firstBad.focus({ preventScroll: true });
      var top = firstBad.getBoundingClientRect().top + window.pageYOffset - 140;
      window.scrollTo({ top: Math.max(0, top) });
    }
    return ok;
  }

  /* Steps ----------------------------------------------------------------- */
  function go(step) {
    current = step;
    panels.forEach(function (p) {
      p.hidden = Number(p.getAttribute("data-step")) !== step;
    });
    stepper.forEach(function (item, i) {
      var n = i + 1;
      item.classList.toggle("is-current", n === step);
      item.classList.toggle("is-done", n < step);
      if (n === step) item.setAttribute("aria-current", "step");
      else item.removeAttribute("aria-current");
    });
    backBtn.hidden = step === 1;
    nextBtn.hidden = step === 4;
    submitBtn.hidden = step !== 4;
    if (step === 4) renderReview();
    updateManifest();

    var top = stepper[0].getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: Math.max(0, top) });
  }

  nextBtn.addEventListener("click", function () {
    if (current === 1 && !TTB.getEra(selected)) {
      $("[data-err=era]").classList.add("is-on");
      return;
    }
    $("[data-err=era]").classList.remove("is-on");
    if (current === 3 && !validateStep3()) return;
    if (current < 4) go(current + 1);
  });

  backBtn.addEventListener("click", function () {
    if (current > 1) go(current - 1);
  });

  /* Filing ---------------------------------------------------------------- */
  function fileApplication() {
    var c = calc();
    var now = new Date();
    var dd = String(now.getDate()).padStart(2, "0");
    var mm = String(now.getMonth() + 1).padStart(2, "0");
    var letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    var ref = "TT-2087-" + Math.floor(1000 + Math.random() * 9000) + "-" + letters.charAt(Math.floor(Math.random() * letters.length));

    $("[data-confirm-ref]").textContent = "Reference " + ref;
    $("[data-confirm-date]").textContent = dd + " / " + mm + " / 2087";

    var rows = [
      ["Era", c.era.name + " · " + c.era.year],
      ["Travellers", pax + (pax === 1 ? " traveller · " : " travellers · ") + CLASSES[cls].label],
      ["Departure", shortOf(windowSel) + " · " + shortOf(returnSel)],
      ["Lead traveller", travellerName()],
      ["Total", TTB.money(c.total)],
      ["Deposit paid", TTB.money(c.deposit)],
      ["Advisories", "6 acknowledged"],
      ["Status", "Provisional · held 90 minutes"]
    ];
    $("[data-confirm-summary]").innerHTML = rows.map(function (r) {
      return '<div class="review-block__row"><dt>' + r[0] + "</dt><dd>" + r[1] + "</dd></div>";
    }).join("");

    form.hidden = true;
    confirmed.hidden = false;
    submitBtn.hidden = true;
    backBtn.hidden = true;
    $("[data-pass-status]").textContent = "Filed";
    stepper.forEach(function (item) {
      item.classList.remove("is-current");
      item.classList.add("is-done");
      item.removeAttribute("aria-current");
    });
    var top = confirmed.getBoundingClientRect().top + window.pageYOffset - 110;
    window.scrollTo({ top: Math.max(0, top) });
    if (TTB.toast) TTB.toast("Application filed · " + ref);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (current < 4) {
      if (current === 3 && !validateStep3()) return;
      go(current + 1);
      return;
    }
    if (!validateStep3()) { go(3); return; }
    fileApplication();
  });

  var printBtn = $("[data-print]");
  if (printBtn) printBtn.addEventListener("click", function () { window.print(); });

  /* Initial state --------------------------------------------------------- */
  paxOut.textContent = pax;
  $$("[data-class-choices] .choice").forEach(function (c) {
    c.classList.toggle("is-selected", $("input", c).checked);
  });
  updateManifest();
})();
