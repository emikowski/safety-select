/* GVS Safety Select — Service Worker (cache offline).
   Versão: troque CACHE_VERSION a cada publicação para forçar atualização (o app também se atualiza sozinho em segundo plano). */
const CACHE_VERSION = "gvs-202609240030";
const SHELL = "shell-" + CACHE_VERSION;
const MEDIA = "media-v1"; // fotos: mantidas entre versões
const CDN = "cdn-v1";     // React, Babel, fontes: versões fixas

const SHELL_FILES = [
  "./", "index.html", "manifest.webmanifest", "app/app.bundle.js",
  "data/catalog.js", "data/i18n.js", "data/desc-i18n.js", "data/kits.js",
  "assets/logo-gvs.png", "assets/icon-192.png", "assets/icon-512.png", "assets/apple-touch-icon.png",
];
const CDN_FILES = [
  "https://unpkg.com/react@18.3.1/umd/react.production.min.js",
  "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js",
];
const IMAGES = ["assets/produtos/02-804.jpg","assets/produtos/02-806-Astro-Cleat-and-Screws.jpg","assets/produtos/02-807.jpg","assets/produtos/02-808.jpg","assets/produtos/02-809CE.jpg","assets/produtos/02-810-4.jpg","assets/produtos/02-810-T-3.jpg","assets/produtos/02-811-015-4.jpg","assets/produtos/02-812.jpg","assets/produtos/02-813.jpg","assets/produtos/02-814.jpg","assets/produtos/02-816.jpg","assets/produtos/03-022-PMS.jpg","assets/produtos/03-035.jpg","assets/produtos/03-102.jpg","assets/produtos/03-502.jpg","assets/produtos/03-510.jpg","assets/produtos/03-514.jpg","assets/produtos/03-521-C40-Top-Case-Assembly.jpg","assets/produtos/03-522-2.jpg","assets/produtos/03-526-3.jpg","assets/produtos/03-536.jpg","assets/produtos/03-537.jpg","assets/produtos/03-539-C40-Belt-Loop.jpg","assets/produtos/03-801-EUUK.jpg","assets/produtos/03-801-FR-EUUK.jpg","assets/produtos/03-801-PX5.jpg","assets/produtos/03-802-FR-EUUK.jpg","assets/produtos/03-802-PX5.jpg","assets/produtos/03-803-FR-EUUK.jpg","assets/produtos/03-804-FR-EUUK.png","assets/produtos/03-810.jpg","assets/produtos/03-811-PX5-Belt-Support-Bracket.jpg","assets/produtos/03-812-Door-Cover.jpg","assets/produtos/03-813-HEPA-Filter-Door.jpg","assets/produtos/03-814-Gas-Cartridge-Filter-Door.jpg","assets/produtos/03-815-PX5-Battery-Door-Assembly.jpg","assets/produtos/03-817-PX5-Battery-Door-Seal.jpg","assets/produtos/03-818-PX5-Battery-Door-Hinge.jpg","assets/produtos/03-819-PX5-Flow-Meter.jpg","assets/produtos/03-822-DC.jpg","assets/produtos/03-822-FR.jpg","assets/produtos/03-841.png","assets/produtos/03-842.jpg","assets/produtos/03-851.jpg","assets/produtos/03-855.jpg","assets/produtos/03-856.jpg","assets/produtos/03-890-Pre-filter.jpg","assets/produtos/03-891-Spark-Arrestor.jpg","assets/produtos/03-892-P.jpg","assets/produtos/03-893-A2.jpg","assets/produtos/03-894-ABE.jpg","assets/produtos/03-895-ABEK.jpg","assets/produtos/04-322-100.jpg","assets/produtos/04-322-25.jpg","assets/produtos/04-322-50.jpg","assets/produtos/04-831-PX5-Breathing-Tube.jpg","assets/produtos/04-833-SAR-Breathing-Tube.jpg","assets/produtos/04-841.jpg","assets/produtos/04-852-Tychem-Breathing-Tube-Cover.jpg","assets/produtos/04-854.jpg","assets/produtos/04-855-High-Heat-Aluminium-Breathing-Tube-Cover.jpg","assets/produtos/04-856.png","assets/produtos/04-862-C40-Tychem-Cover.jpg","assets/produtos/04-872.jpg","assets/produtos/04-874.jpg","assets/produtos/04-875.jpg","assets/produtos/04-900-Radex-system.jpg","assets/produtos/04-900.jpg","assets/produtos/04-906.jpg","assets/produtos/04-911.jpg","assets/produtos/04-912.jpg","assets/produtos/04-913.jpg","assets/produtos/04-914.jpg","assets/produtos/04-915-Radex-Pressure-Gauge.jpg","assets/produtos/04-916.jpg","assets/produtos/04-917-2.jpg","assets/produtos/04-918.jpg","assets/produtos/04-919.jpg","assets/produtos/04-920-2.jpg","assets/produtos/04-922.jpg","assets/produtos/04-923.jpg","assets/produtos/04-924.jpg","assets/produtos/04-925.jpg","assets/produtos/04-926-2.jpg","assets/produtos/04-927-2.jpg","assets/produtos/04-928.jpg","assets/produtos/04-929.jpg","assets/produtos/07-122-Cable-and-Hose-Clamp.jpg","assets/produtos/07-701-4.jpg","assets/produtos/07-755-L.jpg","assets/produtos/07-755-M.jpg","assets/produtos/07-755-S.jpg","assets/produtos/07-755-XL.jpg","assets/produtos/07-755-XXL.jpg","assets/produtos/07-755-XXXL.jpg","assets/produtos/07-755-XXXXL.jpg","assets/produtos/07-761-2.jpg","assets/produtos/07-765-DC-PX5-Decon-Belt.jpg","assets/produtos/07-765-FR-2.jpg","assets/produtos/07-765.jpg","assets/produtos/07-900-3.jpg","assets/produtos/08-231.jpg","assets/produtos/08-400-GX4.jpg","assets/produtos/08-401-01.jpg","assets/produtos/08-420-01-GX4-Gas-Sensor-Cartridge-C0-10ppm.jpg","assets/produtos/08-420-02.jpg","assets/produtos/08-420-03.jpg","assets/produtos/08-420-04.jpg","assets/produtos/08-420-GX4-Gas-Sensor-Cartridge.jpg","assets/produtos/08-422-2.jpg","assets/produtos/08-424-3-L.jpg","assets/produtos/08-425-3.jpg","assets/produtos/08-428.jpg","assets/produtos/08-429-GX4-M5-Inlet-Filter-Sintered-Brass.jpg","assets/produtos/08-430-EU.jpg","assets/produtos/08-430-UK.jpg","assets/produtos/08-431.jpg","assets/produtos/08-434-2.jpg","assets/produtos/08-435.jpg","assets/produtos/08-436-4.jpg","assets/produtos/08-437.jpg","assets/produtos/08-450-Calibration-Adapter.jpg","assets/produtos/08-451-GX4-Calibration-Flow-Regulator.jpg","assets/produtos/08-470-GX4-External-Flow-Regulator.jpg","assets/produtos/08452.jpg","assets/produtos/09-021-EU-2.jpg","assets/produtos/09-021-UK-7.jpg","assets/produtos/09-050.jpg","assets/produtos/09-055.jpg","assets/produtos/09-502.jpg","assets/produtos/09-512-edit.jpg","assets/produtos/09-520-2.jpg","assets/produtos/09-522-L4-Outer-Lens.jpg","assets/produtos/09-525-2.jpg","assets/produtos/09-532-2-L4-Light-Battery-Pack.jpg","assets/produtos/09-903.jpg","assets/produtos/09-913-L.jpg","assets/produtos/09-916-7-L.jpg","assets/produtos/09-930.jpg","assets/produtos/09-931.jpg","assets/produtos/09-932.jpg","assets/produtos/09-933-2.jpg","assets/produtos/09-934.jpg","assets/produtos/09-935.jpg","assets/produtos/09-938.jpg","assets/produtos/09-939.jpg","assets/produtos/13-072-1-2.jpg","assets/produtos/15-000-21-CE.jpg","assets/produtos/15-010-11-CE.jpg","assets/produtos/15-148.jpg","assets/produtos/15-711.jpg","assets/produtos/15-721.jpg","assets/produtos/15-811.jpg","assets/produtos/15-812-New.jpg","assets/produtos/15-821-5.jpg","assets/produtos/15-821.jpg","assets/produtos/15-822-Edited-26.jpg","assets/produtos/15-830.jpg","assets/produtos/15-831.jpg","assets/produtos/15-832.jpg","assets/produtos/15-839.jpg","assets/produtos/15-840-Edited-82.jpg","assets/produtos/15-841-Head-Harness-Assembly.jpg","assets/produtos/15-842.jpg","assets/produtos/15-848-Comfort-Side-Padding-System.jpg","assets/produtos/15-850-T200-Bump-Cape.jpg","assets/produtos/15-851-1.jpg","assets/produtos/15-855.jpg","assets/produtos/15-870.png","assets/produtos/15-878-2.jpg","assets/produtos/16-000-23-CE.png","assets/produtos/16-010-11-CE.jpg","assets/produtos/16-010-12-CE.jpg","assets/produtos/16-010-21-CE.jpg","assets/produtos/16-010-24-CE.jpg","assets/produtos/16-010-31-CE.jpg","assets/produtos/16-020-11.jpg","assets/produtos/16-020-12.jpg","assets/produtos/16-020-21.jpg","assets/produtos/16-512.jpg","assets/produtos/16-514.jpg","assets/produtos/16-515.jpg","assets/produtos/16-516-Edited-27.jpg","assets/produtos/16-518-Edited-42.jpg","assets/produtos/16-519-Z-Link-T-Link-Air-Inlet-Adapter.jpg","assets/produtos/16-520-S.jpg","assets/produtos/16-520-T.jpg","assets/produtos/16-521.jpg","assets/produtos/16-522.jpg","assets/produtos/16-523.jpg","assets/produtos/16-525.jpg","assets/produtos/16-526-Edited-7.jpg","assets/produtos/16-527-2.jpg","assets/produtos/16-528-2.jpg","assets/produtos/16-529.jpg","assets/produtos/16-530-Z-Link-Head-Harness-Ratchet-Assembly.jpg","assets/produtos/16-531-L.jpg","assets/produtos/16-611-3-L.jpg","assets/produtos/16-616-Edited-29.jpg","assets/produtos/16-670-Z-Link-Weld-Visor.jpg","assets/produtos/16-671-L.jpg","assets/produtos/16-672-adj-L.jpg","assets/produtos/16-673-2-R.jpg","assets/produtos/16-675-gtir5.jpg","assets/produtos/16-675-ir5.jpg","assets/produtos/16-711.jpg","assets/produtos/16-712.jpg","assets/produtos/16-721-Z-Link-Zytec-FR-Shoulder-Cape.jpg","assets/produtos/16-723.jpg","assets/produtos/16-724-RH-Aluminized-Shoulder-Cape.jpg","assets/produtos/16-731-DSC-0009.jpg","assets/produtos/16-744.jpg","assets/produtos/16-754-High-Heat-Alumized-Rear-Cover.jpg","assets/produtos/16-810-MT.jpg","assets/produtos/16-810-ST.jpg","assets/produtos/16-810-ir5.jpg","assets/produtos/16-810-yt.jpg","assets/produtos/16-810.jpg","assets/produtos/16-811.jpg","assets/produtos/16-817.jpg","assets/produtos/16-871-Z4-RPB-ADF.jpg","assets/produtos/16-872-al.jpg","assets/produtos/16-872.jpg","assets/produtos/16-873.jpg","assets/produtos/16-874.jpg","assets/produtos/16-875.jpg","assets/produtos/16-876.jpg","assets/produtos/16-877-5-8-9-10-11-12.jpg","assets/produtos/16-877.jpg","assets/produtos/16-878.jpg","assets/produtos/16-901.jpg","assets/produtos/16-910.jpg","assets/produtos/16-913.jpg","assets/produtos/16-915.jpg","assets/produtos/16-916.jpg","assets/produtos/16-917.jpg","assets/produtos/16-918.jpg","assets/produtos/16-919.jpg","assets/produtos/16-922.jpg","assets/produtos/16-923.jpg","assets/produtos/16-926.jpg","assets/produtos/16-930.jpg","assets/produtos/17-110-12-CE.jpg","assets/produtos/17-110.jpg","assets/produtos/17-120-12.jpg","assets/produtos/17-200-22-CE.jpg","assets/produtos/17-200-32-CE.jpg","assets/produtos/17-210-22-CE.jpg","assets/produtos/17-512.jpg","assets/produtos/17-513.jpg","assets/produtos/17-712.jpg","assets/produtos/17-713-SX.jpg","assets/produtos/17-713.avif","assets/produtos/17-722.jpg","assets/produtos/17-732-Tychem-2000-Neck-Seal.jpg","assets/produtos/17-811.jpg","assets/produtos/17-815.jpg","assets/produtos/17-817.jpg","assets/produtos/18-524.jpg","assets/produtos/18-533.jpg","assets/produtos/18-535.jpg","assets/produtos/18-600.jpg","assets/produtos/4000-12.webp","assets/produtos/4000-16.jpg","assets/produtos/AFC100.jpg","assets/produtos/APF3100.jpg","assets/produtos/NV2012.jpg","assets/produtos/NV2017.jpg","assets/produtos/NV2021B.jpg","assets/produtos/NV2022.jpg","assets/produtos/NV2030-Low-Flow-Indicator-Assembly.jpg","assets/produtos/NV2032CE.jpg","assets/produtos/NV2041-5.jpg","assets/produtos/NV2042-2.jpg","assets/produtos/NV3-711-50.jpg","assets/produtos/NV3-715-50.jpg","assets/produtos/NV3-721-2.jpg","assets/produtos/NV3-722-4.jpg","assets/produtos/NV3-722-T-3.jpg","assets/produtos/NV3-723.jpg","assets/produtos/NV3-724-3.jpg","assets/produtos/NV3-725-2.jpg","assets/produtos/NV3-726-3-L.jpg","assets/produtos/NV3-727-2.jpg","assets/produtos/NV3-727-8.jpg","assets/produtos/NV3-729-2-L.jpg","assets/produtos/NV3-729-2-NV3-Low-Flow-Indicator-Adapter.jpg","assets/produtos/NV3-730-7.jpg","assets/produtos/NV3-731-2.jpg","assets/produtos/NV3-732-A15.jpg","assets/produtos/NV3-733-4-L.jpg","assets/produtos/NV3-733TK-L.jpg","assets/produtos/NV3-734-1.jpg","assets/produtos/NV3-734-3.jpg","assets/produtos/NV3-735-1-2-L.jpg","assets/produtos/NV3-735-L.jpg","assets/produtos/NV3-736-A15.jpg","assets/produtos/NV3-745.jpg","assets/produtos/NV3-746.jpg","assets/produtos/NV3-750-L.jpg","assets/produtos/NV3-751.jpg","assets/produtos/NV3-752-L.jpg","assets/produtos/NV3-753-HD.jpg","assets/produtos/NV3-754-L.jpg","assets/produtos/NV3-755-L.jpg","assets/produtos/NV3-759-2.jpg","assets/produtos/T200-Face-Seal-PX5.jpg","assets/produtos/c40-unit.jpg","assets/produtos/el-FFM2200-No-Filters.png","assets/produtos/el-FFM221G-A1P3.png","assets/produtos/el-FFM221J-ABE1P3.png","assets/produtos/el-FFM223K-ABEK1P3.png","assets/produtos/el-FFM223L-A2P3.png","assets/produtos/el-FFM2243-P3.png","assets/produtos/el-FFM2244-P3-Nuisance-Odour.png","assets/produtos/el-FIL253K-REV3-ABEK1P3-Replacement-Filters.png","assets/produtos/el-FIL253L-REV3-A2P3-Replacement-Filters.png","assets/produtos/el-SPM001.png","assets/produtos/el-SPM007.png","assets/produtos/el-SPM008.png","assets/produtos/el-SPM009.png","assets/produtos/el-SPM1001-Full-Face-Mask-Case.png","assets/produtos/el-SPM1002-FFM-Fit-Test-Adaptor.png","assets/produtos/el-SPM1003-4-5-FFM-visor-peel-off.png","assets/produtos/el-SPM1007-FFM-head-harness.png","assets/produtos/el-SPM1008-FFM-respirator-body-ML.png","assets/produtos/el-SPM1010-FFM-head-harness-buckle.png","assets/produtos/el-SPM1011-FFM-locking-ring.png","assets/produtos/el-SPM1012-FFM-inner-mask-body.png","assets/produtos/el-SPM1013-FFM-exhaust-valve-cover.png","assets/produtos/el-SPM1014-FFM-inhalation-valve-with-diaphagm.png","assets/produtos/el-SPM1015-FFM-filter-cover.png","assets/produtos/el-SPM1016-Cotton-Bag-Kit.png","assets/produtos/el-SPM1017-Protective-Caps-Kit.png","assets/produtos/el-SPM1018-FFM-adjustable-rx-insert.png","assets/produtos/el-SPM420-Prefilters-Kit.png","assets/produtos/el-SPM421-prefilter-pads-2.png","assets/produtos/el-SPM520-Peel-Off-Visor-for-Integra-v2.png","assets/produtos/el-SPR299-SPR501-P3-Mask.png","assets/produtos/el-SPR337-SPR502-P3-NO-Mask.png","assets/produtos/el-SPR338-SPR503-A1P3-Mask.png","assets/produtos/el-SPR341-A1P3-Filters.png","assets/produtos/el-SPR404-405-406-407-P3-Integra-Mask.png","assets/produtos/el-SPR489-ABEK1-Replacement-Filters.png","assets/produtos/el-SPR490-SPR491-ABEK1P3-Mask.png","assets/produtos/el-SPR492-ABEK1P3-Replacement-Filters.png","assets/produtos/el-SPR513-A1-Replacement-Filters.png","assets/produtos/el-SPR514-SPR515-E1-Mask.png","assets/produtos/el-SPR516-E1-Replacement-Filters.png","assets/produtos/el-SPR519-AE1-Replacement-Filters.png","assets/produtos/elipse-fullface.png","assets/produtos/gx4-unit.jpg","assets/produtos/headtop-t200.png","assets/produtos/headtop-tlink.jpg","assets/produtos/headtop-z4.jpg","assets/produtos/headtop-zlink.jpg","assets/produtos/px5-unit.jpg","assets/produtos/radex-unit.jpg","assets/activities/fabricacao.jpg","assets/activities/farmaceutica.jpg","assets/activities/fundicao.jpg","assets/activities/jateamento.jpg","assets/activities/pintura.jpg","assets/activities/quimica.jpg","assets/activities/saude.jpg","assets/activities/solda.jpg"];

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const s = await caches.open(SHELL);
    await s.addAll(SHELL_FILES.map((u) => new Request(u, { cache: "reload" })));
    const c = await caches.open(CDN);
    await Promise.all(CDN_FILES.map(async (u) => { if (!(await c.match(u))) { try { await c.add(new Request(u, { mode: "cors" })); } catch (_) {} } }));
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith("shell-") && k !== SHELL).map((k) => caches.delete(k)));
    await self.clients.claim();
    precacheImages();
  })());
});

