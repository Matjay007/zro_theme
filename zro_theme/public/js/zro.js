/**
 * ZRO Theme — Desk JS shim.
 *
 * Kicks off after Frappe's desk loads. Two jobs:
 *   1. Replace any "ERPNext" / "Frappe" brand labels in the navbar / browser
 *      title with "ZRO Site".
 *   2. Set the document title default so tab labels read "ZRO Site · …".
 *
 * Runs in idempotent fashion via MutationObserver — Frappe re-renders
 * the navbar after some role changes and we want our brand to stick.
 */
(function () {
  "use strict";

  const BRAND_NAME = "ZRO Site";

  function rebrandNavbar() {
    // Frappe's navbar brand link
    document.querySelectorAll(".navbar .navbar-brand").forEach((el) => {
      const txt = (el.textContent || "").trim();
      if (txt === "ERPNext" || txt === "Frappe" || txt === "Frappe Cloud") {
        el.textContent = BRAND_NAME;
      }
    });
    // Document title
    if (/ERPNext|Frappe/.test(document.title)) {
      document.title = document.title
        .replace(/ERPNext|Frappe/g, BRAND_NAME);
    }
  }

  // Initial pass when DOM is ready
  if (document.readyState !== "loading") {
    rebrandNavbar();
  } else {
    document.addEventListener("DOMContentLoaded", rebrandNavbar);
  }

  // Re-apply after navbar mutations (Frappe sometimes rerenders on auth events)
  const obs = new MutationObserver(rebrandNavbar);
  document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) obs.observe(navbar, { childList: true, subtree: true });
  });

  // Title rebrand on every Frappe route change
  if (window.frappe && window.frappe.router) {
    window.frappe.router.on("change", rebrandNavbar);
  }
})();
