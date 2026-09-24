/* GVS Safety Select — código pré-compilado (gerado a partir de app/*.jsx e index.html). NÃO editar à mão. */
/* tweaks-panel.jsx */
;const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}
function TweaksPanel(_ref) {
  let {
    title = 'Tweaks',
    children
  } = _ref;
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      var _e$data;
      const t = e === null || e === void 0 || (_e$data = e.data) === null || _e$data === void 0 ? void 0 : _e$data.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return React.createElement(React.Fragment, null, React.createElement("style", null, __TWEAKS_STYLE), React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, React.createElement("b", null, title), React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), React.createElement("div", {
    className: "twk-body"
  }, children)));
}
function TweakSection(_ref2) {
  let {
    label,
    children
  } = _ref2;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow(_ref3) {
  let {
    label,
    value,
    children,
    inline = false
  } = _ref3;
  return React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, React.createElement("div", {
    className: "twk-lbl"
  }, React.createElement("span", null, label), value != null && React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}
function TweakSlider(_ref4) {
  let {
    label,
    value,
    min = 0,
    max = 100,
    step = 1,
    unit = '',
    onChange
  } = _ref4;
  return React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle(_ref5) {
  let {
    label,
    value,
    onChange
  } = _ref5;
  return React.createElement("div", {
    className: "twk-row twk-row-h"
  }, React.createElement("div", {
    className: "twk-lbl"
  }, React.createElement("span", null, label)), React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, React.createElement("i", null)));
}
function TweakRadio(_ref6) {
  var _$3$options$length;
  let {
    label,
    value,
    options,
    onChange
  } = _ref6;
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const valueRef = React.useRef(value);
  valueRef.current = value;
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ((_$3$options$length = {
    2: 16,
    3: 10
  }[options.length]) !== null && _$3$options$length !== void 0 ? _$3$options$length : 0);
  if (!fitsAsSegments) {
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect(_ref7) {
  let {
    label,
    value,
    options,
    onChange
  } = _ref7;
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText(_ref8) {
  let {
    label,
    value,
    placeholder,
    onChange
  } = _ref8;
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber(_ref9) {
  let {
    label,
    value,
    min,
    max,
    step = 1,
    unit = '',
    onChange
  } = _ref9;
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return React.createElement("div", {
    className: "twk-num"
  }, React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = _ref0 => {
  let {
    light
  } = _ref0;
  return React.createElement("svg", {
    viewBox: "0 0 14 14",
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: "M3 7.2 5.8 10 11 4.2",
    fill: "none",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
  }));
};
function TweakColor(_ref1) {
  let {
    label,
    value,
    options,
    onChange
  } = _ref1;
  if (!options || !options.length) {
    return React.createElement("div", {
      className: "twk-row twk-row-h"
    }, React.createElement("div", {
      className: "twk-lbl"
    }, React.createElement("span", null, label)), React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && React.createElement("span", null, sup.map((c, j) => React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton(_ref10) {
  let {
    label,
    onClick,
    secondary = false
  } = _ref10;
  return React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
/* app/icons.jsx */
;function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const S = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const P = {
    halfmask: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M4 9c0-1 1-2 3-2h10c2 0 3 1 3 2 0 1.2-.4 2.3-1.2 3.2C20.5 13 21 14 21 15c0 2.2-3.6 4-9 4s-9-1.8-9-4c0-1 .5-2 1.2-2.8C3.4 11.3 3 10.2 3 9",
      transform: "translate(0 0)"
    }), React.createElement("circle", {
      cx: "8.5",
      cy: "13.5",
      r: "1.4"
    }), React.createElement("circle", {
      cx: "15.5",
      cy: "13.5",
      r: "1.4"
    }), React.createElement("path", {
      d: "M11 7V4M13 7V4"
    })),
    fullface: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M5 7c0-1.7 3.1-3 7-3s7 1.3 7 3v6c0 3.3-3.1 6-7 6s-7-2.7-7-6V7Z"
    }), React.createElement("path", {
      d: "M6.5 9c0-1 2.5-1.8 5.5-1.8S17.5 8 17.5 9v2.2c0 1.5-2.5 2.6-5.5 2.6S6.5 12.7 6.5 11.2V9Z"
    }), React.createElement("path", {
      d: "M9.5 17.5c0 1 1.1 1.6 2.5 1.6s2.5-.6 2.5-1.6"
    })),
    hood: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M12 3c4.4 0 8 2.9 8 7v5c0 2.2-1.4 3-3 3H7c-1.6 0-3-.8-3-3v-5c0-4.1 3.6-7 8-7Z"
    }), React.createElement("path", {
      d: "M8.5 12.5h7c1 0 1.5.6 1.5 1.5s-.5 1.8-1.5 2.3"
    }), React.createElement("path", {
      d: "M8.5 16.3C7.5 15.8 7 15 7 14s.5-1.5 1.5-1.5"
    })),
    helmet: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M3.5 16c0-5 3.8-9 8.5-9s8.5 4 8.5 9"
    }), React.createElement("path", {
      d: "M2.5 16h19v1.5c0 .8-.7 1.5-1.5 1.5H4c-.8 0-1.5-.7-1.5-1.5V16Z"
    }), React.createElement("path", {
      d: "M12 7V4M9.5 16v-3.5M14.5 16v-3.5"
    })),
    weld: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M6 4h9l2 3v9c0 .8-.7 1.5-1.5 1.5h-9C5.7 17.5 5 16.8 5 16V7l1-3Z"
    }), React.createElement("rect", {
      x: "7.5",
      y: "8",
      width: "8",
      height: "3.2",
      rx: "1"
    }), React.createElement("path", {
      d: "M5 7h12"
    }), React.createElement("path", {
      d: "M9 14.5h5"
    })),
    gauge: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M3 13a9 9 0 0 1 18 0"
    }), React.createElement("path", {
      d: "M3 13h2M19 13h2M12 4v2"
    }), React.createElement("path", {
      d: "m12 13 4-3"
    }), React.createElement("circle", {
      cx: "12",
      cy: "13",
      r: "1.4"
    }), React.createElement("path", {
      d: "M5 19h14"
    })),
    multigas: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "6",
      y: "3",
      width: "12",
      height: "18",
      rx: "2"
    }), React.createElement("rect", {
      x: "8.5",
      y: "6",
      width: "7",
      height: "5",
      rx: "1"
    }), React.createElement("circle", {
      cx: "9.5",
      cy: "15",
      r: "1"
    }), React.createElement("circle", {
      cx: "14.5",
      cy: "15",
      r: "1"
    }), React.createElement("path", {
      d: "M9 18.5h6"
    })),
    filterpanel: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "3.5",
      y: "5",
      width: "17",
      height: "14",
      rx: "2"
    }), React.createElement("path", {
      d: "M7 5v14M11 5v14M15 5v14M3.5 9.5h17M3.5 14.5h17"
    })),
    papr: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "7.5"
    }), React.createElement("path", {
      d: "M12 12c0-3 .8-5.5 2.2-5.2 1.3.3 1.5 2.3.4 4.2M12 12c2.6-1.5 5.1-2 5.5-.7.4 1.2-1.3 2.5-3.5 3M12 12c1.6 2.6 2 5.1.7 5.5-1.2.4-2.5-1.3-3-3.5M12 12c-3 0-5.5-.8-5.2-2.2.3-1.3 2.3-1.5 4.2-.4"
    }), React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1.6"
    })),
    airline: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M4 12h7"
    }), React.createElement("circle", {
      cx: "14.5",
      cy: "12",
      r: "3.5"
    }), React.createElement("path", {
      d: "M14.5 8.5V12l2.3 1.6"
    }), React.createElement("path", {
      d: "M4 9v6M6.5 10.5v3"
    }), React.createElement("path", {
      d: "M18 12h2"
    })),
    filter: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "8"
    }), React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3.2"
    }), React.createElement("path", {
      d: "M12 4v3M12 17v3M4 12h3M17 12h3"
    })),
    cartridge: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "6",
      y: "4",
      width: "12",
      height: "13",
      rx: "2"
    }), React.createElement("path", {
      d: "M9 17v2.5c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5V17"
    }), React.createElement("path", {
      d: "M6 8.5h12M9 11.5h6"
    })),
    prefilter: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M5 6h14l-1.5 5L19 18H5l1.5-7L5 6Z"
    }), React.createElement("path", {
      d: "M7.5 9.5h9M8.5 13.5h7"
    })),
    visor: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M4 9c0-1 .7-2 2-2h12c1.3 0 2 1 2 2 0 4-2.5 7-8 7S4 13 4 9Z"
    }), React.createElement("path", {
      d: "M6 9.5c1.8-.6 4-.9 6-.9s4.2.3 6 .9"
    })),
    seal: React.createElement(React.Fragment, null, React.createElement("ellipse", {
      cx: "12",
      cy: "12",
      rx: "8",
      ry: "6"
    }), React.createElement("ellipse", {
      cx: "12",
      cy: "12",
      rx: "4.5",
      ry: "3"
    })),
    blower: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "4",
      y: "7",
      width: "13",
      height: "10",
      rx: "2"
    }), React.createElement("circle", {
      cx: "10.5",
      cy: "12",
      r: "2.6"
    }), React.createElement("path", {
      d: "M17 10h2.5c.8 0 1.5.7 1.5 1.5v1c0 .8-.7 1.5-1.5 1.5H17"
    }), React.createElement("path", {
      d: "M5 19h11"
    })),
    battery: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "4",
      y: "8",
      width: "15",
      height: "9",
      rx: "2"
    }), React.createElement("path", {
      d: "M19 11h1.5c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5H19"
    }), React.createElement("path", {
      d: "M8 12.5h5M10.5 10v5"
    })),
    hose: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M5 6v3c0 4 3 4 3 7v2"
    }), React.createElement("path", {
      d: "M5 6c0-.6.4-1 1-1h2c.6 0 1 .4 1 1"
    }), React.createElement("path", {
      d: "M19 18v-3c0-4-3-4-3-7V6"
    }), React.createElement("path", {
      d: "M19 18c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1"
    }), React.createElement("path", {
      d: "M9 9.5c1.5 1 4.5 1 6-.5"
    })),
    valve: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), React.createElement("path", {
      d: "M12 9V4M12 20v-5M9 12H4M20 12h-5"
    }), React.createElement("path", {
      d: "M7 4h10M7 20h10"
    })),
    sensor: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "5",
      y: "5",
      width: "14",
      height: "14",
      rx: "3"
    }), React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), React.createElement("path", {
      d: "M12 5V3M12 21v-2M5 12H3M21 12h-2"
    })),
    spray: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "9",
      y: "8",
      width: "7",
      height: "12",
      rx: "1.5"
    }), React.createElement("path", {
      d: "M9 11h7"
    }), React.createElement("path", {
      d: "M9 8V6h4v2"
    }), React.createElement("path", {
      d: "M16 7h2M16 9.5h3M16 12h2"
    }), React.createElement("path", {
      d: "M19 6.5l1-1M20 9.5h1.2M19 12.5l1 1"
    })),
    health: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M12 20S4 14.5 4 9.2C4 6.3 6.2 4.5 8.6 4.5c1.6 0 3 .9 3.4 2 .4-1.1 1.8-2 3.4-2C18 4.5 20 6.3 20 9.2 20 14.5 12 20 12 20Z"
    }), React.createElement("path", {
      d: "M9 11h2v-2h2v2h2v2h-2v2h-2v-2H9z",
      fill: "currentColor",
      stroke: "none"
    })),
    pharma: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "5",
      y: "3",
      width: "8",
      height: "3",
      rx: "1"
    }), React.createElement("path", {
      d: "M6 6h6v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z"
    }), React.createElement("path", {
      d: "M6 12h6"
    }), React.createElement("path", {
      d: "M16 13l4 4M18 11l4 4",
      transform: "translate(-1 0)"
    }), React.createElement("circle", {
      cx: "17.5",
      cy: "8.5",
      r: "2.5"
    })),
    mining: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M4 19l7-7"
    }), React.createElement("path", {
      d: "M13 6c2 0 5 1 7 4-3 1-5 .5-6.5-.5M13 6c0 2 .5 4 1.5 5.5M13 6c-2 0-4 .5-5.5 1.5"
    }), React.createElement("path", {
      d: "m9 14 1.5 1.5"
    })),
    factory: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M3 20V11l5 3V11l5 3V8l6 4v8H3Z"
    }), React.createElement("path", {
      d: "M3 20h18"
    }), React.createElement("path", {
      d: "M6 8 5.5 5h2L7 8"
    }), React.createElement("path", {
      d: "M10 16h2M15 16h2"
    })),
    blast: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M4 12c3-1 5-1 7 0"
    }), React.createElement("circle", {
      cx: "16",
      cy: "12",
      r: "4"
    }), React.createElement("path", {
      d: "M16 8v8M12 12h8M13.5 9.5l5 5M18.5 9.5l-5 5"
    }), React.createElement("path", {
      d: "M4 9.5c2-.5 3.5-.5 5 0M4 14.5c2 .5 3.5.5 5 0"
    })),
    foundry: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M5 8h11l-1 4c-.5 2-2 3-4.5 3S6.5 14 6 12L5 8Z"
    }), React.createElement("path", {
      d: "M16 9h2.5a1.5 1.5 0 0 1 0 3H15.5"
    }), React.createElement("path", {
      d: "M8 18h7"
    }), React.createElement("path", {
      d: "M9 5c0 .8-.6 1-.6 1.8M12 4.5c0 1-.7 1.2-.7 2M15 5c0 .8-.6 1-.6 1.8"
    })),
    chem: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M10 3v6l-4.5 8c-.6 1 .1 2.3 1.3 2.3h10.4c1.2 0 1.9-1.3 1.3-2.3L14 9V3"
    }), React.createElement("path", {
      d: "M9 3h6"
    }), React.createElement("path", {
      d: "M7.5 14h9"
    }), React.createElement("circle", {
      cx: "11",
      cy: "16",
      r: "1"
    }), React.createElement("circle", {
      cx: "14",
      cy: "17.5",
      r: ".8"
    })),
    agro: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M12 21V9"
    }), React.createElement("path", {
      d: "M12 9c0-2.5-1.5-4.5-4-5 .2 2.7 1.6 4.4 4 5Z"
    }), React.createElement("path", {
      d: "M12 11c0-2.5 1.5-4.5 4-5-.2 2.7-1.6 4.4-4 5Z"
    }), React.createElement("path", {
      d: "M12 14c-2.2 0-4-1.2-4.5-3 2.4-.3 4 .8 4.5 3Z"
    }), React.createElement("path", {
      d: "M12 14c2.2 0 4-1.2 4.5-3-2.4-.3-4 .8-4.5 3Z"
    }), React.createElement("path", {
      d: "M7 21h10"
    })),
    construction: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M3.5 15c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5"
    }), React.createElement("path", {
      d: "M2.5 15h19v1.5c0 .8-.7 1.5-1.5 1.5H4c-.8 0-1.5-.7-1.5-1.5V15Z"
    }), React.createElement("path", {
      d: "M12 6.5V4M9.5 4h5"
    }), React.createElement("path", {
      d: "M9 21h6"
    }), React.createElement("path", {
      d: "M10.5 18v3M13.5 18v3"
    })),
    elipse: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M3 11c0-1.4 1.2-2.4 3.4-2.7C8 6.9 9.8 6.2 12 6.2s4 .7 5.6 2.1C19.8 8.6 21 9.6 21 11c0 1.1-.7 2-1.9 2.7-1 .6-2.3 1-3.6 1.1C14.4 16 13.3 16.6 12 16.6s-2.4-.6-3.5-1.8c-1.3-.1-2.6-.5-3.6-1.1C3.7 13 3 12.1 3 11Z"
    }), React.createElement("circle", {
      cx: "6.3",
      cy: "11",
      r: "1.5"
    }), React.createElement("circle", {
      cx: "17.7",
      cy: "11",
      r: "1.5"
    }), React.createElement("path", {
      d: "M10 16.4c0 .9.9 1.4 2 1.4s2-.5 2-1.4"
    })),
    sar: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M5 11c0-1 .9-1.7 2.5-2C9 7.6 10.4 7 12 7s3 .6 4.5 2c1.6.3 2.5 1 2.5 2 0 1.6-3.1 3-7 3s-7-1.4-7-3Z"
    }), React.createElement("circle", {
      cx: "9",
      cy: "11",
      r: "1.2"
    }), React.createElement("circle", {
      cx: "15",
      cy: "11",
      r: "1.2"
    }), React.createElement("path", {
      d: "M12 14c0 .8.7 1.3 1.8 1.3"
    }), React.createElement("path", {
      d: "M5 11c-1.2.3-2 1.1-2 2.2V18"
    }), React.createElement("path", {
      d: "M3 18c0 .7.6 1.2 1.3 1.2"
    })),
    compass: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), React.createElement("path", {
      d: "m15.5 8.5-2 5-5 2 2-5 5-2Z",
      fill: "currentColor",
      fillOpacity: ".12"
    }), React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1.1",
      fill: "currentColor",
      stroke: "none"
    })),
    grid: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "4",
      y: "4",
      width: "7",
      height: "7",
      rx: "1.5"
    }), React.createElement("rect", {
      x: "13",
      y: "4",
      width: "7",
      height: "7",
      rx: "1.5"
    }), React.createElement("rect", {
      x: "4",
      y: "13",
      width: "7",
      height: "7",
      rx: "1.5"
    }), React.createElement("rect", {
      x: "13",
      y: "13",
      width: "7",
      height: "7",
      rx: "1.5"
    }))
  };
  function GVSIcon(_ref) {
    let {
      name,
      size = 24,
      strokeWidth,
      style,
      className
    } = _ref;
    const body = P[name] || P.filter;
    const props = {
      ...S
    };
    if (strokeWidth) props.strokeWidth = strokeWidth;
    return React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      width: size,
      height: size,
      style: style,
      className: className,
      "aria-hidden": "true"
    }, props), body);
  }
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
    arrowR: "M5 12h14M13 6l6 6-6 6"
  };
  function UIIcon(_ref2) {
    let {
      name,
      size = 24,
      strokeWidth = 1.8,
      style,
      className,
      fill = false
    } = _ref2;
    return React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: size,
      height: size,
      style: style,
      className: className,
      fill: fill ? "currentColor" : "none",
      stroke: fill ? "none" : "currentColor",
      strokeWidth: strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    }, React.createElement("path", {
      d: UI[name] || UI.check
    }));
  }
  Object.assign(window, {
    GVSIcon,
    UIIcon
  });
})();
/* app/ui.jsx */
;(function () {
  const {
    GVSIcon,
    UIIcon
  } = window;
  const descOf = (p, lang) => {
    const key = p && typeof p.desc === "string" ? p.desc : "";
    const m = window.GVS_DESC_I18N && window.GVS_DESC_I18N[key];
    if (!m) return p ? p.desc : "";
    return m[lang] || p.desc;
  };
  window.descOf = descOf;
  let taps = [];
  function logoTap(onHome) {
    const now = Date.now();
    taps = taps.filter(x => now - x < 2500);
    taps.push(now);
    if (taps.length >= 5) {
      taps = [];
      const on = localStorage.getItem("gvs_commercial") === "true";
      localStorage.setItem("gvs_commercial", on ? "false" : "true");
      alert(on ? "Modo feira ativado" : "Modo comercial ativado (Kit Finder)");
      location.href = location.pathname;
      return;
    }
    onHome();
  }
  function Chrome(_ref) {
    let {
      t,
      lang,
      setLang,
      count,
      onCart,
      onHome,
      showHome
    } = _ref;
    const langs = [["pt", "PT"], ["en", "EN"], ["es", "ES"]];
    return React.createElement("header", {
      className: "g-chrome"
    }, React.createElement("button", {
      className: "g-logo",
      onClick: () => logoTap(onHome),
      "aria-label": "GVS"
    }, React.createElement("img", {
      className: "g-logo-img",
      src: "assets/logo-gvs.png",
      alt: "GVS"
    }), React.createElement("span", {
      className: "g-logo-sub"
    }, t.powered)), React.createElement("div", {
      className: "g-chrome-right"
    }, showHome && React.createElement("button", {
      className: "g-icbtn",
      onClick: onHome,
      "aria-label": t.home
    }, React.createElement(UIIcon, {
      name: "home",
      size: 22
    })), React.createElement("div", {
      className: "g-lang",
      role: "group",
      "aria-label": "Idioma"
    }, langs.map(_ref2 => {
      let [code, label] = _ref2;
      return React.createElement("button", {
        key: code,
        className: "g-lang-b" + (lang === code ? " on" : ""),
        onClick: () => setLang(code)
      }, label);
    })), React.createElement("button", {
      className: "g-cart",
      onClick: onCart,
      "aria-label": t.my_config
    }, React.createElement(UIIcon, {
      name: "cart",
      size: 24
    }), count > 0 && React.createElement("span", {
      className: "g-cart-badge"
    }, count))));
  }
  function StepHead(_ref3) {
    let {
      kicker,
      title,
      sub
    } = _ref3;
    return React.createElement("div", {
      className: "g-stephead"
    }, kicker && React.createElement("div", {
      className: "g-kicker"
    }, kicker), React.createElement("h1", {
      className: "g-h1"
    }, title), sub && React.createElement("p", {
      className: "g-sub"
    }, sub));
  }
  function BigCard(_ref4) {
    let {
      icon,
      img,
      title,
      sub,
      badge,
      onClick,
      accent
    } = _ref4;
    return React.createElement("button", {
      className: "g-bigcard" + (accent ? " accent" : ""),
      onClick: onClick
    }, badge && React.createElement("span", {
      className: "g-badge"
    }, badge), React.createElement("span", {
      className: "g-bigcard-ic" + (img ? " has-img" : "")
    }, img ? React.createElement("img", {
      className: "g-bigcard-img",
      src: img,
      alt: ""
    }) : React.createElement(GVSIcon, {
      name: icon,
      size: 88,
      strokeWidth: 1.3
    })), React.createElement("span", {
      className: "g-bigcard-tx"
    }, React.createElement("span", {
      className: "g-bigcard-t"
    }, title), sub && React.createElement("span", {
      className: "g-bigcard-s"
    }, sub)), React.createElement("span", {
      className: "g-bigcard-go"
    }, React.createElement(UIIcon, {
      name: "right",
      size: 22
    })));
  }
  function Media(_ref5) {
    let {
      img,
      icon,
      big
    } = _ref5;
    return React.createElement("div", {
      className: "g-media" + (big ? " big" : "")
    }, img ? React.createElement("img", {
      src: img,
      alt: "",
      className: "g-media-img"
    }) : React.createElement(GVSIcon, {
      name: icon,
      size: big ? 120 : 72,
      strokeWidth: 1.2
    }));
  }
  function Stepper(_ref6) {
    let {
      value,
      onDec,
      onInc
    } = _ref6;
    return React.createElement("div", {
      className: "g-step",
      onClick: e => e.stopPropagation()
    }, React.createElement("button", {
      className: "g-step-b",
      onClick: onDec,
      "aria-label": "-"
    }, React.createElement(UIIcon, {
      name: "minus",
      size: 18
    })), React.createElement("span", {
      className: "g-step-v"
    }, value), React.createElement("button", {
      className: "g-step-b",
      onClick: onInc,
      "aria-label": "+"
    }, React.createElement(UIIcon, {
      name: "plus",
      size: 18
    })));
  }
  function ProductCard(_ref7) {
    let {
      p,
      t,
      lang,
      selected,
      onToggle,
      onVideo
    } = _ref7;
    return React.createElement("button", {
      className: "g-prod" + (selected ? " on" : ""),
      onClick: onToggle
    }, React.createElement(Media, {
      img: p.img,
      icon: p.icon
    }), React.createElement("div", {
      className: "g-prod-body"
    }, React.createElement("div", {
      className: "g-prod-code"
    }, p.code), React.createElement("div", {
      className: "g-prod-name clamp3"
    }, descOf(p, lang)), p.cert && /[A-Za-z]/.test(p.cert) ? React.createElement("div", {
      className: "g-prod-cert"
    }, p.cert) : null), React.createElement("div", {
      className: "g-prod-foot",
      onClick: e => e.stopPropagation()
    }, p.video ? React.createElement("span", {
      className: "g-vbtn",
      onClick: onVideo
    }, React.createElement(UIIcon, {
      name: "play",
      size: 15,
      fill: true
    }), " ", t.watch_video) : React.createElement("span", null), selected ? React.createElement("span", {
      className: "g-prod-cta on",
      onClick: onToggle
    }, React.createElement(UIIcon, {
      name: "check",
      size: 18
    }), " ", t.added) : React.createElement("span", {
      className: "g-prod-cta",
      onClick: onToggle
    }, React.createElement(UIIcon, {
      name: "plus",
      size: 18
    }), " ", t.add)), selected && React.createElement("span", {
      className: "g-prod-tick"
    }, React.createElement(UIIcon, {
      name: "check",
      size: 20
    })));
  }
  function PrimaryBtn(_ref8) {
    let {
      children,
      onClick,
      disabled,
      full,
      icon
    } = _ref8;
    return React.createElement("button", {
      className: "g-btn primary" + (full ? " full" : ""),
      onClick: onClick,
      disabled: disabled
    }, children, icon && React.createElement(UIIcon, {
      name: icon,
      size: 22
    }));
  }
  function GhostBtn(_ref9) {
    let {
      children,
      onClick,
      icon,
      iconLeft
    } = _ref9;
    return React.createElement("button", {
      className: "g-btn ghost",
      onClick: onClick
    }, iconLeft && React.createElement(UIIcon, {
      name: iconLeft,
      size: 20
    }), children, icon && React.createElement(UIIcon, {
      name: icon,
      size: 20
    }));
  }
  function VideoModal(_ref0) {
    let {
      p,
      t,
      lang,
      onClose
    } = _ref0;
    if (!p) return null;
    return React.createElement("div", {
      className: "g-modal",
      onClick: onClose
    }, React.createElement("div", {
      className: "g-modal-box",
      onClick: e => e.stopPropagation()
    }, React.createElement("div", {
      className: "g-modal-head"
    }, React.createElement("div", null, React.createElement("div", {
      className: "g-prod-code"
    }, p.code), React.createElement("div", {
      className: "g-modal-title"
    }, descOf(p, lang))), React.createElement("button", {
      className: "g-icbtn",
      onClick: onClose,
      "aria-label": t.close
    }, React.createElement(UIIcon, {
      name: "x",
      size: 22
    }))), React.createElement("div", {
      className: "g-video"
    }, p.video ? React.createElement("video", {
      src: p.video,
      controls: true,
      autoPlay: true,
      playsInline: true,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        background: "#000"
      }
    }) : React.createElement("div", {
      className: "g-video-ph"
    }, React.createElement(UIIcon, {
      name: "play",
      size: 56,
      fill: true
    }), React.createElement("span", null, t.watch_video, " \xB7 ", p.code)))));
  }
  function ActionBar(_ref1) {
    let {
      left,
      right
    } = _ref1;
    return React.createElement("div", {
      className: "g-actionbar"
    }, left, React.createElement("div", {
      className: "g-actionbar-sp"
    }), right);
  }
  Object.assign(window, {
    GVSChrome: Chrome,
    StepHead,
    BigCard,
    Media,
    Stepper,
    ProductCard,
    PrimaryBtn,
    GhostBtn,
    VideoModal,
    ActionBar,
    descOf
  });
})();
/* app/screens.jsx */
;(function () {
  const {
    GVSIcon,
    UIIcon,
    StepHead,
    BigCard,
    ProductCard,
    PrimaryBtn,
    GhostBtn,
    ActionBar,
    Stepper,
    Media,
    descOf
  } = window;
  const kindLabel = (t, k) => t["k_" + k] || t.k_accessory;
  function Attract(_ref) {
    let {
      ctx
    } = _ref;
    const {
      t,
      tw,
      start,
      C,
      lang,
      setLang
    } = ctx;
    const langs = [["pt", "PT"], ["en", "EN"], ["es", "ES"]];
    const FLOATS = [{
      t: "8%",
      l: "7%",
      s: 124,
      a: "gdrift",
      d: 19,
      dl: 0,
      c: 1
    }, {
      t: "15%",
      l: "80%",
      s: 98,
      a: "gfloat",
      d: 14,
      dl: -3,
      c: 2
    }, {
      t: "63%",
      l: "4%",
      s: 142,
      a: "gspin",
      d: 27,
      dl: -6,
      c: 1
    }, {
      t: "77%",
      l: "75%",
      s: 108,
      a: "gdrift",
      d: 21,
      dl: -9,
      c: 2
    }, {
      t: "44%",
      l: "45%",
      s: 90,
      a: "gfloat",
      d: 16,
      dl: -12,
      c: 1
    }, {
      t: "29%",
      l: "24%",
      s: 78,
      a: "gspin",
      d: 23,
      dl: -5,
      c: 2
    }, {
      t: "52%",
      l: "87%",
      s: 86,
      a: "gdrift",
      d: 25,
      dl: -8,
      c: 1
    }, {
      t: "86%",
      l: "38%",
      s: 100,
      a: "gfloat",
      d: 18,
      dl: -2,
      c: 2
    }, {
      t: "5%",
      l: "50%",
      s: 74,
      a: "gspin",
      d: 29,
      dl: -15,
      c: 1
    }, {
      t: "38%",
      l: "66%",
      s: 70,
      a: "gdrift",
      d: 17,
      dl: -11,
      c: 2
    }];
    return React.createElement("div", {
      className: "g-screen g-attract style-" + (tw.attractStyle || "focus"),
      onClick: start
    }, React.createElement("div", {
      className: "g-attract-lang g-lang",
      role: "group",
      "aria-label": "Idioma",
      onClick: e => e.stopPropagation()
    }, langs.map(_ref2 => {
      let [code, label] = _ref2;
      return React.createElement("button", {
        key: code,
        className: "g-lang-b" + (lang === code ? " on" : ""),
        onClick: () => setLang(code)
      }, label);
    })), React.createElement("div", {
      className: "g-attract-bg",
      "aria-hidden": "true"
    }, React.createElement("span", {
      className: "g-blob b1"
    }), React.createElement("span", {
      className: "g-blob b2"
    }), React.createElement("span", {
      className: "g-blob b3"
    }), FLOATS.map((f, i) => React.createElement("span", {
      key: i,
      className: "g-float",
      style: {
        top: f.t,
        left: f.l,
        color: f.c === 2 ? "var(--accent)" : "var(--primary)",
        animationName: f.a,
        animationDuration: f.d + "s",
        animationDelay: f.dl + "s"
      }
    }, React.createElement(GVSIcon, {
      name: C.lines[i % C.lines.length].icon,
      size: f.s,
      strokeWidth: 1
    })))), React.createElement("div", {
      className: "g-attract-in"
    }, React.createElement("img", {
      className: "g-attract-logo-img",
      src: "assets/logo-gvs.png",
      alt: "GVS"
    }), React.createElement("div", {
      className: "g-kicker on-dark"
    }, t.attract_kicker), React.createElement("h1", {
      className: "g-display"
    }, t.attract_title), React.createElement("p", {
      className: "g-attract-sub"
    }, t.attract_sub), React.createElement("div", {
      className: "g-attract-cta"
    }, React.createElement("span", {
      className: "g-pulse"
    }), React.createElement(UIIcon, {
      name: "spark",
      size: 22
    }), " ", t.attract_cta)));
  }
  function Home(_ref3) {
    let {
      ctx
    } = _ref3;
    const {
      t,
      nav,
      setActivity
    } = ctx;
    return React.createElement("div", {
      className: "g-screen g-pad"
    }, React.createElement(StepHead, {
      title: t.home_title,
      sub: t.home_sub
    }), React.createElement("div", {
      className: "g-home-grid"
    }, React.createElement(BigCard, {
      icon: "compass",
      title: t.by_activity,
      sub: t.by_activity_sub,
      onClick: () => {
        setActivity(null);
        nav("activities");
      },
      accent: true
    }), React.createElement(BigCard, {
      icon: "grid",
      title: t.by_product,
      sub: t.by_product_sub,
      onClick: () => {
        setActivity(null);
        nav("lines");
      }
    }), ctx.commercial && window.GVS_KITS && React.createElement(BigCard, {
      icon: "filter",
      title: "Kit Finder",
      sub: `Modo comercial · ${window.GVS_KITS.kits.length} kits por atributo`,
      onClick: () => nav("kits")
    })), ctx.commercial && React.createElement("button", {
      className: "g-btn ghost",
      style: {
        marginTop: 22,
        alignSelf: "flex-start"
      },
      onClick: () => {
        localStorage.setItem("gvs_commercial", "false");
        location.href = location.pathname;
      }
    }, React.createElement(UIIcon, {
      name: "left",
      size: 18
    }), " Voltar ao modo feira"));
  }
  function Activities(_ref4) {
    let {
      ctx
    } = _ref4;
    const {
      t,
      C,
      lang,
      nav,
      setActivity
    } = ctx;
    return React.createElement("div", {
      className: "g-screen g-pad"
    }, React.createElement(StepHead, {
      kicker: "1 / 3",
      title: t.choose_activity,
      sub: t.choose_activity_sub
    }), React.createElement("div", {
      className: "g-act-grid"
    }, C.activities.map(a => React.createElement("button", {
      key: a.id,
      className: "g-act" + (a.video || a.img ? "" : " no-media"),
      onClick: () => {
        setActivity(a);
        nav("actunits");
      }
    }, React.createElement("span", {
      className: "g-act-media"
    }, a.video ? React.createElement("video", {
      className: "g-act-vid",
      src: a.video,
      poster: a.img || undefined,
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true,
      preload: "auto",
      ref: el => {
        if (el) el.muted = true;
      }
    }) : a.img ? React.createElement("img", {
      className: "g-act-vid",
      src: a.img,
      alt: ""
    }) : React.createElement("span", {
      className: "g-act-ic"
    }, React.createElement(GVSIcon, {
      name: a.icon,
      size: 72,
      strokeWidth: 1.2
    }))), React.createElement("span", {
      className: "g-act-grad",
      "aria-hidden": "true"
    }), React.createElement("span", {
      className: "g-act-name"
    }, a.name[lang])))));
  }
  function ActUnits(_ref5) {
    let {
      ctx
    } = _ref5;
    const {
      t,
      lang,
      activity,
      activityUnits,
      setLine,
      setUnitFam,
      nav,
      famName,
      C
    } = ctx;
    const list = activityUnits();
    const meta = id => C.families.find(f => f.id === id);
    return React.createElement("div", {
      className: "g-screen g-pad"
    }, React.createElement(StepHead, {
      kicker: `2 / 3 · ${activity ? activity.name[lang] : ""}`,
      title: t.choose_unitfam,
      sub: t.choose_unitfam_sub
    }), list.length === 0 ? React.createElement("div", {
      className: "g-empty"
    }, React.createElement(GVSIcon, {
      name: "cartridge",
      size: 56
    }), React.createElement("p", null, t.no_units)) : React.createElement("div", {
      className: "g-line-grid"
    }, list.map(u => React.createElement(BigCard, {
      key: u.fam,
      icon: (meta(u.fam) || {}).icon || "blower",
      img: (meta(u.fam) || {}).img,
      title: famName(u.fam),
      sub: `${u.line.name[lang]} · ${u.count} ${t.versions}`,
      onClick: () => {
        setLine(u.line);
        setUnitFam(u.fam);
        nav("unit");
      }
    }))));
  }
  function Lines(_ref6) {
    let {
      ctx
    } = _ref6;
    const {
      t,
      C,
      lang,
      nav,
      activity,
      setLine,
      isRecommended
    } = ctx;
    const ordered = activity ? [...C.lines].sort((a, b) => (isRecommended(b) ? 1 : 0) - (isRecommended(a) ? 1 : 0)) : C.lines;
    return React.createElement("div", {
      className: "g-screen g-pad"
    }, React.createElement(StepHead, {
      kicker: activity ? `2 / 4 · ${activity.name[lang]}` : null,
      title: activity ? `${t.recommended_lines} ${activity.name[lang]}` : t.choose_line,
      sub: t.choose_line_sub
    }), React.createElement("div", {
      className: "g-line-grid"
    }, ordered.map(l => React.createElement(BigCard, {
      key: l.id,
      icon: l.icon,
      img: l.img,
      title: l.name[lang],
      sub: l.tag[lang],
      badge: activity && isRecommended(l) ? "★" : null,
      accent: activity && isRecommended(l),
      onClick: () => {
        setLine(l);
        nav(l.steps[0]);
      }
    }))));
  }
  function UnitFamilies(_ref7) {
    let {
      ctx
    } = _ref7;
    const {
      t,
      lang,
      line,
      unitFamilies,
      setUnitFam,
      goNext,
      famName,
      C
    } = ctx;
    const fams = unitFamilies(line);
    const meta = id => C.families.find(f => f.id === id);
    return React.createElement("div", {
      className: "g-screen g-pad"
    }, React.createElement(StepHead, {
      kicker: line.name[lang],
      title: t.choose_unitfam,
      sub: t.choose_unitfam_sub
    }), React.createElement("div", {
      className: "g-line-grid"
    }, fams.map(f => React.createElement(BigCard, {
      key: f.id,
      icon: (meta(f.id) || {}).icon || "blower",
      img: (meta(f.id) || {}).img,
      title: famName(f.id),
      sub: `${f.count} ${t.versions}`,
      onClick: () => {
        setUnitFam(f.id);
        goNext("unitfam");
      }
    }))));
  }
  function Units(_ref8) {
    let {
      ctx
    } = _ref8;
    const {
      t,
      lang,
      line,
      units,
      unitFam,
      famName,
      is,
      pickUnit,
      goNext,
      openVideo
    } = ctx;
    const items = units(line).filter(p => !unitFam || p.fam === unitFam);
    return React.createElement("div", {
      className: "g-screen g-pad"
    }, React.createElement(StepHead, {
      kicker: unitFam ? famName(unitFam) : line.name[lang],
      title: t.choose_unit,
      sub: t.choose_unit_sub
    }), items.length === 0 ? React.createElement("div", {
      className: "g-empty"
    }, React.createElement(GVSIcon, {
      name: "cartridge",
      size: 56
    }), React.createElement("p", null, t.no_units)) : React.createElement("div", {
      className: "g-prod-grid layout-" + (ctx.tw.selLayout || "grid")
    }, items.map(p => React.createElement(ProductCard, {
      key: p.id,
      p: p,
      t: t,
      lang: lang,
      selected: is(p.id),
      onVideo: () => openVideo(p),
      onToggle: () => {
        pickUnit(p);
        goNext("unit");
      }
    }))));
  }
  function HeadFamilies(_ref9) {
    let {
      ctx
    } = _ref9;
    const {
      t,
      lang,
      line,
      headFamilies,
      setHeadFam,
      goNext,
      famName,
      C,
      unit
    } = ctx;
    const fams = headFamilies(line);
    const meta = id => C.families.find(f => f.id === id);
    return React.createElement("div", {
      className: "g-screen g-pad"
    }, React.createElement(StepHead, {
      kicker: `${line.name[lang]}${unit ? " · " + unit.code : ""}`,
      title: t.choose_headfam,
      sub: t.choose_headfam_sub
    }), React.createElement("div", {
      className: "g-line-grid"
    }, fams.map(f => React.createElement(BigCard, {
      key: f.id,
      icon: (meta(f.id) || {}).icon || "halfmask",
      img: (meta(f.id) || {}).img,
      title: famName(f.id),
      sub: `${f.count} ${t.versions}`,
      onClick: () => {
        setHeadFam(f.id);
        goNext("headfam");
      }
    }))));
  }
  function Headtops(_ref0) {
    let {
      ctx
    } = _ref0;
    const {
      t,
      lang,
      line,
      headtops,
      headFam,
      pickHeadtop,
      goNext,
      openVideo,
      famName,
      unit,
      is
    } = ctx;
    const items = headtops(line).filter(p => !headFam || p.fam === headFam);
    return React.createElement("div", {
      className: "g-screen g-pad"
    }, React.createElement(StepHead, {
      kicker: `${famName(headFam)}${unit ? " · " + unit.code : ""}`,
      title: t.choose_headtop,
      sub: t.headtop_compat_sub
    }), items.length === 0 ? React.createElement("div", {
      className: "g-empty"
    }, React.createElement(GVSIcon, {
      name: "halfmask",
      size: 56
    }), React.createElement("p", null, t.no_headtops)) : React.createElement("div", {
      className: "g-prod-grid layout-" + (ctx.tw.selLayout || "grid")
    }, items.map(p => React.createElement(ProductCard, {
      key: p.id,
      p: p,
      t: t,
      lang: lang,
      selected: is(p.id),
      onVideo: () => openVideo(p),
      onToggle: () => {
        pickHeadtop(p);
        goNext("headtop");
      }
    }))));
  }
  function Sensors(_ref1) {
    let {
      ctx
    } = _ref1;
    const {
      t,
      lang,
      line,
      sensors,
      is,
      add,
      remove,
      goNext,
      nav,
      openVideo
    } = ctx;
    const items = sensors(line);
    return React.createElement("div", {
      className: "g-screen g-pad"
    }, React.createElement(StepHead, {
      kicker: line.name[lang],
      title: t.choose_sensor,
      sub: t.choose_sensor_sub
    }), React.createElement("div", {
      className: "g-prod-grid layout-" + (ctx.tw.selLayout || "grid")
    }, items.map(p => React.createElement(ProductCard, {
      key: p.id,
      p: p,
      t: t,
      lang: lang,
      selected: is(p.id),
      onVideo: () => openVideo(p),
      onToggle: () => is(p.id) ? remove(p.id) : add(p.id)
    }))), React.createElement(ActionBar, {
      left: React.createElement(GhostBtn, {
        iconLeft: "plus",
        onClick: () => nav("lines")
      }, t.add_more),
      right: React.createElement(PrimaryBtn, {
        icon: "arrowR",
        onClick: () => goNext("sensor")
      }, t.continue)
    }));
  }
  function Accessories(_ref10) {
    let {
      ctx
    } = _ref10;
    const {
      t,
      lang,
      nav,
      headtop,
      unit,
      accessories,
      parts,
      unitExtras,
      famName,
      is,
      add,
      remove,
      openVideo
    } = ctx;
    const [showParts, setShowParts] = React.useState(false);
    const [showUnit, setShowUnit] = React.useState(false);
    const accs = accessories();
    const prts = parts();
    const uext = unitExtras();
    const layout = "layout-" + (ctx.tw.selLayout || "grid");
    const ref = headtop || unit;
    return React.createElement("div", {
      className: "g-screen g-pad"
    }, React.createElement(StepHead, {
      kicker: ref ? `${ref.code}` : null,
      title: t.choose_acc,
      sub: t.choose_acc_sub
    }), accs.length === 0 ? React.createElement("div", {
      className: "g-note"
    }, t.no_acc) : React.createElement("div", {
      className: "g-prod-grid " + layout
    }, accs.map(p => React.createElement(ProductCard, {
      key: p.id,
      p: p,
      t: t,
      lang: lang,
      selected: is(p.id),
      onVideo: () => openVideo(p),
      onToggle: () => is(p.id) ? remove(p.id) : add(p.id)
    }))), prts.length > 0 && React.createElement("div", {
      className: "g-parts"
    }, React.createElement("button", {
      className: "g-parts-toggle" + (showParts ? " on" : ""),
      onClick: () => setShowParts(s => !s)
    }, React.createElement(UIIcon, {
      name: showParts ? "minus" : "plus",
      size: 20
    }), showParts ? t.parts_hide : t.parts_show, React.createElement("span", {
      className: "g-parts-count"
    }, prts.length)), showParts && React.createElement(React.Fragment, null, React.createElement("div", {
      className: "g-fam-h mt"
    }, t.parts_section), React.createElement("div", {
      className: "g-prod-grid " + layout
    }, prts.map(p => React.createElement(ProductCard, {
      key: p.id,
      p: p,
      t: t,
      lang: lang,
      selected: is(p.id),
      onVideo: () => openVideo(p),
      onToggle: () => is(p.id) ? remove(p.id) : add(p.id)
    }))))), uext.length > 0 && React.createElement("div", {
      className: "g-parts"
    }, React.createElement("button", {
      className: "g-parts-toggle" + (showUnit ? " on" : ""),
      onClick: () => setShowUnit(s => !s)
    }, React.createElement(UIIcon, {
      name: showUnit ? "minus" : "plus",
      size: 20
    }), (showUnit ? t.unit_extras_hide : t.unit_extras_show) + " " + famName(unit.fam), React.createElement("span", {
      className: "g-parts-count"
    }, uext.length)), showUnit && React.createElement(React.Fragment, null, React.createElement("div", {
      className: "g-fam-h mt"
    }, t.unit_extras_section, " ", famName(unit.fam)), React.createElement("div", {
      className: "g-prod-grid " + layout
    }, uext.map(p => React.createElement(ProductCard, {
      key: p.id,
      p: p,
      t: t,
      lang: lang,
      selected: is(p.id),
      onVideo: () => openVideo(p),
      onToggle: () => is(p.id) ? remove(p.id) : add(p.id)
    }))))), React.createElement(ActionBar, {
      left: React.createElement(GhostBtn, {
        iconLeft: "plus",
        onClick: () => nav("lines")
      }, t.add_more),
      right: React.createElement(PrimaryBtn, {
        icon: "arrowR",
        onClick: () => nav("summary")
      }, t.review_send)
    }));
  }
  function CartDrawer(_ref11) {
    let {
      ctx,
      onClose
    } = _ref11;
    const {
      t,
      lang,
      cartList,
      count,
      inc,
      dec,
      remove,
      clear,
      nav
    } = ctx;
    const list = cartList();
    return React.createElement("div", {
      className: "g-modal right",
      onClick: onClose
    }, React.createElement("aside", {
      className: "g-drawer",
      onClick: e => e.stopPropagation()
    }, React.createElement("div", {
      className: "g-drawer-head"
    }, React.createElement("div", null, React.createElement("div", {
      className: "g-h2"
    }, t.my_config), React.createElement("div", {
      className: "g-sub sm"
    }, count, " ", count === 1 ? t.item : t.items)), React.createElement("button", {
      className: "g-icbtn",
      onClick: onClose
    }, React.createElement(UIIcon, {
      name: "x",
      size: 22
    }))), list.length === 0 ? React.createElement("div", {
      className: "g-empty"
    }, React.createElement(GVSIcon, {
      name: "cartridge",
      size: 56
    }), React.createElement("p", null, t.my_config_empty), React.createElement("span", {
      className: "g-sub sm"
    }, t.my_config_empty_sub)) : React.createElement("div", {
      className: "g-drawer-list"
    }, list.map(_ref12 => {
      let {
        p,
        qty,
        kind
      } = _ref12;
      return React.createElement("div", {
        key: p.id,
        className: "g-line-item"
      }, React.createElement("div", {
        className: "g-li-ic"
      }, React.createElement(GVSIcon, {
        name: p.icon,
        size: 32,
        strokeWidth: 1.4
      })), React.createElement("div", {
        className: "g-li-body"
      }, React.createElement("div", {
        className: "g-li-kind"
      }, kindLabel(t, kind)), React.createElement("div", {
        className: "g-li-name clamp2"
      }, descOf(p, lang)), React.createElement("div", {
        className: "g-prod-code"
      }, p.code)), React.createElement("div", {
        className: "g-li-right"
      }, React.createElement(Stepper, {
        value: qty,
        onDec: () => dec(p.id),
        onInc: () => inc(p.id)
      }), React.createElement("button", {
        className: "g-li-rm",
        onClick: () => remove(p.id)
      }, React.createElement(UIIcon, {
        name: "trash",
        size: 18
      }))));
    })), list.length > 0 && React.createElement("div", {
      className: "g-drawer-foot"
    }, React.createElement(GhostBtn, {
      onClick: clear
    }, t.clear_all), React.createElement(PrimaryBtn, {
      full: true,
      icon: "arrowR",
      onClick: () => {
        onClose();
        nav("summary");
      }
    }, t.review_send))));
  }
  function Summary(_ref13) {
    let {
      ctx
    } = _ref13;
    const {
      t,
      lang,
      cartList,
      count,
      inc,
      dec,
      remove,
      nav
    } = ctx;
    const list = cartList();
    const style = ctx.tw.summaryStyle || "cards";
    if (count === 0) {
      return React.createElement("div", {
        className: "g-screen g-pad"
      }, React.createElement(StepHead, {
        title: t.summary_title,
        sub: t.summary_sub
      }), React.createElement("div", {
        className: "g-empty"
      }, React.createElement(GVSIcon, {
        name: "cartridge",
        size: 64
      }), React.createElement("p", null, t.my_config_empty), React.createElement("span", {
        className: "g-sub sm"
      }, t.my_config_empty_sub), React.createElement(PrimaryBtn, {
        icon: "arrowR",
        onClick: () => nav("lines")
      }, t.add_more)));
    }
    return React.createElement("div", {
      className: "g-screen g-pad"
    }, React.createElement(StepHead, {
      kicker: `${count} ${count === 1 ? t.item : t.items}`,
      title: t.summary_title,
      sub: t.summary_sub
    }), React.createElement("div", {
      className: "g-summary style-" + style
    }, list.map(_ref14 => {
      let {
        p,
        qty,
        kind
      } = _ref14;
      return React.createElement("div", {
        key: p.id,
        className: "g-sum-row kind-" + kind
      }, React.createElement("div", {
        className: "g-sum-media"
      }, React.createElement(Media, {
        img: p.img,
        icon: p.icon
      })), React.createElement("div", {
        className: "g-sum-body"
      }, React.createElement("div", {
        className: "g-li-kind"
      }, kindLabel(t, kind)), React.createElement("div", {
        className: "g-sum-name clamp2"
      }, descOf(p, lang)), React.createElement("div", {
        className: "g-prod-code"
      }, t.code, " ", p.code), p.cert && /[A-Za-z]/.test(p.cert) ? React.createElement("div", {
        className: "g-prod-cert"
      }, p.cert) : null), React.createElement("div", {
        className: "g-sum-right"
      }, React.createElement(Stepper, {
        value: qty,
        onDec: () => dec(p.id),
        onInc: () => inc(p.id)
      }), React.createElement("button", {
        className: "g-li-rm",
        onClick: () => remove(p.id)
      }, React.createElement(UIIcon, {
        name: "trash",
        size: 18
      }))));
    })), React.createElement(ActionBar, {
      left: React.createElement(GhostBtn, {
        iconLeft: "plus",
        onClick: () => nav("lines")
      }, t.add_more),
      right: React.createElement(PrimaryBtn, {
        icon: "arrowR",
        onClick: () => nav("form")
      }, t.continue)
    }));
  }
  function Form(_ref15) {
    let {
      ctx
    } = _ref15;
    const {
      t,
      count,
      submit
    } = ctx;
    const [f, setF] = React.useState({
      name: "",
      company: "",
      role: "",
      phone: "",
      email: "",
      notes: "",
      lgpd: false
    });
    const [err, setErr] = React.useState("");
    const [busy, setBusy] = React.useState(false);
    const set = k => e => setF(s => ({
      ...s,
      [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    }));
    const go = async () => {
      if (count === 0) {
        setErr(t.err_empty);
        return;
      }
      if (!f.name.trim() || !f.company.trim() || !f.phone.trim() || !f.email.trim()) {
        setErr(t.err_required);
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
        setErr(t.err_email);
        return;
      }
      if (!f.lgpd) {
        setErr(t.err_lgpd);
        return;
      }
      setErr("");
      setBusy(true);
      const ok = await submit(f);
      setBusy(false);
      if (!ok) setErr(t.err_network);
    };
    const field = _ref16 => {
      let {
        k,
        label,
        type = "text",
        req,
        ph,
        area
      } = _ref16;
      return React.createElement("label", {
        key: k,
        className: "g-field" + (area ? " area" : "")
      }, React.createElement("span", {
        className: "g-field-l"
      }, label, " ", React.createElement("em", null, req ? t.required : t.optional)), area ? React.createElement("textarea", {
        value: f[k],
        onChange: set(k),
        placeholder: ph,
        rows: 3
      }) : React.createElement("input", {
        type: type,
        value: f[k],
        onChange: set(k),
        placeholder: ph,
        inputMode: type === "tel" ? "tel" : type === "email" ? "email" : "text"
      }));
    };
    return React.createElement("div", {
      className: "g-screen g-pad"
    }, React.createElement(StepHead, {
      title: t.form_title,
      sub: t.form_sub
    }), React.createElement("div", {
      className: "g-form"
    }, React.createElement("div", {
      className: "g-form-grid"
    }, field({
      k: "name",
      label: t.f_name,
      req: true
    }), field({
      k: "company",
      label: t.f_company,
      req: true
    }), field({
      k: "role",
      label: t.f_role
    }), field({
      k: "phone",
      label: t.f_phone,
      type: "tel",
      req: true
    }), field({
      k: "email",
      label: t.f_email,
      type: "email",
      req: true
    }), field({
      k: "notes",
      label: t.f_notes,
      ph: t.f_notes_ph,
      area: true
    })), React.createElement("label", {
      className: "g-check"
    }, React.createElement("input", {
      type: "checkbox",
      checked: f.lgpd,
      onChange: set("lgpd")
    }), React.createElement("span", {
      className: "g-check-box"
    }, React.createElement(UIIcon, {
      name: "check",
      size: 16
    })), React.createElement("span", {
      className: "g-check-tx"
    }, t.lgpd)), err && React.createElement("div", {
      className: "g-err"
    }, err)), React.createElement(ActionBar, {
      left: React.createElement("div", {
        className: "g-form-count"
      }, React.createElement(UIIcon, {
        name: "cart",
        size: 20
      }), " ", count, " ", count === 1 ? t.item : t.items),
      right: React.createElement(PrimaryBtn, {
        icon: "arrowR",
        onClick: go,
        disabled: busy
      }, busy ? t.sending : t.send)
    }));
  }
  function Success(_ref17) {
    let {
      ctx
    } = _ref17;
    const {
      t,
      ref,
      restart
    } = ctx;
    return React.createElement("div", {
      className: "g-screen g-pad g-success"
    }, React.createElement("div", {
      className: "g-success-in"
    }, React.createElement("div", {
      className: "g-success-ic"
    }, React.createElement(UIIcon, {
      name: "check",
      size: 64,
      strokeWidth: 2.4
    })), React.createElement("h1", {
      className: "g-h1"
    }, t.success_title), React.createElement("p", {
      className: "g-sub"
    }, t.success_sub), ref && React.createElement("div", {
      className: "g-ref"
    }, t.success_code, " ", React.createElement("b", null, ref)), React.createElement(PrimaryBtn, {
      icon: "spark",
      onClick: restart
    }, t.new_config)));
  }
  Object.assign(window, {
    ScreenAttract: Attract,
    ScreenHome: Home,
    ScreenActivities: Activities,
    ScreenActUnits: ActUnits,
    ScreenLines: Lines,
    ScreenUnitFam: UnitFamilies,
    ScreenUnit: Units,
    ScreenHeadFam: HeadFamilies,
    ScreenHeadtop: Headtops,
    ScreenSensor: Sensors,
    ScreenAccessories: Accessories,
    ScreenSummary: Summary,
    ScreenForm: Form,
    ScreenSuccess: Success,
    CartDrawer,
    VideoModal: window.VideoModal
  });
})();
/* app/kitfinder.jsx */
;(function () {
  const {
    useState,
    useMemo
  } = React;
  const {
    UIIcon,
    GVSIcon,
    StepHead,
    BigCard
  } = window;
  const FACETS = [["product", "Produto"], ["fr", "FR"], ["head", "Proteção de cabeça"], ["cape", "Capa / vedação"], ["flow", "Controle de fluxo"], ["filter", "Filtro"], ["belt", "Cinto / mochila"], ["fitting", "Conexão de ar"]];
  const ALL_FACETS = [["region", "Região"], ...FACETS];
  const Q_PT = {
    product: "Qual produto?",
    fr: "Precisa ser FR (resistente a chama)?",
    head: "Qual proteção de cabeça?",
    cape: "Qual capa ou vedação?",
    flow: "Qual controle de fluxo?",
    filter: "Qual tipo de filtro?",
    belt: "Cinto ou mochila?",
    fitting: "Qual conexão de ar?"
  };
  const VAL_PT = {
    "Hard Hat": "Capacete",
    "Head Suspension": "Suspensão",
    "Bump Cap": "Boné de proteção",
    "Waist Belt": "Cinto",
    "Back Pack": "Mochila",
    "Supplied Air": "Ar mandado",
    "Head Top Only": "Só headtop",
    "No Fitting": "Sem conexão",
    "Non FR": "Não FR",
    "N/A": "Não se aplica",
    "Constant Flow": "Fluxo constante",
    "Flow Control Valve": "Válvula de fluxo",
    "Low Pressure": "Baixa pressão",
    "Standard Nylon": "Nylon padrão",
    "Leather Cape": "Capa de couro",
    "Aluminized Cape": "Capa aluminizada"
  };
  const SP_PT = {
    cape: "Capa / vedação",
    lens: "Lente principal",
    tear: "Tear-off",
    lens2: "Outra lente",
    pad: "Acolchoamento",
    flow: "Controle de fluxo",
    tube: "Traqueia",
    extra: "Extras",
    belt: "Cinto",
    fit: "Conexão",
    filter: "Filtro principal",
    pre: "Pré-filtro",
    spark: "Corta-faísca",
    batt: "Bateria"
  };
  const REGION = {
    NIOSH: {
      t: "NIOSH",
      s: "Estados Unidos e mercados que exigem aprovação NIOSH (42 CFR 84)",
      icon: "halfmask"
    },
    World: {
      t: "World",
      s: "Internacional — certificação CE / normas EN",
      icon: "compass"
    }
  };
  const vl = v => VAL_PT[v] || v;
  const isCode = c => /\d/.test(c) && !/\s[a-z]/i.test(c.replace(/^[^ ]+/, ""));
  const data = () => window.GVS_KITS || {
    kits: [],
    parts: {}
  };
  function KitRegion(_ref) {
    let {
      ctx
    } = _ref;
    const {
      nav,
      setKitSel
    } = ctx;
    const D = data();
    const count = r => D.kits.filter(k => k.a.region === r).length;
    return React.createElement("section", {
      className: "g-screen g-pad"
    }, React.createElement(StepHead, {
      kicker: "Kit Finder \xB7 Modo comercial",
      title: "Qual certifica\xE7\xE3o?",
      sub: "Os kits NIOSH e World t\xEAm c\xF3digos e componentes diferentes. Escolha antes de filtrar."
    }), React.createElement("div", {
      className: "g-home-grid"
    }, Object.entries(REGION).map(_ref2 => {
      let [r, m] = _ref2;
      return React.createElement(BigCard, {
        key: r,
        icon: m.icon,
        title: m.t,
        sub: `${m.s} · ${count(r)} kits`,
        accent: r === "NIOSH",
        onClick: () => {
          setKitSel({
            region: r
          });
          ctx.setKitStep && ctx.setKitStep({
            skip: []
          });
          nav("kits");
        }
      });
    })));
  }
  function useFilter(sel, qx) {
    const D = data();
    const textOK = k => !qx || k.pn.toLowerCase().includes(qx) || k.d.toLowerCase().includes(qx) || k.comps.some(c => c.toLowerCase().includes(qx));
    const match = (k, except) => ALL_FACETS.every(_ref3 => {
      let [f] = _ref3;
      return f === except || !sel[f] || k.a[f] === sel[f];
    });
    const results = useMemo(() => D.kits.filter(k => match(k) && textOK(k)), [sel, qx]);
    const options = useMemo(() => {
      const o = {};
      FACETS.forEach(_ref4 => {
        let [f] = _ref4;
        const cnt = {};
        D.kits.forEach(k => {
          if (match(k, f) && textOK(k)) cnt[k.a[f]] = (cnt[k.a[f]] || 0) + 1;
        });
        const base = [...new Set(D.kits.filter(k => !sel.region || k.a.region === sel.region).map(k => k.a[f]))];
        o[f] = base.map(v => ({
          v,
          n: cnt[v] || 0
        })).sort((a, b) => (b.n > 0) - (a.n > 0) || b.n - a.n || a.v.localeCompare(b.v));
      });
      return o;
    }, [sel, qx]);
    return {
      results,
      options
    };
  }
  function RegionBar(_ref5) {
    let {
      ctx
    } = _ref5;
    const r = ctx.kitSel.region;
    if (!r) return null;
    return React.createElement("div", {
      className: "kf-region"
    }, React.createElement("span", {
      className: "kf-region-b"
    }, r), React.createElement("span", {
      className: "kf-region-t"
    }, REGION[r] && REGION[r].s), React.createElement("button", {
      className: "kf-clear1",
      onClick: () => ctx.nav("kitregion")
    }, "trocar"));
  }
  function KitList(_ref6) {
    let {
      results,
      ctx,
      limit = 120
    } = _ref6;
    const {
      nav,
      setKit
    } = ctx;
    if (results.length === 0) return React.createElement("div", {
      className: "g-empty"
    }, React.createElement(GVSIcon, {
      name: "grid",
      size: 52
    }), React.createElement("p", null, "Nenhum kit com essa combina\xE7\xE3o"));
    return React.createElement("div", {
      className: "kf-list"
    }, results.slice(0, limit).map(k => React.createElement("button", {
      key: k.pn,
      className: "kf-kit",
      onClick: () => {
        setKit(k);
        nav("kit");
      }
    }, React.createElement("div", {
      className: "kf-kit-top"
    }, React.createElement("span", {
      className: "g-prod-code"
    }, k.pn), React.createElement("span", {
      className: "kf-kit-prod"
    }, k.a.product)), React.createElement("div", {
      className: "kf-kit-d clamp2"
    }, k.d), React.createElement("div", {
      className: "kf-tags"
    }, ["flow", "cape", "filter", "fr"].map(f => k.a[f] && k.a[f] !== "N/A" && React.createElement("span", {
      key: f,
      className: "kf-tag"
    }, vl(k.a[f])))))), results.length > limit && React.createElement("p", {
      className: "g-note"
    }, "Mostrando ", limit, " de ", results.length, ". Refine os filtros."));
  }
  function KitsFacets(_ref7) {
    let {
      ctx
    } = _ref7;
    const {
      kitSel: sel,
      setKitSel: setSel
    } = ctx;
    const [q, setQ] = useState("");
    const {
      results,
      options
    } = useFilter(sel, q.trim().toLowerCase());
    const toggle = (f, v) => setSel(s => {
      const n = {
        ...s
      };
      if (n[f] === v) delete n[f];else n[f] = v;
      return n;
    });
    const chosen = Object.entries(sel).filter(_ref8 => {
      let [f] = _ref8;
      return f !== "region";
    });
    return React.createElement("section", {
      className: "g-screen"
    }, React.createElement("div", {
      className: "g-pad kf-pad"
    }, React.createElement(StepHead, {
      kicker: "Modo comercial",
      title: "Kit Finder",
      sub: "Escolha os atributos em qualquer ordem. S\xF3 aparecem op\xE7\xF5es que ainda levam a algum kit."
    }), React.createElement(RegionBar, {
      ctx: ctx
    }), React.createElement("div", {
      className: "kf-layout"
    }, React.createElement("aside", {
      className: "kf-facets"
    }, React.createElement("div", {
      className: "kf-search"
    }, React.createElement(UIIcon, {
      name: "grid",
      size: 18
    }), React.createElement("input", {
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: "Buscar por c\xF3digo ou descri\xE7\xE3o"
    }), q && React.createElement("button", {
      onClick: () => setQ(""),
      "aria-label": "Limpar busca"
    }, React.createElement(UIIcon, {
      name: "x",
      size: 16
    }))), FACETS.map(_ref9 => {
      let [f, label] = _ref9;
      return React.createElement("div", {
        key: f,
        className: "kf-facet"
      }, React.createElement("div", {
        className: "kf-facet-h"
      }, React.createElement("span", null, label), sel[f] && React.createElement("button", {
        className: "kf-clear1",
        onClick: () => toggle(f, sel[f])
      }, "limpar")), React.createElement("div", {
        className: "kf-chips"
      }, options[f].map(_ref0 => {
        let {
          v,
          n
        } = _ref0;
        const on = sel[f] === v;
        return React.createElement("button", {
          key: v,
          className: "kf-chip" + (on ? " on" : ""),
          disabled: !on && n === 0,
          onClick: () => toggle(f, v)
        }, React.createElement("span", null, vl(v)), React.createElement("em", null, n));
      })));
    })), React.createElement("div", {
      className: "kf-results"
    }, React.createElement("div", {
      className: "kf-res-h"
    }, React.createElement("div", null, React.createElement("b", null, results.length), " ", results.length === 1 ? "kit" : "kits"), chosen.length > 0 && React.createElement("button", {
      className: "g-btn ghost kf-reset",
      onClick: () => setSel({
        region: sel.region
      })
    }, "Limpar filtros (", chosen.length, ")")), chosen.length > 0 && React.createElement("div", {
      className: "kf-pills"
    }, chosen.map(_ref1 => {
      let [f, v] = _ref1;
      return React.createElement("button", {
        key: f,
        className: "kf-pill",
        onClick: () => toggle(f, v)
      }, vl(v), " ", React.createElement(UIIcon, {
        name: "x",
        size: 13
      }));
    })), React.createElement(KitList, {
      results: results,
      ctx: ctx
    })))));
  }
  function KitsWizard(_ref10) {
    let {
      ctx
    } = _ref10;
    const {
      kitSel: sel,
      setKitSel: setSel,
      kitStep,
      setKitStep
    } = ctx;
    const skip = kitStep.skip || [];
    const showAll = !!kitStep.showAll;
    const {
      results,
      options
    } = useFilter(sel, "");
    const avail = f => options[f].filter(o => o.n > 0);
    const pending = FACETS.filter(_ref11 => {
      let [f] = _ref11;
      return !sel[f] && !skip.includes(f) && avail(f).length > 1;
    });
    const cur = !showAll && results.length > 1 ? pending[0] : null;
    const done = FACETS.filter(_ref12 => {
      let [f] = _ref12;
      return sel[f] || skip.includes(f);
    });
    const choose = (f, v) => {
      var _document$querySelect;
      setSel(s => ({
        ...s,
        [f]: v
      }));
      (_document$querySelect = document.querySelector(".g-main")) === null || _document$querySelect === void 0 || _document$querySelect.scrollTo(0, 0);
    };
    const doSkip = f => setKitStep(s => ({
      ...s,
      skip: [...(s.skip || []), f]
    }));
    const reopen = f => {
      const idx = FACETS.findIndex(_ref13 => {
        let [x] = _ref13;
        return x === f;
      });
      const later = FACETS.slice(idx).map(_ref14 => {
        let [x] = _ref14;
        return x;
      });
      setSel(s => {
        const n = {
          ...s
        };
        later.forEach(x => delete n[x]);
        return n;
      });
      setKitStep(s => ({
        skip: (s.skip || []).filter(x => !later.includes(x)),
        showAll: false
      }));
    };
    const stepNo = done.length + 1;
    const total = done.length + pending.length;
    return React.createElement("section", {
      className: "g-screen"
    }, React.createElement("div", {
      className: "g-pad"
    }, React.createElement(RegionBar, {
      ctx: ctx
    }), done.length > 0 && React.createElement("div", {
      className: "kf-crumbs"
    }, done.map(_ref15 => {
      let [f, l] = _ref15;
      return React.createElement("button", {
        key: f,
        className: "kf-crumb" + (sel[f] ? "" : " skip"),
        onClick: () => reopen(f)
      }, React.createElement("span", null, l), React.createElement("b", null, sel[f] ? vl(sel[f]) : "Qualquer"));
    })), cur ? React.createElement(React.Fragment, null, React.createElement(StepHead, {
      kicker: `Passo ${stepNo} de ${total} · ${results.length} kits possíveis`,
      title: Q_PT[cur[0]]
    }), React.createElement("div", {
      className: "kf-opts"
    }, avail(cur[0]).map(_ref16 => {
      let {
        v,
        n
      } = _ref16;
      return React.createElement("button", {
        key: v,
        className: "kf-opt",
        onClick: () => choose(cur[0], v)
      }, React.createElement("span", {
        className: "kf-opt-t"
      }, vl(v)), vl(v) !== v && React.createElement("span", {
        className: "kf-opt-en"
      }, v), React.createElement("span", {
        className: "kf-opt-n"
      }, n, " ", n === 1 ? "kit" : "kits"));
    })), React.createElement("div", {
      className: "g-actionbar"
    }, React.createElement("button", {
      className: "g-btn ghost",
      onClick: () => doSkip(cur[0])
    }, "Tanto faz \u2014 pular"), React.createElement("div", {
      className: "g-actionbar-sp"
    }), React.createElement("button", {
      className: "g-btn primary",
      onClick: () => setKitStep(s => ({
        ...s,
        showAll: true
      }))
    }, "Ver ", results.length, " kits ", React.createElement(UIIcon, {
      name: "arrowR",
      size: 20
    })))) : React.createElement(React.Fragment, null, React.createElement(StepHead, {
      kicker: "Resultado",
      title: results.length === 1 ? "Kit encontrado" : `${results.length} kits encontrados`,
      sub: results.length > 1 && pending.length === 0 ? "Esses kits têm os mesmos atributos — compare pela descrição." : null
    }), React.createElement(KitList, {
      results: results,
      ctx: ctx
    }), showAll && pending.length > 0 && React.createElement("div", {
      className: "g-actionbar"
    }, React.createElement("div", {
      className: "g-actionbar-sp"
    }), React.createElement("button", {
      className: "g-btn ghost",
      onClick: () => setKitStep(s => ({
        ...s,
        showAll: false
      }))
    }, "Continuar filtrando")))));
  }
  function Kits(_ref17) {
    let {
      ctx
    } = _ref17;
    if (!ctx.kitSel.region) return React.createElement(KitRegion, {
      ctx: ctx
    });
    return ctx.tw && ctx.tw.kfLayout === "wizard" ? React.createElement(KitsWizard, {
      ctx: ctx
    }) : React.createElement(KitsFacets, {
      ctx: ctx
    });
  }
  function Kit(_ref18) {
    let {
      ctx
    } = _ref18;
    const D = data();
    const {
      kit: k
    } = ctx;
    const [copied, setCopied] = useState(false);
    if (!k) return null;
    const part = c => D.parts[c] || {
      d: ""
    };
    const spares = k.sp.filter(s => isCode(s.c));
    const text = [`${k.pn} — ${k.d}`, "", "Atributos: " + ALL_FACETS.map(_ref19 => {
      let [f, l] = _ref19;
      return `${l}: ${vl(k.a[f])}`;
    }).join(" · "), "", k.comps.length ? "Inclui:\n" + k.comps.map(c => `  ${c}  ${part(c).d}`).join("\n") : "", spares.length ? "\nReposição:\n" + spares.map(s => `  [${SP_PT[s.k] || s.k}] ${s.c}  ${part(s.c).d}`).join("\n") : ""].join("\n");
    const copy = async () => {
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    };
    const Row = _ref20 => {
      let {
        code,
        tag
      } = _ref20;
      const p = part(code);
      return React.createElement("div", {
        className: "kf-row"
      }, React.createElement("div", {
        className: "kf-row-img"
      }, p.img ? React.createElement("img", {
        src: p.img,
        alt: "",
        loading: "lazy"
      }) : React.createElement(GVSIcon, {
        name: "cartridge",
        size: 26
      })), React.createElement("div", {
        className: "kf-row-tx"
      }, React.createElement("div", {
        className: "kf-row-top"
      }, React.createElement("span", {
        className: "g-prod-code"
      }, code), tag && React.createElement("span", {
        className: "kf-tag"
      }, tag)), React.createElement("div", {
        className: "kf-row-d"
      }, p.d || "—")));
    };
    return React.createElement("section", {
      className: "g-screen"
    }, React.createElement("div", {
      className: "g-pad"
    }, React.createElement("div", {
      className: "g-stephead"
    }, React.createElement("div", {
      className: "g-kicker"
    }, k.a.product, " \xB7 Kit ", k.a.region), React.createElement("h1", {
      className: "g-h1"
    }, k.pn), React.createElement("p", {
      className: "g-sub"
    }, k.d)), React.createElement("div", {
      className: "kf-attrs"
    }, ALL_FACETS.map(_ref21 => {
      let [f, l] = _ref21;
      return React.createElement("div", {
        key: f,
        className: "kf-attr"
      }, React.createElement("span", null, l), React.createElement("b", null, vl(k.a[f])));
    })), k.comps.length > 0 && React.createElement(React.Fragment, null, React.createElement("h3", {
      className: "g-fam-h mt"
    }, "O kit inclui"), React.createElement("div", {
      className: "kf-rows"
    }, k.comps.map(c => React.createElement(Row, {
      key: c,
      code: c
    })))), React.createElement("h3", {
      className: "g-fam-h mt"
    }, "Pe\xE7as de reposi\xE7\xE3o"), spares.length === 0 ? React.createElement("p", {
      className: "g-note"
    }, "Sem pe\xE7as de reposi\xE7\xE3o cadastradas na Quote Tool para este kit.") : React.createElement("div", {
      className: "kf-rows"
    }, spares.map((s, i) => React.createElement(Row, {
      key: s.c + i,
      code: s.c,
      tag: SP_PT[s.k] || s.k
    }))), React.createElement("div", {
      className: "g-actionbar"
    }, React.createElement("div", {
      className: "g-actionbar-sp"
    }), React.createElement("button", {
      className: "g-btn primary",
      onClick: copy
    }, React.createElement(UIIcon, {
      name: copied ? "check" : "cart",
      size: 20
    }), " ", copied ? "Copiado" : "Copiar lista"))));
  }
  Object.assign(window, {
    ScreenKits: Kits,
    ScreenKit: Kit,
    ScreenKitRegion: KitRegion
  });
})();
/* index.html (app) */
;const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzxGaAvXbbeS253pcplnzw7ohl8of78O5Tx3FxOq0RMwo4sMHgazWwQuh_tmU0FCzkB8A/exec";
const FONTS = {
  titillium: {
    head: '"Titillium Web"',
    body: '"Titillium Web"'
  },
  sora: {
    head: '"Sora"',
    body: '"Barlow"'
  },
  archivo: {
    head: '"Archivo"',
    body: '"Barlow"'
  }
};
const TWEAK_DEFAULTS = {
  "theme": "midnight",
  "primary": "#009fe3",
  "fontPair": "titillium",
  "attractStyle": "bold",
  "selLayout": "grid",
  "summaryStyle": "cards",
  "idleSec": 90,
  "endpoint": "",
  "kfLayout": "wizard"
};
const LS = {
  get(k, d) {
    try {
      const v = localStorage.getItem("gvs_" + k);
      return v == null ? d : JSON.parse(v);
    } catch (e) {
      return d;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem("gvs_" + k, JSON.stringify(v));
    } catch (e) {}
  }
};
function genRef() {
  return "GVS-" + Date.now().toString(36).slice(-4).toUpperCase() + Math.random().toString(36).slice(2, 5).toUpperCase();
}
function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const C = window.GVS_CATALOG;
  const I = window.GVS_I18N;
  const [lang, setLangState] = useState(() => LS.get("lang", "pt"));
  const [screen, setScreen] = useState("attract");
  const [hist, setHist] = useState([]);
  const [activity, setActivity] = useState(null);
  const [line, setLine] = useState(null);
  const [unit, setUnit] = useState(null);
  const [unitFam, setUnitFam] = useState(null);
  const [headFam, setHeadFam] = useState(null);
  const [headtop, setHeadtop] = useState(null);
  const [cart, setCart] = useState(() => LS.get("cart", {}));
  const [cartOpen, setCartOpen] = useState(false);
  const [video, setVideo] = useState(null);
  const [ref, setRef] = useState(null);
  const [commercial] = useState(() => {
    const q = new URLSearchParams(location.search).get("comercial");
    if (q === "1") LS.set("commercial", true);else if (q === "0") LS.set("commercial", false);
    return !!LS.get("commercial", false);
  });
  useEffect(() => {
    if (commercial) setScreen(s => s === "attract" ? "home" : s);
  }, [commercial]);
  const [kitSel, setKitSel] = useState({});
  const [kitStep, setKitStep] = useState({
    skip: []
  });
  const [kit, setKit] = useState(null);
  const t = I[lang];
  useEffect(() => {
    document.body.setAttribute("data-theme", tw.theme || "gvs");
  }, [tw.theme]);
  useEffect(() => {
    const f = FONTS[tw.fontPair] || FONTS.titillium;
    document.documentElement.style.setProperty("--font-head", f.head + ",system-ui,sans-serif");
    document.documentElement.style.setProperty("--font-body", f.body + ",system-ui,sans-serif");
  }, [tw.fontPair]);
  useEffect(() => {
    document.documentElement.style.setProperty("--primary", tw.primary || "#009fe3");
    document.documentElement.style.setProperty("--on-primary", isLight(tw.primary) ? "#06231e" : "#ffffff");
    document.documentElement.style.setProperty("--html-lang", lang);
  }, [tw.primary, lang]);
  useEffect(() => {
    document.documentElement.lang = t.locale;
  }, [lang]);
  const setLang = l => {
    setLangState(l);
    LS.set("lang", l);
  };
  useEffect(() => {
    LS.set("cart", cart);
  }, [cart]);
  const nav = useCallback(to => {
    var _document$querySelect;
    setScreen(cur => {
      setHist(h => [...h, cur]);
      return to;
    });
    (_document$querySelect = document.querySelector(".g-main")) === null || _document$querySelect === void 0 || _document$querySelect.scrollTo(0, 0);
  }, []);
  const back = useCallback(() => {
    var _document$querySelect2;
    setHist(h => {
      if (!h.length) return h;
      const p = [...h];
      const prev = p.pop();
      setScreen(prev);
      return p;
    });
    (_document$querySelect2 = document.querySelector(".g-main")) === null || _document$querySelect2 === void 0 || _document$querySelect2.scrollTo(0, 0);
  }, []);
  const restart = useCallback(() => {
    setCart({});
    setActivity(null);
    setLine(null);
    setUnit(null);
    setUnitFam(null);
    setHeadFam(null);
    setHeadtop(null);
    setRef(null);
    setHist([]);
    setCartOpen(false);
    setVideo(null);
    setKitSel({});
    setKitStep({
      skip: []
    });
    setKit(null);
    setScreen(commercial ? "home" : "attract");
  }, [commercial]);
  const metaOf = id => C.items.find(i => i.id === id);
  const kindOf = id => {
    const it = metaOf(id);
    return it ? it.kind : "accessory";
  };
  const is = id => !!cart[id];
  const add = id => setCart(c => ({
    ...c,
    [id]: (c[id] || 0) + 1
  }));
  const inc = id => setCart(c => ({
    ...c,
    [id]: (c[id] || 0) + 1
  }));
  const dec = id => setCart(c => {
    const q = (c[id] || 0) - 1;
    const n = {
      ...c
    };
    if (q <= 0) delete n[id];else n[id] = q;
    return n;
  });
  const remove = id => setCart(c => {
    const n = {
      ...c
    };
    delete n[id];
    return n;
  });
  const clear = () => setCart({});
  const pickReplace = (prev, p) => setCart(c => {
    const n = {
      ...c
    };
    if (prev && prev.id !== p.id) delete n[prev.id];
    n[p.id] = (n[p.id] || 0) + 1;
    return n;
  });
  const pickUnit = p => {
    pickReplace(unit, p);
    setUnit(p);
  };
  const pickHeadtop = p => {
    pickReplace(headtop, p);
    setHeadtop(p);
  };
  const KORD = {
    main: 0,
    sensor: 1,
    accessory: 2,
    part: 3
  };
  const cartList = () => Object.keys(cart).map(id => ({
    p: metaOf(id),
    qty: cart[id],
    kind: kindOf(id)
  })).filter(x => x.p).sort((a, b) => {
    var _KORD$a$kind, _KORD$b$kind;
    return ((_KORD$a$kind = KORD[a.kind]) !== null && _KORD$a$kind !== void 0 ? _KORD$a$kind : 9) - ((_KORD$b$kind = KORD[b.kind]) !== null && _KORD$b$kind !== void 0 ? _KORD$b$kind : 9);
  });
  const count = Object.values(cart).reduce((s, q) => s + q, 0);
  const units = l => {
    const fam = l && l.unitFams ? unitFam : l && l.unitFam;
    let u = C.items.filter(i => i.fam === fam && i.kind === "main");
    if (activity) {
      const f = u.filter(i => i.acts && i.acts.includes(activity.id));
      if (f.length) u = f;
    }
    return u;
  };
  const unitFamilies = l => {
    if (l && l.unitFams) {
      return l.unitFams.map(f => ({
        id: f,
        count: C.items.filter(i => i.fam === f && i.kind === "main").length
      })).filter(x => x.count > 0);
    }
    const c = C.items.filter(i => i.fam === l.unitFam && i.kind === "main").length;
    return c ? [{
      id: l.unitFam,
      count: c
    }] : [];
  };
  const sensors = l => C.items.filter(i => i.fam === l.unitFam && i.kind === "sensor");
  const compatHeadtops = l => C.items.filter(i => i.group === "headtop" && i.kind === "main" && (l.compat ? i[l.compat] : false));
  const headtops = l => {
    let hs = compatHeadtops(l);
    if (activity) {
      hs = hs.filter(i => i.acts.includes(activity.id));
    }
    return hs;
  };
  const headFamilies = l => {
    const seen = {},
      order = [];
    headtops(l).forEach(i => {
      if (!seen[i.fam]) {
        seen[i.fam] = 0;
        order.push(i.fam);
      }
      seen[i.fam]++;
    });
    return order.map(id => ({
      id,
      count: seen[id]
    }));
  };
  const accFams = () => line && (line.id === "papr" || line.id === "sar") ? [headtop && headtop.fam].filter(Boolean) : [unit && unit.fam].filter(Boolean);
  const airOK = i => {
    if (!(line && (line.id === "papr" || line.id === "sar"))) return true;
    return line.compat === "papr" ? i.papr || !i.sar : i.sar || !i.papr;
  };
  const modelOK = i => {
    if (!headtop) return true;
    if (i.models === undefined) return true;
    return i.models.includes(headtop.code);
  };
  const actOK = i => !(activity && i.notActs && i.notActs.includes(activity.id));
  const accessories = () => {
    const fams = accFams();
    return C.items.filter(i => fams.includes(i.fam) && i.kind === "accessory" && airOK(i) && modelOK(i) && actOK(i));
  };
  const parts = () => {
    const fams = accFams();
    return C.items.filter(i => fams.includes(i.fam) && i.kind === "part" && airOK(i) && modelOK(i) && actOK(i));
  };
  const unitExtras = () => {
    if (!(line && (line.id === "papr" || line.id === "sar"))) return [];
    if (!unit || headtop && unit.fam === headtop.fam) return [];
    return C.items.filter(i => i.fam === unit.fam && (i.kind === "accessory" || i.kind === "part") && airOK(i));
  };
  const isRecommended = l => {
    if (!activity) return false;
    if (units(l).some(i => i.acts.includes(activity.id))) return true;
    if (l.compat && compatHeadtops(l).some(i => i.acts.includes(activity.id))) return true;
    return false;
  };
  const activityUnits = () => {
    if (!activity) return [];
    const base = C.lines.filter(l => l.compat && isRecommended(l)).map(l => ({
      line: l,
      fam: l.unitFam,
      count: units(l).length
    }));
    const elLine = C.lines.find(l => l.id === "elipse");
    const elFams = (activity.elipseFams || []).map(fam => ({
      line: elLine,
      fam,
      count: C.items.filter(i => i.fam === fam && i.kind === "main").length
    })).filter(x => x.count > 0);
    return [...base, ...elFams];
  };
  const famName = id => {
    const f = C.families.find(x => x.id === id);
    return f ? f.name : id;
  };
  const goNext = step => {
    const seq = line.steps;
    const i = seq.indexOf(step);
    nav(seq[i + 1] || "summary");
  };
  const submit = async form => {
    const reference = genRef();
    const payload = {
      ref: reference,
      ts: new Date().toISOString(),
      lang,
      name: form.name,
      company: form.company,
      role: form.role,
      phone: form.phone,
      email: form.email,
      notes: form.notes,
      lgpd: !!form.lgpd,
      items: cartList().map(_ref => {
        let {
          p,
          qty,
          kind
        } = _ref;
        return {
          code: p.code,
          name: window.descOf ? window.descOf(p, lang) : p.desc,
          qty,
          kind
        };
      }),
      config_text: cartList().map(_ref2 => {
        let {
          p,
          qty,
          kind
        } = _ref2;
        return `${qty}x ${p.code} ${window.descOf ? window.descOf(p, lang) : p.desc} [${kind}]`;
      }).join(" | ")
    };
    const url = tw.endpoint && tw.endpoint.trim() || APPS_SCRIPT_URL;
    try {
      if (url) {
        await fetch(url, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify(payload)
        });
      } else {
        await new Promise(r => setTimeout(r, 900));
        console.log("[GVS] Envio simulado (sem endpoint). Payload:", payload);
      }
      setRef(reference);
      nav("success");
      setCart({});
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };
  const idleRef = useRef(null);
  useEffect(() => {
    const secs = commercial ? 0 : Number(tw.idleSec) || 0;
    const reset = () => {
      clearTimeout(idleRef.current);
      if (secs <= 0) return;
      idleRef.current = setTimeout(() => {
        setScreen(cur => {
          if (cur === "attract") return cur;
          restart();
          return "attract";
        });
      }, secs * 1000);
    };
    const evs = ["pointerdown", "keydown", "touchstart"];
    evs.forEach(e => window.addEventListener(e, reset, {
      passive: true
    }));
    reset();
    return () => {
      evs.forEach(e => window.removeEventListener(e, reset));
      clearTimeout(idleRef.current);
    };
  }, [tw.idleSec, restart, commercial]);
  const ctx = {
    t,
    lang,
    C,
    tw,
    nav,
    back,
    restart,
    setLang,
    activity,
    setActivity,
    line,
    setLine,
    unit,
    setUnit,
    unitFam,
    setUnitFam,
    headFam,
    setHeadFam,
    headtop,
    setHeadtop,
    pickUnit,
    pickHeadtop,
    units,
    unitFamilies,
    sensors,
    headtops,
    headFamilies,
    accessories,
    parts,
    unitExtras,
    isRecommended,
    activityUnits,
    famName,
    goNext,
    cart,
    count,
    is,
    add,
    inc,
    dec,
    remove,
    clear,
    cartList,
    metaOf,
    openVideo: p => setVideo(p),
    submit,
    ref,
    start: () => nav("home"),
    commercial,
    kitSel,
    setKitSel,
    kitStep,
    setKitStep,
    kit,
    setKit
  };
  const SCREENS = {
    attract: window.ScreenAttract,
    home: window.ScreenHome,
    activities: window.ScreenActivities,
    lines: window.ScreenLines,
    actunits: window.ScreenActUnits,
    unitfam: window.ScreenUnitFam,
    unit: window.ScreenUnit,
    headfam: window.ScreenHeadFam,
    headtop: window.ScreenHeadtop,
    sensor: window.ScreenSensor,
    accessories: window.ScreenAccessories,
    summary: window.ScreenSummary,
    form: window.ScreenForm,
    success: window.ScreenSuccess,
    kits: window.ScreenKits,
    kit: window.ScreenKit,
    kitregion: window.ScreenKitRegion
  };
  const Screen = SCREENS[screen] || window.ScreenHome;
  const showChrome = screen !== "attract";
  const showBack = !["attract", "home", "success"].includes(screen) && hist.length > 0;
  return React.createElement("div", {
    className: "g-app"
  }, showChrome && React.createElement(window.GVSChrome, {
    t: t,
    lang: lang,
    setLang: setLang,
    count: count,
    onCart: () => setCartOpen(true),
    onHome: restart,
    showHome: screen !== "home"
  }), React.createElement("main", {
    className: "g-main"
  }, showBack && React.createElement("div", {
    className: "g-backbar"
  }, React.createElement("button", {
    className: "g-back",
    onClick: back
  }, React.createElement(window.UIIcon, {
    name: "left",
    size: 20
  }), " ", t.back)), React.createElement(Screen, {
    ctx: ctx
  })), cartOpen && React.createElement(window.CartDrawer, {
    ctx: ctx,
    onClose: () => setCartOpen(false)
  }), video && React.createElement(window.VideoModal, {
    p: video,
    t: t,
    lang: lang,
    onClose: () => setVideo(null)
  }), React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, React.createElement(TweakSection, {
    label: "Estilo visual"
  }), React.createElement(TweakRadio, {
    label: "Tema",
    value: tw.theme,
    options: [{
      value: "gvs",
      label: "GVS"
    }, {
      value: "midnight",
      label: "Escuro"
    }, {
      value: "bold",
      label: "Vibrante"
    }],
    onChange: v => setTweak("theme", v)
  }), React.createElement(TweakColor, {
    label: "Cor principal",
    value: tw.primary,
    options: ["#009fe3", "#0079b5", "#00b4ff", "#1f6feb", "#808b95"],
    onChange: v => setTweak("primary", v)
  }), React.createElement(TweakSelect, {
    label: "Tipografia",
    value: tw.fontPair,
    options: [{
      value: "titillium",
      label: "Titillium (GVS)"
    }, {
      value: "sora",
      label: "Sora + Barlow"
    }, {
      value: "archivo",
      label: "Archivo + Barlow"
    }],
    onChange: v => setTweak("fontPair", v)
  }), React.createElement(TweakSection, {
    label: "Layout"
  }), React.createElement(TweakRadio, {
    label: "Tela de atra\xE7\xE3o",
    value: tw.attractStyle,
    options: [{
      value: "focus",
      label: "Foco"
    }, {
      value: "bold",
      label: "Impacto"
    }, {
      value: "minimal",
      label: "Limpa"
    }],
    onChange: v => setTweak("attractStyle", v)
  }), React.createElement(TweakRadio, {
    label: "Sele\xE7\xE3o",
    value: tw.selLayout,
    options: [{
      value: "grid",
      label: "Grade"
    }, {
      value: "list",
      label: "Lista"
    }],
    onChange: v => setTweak("selLayout", v)
  }), React.createElement(TweakRadio, {
    label: "Resumo",
    value: tw.summaryStyle,
    options: [{
      value: "cards",
      label: "Cards"
    }, {
      value: "receipt",
      label: "Lista"
    }],
    onChange: v => setTweak("summaryStyle", v)
  }), React.createElement(TweakSection, {
    label: "Quiosque"
  }), React.createElement(TweakSlider, {
    label: "Reset inatividade",
    value: tw.idleSec,
    min: 0,
    max: 180,
    step: 15,
    unit: "s",
    onChange: v => setTweak("idleSec", v)
  }), React.createElement(TweakText, {
    label: "URL Apps Script",
    value: tw.endpoint,
    placeholder: "https://.../exec",
    onChange: v => setTweak("endpoint", v)
  }), React.createElement(TweakSection, {
    label: "Kit Finder (comercial)"
  }), React.createElement(TweakRadio, {
    label: "Layout",
    value: tw.kfLayout,
    options: [{
      value: "wizard",
      label: "Passo a passo"
    }, {
      value: "facets",
      label: "Filtros"
    }],
    onChange: v => setTweak("kfLayout", v)
  })));
}
function isLight(hex) {
  if (!hex) return false;
  const h = hex.replace("#", "");
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h;
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return false;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 150000;
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));