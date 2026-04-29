"""
ZRO Theme — Frappe / ERPNext branding overlay.

This app injects a single CSS bundle and a small JS shim into every page
served by Frappe. The CSS overrides Frappe's default palette with the
ZRO Site DESIGN.md tokens (graphite-ink + glacier-surface + drafting-white)
and replaces ERPNext-branded chrome (logo, app name, footer) with ZRO
equivalents. No DocType changes; no schema migrations; safe to install
or remove without data loss.
"""

app_name = "zro_theme"
app_title = "ZRO Site"
app_publisher = "ZRO Lab SA"
app_description = "ZRO Site theme overlay for Frappe / ERPNext"
app_email = "engineering@zrolab.com"
app_license = "AGPL-3.0"

# ── Asset injection ────────────────────────────────────────────────────────
# These bundles are loaded on every desk page and every public website page,
# so the rebrand applies whether the user is in the app shell or browsing
# the public website (login, docs, etc.).
app_include_css = [
    "/assets/zro_theme/css/zro.css",
]
app_include_js = [
    "/assets/zro_theme/js/zro.js",
]
web_include_css = [
    "/assets/zro_theme/css/zro-public.css",
]
web_include_js = [
    "/assets/zro_theme/js/zro-public.js",
]

# Replace the navbar logo / favicon globally. Paths resolve under the public
# folder of this app once `bench build` runs.
app_logo_url = "/assets/zro_theme/images/zro-mark.svg"

# Override Frappe's default dashboard splash with the ZRO welcome layout.
# Frappe looks up these "website_user_home_page" hooks per-site.
home_page = "login"

# Disable the Frappe Cloud upsell banner — we self-host.
website_context = {
    "favicon": "/assets/zro_theme/images/zro-favicon.svg",
    "splash_image": "/assets/zro_theme/images/zro-mark.svg",
}
