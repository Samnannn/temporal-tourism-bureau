/* Era index: render the catalogue, filter by epoch, search the register. */
(function () {
  "use strict";

  var grid = document.querySelector("[data-era-grid]");
  if (!grid || !window.TTB) return;

  var eras = TTB.eras;
  var countEl = document.querySelector("[data-count]");
  var emptyEl = document.querySelector("[data-empty]");
  var searchEl = document.querySelector("[data-search]");
  var chips = Array.prototype.slice.call(document.querySelectorAll("[data-epoch]"));
  var state = { epoch: "all", q: "" };

  var badges = {
    low: "badge--low",
    moderate: "badge--moderate",
    high: "badge--high",
    extreme: "badge--extreme",
    none: "badge--none"
  };

  function card(e) {
    return (
      '<a class="era-card" href="era.html?era=' + e.id + '">' +
        '<div class="era-card__media">' +
          '<img src="' + e.img + '" alt="' + e.alt + '" loading="lazy" width="1500" height="1000">' +
          '<span class="era-card__no">Era ' + e.no + "</span>" +
        "</div>" +
        '<div class="era-card__body">' +
          '<div class="era-card__top">' +
            '<span class="era-card__year">' + e.yearLong + " · " + e.place.split(",")[0] + "</span>" +
            '<span class="badge ' + badges[e.hazardKey] + '">Hazard ' + e.hazard.toLowerCase() + "</span>" +
          "</div>" +
          "<h3>" + e.name + "</h3>" +
          '<p class="era-card__desc">' + e.desc + "</p>" +
          '<div class="era-card__foot"><span>From ' + TTB.money(e.price) + '</span><span class="arr" aria-hidden="true">→</span></div>' +
        "</div>" +
      "</a>"
    );
  }

  function matches(e) {
    if (state.epoch !== "all" && e.epoch !== state.epoch) return false;
    if (!state.q) return true;
    var hay = [e.name, e.place, e.year, e.yearLong, e.tagline, e.desc, e.epochLabel, e.hazard].join(" ").toLowerCase();
    return hay.indexOf(state.q) !== -1;
  }

  function render() {
    var list = eras.filter(matches);
    grid.innerHTML = list.map(card).join("");
    if (countEl) countEl.textContent = list.length + (list.length === 1 ? " era" : " eras");
    if (emptyEl) emptyEl.hidden = list.length > 0;
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      state.epoch = chip.getAttribute("data-epoch");
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle("is-active", on);
        c.setAttribute("aria-pressed", on ? "true" : "false");
      });
      render();
    });
  });

  if (searchEl) {
    searchEl.addEventListener("input", function () {
      state.q = searchEl.value.trim().toLowerCase();
      render();
    });
  }

  render();

  /* Chronological register */
  var rail = document.querySelector("[data-timeline]");
  if (rail) {
    rail.innerHTML = eras.map(function (e) {
      return (
        '<a class="tl-node" href="era.html?era=' + e.id + '">' +
          '<span class="tl-node__year">' + e.year + "</span>" +
          '<span class="tl-node__dot" aria-hidden="true"></span>' +
          '<span class="tl-node__name">' + e.name.replace("The ", "") + "</span>" +
        "</a>"
      );
    }).join("");
  }
})();