// Baixa todas as fotos em segundo plano, aos poucos, para não travar a conexão.
async function precacheImages() {
  const m = await caches.open(MEDIA);
  for (let i = 0; i < IMAGES.length; i += 6) {
    await Promise.all(IMAGES.slice(i, i + 6).map(async (u) => {
      if (await m.match(u)) return;
      try { const r = await fetch(u); if (r.ok) await m.put(u, r); } catch (_) {}
    }));
  }
}

self.addEventListener("message", (e) => { if (e.data === "precache-images") precacheImages(); });

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;               // envio do formulário (Apps Script) passa direto
  const url = new URL(req.url);
  if (req.headers.has("range") || /\.mp4$/i.test(url.pathname)) return; // vídeos: direto da rede

  // Fotos e fontes: cache primeiro (não mudam)
  if (/\/assets\/(produtos|activities)\//.test(url.pathname) || url.host === "fonts.gstatic.com") {
    e.respondWith(cacheFirst(req, url.host === "fonts.gstatic.com" ? CDN : MEDIA));
    return;
  }
  // Bibliotecas CDN e CSS de fontes: cache primeiro
  if (url.host === "unpkg.com" || url.host === "fonts.googleapis.com") {
    e.respondWith(cacheFirst(req, CDN));
    return;
  }
  // App e dados (mesmo domínio): mostra o do cache na hora e atualiza em segundo plano
  if (url.origin === self.location.origin) {
    e.respondWith(staleWhileRevalidate(req, SHELL));
  }
});

async function cacheFirst(req, name) {
  const c = await caches.open(name);
  const hit = await c.match(req, { ignoreSearch: true });
  if (hit) return hit;
  try {
    const r = await fetch(req);
    if (r.ok || r.type === "opaque") c.put(req, r.clone());
    return r;
  } catch (err) {
    return hit || Response.error();
  }
}

async function staleWhileRevalidate(req, name) {
  const c = await caches.open(name);
  const isPage = req.mode === "navigate";
  const key = isPage ? "index.html" : req;
  const hit = await c.match(key, { ignoreSearch: true });
  const net = fetch(req).then((r) => { if (r.ok) c.put(key, r.clone()); return r; }).catch(() => null);
  return hit || (await net) || (isPage ? c.match("index.html") : Response.error());
}
