import { radii as l, colors as e, shadows as i } from "../tokens/index.js";
import { spacing as p, default as x, typography as m } from "../tokens/index.js";
const f = {
  name: "ProtonButton",
  props: {
    variant: { type: String, default: "primary" },
    size: { type: String, default: "md" },
    isLoading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    type: { type: String, default: "button" },
    className: { type: String, default: "" }
  },
  emits: ["click"],
  setup(a, { slots: n, emit: s }) {
    return {
      getStyle: () => {
        const t = {
          borderRadius: l.xl,
          fontWeight: "700",
          letterSpacing: "-0.01em",
          cursor: a.disabled || a.isLoading ? "not-allowed" : "pointer",
          opacity: a.disabled ? "0.6" : "1",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          border: "none",
          transition: "all 0.2s ease-in-out"
        };
        switch (a.size === "sm" ? (t.fontSize = "0.75rem", t.padding = "6px 12px") : a.size === "lg" ? (t.fontSize = "0.95rem", t.padding = "12px 24px") : (t.fontSize = "0.85rem", t.padding = "9px 18px"), a.variant) {
          case "secondary":
            t.backgroundColor = e.coffee[900], t.color = "#ffffff";
            break;
          case "outline":
            t.backgroundColor = "transparent", t.color = e.slate[800], t.border = `1px solid ${e.slate[300]}`;
            break;
          case "ghost":
            t.backgroundColor = "transparent", t.color = e.slate[700];
            break;
          case "danger":
            t.backgroundColor = e.status.error.main, t.color = "#ffffff";
            break;
          default:
            t.backgroundColor = e.amber[700], t.color = "#ffffff";
            break;
        }
        return t;
      },
      handleClick: (t) => {
        !a.disabled && !a.isLoading && s("click", t);
      },
      slots: n
    };
  }
}, u = {
  name: "ProtonCard",
  props: {
    variant: { type: String, default: "outlined" },
    padding: { type: String, default: "md" },
    hoverEffect: { type: Boolean, default: !1 }
  },
  setup(a, { slots: n }) {
    return { getStyle: () => {
      const r = {
        borderRadius: l["2xl"],
        transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
      };
      return a.padding === "none" ? r.padding = "0px" : a.padding === "sm" ? r.padding = "12px" : a.padding === "lg" ? r.padding = "28px" : r.padding = "20px", a.variant === "elevated" ? (r.backgroundColor = "#ffffff", r.boxShadow = i.md) : a.variant === "flat" ? (r.backgroundColor = e.slate[50], r.border = `1px solid ${e.slate[100]}`) : (r.backgroundColor = "#ffffff", r.border = `1px solid ${e.slate[200]}`, r.boxShadow = i.xs), r;
    }, slots: n };
  }
}, g = {
  name: "ProtonStatusBadge",
  props: {
    label: { type: String, required: !0 },
    status: { type: String, default: "neutral" },
    pulse: { type: Boolean, default: !1 }
  },
  setup(a) {
    return { getStyle: () => {
      let s = e.slate[100], r = e.slate[700], t = e.slate[200], o = e.slate[500];
      return a.status === "success" ? (s = e.status.success.light, r = e.status.success.text, t = e.status.success.border, o = e.status.success.main) : a.status === "warning" ? (s = e.status.warning.light, r = e.status.warning.text, t = e.status.warning.border, o = e.status.warning.main) : a.status === "error" ? (s = e.status.error.light, r = e.status.error.text, t = e.status.error.border, o = e.status.error.main) : a.status === "coffee" && (s = e.amber[50], r = e.amber[800], t = e.amber[200], o = e.amber[600]), {
        pill: {
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "4px 10px",
          borderRadius: l.full,
          backgroundColor: s,
          color: r,
          border: `1px solid ${t}`,
          fontSize: "0.75rem",
          fontWeight: "700"
        },
        dot: {
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: o,
          display: "inline-block"
        }
      };
    }, props: a };
  }
};
export {
  f as ProtonButton,
  u as ProtonCard,
  g as ProtonStatusBadge,
  e as colors,
  l as radii,
  i as shadows,
  p as spacing,
  x as tokens,
  m as typography
};
