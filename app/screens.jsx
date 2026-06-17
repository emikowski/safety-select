/* GVS — Telas do configurador (catálogo REAL). Fluxo:
   Atividade/Produto → Linha → Unidade → [Headtop] → [Sensor] → Acessórios (+ Peças)
   Depende de window: GVSIcon, UIIcon, GVSChrome, StepHead, BigCard, ProductCard,
   PrimaryBtn, GhostBtn, VideoModal, ActionBar, Stepper, Media. */
(function () {
  const {
    GVSIcon, UIIcon, StepHead, BigCard, ProductCard,
    PrimaryBtn, GhostBtn, ActionBar, Stepper, Media, descOf,
  } = window;

  const kindLabel = (t, k) => t["k_" + k] || t.k_accessory;

  // ── 1. ATRAÇÃO ──────────────────────────────────────────────────────────
  function Attract({ ctx }) {
    const { t, tw, start, C, lang, setLang } = ctx;
    const langs = [["pt", "PT"], ["en", "EN"], ["es", "ES"]];
    const FLOATS = [
      { t: "8%",  l: "7%",  s: 124, a: "gdrift", d: 19, dl: 0,   c: 1 },
      { t: "15%", l: "80%", s: 98,  a: "gfloat", d: 14, dl: -3,  c: 2 },
      { t: "63%", l: "4%",  s: 142, a: "gspin",  d: 27, dl: -6,  c: 1 },
      { t: "77%", l: "75%", s: 108, a: "gdrift", d: 21, dl: -9,  c: 2 },
      { t: "44%", l: "45%", s: 90,  a: "gfloat", d: 16, dl: -12, c: 1 },
      { t: "29%", l: "24%", s: 78,  a: "gspin",  d: 23, dl: -5,  c: 2 },
      { t: "52%", l: "87%", s: 86,  a: "gdrift", d: 25, dl: -8,  c: 1 },
      { t: "86%", l: "38%", s: 100, a: "gfloat", d: 18, dl: -2,  c: 2 },
      { t: "5%",  l: "50%", s: 74,  a: "gspin",  d: 29, dl: -15, c: 1 },
      { t: "38%", l: "66%", s: 70,  a: "gdrift", d: 17, dl: -11, c: 2 },
    ];
    return (
      <div className={"g-screen g-attract style-" + (tw.attractStyle || "focus")} onClick={start}>
        <div className="g-attract-lang g-lang" role="group" aria-label="Idioma" onClick={(e) => e.stopPropagation()}>
          {langs.map(([code, label]) => (
            <button key={code} className={"g-lang-b" + (lang === code ? " on" : "")}
                    onClick={() => setLang(code)}>{label}</button>
          ))}
        </div>
        <div className="g-attract-bg" aria-hidden="true">
          <span className="g-blob b1" />
          <span className="g-blob b2" />
          <span className="g-blob b3" />
          {FLOATS.map((f, i) => (
            <span key={i} className="g-float"
                  style={{ top: f.t, left: f.l, color: f.c === 2 ? "var(--accent)" : "var(--primary)",
                           animationName: f.a, animationDuration: f.d + "s", animationDelay: f.dl + "s" }}>
              <GVSIcon name={C.lines[i % C.lines.length].icon} size={f.s} strokeWidth={1} />
            </span>
          ))}
        </div>
        <div className="g-attract-in">
          <img className="g-attract-logo-img" src="assets/logo-gvs.png" alt="GVS" />
          <div className="g-kicker on-dark">{t.attract_kicker}</div>
          <h1 className="g-display">{t.attract_title}</h1>
          <p className="g-attract-sub">{t.attract_sub}</p>
          <div className="g-attract-cta">
            <span className="g-pulse" />
            <UIIcon name="spark" size={22} /> {t.attract_cta}
          </div>
        </div>
      </div>
    );
  }

  // ── 2. HOME ─────────────────────────────────────────────────────────────
  function Home({ ctx }) {
    const { t, nav, setActivity } = ctx;
    return (
      <div className="g-screen g-pad">
        <StepHead title={t.home_title} sub={t.home_sub} />
        <div className="g-home-grid">
          <BigCard icon="compass" title={t.by_activity} sub={t.by_activity_sub}
                   onClick={() => { setActivity(null); nav("activities"); }} accent />
          <BigCard icon="grid" title={t.by_product} sub={t.by_product_sub}
                   onClick={() => { setActivity(null); nav("lines"); }} />
        </div>
      </div>
    );
  }

  // ── 3. ATIVIDADES ────────────────────────────────────────────────────────
  function Activities({ ctx }) {
    const { t, C, lang, nav, setActivity } = ctx;
    return (
      <div className="g-screen g-pad">
        <StepHead kicker="1 / 3" title={t.choose_activity} sub={t.choose_activity_sub} />
        <div className="g-act-grid">
          {C.activities.map((a) => (
            <button key={a.id} className={"g-act" + (a.video || a.img ? "" : " no-media")}
                    onClick={() => { setActivity(a); nav("actunits"); }}>
              <span className="g-act-media">
                {a.video
                  ? <video className="g-act-vid" src={a.video} poster={a.img || undefined}
                           autoPlay loop muted playsInline preload="auto"
                           ref={(el) => { if (el) el.muted = true; }} />
                  : a.img
                    ? <img className="g-act-vid" src={a.img} alt="" />
                    : <span className="g-act-ic"><GVSIcon name={a.icon} size={72} strokeWidth={1.2} /></span>}
              </span>
              <span className="g-act-grad" aria-hidden="true" />
              <span className="g-act-name">{a.name[lang]}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── 3b. EQUIPAMENTO POR ATIVIDADE (PX5 + C40 juntos) ────────────────────
  function ActUnits({ ctx }) {
    const { t, lang, activity, activityUnits, setLine, setUnitFam, nav, famName, C } = ctx;
    const list = activityUnits();
    const meta = (id) => C.families.find((f) => f.id === id);
    return (
      <div className="g-screen g-pad">
        <StepHead kicker={`2 / 3 · ${activity ? activity.name[lang] : ""}`}
                  title={t.choose_unitfam} sub={t.choose_unitfam_sub} />
        {list.length === 0
          ? <div className="g-empty"><GVSIcon name="cartridge" size={56} /><p>{t.no_units}</p></div>
          : (
            <div className="g-line-grid">
              {list.map((u) => (
                <BigCard key={u.fam} icon={(meta(u.fam) || {}).icon || "blower"} img={(meta(u.fam) || {}).img}
                         title={famName(u.fam)} sub={`${u.line.name[lang]} · ${u.count} ${t.versions}`}
                         onClick={() => { setLine(u.line); setUnitFam(u.fam); nav("unit"); }} />
              ))}
            </div>
          )}
      </div>
    );
  }

  // ── 4. LINHAS ────────────────────────────────────────────────────────────
  function Lines({ ctx }) {
    const { t, C, lang, nav, activity, setLine, isRecommended } = ctx;
    const ordered = activity
      ? [...C.lines].sort((a, b) => (isRecommended(b) ? 1 : 0) - (isRecommended(a) ? 1 : 0))
      : C.lines;
    return (
      <div className="g-screen g-pad">
        <StepHead
          kicker={activity ? `2 / 4 · ${activity.name[lang]}` : null}
          title={activity ? `${t.recommended_lines} ${activity.name[lang]}` : t.choose_line}
          sub={t.choose_line_sub} />
        <div className="g-line-grid">
          {ordered.map((l) => (
            <BigCard key={l.id} icon={l.icon} img={l.img} title={l.name[lang]} sub={l.tag[lang]}
                     badge={activity && isRecommended(l) ? "★" : null}
                     accent={activity && isRecommended(l)}
                     onClick={() => { setLine(l); nav(l.steps[0]); }} />
          ))}
        </div>
      </div>
    );
  }

  // ── 5a. EQUIPAMENTO / FAMÍLIA DE UNIDADE (PX5 / C40 / Radex / GX4) ──────
  function UnitFamilies({ ctx }) {
    const { t, lang, line, unitFamilies, setUnitFam, goNext, famName, C } = ctx;
    const fams = unitFamilies(line);
    const meta = (id) => C.families.find((f) => f.id === id);
    return (
      <div className="g-screen g-pad">
        <StepHead kicker={line.name[lang]} title={t.choose_unitfam} sub={t.choose_unitfam_sub} />
        <div className="g-line-grid">
          {fams.map((f) => (
            <BigCard key={f.id} icon={(meta(f.id) || {}).icon || "blower"} img={(meta(f.id) || {}).img}
                     title={famName(f.id)} sub={`${f.count} ${t.versions}`}
                     onClick={() => { setUnitFam(f.id); goNext("unitfam"); }} />
          ))}
        </div>
      </div>
    );
  }

  // ── 5b. VERSÃO DA UNIDADE ───────────────────────────────────────────────
  function Units({ ctx }) {
    const { t, lang, line, units, unitFam, famName, is, pickUnit, goNext, openVideo } = ctx;
    const items = units(line).filter((p) => !unitFam || p.fam === unitFam);
    return (
      <div className="g-screen g-pad">
        <StepHead kicker={unitFam ? famName(unitFam) : line.name[lang]} title={t.choose_unit} sub={t.choose_unit_sub} />
        {items.length === 0
          ? <div className="g-empty"><GVSIcon name="cartridge" size={56} /><p>{t.no_units}</p></div>
          : (
            <div className={"g-prod-grid layout-" + (ctx.tw.selLayout || "grid")}>
              {items.map((p) => (
                <ProductCard key={p.id} p={p} t={t} lang={lang} selected={is(p.id)}
                             onVideo={() => openVideo(p)}
                             onToggle={() => { pickUnit(p); goNext("unit"); }} />
              ))}
            </div>
          )}
      </div>
    );
  }

  // ── 6a. FAMÍLIA DO HEADTOP (Z-Link, T-Link, T200, Nova 3, Astro) ────────
  function HeadFamilies({ ctx }) {
    const { t, lang, line, headFamilies, setHeadFam, goNext, famName, C, unit } = ctx;
    const fams = headFamilies(line);
    const meta = (id) => C.families.find((f) => f.id === id);
    return (
      <div className="g-screen g-pad">
        <StepHead kicker={`${line.name[lang]}${unit ? " · " + unit.code : ""}`}
                  title={t.choose_headfam} sub={t.choose_headfam_sub} />
        <div className="g-line-grid">
          {fams.map((f) => (
            <BigCard key={f.id} icon={(meta(f.id) || {}).icon || "halfmask"} img={(meta(f.id) || {}).img}
                     title={famName(f.id)} sub={`${f.count} ${t.versions}`}
                     onClick={() => { setHeadFam(f.id); goNext("headfam"); }} />
          ))}
        </div>
      </div>
    );
  }

  // ── 6b. HEADTOP (variantes da família escolhida, compatíveis) ───────────
  function Headtops({ ctx }) {
    const { t, lang, line, headtops, headFam, pickHeadtop, goNext, openVideo, famName, unit, is } = ctx;
    const items = headtops(line).filter((p) => !headFam || p.fam === headFam);
    return (
      <div className="g-screen g-pad">
        <StepHead kicker={`${famName(headFam)}${unit ? " · " + unit.code : ""}`}
                  title={t.choose_headtop} sub={t.headtop_compat_sub} />
        {items.length === 0
          ? <div className="g-empty"><GVSIcon name="halfmask" size={56} /><p>{t.no_headtops}</p></div>
          : (
            <div className={"g-prod-grid layout-" + (ctx.tw.selLayout || "grid")}>
              {items.map((p) => (
                <ProductCard key={p.id} p={p} t={t} lang={lang} selected={is(p.id)}
                             onVideo={() => openVideo(p)}
                             onToggle={() => { pickHeadtop(p); goNext("headtop"); }} />
              ))}
            </div>
          )}
      </div>
    );
  }

  // ── 7. SENSOR (GX4) ──────────────────────────────────────────────────────
  function Sensors({ ctx }) {
    const { t, lang, line, sensors, is, add, remove, goNext, nav, openVideo } = ctx;
    const items = sensors(line);
    return (
      <div className="g-screen g-pad">
        <StepHead kicker={line.name[lang]} title={t.choose_sensor} sub={t.choose_sensor_sub} />
        <div className={"g-prod-grid layout-" + (ctx.tw.selLayout || "grid")}>
          {items.map((p) => (
            <ProductCard key={p.id} p={p} t={t} lang={lang} selected={is(p.id)}
                         onVideo={() => openVideo(p)}
                         onToggle={() => (is(p.id) ? remove(p.id) : add(p.id))} />
          ))}
        </div>
        <ActionBar
          left={<GhostBtn iconLeft="plus" onClick={() => nav("lines")}>{t.add_more}</GhostBtn>}
          right={<PrimaryBtn icon="arrowR" onClick={() => goNext("sensor")}>{t.continue}</PrimaryBtn>} />
      </div>
    );
  }

  // ── 8. ACESSÓRIOS (+ botão Peças e Consumíveis) ─────────────────────────
  function Accessories({ ctx }) {
    const { t, lang, nav, headtop, unit, accessories, parts, unitExtras, famName, is, add, remove, openVideo } = ctx;
    const [showParts, setShowParts] = React.useState(false);
    const [showUnit, setShowUnit] = React.useState(false);
    const accs = accessories();
    const prts = parts();
    const uext = unitExtras();
    const layout = "layout-" + (ctx.tw.selLayout || "grid");
    const ref = headtop || unit;
    return (
      <div className="g-screen g-pad">
        <StepHead kicker={ref ? `${ref.code}` : null} title={t.choose_acc} sub={t.choose_acc_sub} />
        {accs.length === 0
          ? <div className="g-note">{t.no_acc}</div>
          : (
            <div className={"g-prod-grid " + layout}>
              {accs.map((p) => (
                <ProductCard key={p.id} p={p} t={t} lang={lang} selected={is(p.id)}
                             onVideo={() => openVideo(p)}
                             onToggle={() => (is(p.id) ? remove(p.id) : add(p.id))} />
              ))}
            </div>
          )}

        {prts.length > 0 && (
          <div className="g-parts">
            <button className={"g-parts-toggle" + (showParts ? " on" : "")} onClick={() => setShowParts((s) => !s)}>
              <UIIcon name={showParts ? "minus" : "plus"} size={20} />
              {showParts ? t.parts_hide : t.parts_show}
              <span className="g-parts-count">{prts.length}</span>
            </button>
            {showParts && (
              <>
                <div className="g-fam-h mt">{t.parts_section}</div>
                <div className={"g-prod-grid " + layout}>
                  {prts.map((p) => (
                    <ProductCard key={p.id} p={p} t={t} lang={lang} selected={is(p.id)}
                                 onVideo={() => openVideo(p)}
                                 onToggle={() => (is(p.id) ? remove(p.id) : add(p.id))} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {uext.length > 0 && (
          <div className="g-parts">
            <button className={"g-parts-toggle" + (showUnit ? " on" : "")} onClick={() => setShowUnit((s) => !s)}>
              <UIIcon name={showUnit ? "minus" : "plus"} size={20} />
              {(showUnit ? t.unit_extras_hide : t.unit_extras_show) + " " + famName(unit.fam)}
              <span className="g-parts-count">{uext.length}</span>
            </button>
            {showUnit && (
              <>
                <div className="g-fam-h mt">{t.unit_extras_section} {famName(unit.fam)}</div>
                <div className={"g-prod-grid " + layout}>
                  {uext.map((p) => (
                    <ProductCard key={p.id} p={p} t={t} lang={lang} selected={is(p.id)}
                                 onVideo={() => openVideo(p)}
                                 onToggle={() => (is(p.id) ? remove(p.id) : add(p.id))} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <ActionBar
          left={<GhostBtn iconLeft="plus" onClick={() => nav("lines")}>{t.add_more}</GhostBtn>}
          right={<PrimaryBtn icon="arrowR" onClick={() => nav("summary")}>{t.review_send}</PrimaryBtn>} />
      </div>
    );
  }

  // ── Carrinho (drawer) ────────────────────────────────────────────────────
  function CartDrawer({ ctx, onClose }) {
    const { t, lang, cartList, count, inc, dec, remove, clear, nav } = ctx;
    const list = cartList();
    return (
      <div className="g-modal right" onClick={onClose}>
        <aside className="g-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="g-drawer-head">
            <div>
              <div className="g-h2">{t.my_config}</div>
              <div className="g-sub sm">{count} {count === 1 ? t.item : t.items}</div>
            </div>
            <button className="g-icbtn" onClick={onClose}><UIIcon name="x" size={22} /></button>
          </div>
          {list.length === 0 ? (
            <div className="g-empty"><GVSIcon name="cartridge" size={56} />
              <p>{t.my_config_empty}</p><span className="g-sub sm">{t.my_config_empty_sub}</span></div>
          ) : (
            <div className="g-drawer-list">
              {list.map(({ p, qty, kind }) => (
                <div key={p.id} className="g-line-item">
                  <div className="g-li-ic"><GVSIcon name={p.icon} size={32} strokeWidth={1.4} /></div>
                  <div className="g-li-body">
                    <div className="g-li-kind">{kindLabel(t, kind)}</div>
                    <div className="g-li-name clamp2">{descOf(p, lang)}</div>
                    <div className="g-prod-code">{p.code}</div>
                  </div>
                  <div className="g-li-right">
                    <Stepper value={qty} onDec={() => dec(p.id)} onInc={() => inc(p.id)} />
                    <button className="g-li-rm" onClick={() => remove(p.id)}><UIIcon name="trash" size={18} /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {list.length > 0 && (
            <div className="g-drawer-foot">
              <GhostBtn onClick={clear}>{t.clear_all}</GhostBtn>
              <PrimaryBtn full icon="arrowR" onClick={() => { onClose(); nav("summary"); }}>{t.review_send}</PrimaryBtn>
            </div>
          )}
        </aside>
      </div>
    );
  }

  // ── 9. RESUMO ──────────────────────────────────────────────────────────
  function Summary({ ctx }) {
    const { t, lang, cartList, count, inc, dec, remove, nav } = ctx;
    const list = cartList();
    const style = ctx.tw.summaryStyle || "cards";
    if (count === 0) {
      return (
        <div className="g-screen g-pad">
          <StepHead title={t.summary_title} sub={t.summary_sub} />
          <div className="g-empty"><GVSIcon name="cartridge" size={64} />
            <p>{t.my_config_empty}</p><span className="g-sub sm">{t.my_config_empty_sub}</span>
            <PrimaryBtn icon="arrowR" onClick={() => nav("lines")}>{t.add_more}</PrimaryBtn></div>
        </div>
      );
    }
    return (
      <div className="g-screen g-pad">
        <StepHead kicker={`${count} ${count === 1 ? t.item : t.items}`} title={t.summary_title} sub={t.summary_sub} />
        <div className={"g-summary style-" + style}>
          {list.map(({ p, qty, kind }) => (
            <div key={p.id} className={"g-sum-row kind-" + kind}>
              <div className="g-sum-media"><Media img={p.img} icon={p.icon} /></div>
              <div className="g-sum-body">
                <div className="g-li-kind">{kindLabel(t, kind)}</div>
                <div className="g-sum-name clamp2">{descOf(p, lang)}</div>
                <div className="g-prod-code">{t.code} {p.code}</div>
                {p.cert && /[A-Za-z]/.test(p.cert) ? <div className="g-prod-cert">{p.cert}</div> : null}
              </div>
              <div className="g-sum-right">
                <Stepper value={qty} onDec={() => dec(p.id)} onInc={() => inc(p.id)} />
                <button className="g-li-rm" onClick={() => remove(p.id)}><UIIcon name="trash" size={18} /></button>
              </div>
            </div>
          ))}
        </div>
        <ActionBar
          left={<GhostBtn iconLeft="plus" onClick={() => nav("lines")}>{t.add_more}</GhostBtn>}
          right={<PrimaryBtn icon="arrowR" onClick={() => nav("form")}>{t.continue}</PrimaryBtn>} />
      </div>
    );
  }

  // ── 10. FORMULÁRIO ───────────────────────────────────────────────────────
  function Form({ ctx }) {
    const { t, count, submit } = ctx;
    const [f, setF] = React.useState({ name: "", company: "", role: "", phone: "", email: "", notes: "", lgpd: false });
    const [err, setErr] = React.useState("");
    const [busy, setBusy] = React.useState(false);
    const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

    const go = async () => {
      if (count === 0) { setErr(t.err_empty); return; }
      if (!f.name.trim() || !f.company.trim() || !f.phone.trim() || !f.email.trim()) { setErr(t.err_required); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) { setErr(t.err_email); return; }
      if (!f.lgpd) { setErr(t.err_lgpd); return; }
      setErr(""); setBusy(true);
      const ok = await submit(f);
      setBusy(false);
      if (!ok) setErr(t.err_network);
    };

    const field = ({ k, label, type = "text", req, ph, area }) => (
      <label key={k} className={"g-field" + (area ? " area" : "")}>
        <span className="g-field-l">{label} <em>{req ? t.required : t.optional}</em></span>
        {area
          ? <textarea value={f[k]} onChange={set(k)} placeholder={ph} rows={3} />
          : <input type={type} value={f[k]} onChange={set(k)} placeholder={ph}
                   inputMode={type === "tel" ? "tel" : type === "email" ? "email" : "text"} />}
      </label>
    );

    return (
      <div className="g-screen g-pad">
        <StepHead title={t.form_title} sub={t.form_sub} />
        <div className="g-form">
          <div className="g-form-grid">
            {field({ k: "name", label: t.f_name, req: true })}
            {field({ k: "company", label: t.f_company, req: true })}
            {field({ k: "role", label: t.f_role })}
            {field({ k: "phone", label: t.f_phone, type: "tel", req: true })}
            {field({ k: "email", label: t.f_email, type: "email", req: true })}
            {field({ k: "notes", label: t.f_notes, ph: t.f_notes_ph, area: true })}
          </div>
          <label className="g-check">
            <input type="checkbox" checked={f.lgpd} onChange={set("lgpd")} />
            <span className="g-check-box"><UIIcon name="check" size={16} /></span>
            <span className="g-check-tx">{t.lgpd}</span>
          </label>
          {err && <div className="g-err">{err}</div>}
        </div>
        <ActionBar
          left={<div className="g-form-count"><UIIcon name="cart" size={20} /> {count} {count === 1 ? t.item : t.items}</div>}
          right={<PrimaryBtn icon="arrowR" onClick={go} disabled={busy}>{busy ? t.sending : t.send}</PrimaryBtn>} />
      </div>
    );
  }

  // ── 11. SUCESSO ────────────────────────────────────────────────────────
  function Success({ ctx }) {
    const { t, ref, restart } = ctx;
    return (
      <div className="g-screen g-pad g-success">
        <div className="g-success-in">
          <div className="g-success-ic"><UIIcon name="check" size={64} strokeWidth={2.4} /></div>
          <h1 className="g-h1">{t.success_title}</h1>
          <p className="g-sub">{t.success_sub}</p>
          {ref && <div className="g-ref">{t.success_code} <b>{ref}</b></div>}
          <PrimaryBtn icon="spark" onClick={restart}>{t.new_config}</PrimaryBtn>
        </div>
      </div>
    );
  }

  Object.assign(window, {
    ScreenAttract: Attract, ScreenHome: Home, ScreenActivities: Activities, ScreenActUnits: ActUnits,
    ScreenLines: Lines, ScreenUnitFam: UnitFamilies, ScreenUnit: Units, ScreenHeadFam: HeadFamilies, ScreenHeadtop: Headtops,
    ScreenSensor: Sensors, ScreenAccessories: Accessories,
    ScreenSummary: Summary, ScreenForm: Form, ScreenSuccess: Success,
    CartDrawer, VideoModal: window.VideoModal,
  });
})();
