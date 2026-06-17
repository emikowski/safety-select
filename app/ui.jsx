/* GVS — Componentes de UI compartilhados. Dependências globais:
   GVSIcon, UIIcon (icons.jsx), GVS_I18N. CSS em classes (no HTML principal). */
(function () {
  const { GVSIcon, UIIcon } = window;

  // ── Descrição localizada (PT/EN/ES) — usa data/desc-i18n.js ─────────────
  const descOf = (p, lang) => {
    const key = (p && typeof p.desc === "string") ? p.desc : "";
    const m = window.GVS_DESC_I18N && window.GVS_DESC_I18N[key];
    if (!m) return p ? p.desc : "";
    return m[lang] || p.desc;
  };
  window.descOf = descOf;

  // ── Barra superior (logo · idioma · carrinho) ──────────────────────────
  function Chrome({ t, lang, setLang, count, onCart, onHome, showHome }) {
    const langs = [["pt", "PT"], ["en", "EN"], ["es", "ES"]];
    return (
      <header className="g-chrome">
        <button className="g-logo" onClick={onHome} aria-label="GVS">
          <img className="g-logo-img" src="assets/logo-gvs.png" alt="GVS" />
          <span className="g-logo-sub">{t.powered}</span>
        </button>

        <div className="g-chrome-right">
          {showHome && (
            <button className="g-icbtn" onClick={onHome} aria-label={t.home}>
              <UIIcon name="home" size={22} />
            </button>
          )}
          <div className="g-lang" role="group" aria-label="Idioma">
            {langs.map(([code, label]) => (
              <button key={code} className={"g-lang-b" + (lang === code ? " on" : "")}
                      onClick={() => setLang(code)}>{label}</button>
            ))}
          </div>
          <button className="g-cart" onClick={onCart} aria-label={t.my_config}>
            <UIIcon name="cart" size={24} />
            {count > 0 && <span className="g-cart-badge">{count}</span>}
          </button>
        </div>
      </header>
    );
  }

  // ── Cabeçalho de etapa ──────────────────────────────────────────────────
  function StepHead({ kicker, title, sub }) {
    return (
      <div className="g-stephead">
        {kicker && <div className="g-kicker">{kicker}</div>}
        <h1 className="g-h1">{title}</h1>
        {sub && <p className="g-sub">{sub}</p>}
      </div>
    );
  }

  // ── Card grande (home / atividades / linhas) ────────────────────────────
  function BigCard({ icon, img, title, sub, badge, onClick, accent }) {
    return (
      <button className={"g-bigcard" + (accent ? " accent" : "")} onClick={onClick}>
        {badge && <span className="g-badge">{badge}</span>}
        <span className={"g-bigcard-ic" + (img ? " has-img" : "")}>
          {img ? <img className="g-bigcard-img" src={img} alt="" /> : <GVSIcon name={icon} size={88} strokeWidth={1.3} />}
        </span>
        <span className="g-bigcard-tx">
          <span className="g-bigcard-t">{title}</span>
          {sub && <span className="g-bigcard-s">{sub}</span>}
        </span>
        <span className="g-bigcard-go"><UIIcon name="right" size={22} /></span>
      </button>
    );
  }

  // ── Media (foto OU ícone grande) ────────────────────────────────────────
  function Media({ img, icon, big }) {
    return (
      <div className={"g-media" + (big ? " big" : "")}>
        {img
          ? <img src={img} alt="" className="g-media-img" />
          : <GVSIcon name={icon} size={big ? 120 : 72} strokeWidth={1.2} />}
      </div>
    );
  }

  // ── Stepper de quantidade ────────────────────────────────────────────────
  function Stepper({ value, onDec, onInc }) {
    return (
      <div className="g-step" onClick={(e) => e.stopPropagation()}>
        <button className="g-step-b" onClick={onDec} aria-label="-"><UIIcon name="minus" size={18} /></button>
        <span className="g-step-v">{value}</span>
        <button className="g-step-b" onClick={onInc} aria-label="+"><UIIcon name="plus" size={18} /></button>
      </div>
    );
  }

  // ── Card de produto (item real do catálogo) ────────────────────────────
  function ProductCard({ p, t, lang, selected, onToggle, onVideo }) {
    return (
      <button className={"g-prod" + (selected ? " on" : "")} onClick={onToggle}>
        <Media img={p.img} icon={p.icon} />
        <div className="g-prod-body">
          <div className="g-prod-code">{p.code}</div>
          <div className="g-prod-name clamp3">{descOf(p, lang)}</div>
          {p.cert && /[A-Za-z]/.test(p.cert) ? <div className="g-prod-cert">{p.cert}</div> : null}
        </div>
        <div className="g-prod-foot" onClick={(e) => e.stopPropagation()}>
          {p.video
            ? <span className="g-vbtn" onClick={onVideo}><UIIcon name="play" size={15} fill /> {t.watch_video}</span>
            : <span />}
          {selected
            ? <span className="g-prod-cta on" onClick={onToggle}><UIIcon name="check" size={18} /> {t.added}</span>
            : <span className="g-prod-cta" onClick={onToggle}><UIIcon name="plus" size={18} /> {t.add}</span>}
        </div>
        {selected && <span className="g-prod-tick"><UIIcon name="check" size={20} /></span>}
      </button>
    );
  }

  // ── Botões ───────────────────────────────────────────────────────────────
  function PrimaryBtn({ children, onClick, disabled, full, icon }) {
    return (
      <button className={"g-btn primary" + (full ? " full" : "")} onClick={onClick} disabled={disabled}>
        {children}{icon && <UIIcon name={icon} size={22} />}
      </button>
    );
  }
  function GhostBtn({ children, onClick, icon, iconLeft }) {
    return (
      <button className="g-btn ghost" onClick={onClick}>
        {iconLeft && <UIIcon name={iconLeft} size={20} />}{children}{icon && <UIIcon name={icon} size={20} />}
      </button>
    );
  }

  // ── Modal de vídeo ───────────────────────────────────────────────────────
  function VideoModal({ p, t, lang, onClose }) {
    if (!p) return null;
    return (
      <div className="g-modal" onClick={onClose}>
        <div className="g-modal-box" onClick={(e) => e.stopPropagation()}>
          <div className="g-modal-head">
            <div>
              <div className="g-prod-code">{p.code}</div>
              <div className="g-modal-title">{descOf(p, lang)}</div>
            </div>
            <button className="g-icbtn" onClick={onClose} aria-label={t.close}><UIIcon name="x" size={22} /></button>
          </div>
          <div className="g-video">
            {p.video
              ? <video src={p.video} controls autoPlay playsInline style={{ width: "100%", height: "100%", objectFit: "contain", background: "#000" }} />
              : <div className="g-video-ph"><UIIcon name="play" size={56} fill /><span>{t.watch_video} · {p.code}</span></div>}
          </div>
        </div>
      </div>
    );
  }

  // ── Barra inferior de ação ───────────────────────────────────────────────
  function ActionBar({ left, right }) {
    return <div className="g-actionbar">{left}<div className="g-actionbar-sp" />{right}</div>;
  }

  Object.assign(window, {
    GVSChrome: Chrome, StepHead, BigCard, Media, Stepper,
    ProductCard, PrimaryBtn, GhostBtn, VideoModal, ActionBar, descOf,
  });
})();
