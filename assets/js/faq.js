/* Paradox desk question form — fictional filing, no network. */
(function () {
  "use strict";

  var form = document.querySelector("[data-ask]");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    var email = document.getElementById("ask-email").value.trim();
    form.reset();
    if (window.TTB && TTB.toast) {
      TTB.toast("Question filed · the desk will reply to " + email);
    }
  });
})();
