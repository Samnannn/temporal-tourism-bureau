/* Souvenir case: a local tally of goods selected at the counter. */
(function () {
  "use strict";

  var bar = document.querySelector("[data-case-bar]");
  if (!bar) return;

  var products = Array.prototype.slice.call(document.querySelectorAll("[data-product]"));
  var countEl = bar.querySelector("[data-case-count]");
  var totalEl = bar.querySelector("[data-case-total]");
  var clearBtn = bar.querySelector("[data-case-clear]");
  var caseItems = [];

  var money = function (n) { return "T " + n.toLocaleString("en-GB"); };

  var render = function () {
    var total = caseItems.reduce(function (sum, item) {
      return sum + Number(item.getAttribute("data-price"));
    }, 0);

    countEl.textContent = caseItems.length
      ? caseItems.length + (caseItems.length === 1 ? " item" : " items")
      : "empty";
    totalEl.textContent = money(total);
    clearBtn.disabled = caseItems.length === 0;

    products.forEach(function (product) {
      var inCase = caseItems.indexOf(product) !== -1;
      var btn = product.querySelector("[data-add]");
      product.classList.toggle("is-in-case", inCase);
      btn.setAttribute("aria-pressed", inCase ? "true" : "false");
      btn.textContent = inCase ? "In your case ✓" : "Add to case";
    });
  };

  products.forEach(function (product) {
    var btn = product.querySelector("[data-add]");
    btn.addEventListener("click", function () {
      var name = product.getAttribute("data-name");
      var i = caseItems.indexOf(product);
      if (i === -1) {
        caseItems.push(product);
        TTB.toast("Added to case · " + name);
      } else {
        caseItems.splice(i, 1);
        TTB.toast("Removed from case · " + name);
      }
      render();
    });
  });

  clearBtn.addEventListener("click", function () {
    caseItems.length = 0;
    render();
    TTB.toast("Case cleared. Nothing was charged.");
  });

  render();
})();
