# GVS — FISP 2026 Configurator · Change Log

A running record of every change made to the configurator, grouped by update.

---

## Update 1 — Google Sheets integration fixed
**Problem:** Final form submissions were not being saved to Google Sheets.

**Root cause:** The app was running in "simulation mode" — the Apps Script Web App URL (`APPS_SCRIPT_URL`) was empty in the code. With an empty URL the `submit()` function only logged a fake success (`console.log("[GVS] Envio simulado")`) and waited 900 ms; nothing was ever sent to the spreadsheet.

**Fix:** Hard-coded the Apps Script `/exec` URL directly into the source so it works in every environment (editor and published GitHub Pages), instead of relying on the Tweaks panel (which does not persist on the published site).

**Files changed:** `index.html`, `para-github/index.html`.

---

## Update 1.1 — URL applied and verified
- Inserted the provided Web App URL into `APPS_SCRIPT_URL` in both `index.html` and `para-github/index.html`.
- Sent a live test request straight from the preview; the request reached Google successfully (opaque `no-cors` response — expected).
- Documented the two server-side requirements to make saving work end to end:
  - The Apps Script must be re-deployed as a **new version** after any code edit.
  - Deployment access must be **Execute as: Me** and **Who has access: Anyone**.

---

## Update 1.2 — Read-back confirmation
- Ran a CORS-readable test request and received a real server reply: `{"ok":true,"ref":"TEST-READ"}`, proving the backend `doPost` was running and appending rows without error.
- Clarified where the data lands, to rule out "looking in the wrong place":
  - **Target spreadsheet:** ID `1EXiQ8RbrsFPZh8O9VGNV8GmL58__Iopvwy5qO8OWBpw`.
  - **Target tab:** "Configurações FISP 2026" (not the default "Sheet1"/"Página1").
- Confirmed test rows (`TEST-READ`, `TEST-PREVIEW`) were visible in that tab.

---

## Update 1.3 — Backend hardening (concurrency + retries)
**Problem:** Intermittent saving — out of three submissions, one saved and two did not, with no error shown in the app (a side effect of `no-cors`, which hides server failures).

**Fixes in `apps-script/Code.gs`:**
- Added `LockService` to serialize writes, preventing lost rows when several submissions arrive at once.
- Added `SpreadsheetApp.flush()` to force the write to commit before releasing the lock.
- Added an automatic **retry (up to 3 attempts)** with a 0.5 s pause to absorb transient Google Sheets service failures.

---

## Update 1.4 — Clean Apps Script project (conflict resolved)
**Problem:** Saving stopped after re-deploying, and the Apps Script execution log showed no error at all.

**Root cause:** The Apps Script project contained additional files (e.g. an `index`) with their own `doPost`/`doGet`. A project can only have one `doPost`; the request was being handled by the wrong file, so the save handler never ran (hence no error and no execution logged).

**Fix:** Created a brand-new Apps Script project containing only `Code.gs`, deployed fresh as a Web App. This produced a new `/exec` URL.

- Updated `APPS_SCRIPT_URL` to the new deployment in both `index.html` and `para-github/index.html`.
- Verified with a live test: server replied `{"ok":true,"ref":"TEST-NEWDEPLOY"}` — saving confirmed working.

---

## Update 2 — Accessory / Part / Consumable review spreadsheets
Created Excel files to review which head-top each accessory, part and consumable belongs to (some items serve multiple head-tops, some are specific to one).

### Update 2.0 — Matrix by head-top family
- Generated `planilhas/Revisao-Acessorios-Parts-Consumiveis-por-Headtop.xlsx`.
- One row per unique item (keyed by code), one column per head-top **family**: Z-Link, Z4, T-Link, T200, Nova 3, Astro.
- Pre-filled with current compatibility (marked "X").
- Scope: **192 unique items** — 36 accessories, 115 parts, 41 consumables. 53 are shared across more than one head-top; 139 are specific to a single one.

### Update 2.1 — Per head-top model (SKU) breakdown
**Reason:** A family is not a single head-top — e.g. Z-Link has variants (Radiant Heat, Weld, Tychem, etc.), each with specific accessories and parts. Review needs to be per model, not per family.

- Generated `planilhas/Revisao-por-Modelo-de-Headtop.xlsx`.
- **23 head-top model columns** grouped by family (Z-Link 10, Z4 2, T-Link 4, T200 4, Nova 3 2, Astro 1), each labelled with the SKU code and `[PAPR]`/`[SAR]` variant.
- Left columns (Code, Description, Type, Category) and the three header rows are frozen for easy scrolling.
- Pre-marked with current family-level compatibility as a starting point; the review task is to remove "X" from models where an item does not apply.
- File validated (ZIP/CRC integrity and well-formed XML) to confirm it opens correctly in Excel.

---

## Update 2.2 — Per-model compatibility applied to the configurator
**Source:** reviewed spreadsheet `Revisao-por-Modelo-de-Headtop (2).xlsx` (193 items × 23 head-top model columns, all marks validated as "X", no orphan items).

**What changed:** accessories, parts and consumables are now filtered by the **specific head-top model (SKU)** chosen, not just by family. Previously, picking any Z-Link showed *all* Z-Link items; now each item only appears for the exact models marked in the review.

**Data (`data/catalog.js` + `para-github/data/catalog.js`):**
- Attached a `models: [SKU,…]` list to every accessory/part in a head-top family (273 items), scoped per family from the reviewed sheet.
- Confirmed all 23 head-top SKUs already exist in the runtime catalog (incl. the two Z-Link SAR models `16-000-24-CE` and `16-000-23-CE`).
- Re-added `16-671` "Z-Link+ Weld Visor" as a Z-Link part, visible across all Z-Link models (was absent from the runtime catalog).
- Ignored sheet row `17-010` "Hard Hat Assembly" (not a catalog item; per decision).
- Stray duplicate of `16-871` (ADF welding filter) under Z-Link is now correctly hidden — the sheet marks it only for the two Z4 welding models, where it still shows.

**Logic (`index.html` + `para-github/index.html`):**
- Added `modelOK(i)` and applied it inside `accessories()` and `parts()`. Items with no `models` field (PX5/C40/Radex/GX4 unit extras) and the filtration/monitoring lines (no head-top step) are unaffected.

---

## Deployment reminders
- **Local/editor:** changes are live immediately.
- **Published site (GitHub Pages):** the updated `para-github/index.html` and full folder structure must be pushed to GitHub for changes to take effect online.
- **Apps Script edits:** always re-deploy as a **new version** (Manage deployments → edit → Version: New) so the `/exec` URL stays the same.
