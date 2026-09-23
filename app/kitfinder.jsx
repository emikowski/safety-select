/* GVS — Kit Finder (modo comercial). Mesma metodologia da aba "Kit Part Number Builder"
   da Quote Tool: filtro por atributos sobre os kits. Antes, uma tela de região
   (NIOSH × World). Dois layouts (Tweak "Kit Finder"):
   - "facets": filtros laterais + lista ao vivo
   - "wizard": passo a passo, um atributo por tela, em cards grandes
   Dados: window.GVS_KITS (data/kits.js). */
(function () {
  const { useState, useMemo } = React;
  const { UIIcon, GVSIcon, StepHead, BigCard } = window;

  const FACETS = [
    ["product", "Produto"], ["fr", "FR"], ["head", "Proteção de cabeça"],
    ["cape", "Capa / vedação"], ["flow", "Controle de fluxo"], ["filter", "Filtro"],
    ["belt", "Cinto / mochila"], ["fitting", "Conexão de ar"],
  ];
  const ALL_FACETS = [["region", "Região"], ...FACETS];
  const Q_PT = {
    product: "Qual produto?", fr: "Precisa ser FR (resistente a chama)?", head: "Qual proteção de cabeça?",
    cape: "Qual capa ou vedação?", flow: "Qual controle de fluxo?", filter: "Qual tipo de filtro?",
    belt: "Cinto ou mochila?", fitting: "Qual conexão de ar?",
  };
  const VAL_PT = {
    "Hard Hat": "Capacete", "Head Suspension": "Suspensão", "Bump Cap": "Boné de proteção",
    "Waist Belt": "Cinto", "Back Pack": "Mochila", "Supplied Air": "Ar mandado",
    "Head Top Only": "Só headtop", "No Fitting": "Sem conexão", "Non FR": "Não FR",
    "N/A": "Não se aplica", "Constant Flow": "Fluxo constante", "Flow Control Valve": "Válvula de fluxo",
    "Low Pressure": "Baixa pressão", "Standard Nylon": "Nylon padrão", "Leather Cape": "Capa de couro",
    "Aluminized Cape": "Capa aluminizada",
  };
  const SP_PT = {
    cape: "Capa / vedação", lens: "Lente principal", tear: "Tear-off", lens2: "Outra lente",
    pad: "Acolchoamento", flow: "Controle de fluxo", tube: "Traqueia", extra: "Extras",
    belt: "Cinto", fit: "Conexão", filter: "Filtro principal", pre: "Pré-filtro",
    spark: "Corta-faísca", batt: "Bateria",
  };
  const REGION = {
    NIOSH: { t: "NIOSH", s: "Estados Unidos e mercados que exigem aprovação NIOSH (42 CFR 84)", icon: "halfmask" },
    World: { t: "World", s: "Internacional — certificação CE / normas EN", icon: "compass" },
  };
  const vl = (v) => VAL_PT[v] || v;
  const isCode = (c) => /\d/.test(c) && !/\s[a-z]/i.test(c.replace(/^[^ ]+/, ""));
  const data = () => window.GVS_KITS || { kits: [], parts: {} };

  /* ── 0. Região (antetela) ───────────────────────────────────────── */
  function KitRegion({ ctx }) {
    const { nav, setKitSel } = ctx;
    const D = data();
    const count = (r) => D.kits.filter((k) => k.a.region === r).length;
    return (
      <section className="g-screen g-pad">
        <StepHead kicker="Kit Finder · Modo comercial" title="Qual certificação?"
          sub="Os kits NIOSH e World têm códigos e componentes diferentes. Escolha antes de filtrar." />
        <div className="g-home-grid">
          {Object.entries(REGION).map(([r, m]) => (
            <BigCard key={r} icon={m.icon} title={m.t} sub={`${m.s} · ${count(r)} kits`} accent={r === "NIOSH"}
              onClick={() => { setKitSel({ region: r }); ctx.setKitStep && ctx.setKitStep({ skip: [] }); nav("kits"); }} />
          ))}
        </div>
      </section>
    );
  }

  /* ── helpers de filtro ─────────────────────────────────────────── */
  function useFilter(sel, qx) {
    const D = data();
    const textOK = (k) => !qx || k.pn.toLowerCase().includes(qx) || k.d.toLowerCase().includes(qx)
      || k.comps.some((c) => c.toLowerCase().includes(qx));
    const match = (k, except) => ALL_FACETS.every(([f]) => f === except || !sel[f] || k.a[f] === sel[f]);
    const results = useMemo(() => D.kits.filter((k) => match(k) && textOK(k)), [sel, qx]);
    const options = useMemo(() => {
      const o = {};
      FACETS.forEach(([f]) => {
        const cnt = {};
        D.kits.forEach((k) => { if (match(k, f) && textOK(k)) cnt[k.a[f]] = (cnt[k.a[f]] || 0) + 1; });
        const base = [...new Set(D.kits.filter((k) => !sel.region || k.a.region === sel.region).map((k) => k.a[f]))];
        o[f] = base.map((v) => ({ v, n: cnt[v] || 0 }))
          .sort((a, b) => (b.n > 0) - (a.n > 0) || b.n - a.n || a.v.localeCompare(b.v));
      });
      return o;
    }, [sel, qx]);
    return { results, options };
  }

  function RegionBar({ ctx }) {
    const r = ctx.kitSel.region;
    if (!r) return null;
    return (
      <div className="kf-region">
        <span className="kf-region-b">{r}</span>
        <span className="kf-region-t">{REGION[r] && REGION[r].s}</span>
        <button className="kf-clear1" onClick={() => ctx.nav("kitregion")}>trocar</button>
      </div>
    );
  }

  function KitList({ results, ctx, limit = 120 }) {
    const { nav, setKit } = ctx;
    if (results.length === 0) return <div className="g-empty"><GVSIcon name="grid" size={52} /><p>Nenhum kit com essa combinação</p></div>;
    return (
      <div className="kf-list">
        {results.slice(0, limit).map((k) => (
          <button key={k.pn} className="kf-kit" onClick={() => { setKit(k); nav("kit"); }}>
            <div className="kf-kit-top">
              <span className="g-prod-code">{k.pn}</span>
              <span className="kf-kit-prod">{k.a.product}</span>
            </div>
            <div className="kf-kit-d clamp2">{k.d}</div>
            <div className="kf-tags">
              {["flow", "cape", "filter", "fr"].map((f) => k.a[f] && k.a[f] !== "N/A" &&
                <span key={f} className="kf-tag">{vl(k.a[f])}</span>)}
            </div>
          </button>
        ))}
        {results.length > limit && <p className="g-note">Mostrando {limit} de {results.length}. Refine os filtros.</p>}
      </div>
    );
  }

  /* ── 1a. Layout "Filtros" ──────────────────────────────────────── */
  function KitsFacets({ ctx }) {
    const { kitSel: sel, setKitSel: setSel } = ctx;
    const [q, setQ] = useState("");
    const { results, options } = useFilter(sel, q.trim().toLowerCase());
    const toggle = (f, v) => setSel((s) => { const n = { ...s }; if (n[f] === v) delete n[f]; else n[f] = v; return n; });
    const chosen = Object.entries(sel).filter(([f]) => f !== "region");

    return (
      <section className="g-screen">
        <div className="g-pad kf-pad">
          <StepHead kicker="Modo comercial" title="Kit Finder"
            sub="Escolha os atributos em qualquer ordem. Só aparecem opções que ainda levam a algum kit." />
          <RegionBar ctx={ctx} />
          <div className="kf-layout">
            <aside className="kf-facets">
              <div className="kf-search">
                <UIIcon name="grid" size={18} />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar por código ou descrição" />
                {q && <button onClick={() => setQ("")} aria-label="Limpar busca"><UIIcon name="x" size={16} /></button>}
              </div>
              {FACETS.map(([f, label]) => (
                <div key={f} className="kf-facet">
                  <div className="kf-facet-h">
                    <span>{label}</span>
                    {sel[f] && <button className="kf-clear1" onClick={() => toggle(f, sel[f])}>limpar</button>}
                  </div>
                  <div className="kf-chips">
                    {options[f].map(({ v, n }) => {
                      const on = sel[f] === v;
                      return (
                        <button key={v} className={"kf-chip" + (on ? " on" : "")} disabled={!on && n === 0}
                          onClick={() => toggle(f, v)}>
                          <span>{vl(v)}</span><em>{n}</em>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </aside>
            <div className="kf-results">
              <div className="kf-res-h">
                <div><b>{results.length}</b> {results.length === 1 ? "kit" : "kits"}</div>
                {chosen.length > 0 && <button className="g-btn ghost kf-reset" onClick={() => setSel({ region: sel.region })}>Limpar filtros ({chosen.length})</button>}
              </div>
              {chosen.length > 0 && (
                <div className="kf-pills">
                  {chosen.map(([f, v]) => (
                    <button key={f} className="kf-pill" onClick={() => toggle(f, v)}>{vl(v)} <UIIcon name="x" size={13} /></button>
                  ))}
                </div>
              )}
              <KitList results={results} ctx={ctx} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ── 1b. Layout "Passo a passo" ────────────────────────────────── */
  function KitsWizard({ ctx }) {
    const { kitSel: sel, setKitSel: setSel, kitStep, setKitStep } = ctx;
    const skip = kitStep.skip || [];
    const showAll = !!kitStep.showAll;
    const { results, options } = useFilter(sel, "");
    const avail = (f) => options[f].filter((o) => o.n > 0);
    const pending = FACETS.filter(([f]) => !sel[f] && !skip.includes(f) && avail(f).length > 1);
    const cur = !showAll && results.length > 1 ? pending[0] : null;
    const done = FACETS.filter(([f]) => sel[f] || skip.includes(f));

    const choose = (f, v) => { setSel((s) => ({ ...s, [f]: v })); document.querySelector(".g-main")?.scrollTo(0, 0); };
    const doSkip = (f) => setKitStep((s) => ({ ...s, skip: [...(s.skip || []), f] }));
    const reopen = (f) => {
      const idx = FACETS.findIndex(([x]) => x === f);
      const later = FACETS.slice(idx).map(([x]) => x);
      setSel((s) => { const n = { ...s }; later.forEach((x) => delete n[x]); return n; });
      setKitStep((s) => ({ skip: (s.skip || []).filter((x) => !later.includes(x)), showAll: false }));
    };
    const stepNo = done.length + 1;
    const total = done.length + pending.length;

    return (
      <section className="g-screen">
        <div className="g-pad">
          <RegionBar ctx={ctx} />
          {done.length > 0 && (
            <div className="kf-crumbs">
              {done.map(([f, l]) => (
                <button key={f} className={"kf-crumb" + (sel[f] ? "" : " skip")} onClick={() => reopen(f)}>
                  <span>{l}</span><b>{sel[f] ? vl(sel[f]) : "Qualquer"}</b>
                </button>
              ))}
            </div>
          )}

          {cur ? (
            <>
              <StepHead kicker={`Passo ${stepNo} de ${total} · ${results.length} kits possíveis`} title={Q_PT[cur[0]]} />
              <div className="kf-opts">
                {avail(cur[0]).map(({ v, n }) => (
                  <button key={v} className="kf-opt" onClick={() => choose(cur[0], v)}>
                    <span className="kf-opt-t">{vl(v)}</span>
                    {vl(v) !== v && <span className="kf-opt-en">{v}</span>}
                    <span className="kf-opt-n">{n} {n === 1 ? "kit" : "kits"}</span>
                  </button>
                ))}
              </div>
              <div className="g-actionbar">
                <button className="g-btn ghost" onClick={() => doSkip(cur[0])}>Tanto faz — pular</button>
                <div className="g-actionbar-sp" />
                <button className="g-btn primary" onClick={() => setKitStep((s) => ({ ...s, showAll: true }))}>
                  Ver {results.length} kits <UIIcon name="arrowR" size={20} />
                </button>
              </div>
            </>
          ) : (
            <>
              <StepHead kicker="Resultado"
                title={results.length === 1 ? "Kit encontrado" : `${results.length} kits encontrados`}
                sub={results.length > 1 && pending.length === 0 ? "Esses kits têm os mesmos atributos — compare pela descrição." : null} />
              <KitList results={results} ctx={ctx} />
              {showAll && pending.length > 0 && (
                <div className="g-actionbar">
                  <div className="g-actionbar-sp" />
                  <button className="g-btn ghost" onClick={() => setKitStep((s) => ({ ...s, showAll: false }))}>
                    Continuar filtrando
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    );
  }

  function Kits({ ctx }) {
    if (!ctx.kitSel.region) return <KitRegion ctx={ctx} />;
    return (ctx.tw && ctx.tw.kfLayout === "wizard") ? <KitsWizard ctx={ctx} /> : <KitsFacets ctx={ctx} />;
  }

  /* ── 2. Detalhe do kit ─────────────────────────────────────────── */
  function Kit({ ctx }) {
    const D = data();
    const { kit: k } = ctx;
    const [copied, setCopied] = useState(false);
    if (!k) return null;
    const part = (c) => D.parts[c] || { d: "" };
    const spares = k.sp.filter((s) => isCode(s.c));
    const text = [
      `${k.pn} — ${k.d}`, "",
      "Atributos: " + ALL_FACETS.map(([f, l]) => `${l}: ${vl(k.a[f])}`).join(" · "), "",
      k.comps.length ? "Inclui:\n" + k.comps.map((c) => `  ${c}  ${part(c).d}`).join("\n") : "",
      spares.length ? "\nReposição:\n" + spares.map((s) => `  [${SP_PT[s.k] || s.k}] ${s.c}  ${part(s.c).d}`).join("\n") : "",
    ].join("\n");
    const copy = async () => {
      try { await navigator.clipboard.writeText(text); }
      catch (e) { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); }
      setCopied(true); setTimeout(() => setCopied(false), 1800);
    };
    const Row = ({ code, tag }) => {
      const p = part(code);
      return (
        <div className="kf-row">
          <div className="kf-row-img">
            {p.img ? <img src={p.img} alt="" loading="lazy" /> : <GVSIcon name="cartridge" size={26} />}
          </div>
          <div className="kf-row-tx">
            <div className="kf-row-top"><span className="g-prod-code">{code}</span>{tag && <span className="kf-tag">{tag}</span>}</div>
            <div className="kf-row-d">{p.d || "—"}</div>
          </div>
        </div>
      );
    };
    return (
      <section className="g-screen">
        <div className="g-pad">
          <div className="g-stephead">
            <div className="g-kicker">{k.a.product} · Kit {k.a.region}</div>
            <h1 className="g-h1">{k.pn}</h1>
            <p className="g-sub">{k.d}</p>
          </div>
          <div className="kf-attrs">
            {ALL_FACETS.map(([f, l]) => (
              <div key={f} className="kf-attr"><span>{l}</span><b>{vl(k.a[f])}</b></div>
            ))}
          </div>
          {k.comps.length > 0 && (<>
            <h3 className="g-fam-h mt">O kit inclui</h3>
            <div className="kf-rows">{k.comps.map((c) => <Row key={c} code={c} />)}</div>
          </>)}
          <h3 className="g-fam-h mt">Peças de reposição</h3>
          {spares.length === 0
            ? <p className="g-note">Sem peças de reposição cadastradas na Quote Tool para este kit.</p>
            : <div className="kf-rows">{spares.map((s, i) => <Row key={s.c + i} code={s.c} tag={SP_PT[s.k] || s.k} />)}</div>}
          <div className="g-actionbar">
            <div className="g-actionbar-sp" />
            <button className="g-btn primary" onClick={copy}>
              <UIIcon name={copied ? "check" : "cart"} size={20} /> {copied ? "Copiado" : "Copiar lista"}
            </button>
          </div>
        </div>
      </section>
    );
  }

  Object.assign(window, { ScreenKits: Kits, ScreenKit: Kit, ScreenKitRegion: KitRegion });
})();
