/* Shared bureau behaviour: clock, navigation, reveals, ticker, notices. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Bureau Standard Time -------------------------------------------------- */
  var clocks = document.querySelectorAll("[data-clock]");
  if (clocks.length) {
    var pad = function (n) { return String(n).padStart(2, "0"); };
    var tick = function () {
      var d = new Date();
      var t = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
      clocks.forEach(function (el) { el.textContent = t; });
    };
    tick();
    setInterval(tick, 1000);
  }

  /* Mobile navigation ----------------------------------------------------- */
  var burger = document.querySelector("[data-burger]");
  var nav = document.getElementById("nav");
  if (burger && nav) {
    var setNav = function (open) {
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
    };
    burger.addEventListener("click", function () {
      setNav(burger.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") {
        setNav(false);
        burger.focus();
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1080) setNav(false);
    });
  }

  /* Scroll reveals -------------------------------------------------------- */
  var revealables = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  if (revealables.length) {
    if (reduceMotion) {
      revealables.forEach(function (el) { el.classList.add("is-in"); });
    } else {
      var reveal = function () {
        var vh = window.innerHeight || 800;
        for (var i = revealables.length - 1; i >= 0; i--) {
          var el = revealables[i];
          var r = el.getBoundingClientRect();
          if (r.top < vh * 0.94 && r.bottom > -40) {
            el.classList.add("is-in");
            revealables.splice(i, 1);
          }
        }
      };
      var ticking = false;
      var onScroll = function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () { reveal(); ticking = false; });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      window.addEventListener("load", reveal);
      reveal();
      setTimeout(reveal, 350);
      setTimeout(reveal, 1200);
    }
  }

  /* Departure ticker ------------------------------------------------------ */
  var tickers = document.querySelectorAll("[data-ticker]");
  tickers.forEach(function (track) {
    var source = track.querySelector(".ticker__row");
    if (!source) return;
    var base = source.innerHTML;

    var build = function () {
      var rowHTML = base;
      track.innerHTML = '<div class="ticker__row">' + rowHTML + "</div>";
      var row = track.firstElementChild;
      var guard = 0;
      while (row.scrollWidth < window.innerWidth + 240 && guard < 14) {
        row.insertAdjacentHTML("beforeend", base);
        guard++;
      }
      track.appendChild(row.cloneNode(true));
    };

    build();
    var t;
    window.addEventListener("resize", function () {
      clearTimeout(t);
      t = setTimeout(build, 250);
    });
  });

  /* Toast ----------------------------------------------------------------- */
  var toastEl = document.querySelector("[data-toast]");
  var toastTimer;
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.className = "toast";
    toastEl.setAttribute("role", "status");
    toastEl.setAttribute("aria-live", "polite");
    toastEl.setAttribute("data-toast", "");
    document.body.appendChild(toastEl);
  }
  window.TTB = window.TTB || {};
  TTB.toast = function (msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("is-on"); }, 2800);
  };

  /* Deep links into collapsible documents --------------------------------- */
  var openHashDoc = function () {
    var id = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (!id) return;
    var target = document.getElementById(id);
    if (target && target.tagName === "DETAILS") target.open = true;
  };
  openHashDoc();
  window.addEventListener("hashchange", openHashDoc);

  /* Reveal delay helper for grids ---------------------------------------- */
  document.querySelectorAll("[data-stagger]").forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (child, i) {
      if (child.hasAttribute("data-reveal")) {
        child.style.setProperty("--d", Math.min(i * 70, 420) + "ms");
      }
    });
  });
})();
