/* GVS — Ícones de linha (SVG). Uso: <GVSIcon name="papr" />  herda currentColor.
   Todos no viewBox 24×24, traço arredondado. Escalam para qualquer tamanho. */
(function () {
  const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };

  const P = {
    // ── LINHAS / HEADTOPS ────────────────────────────────────────────────
    halfmask: (<><path d="M4 9c0-1 1-2 3-2h10c2 0 3 1 3 2 0 1.2-.4 2.3-1.2 3.2C20.5 13 21 14 21 15c0 2.2-3.6 4-9 4s-9-1.8-9-4c0-1 .5-2 1.2-2.8C3.4 11.3 3 10.2 3 9" transform="translate(0 0)"/><circle cx="8.5" cy="13.5" r="1.4"/><circle cx="15.5" cy="13.5" r="1.4"/><path d="M11 7V4M13 7V4"/></>),
    fullface: (<><path d="M5 7c0-1.7 3.1-3 7-3s7 1.3 7 3v6c0 3.3-3.1 6-7 6s-7-2.7-7-6V7Z"/><path d="M6.5 9c0-1 2.5-1.8 5.5-1.8S17.5 8 17.5 9v2.2c0 1.5-2.5 2.6-5.5 2.6S6.5 12.7 6.5 11.2V9Z"/><path d="M9.5 17.5c0 1 1.1 1.6 2.5 1.6s2.5-.6 2.5-1.6"/></>),
    hood: (<><path d="M12 3c4.4 0 8 2.9 8 7v5c0 2.2-1.4 3-3 3H7c-1.6 0-3-.8-3-3v-5c0-4.1 3.6-7 8-7Z"/><path d="M8.5 12.5h7c1 0 1.5.6 1.5 1.5s-.5 1.8-1.5 2.3"/><path d="M8.5 16.3C7.5 15.8 7 15 7 14s.5-1.5 1.5-1.5"/></>),
    helmet: (<><path d="M3.5 16c0-5 3.8-9 8.5-9s8.5 4 8.5 9"/><path d="M2.5 16h19v1.5c0 .8-.7 1.5-1.5 1.5H4c-.8 0-1.5-.7-1.5-1.5V16Z"/><path d="M12 7V4M9.5 16v-3.5M14.5 16v-3.5"/></>),
    weld: (<><path d="M6 4h9l2 3v9c0 .8-.7 1.5-1.5 1.5h-9C5.7 17.5 5 16.8 5 16V7l1-3Z"/><rect x="7.5" y="8" width="8" height="3.2" rx="1"/><path d="M5 7h12"/><path d="M9 14.5h5"/></>),
    gauge: (<><path d="M3 13a9 9 0 0 1 18 0"/><path d="M3 13h2M19 13h2M12 4v2"/><path d="m12 13 4-3"/><circle cx="12" cy="13" r="1.4"/><path d="M5 19h14"/></>),
    multigas: (<><rect x="6" y="3" width="12" height="18" rx="2"/><rect x="8.5" y="6" width="7" height="5" rx="1"/><circle cx="9.5" cy="15" r="1"/><circle cx="14.5" cy="15" r="1"/><path d="M9 18.5h6"/></>),
    filterpanel: (<><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7 5v14M11 5v14M15 5v14M3.5 9.5h17M3.5 14.5h17"/></>),
    papr: (<><circle cx="12" cy="12" r="7.5"/><path d="M12 12c0-3 .8-5.5 2.2-5.2 1.3.3 1.5 2.3.4 4.2M12 12c2.6-1.5 5.1-2 5.5-.7.4 1.2-1.3 2.5-3.5 3M12 12c1.6 2.6 2 5.1.7 5.5-1.2.4-2.5-1.3-3-3.5M12 12c-3 0-5.5-.8-5.2-2.2.3-1.3 2.3-1.5 4.2-.4"/><circle cx="12" cy="12" r="1.6"/></>),
    airline: (<><path d="M4 12h7"/><circle cx="14.5" cy="12" r="3.5"/><path d="M14.5 8.5V12l2.3 1.6"/><path d="M4 9v6M6.5 10.5v3"/><path d="M18 12h2"/></>),

    // ── ACESSÓRIOS ───────────────────────────────────────────────────────
    filter: (<><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.2"/><path d="M12 4v3M12 17v3M4 12h3M17 12h3"/></>),
    cartridge: (<><rect x="6" y="4" width="12" height="13" rx="2"/><path d="M9 17v2.5c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5V17"/><path d="M6 8.5h12M9 11.5h6"/></>),
    prefilter: (<><path d="M5 6h14l-1.5 5L19 18H5l1.5-7L5 6Z"/><path d="M7.5 9.5h9M8.5 13.5h7"/></>),
    visor: (<><path d="M4 9c0-1 .7-2 2-2h12c1.3 0 2 1 2 2 0 4-2.5 7-8 7S4 13 4 9Z"/><path d="M6 9.5c1.8-.6 4-.9 6-.9s4.2.3 6 .9"/></>),
    seal: (<><ellipse cx="12" cy="12" rx="8" ry="6"/><ellipse cx="12" cy="12" rx="4.5" ry="3"/></>),
    blower: (<><rect x="4" y="7" width="13" height="10" rx="2"/><circle cx="10.5" cy="12" r="2.6"/><path d="M17 10h2.5c.8 0 1.5.7 1.5 1.5v1c0 .8-.7 1.5-1.5 1.5H17"/><path d="M5 19h11"/></>),
    battery: (<><rect x="4" y="8" width="15" height="9" rx="2"/><path d="M19 11h1.5c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5H19"/><path d="M8 12.5h5M10.5 10v5"/></>),
    hose: (<><path d="M5 6v3c0 4 3 4 3 7v2"/><path d="M5 6c0-.6.4-1 1-1h2c.6 0 1 .4 1 1"/><path d="M19 18v-3c0-4-3-4-3-7V6"/><path d="M19 18c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1"/><path d="M9 9.5c1.5 1 4.5 1 6-.5"/></>),
    valve: (<><circle cx="12" cy="12" r="3"/><path d="M12 9V4M12 20v-5M9 12H4M20 12h-5"/><path d="M7 4h10M7 20h10"/></>),
    sensor: (<><rect x="5" y="5" width="14" height="14" rx="3"/><circle cx="12" cy="12" r="3"/><path d="M12 5V3M12 21v-2M5 12H3M21 12h-2"/></>),

    // ── ATIVIDADES ───────────────────────────────────────────────────────
    spray: (<><rect x="9" y="8" width="7" height="12" rx="1.5"/><path d="M9 11h7"/><path d="M9 8V6h4v2"/><path d="M16 7h2M16 9.5h3M16 12h2"/><path d="M19 6.5l1-1M20 9.5h1.2M19 12.5l1 1"/></>),
    health: (<><path d="M12 20S4 14.5 4 9.2C4 6.3 6.2 4.5 8.6 4.5c1.6 0 3 .9 3.4 2 .4-1.1 1.8-2 3.4-2C18 4.5 20 6.3 20 9.2 20 14.5 12 20 12 20Z"/><path d="M9 11h2v-2h2v2h2v2h-2v2h-2v-2H9z" fill="currentColor" stroke="none"/></>),
    pharma: (<><rect x="5" y="3" width="8" height="3" rx="1"/><path d="M6 6h6v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z"/><path d="M6 12h6"/><path d="M16 13l4 4M18 11l4 4" transform="translate(-1 0)"/><circle cx="17.5" cy="8.5" r="2.5"/></>),
    mining: (<><path d="M4 19l7-7"/><path d="M13 6c2 0 5 1 7 4-3 1-5 .5-6.5-.5M13 6c0 2 .5 4 1.5 5.5M13 6c-2 0-4 .5-5.5 1.5"/><path d="m9 14 1.5 1.5"/></>),
    factory: (<><path d="M3 20V11l5 3V11l5 3V8l6 4v8H3Z"/><path d="M3 20h18"/><path d="M6 8 5.5 5h2L7 8"/><path d="M10 16h2M15 16h2"/></>),
    blast: (<><path d="M4 12c3-1 5-1 7 0"/><circle cx="16" cy="12" r="4"/><path d="M16 8v8M12 12h8M13.5 9.5l5 5M18.5 9.5l-5 5"/><path d="M4 9.5c2-.5 3.5-.5 5 0M4 14.5c2 .5 3.5.5 5 0"/></>),
    foundry: (<><path d="M5 8h11l-1 4c-.5 2-2 3-4.5 3S6.5 14 6 12L5 8Z"/><path d="M16 9h2.5a1.5 1.5 0 0 1 0 3H15.5"/><path d="M8 18h7"/><path d="M9 5c0 .8-.6 1-.6 1.8M12 4.5c0 1-.7 1.2-.7 2M15 5c0 .8-.6 1-.6 1.8"/></>),
    chem: (<><path d="M10 3v6l-4.5 8c-.6 1 .1 2.3 1.3 2.3h10.4c1.2 0 1.9-1.3 1.3-2.3L14 9V3"/><path d="M9 3h6"/><path d="M7.5 14h9"/><circle cx="11" cy="16" r="1"/><circle cx="14" cy="17.5" r=".8"/></>),
    agro: (<><path d="M12 21V9"/><path d="M12 9c0-2.5-1.5-4.5-4-5 .2 2.7 1.6 4.4 4 5Z"/><path d="M12 11c0-2.5 1.5-4.5 4-5-.2 2.7-1.6 4.4-4 5Z"/><path d="M12 14c-2.2 0-4-1.2-4.5-3 2.4-.3 4 .8 4.5 3Z"/><path d="M12 14c2.2 0 4-1.2 4.5-3-2.4-.3-4 .8-4.5 3Z"/><path d="M7 21h10"/></>),
    construction: (<><path d="M3.5 15c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5"/><path d="M2.5 15h19v1.5c0 .8-.7 1.5-1.5 1.5H4c-.8 0-1.5-.7-1.5-1.5V15Z"/><path d="M12 6.5V4M9.5 4h5"/><path d="M9 21h6"/><path d="M10.5 18v3M13.5 18v3"/></>),
    elipse: (<><path d="M3 11c0-1.4 1.2-2.4 3.4-2.7C8 6.9 9.8 6.2 12 6.2s4 .7 5.6 2.1C19.8 8.6 21 9.6 21 11c0 1.1-.7 2-1.9 2.7-1 .6-2.3 1-3.6 1.1C14.4 16 13.3 16.6 12 16.6s-2.4-.6-3.5-1.8c-1.3-.1-2.6-.5-3.6-1.1C3.7 13 3 12.1 3 11Z"/><circle cx="6.3" cy="11" r="1.5"/><circle cx="17.7" cy="11" r="1.5"/><path d="M10 16.4c0 .9.9 1.4 2 1.4s2-.5 2-1.4"/></>),
    sar: (<><path d="M5 11c0-1 .9-1.7 2.5-2C9 7.6 10.4 7 12 7s3 .6 4.5 2c1.6.3 2.5 1 2.5 2 0 1.6-3.1 3-7 3s-7-1.4-7-3Z"/><circle cx="9" cy="11" r="1.2"/><circle cx="15" cy="11" r="1.2"/><path d="M12 14c0 .8.7 1.3 1.8 1.3"/><path d="M5 11c-1.2.3-2 1.1-2 2.2V18"/><path d="M3 18c0 .7.6 1.2 1.3 1.2"/></>),

    // ── HOME ─────────────────────────────────────────────────────────────
    compass: (<><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" fill="currentColor" fillOpacity=".12"/><circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none"/></>),
    grid: (<><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></>),
  };

  function GVSIcon({ name, size = 24, strokeWidth, style, className }) {
    const body = P[name] || P.filter;
    const props = { ...S };
    if (strokeWidth) props.strokeWidth = strokeWidth;
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} style={style} className={className}
           aria-hidden="true" {...props}>
        {body}
      </svg>
    );
  }

  // ── ÍCONES DE UI (controles) ───────────────────────────────────────────
  const UI = {
    cart: "M3 4h2l1.6 10.2a1.5 1.5 0 0 0 1.5 1.3h7.6a1.5 1.5 0 0 0 1.5-1.2L19 7H6M9 20a1 1 0 1 0 .01 0M17 20a1 1 0 1 0 .01 0",
    check: "M5 12.5 10 17l9-10",
    plus: "M12 5v14M5 12h14",
    minus: "M5 12h14",
    left: "M15 5l-7 7 7 7",
    right: "M9 5l7 7-7 7",
    x: "M6 6l12 12M18 6 6 18",
    play: "M8 5v14l11-7z",
    trash: "M5 7h14M9 7V5h6v2M7 7l1 13h8l1-13",
    home: "M4 11l8-7 8 7M6 10v9h12v-9",
    spark: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M18 6l-2.5 2.5M6 18l2.5-2.5M18 18l-2.5-2.5",
    globe: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18",
    arrowR: "M5 12h14M13 6l6 6-6 6",
  };
  function UIIcon({ name, size = 24, strokeWidth = 1.8, style, className, fill = false }) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} style={style} className={className}
           fill={fill ? "currentColor" : "none"} stroke={fill ? "none" : "currentColor"}
           strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={UI[name] || UI.check} />
      </svg>
    );
  }

  Object.assign(window, { GVSIcon, UIIcon });
})();
