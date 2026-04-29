# ZRO Theme

Frappe / ERPNext theme overlay for ZRO Site.

Re-skins the Frappe desk and public website with the ZRO Site DESIGN.md
palette (graphite-ink + glacier-surface + drafting-white), replaces the
default ERPNext brand chrome (logo, navbar text, login page) with ZRO
equivalents, and ships the construction-photography login hero.

No DocType changes, no schema migrations — install or remove without
data loss.

## Install

```bash
bench get-app https://github.com/Matjay007/zro_theme
bench --site <site> install-app zro_theme
bench build --app zro_theme
bench --site <site> clear-cache
```

## What it does

| Hook | Effect |
|---|---|
| `app_include_css` | Loads `zro.css` on every desk page — Frappe palette tokens overridden to graphite/glacier/white |
| `app_include_js` | `zro.js` rebrands navbar + document title to "ZRO Site" |
| `web_include_css` | `zro-public.css` rebuilds the login page as full-bleed construction photo + form panel |
| `app_logo_url` | Points to graphite-ink ZRO bar-chart logo |
| `website_context.favicon` | ZRO favicon SVG |

## License

AGPL-3.0 — matches Frappe upstream.
