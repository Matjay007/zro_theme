/**
 * ZRO Public — runs on login / public website pages.
 * Rebrands and removes any "Sign up to ERPNext" cruft.
 */
(function () {
  "use strict";
  const BRAND = "ZRO Site";
  function rebrand() {
    if (/ERPNext|Frappe/.test(document.title)) {
      document.title = document.title.replace(/ERPNext|Frappe/g, BRAND);
    }
    document.querySelectorAll("h1, h2, h3, h4, .text-muted").forEach((el) => {
      if (el.children.length === 0 && /ERPNext|Frappe/.test(el.textContent || "")) {
        el.textContent = el.textContent.replace(/ERPNext|Frappe/g, BRAND);
      }
    });
  }
  if (document.readyState !== "loading") rebrand();
  else document.addEventListener("DOMContentLoaded", rebrand);
})();
