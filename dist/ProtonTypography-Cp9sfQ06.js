import { jsxs as f, jsx as r, Fragment as S } from "react/jsx-runtime";
import { createTheme as k, ThemeProvider as w, CssBaseline as v, Button as W, CircularProgress as z, Card as P, CardContent as T, TextField as R, InputAdornment as C, Slider as $, Dialog as M, DialogTitle as B, DialogContent as H, DialogActions as I } from "@mui/material";
import { radii as u, colors as e, typography as b, shadows as x } from "./tokens/index.js";
const j = {
  palette: {
    mode: "light",
    primary: {
      main: e.amber[700],
      light: e.amber[500],
      dark: e.amber[900],
      contrastText: "#ffffff"
    },
    secondary: {
      main: e.coffee[900],
      light: e.coffee[700],
      dark: e.coffee[950],
      contrastText: "#ffffff"
    },
    background: {
      default: e.slate[50],
      paper: "#ffffff"
    },
    text: {
      primary: e.slate[900],
      secondary: e.slate[500]
    },
    success: {
      main: e.status.success.main,
      light: e.status.success.light,
      dark: e.status.success.dark
    },
    warning: {
      main: e.status.warning.main,
      light: e.status.warning.light,
      dark: e.status.warning.dark
    },
    error: {
      main: e.status.error.main,
      light: e.status.error.light,
      dark: e.status.error.dark
    }
  },
  typography: {
    fontFamily: b.fonts.sans,
    button: {
      textTransform: "none",
      fontWeight: 700
    },
    h1: { fontWeight: 900 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 }
  },
  shape: {
    borderRadius: parseInt(u.md, 10)
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: u.lg,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none"
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: u["2xl"],
          borderColor: e.slate[200],
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)"
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: u["2xl"]
        }
      }
    }
  }
}, D = k(j), A = ({
  children: o,
  theme: t = D
}) => /* @__PURE__ */ f(w, { theme: t, children: [
  /* @__PURE__ */ r(v, {}),
  o
] }), L = ({
  children: o,
  variant: t = "primary",
  size: n = "md",
  isLoading: i = !1,
  disabled: a = !1,
  fullWidth: s = !1,
  startIcon: d,
  endIcon: c,
  onClick: l,
  type: g = "button",
  className: h = ""
}) => /* @__PURE__ */ r(
  W,
  {
    type: g,
    onClick: l,
    disabled: a || i,
    fullWidth: s,
    sx: (() => {
      const p = {
        borderRadius: u.xl,
        fontWeight: 700,
        textTransform: "none",
        letterSpacing: "-0.01em",
        transition: "all 0.2s ease-in-out",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px"
      };
      switch (n === "sm" ? (p.fontSize = "0.75rem", p.py = "6px", p.px = "12px") : n === "lg" ? (p.fontSize = "0.95rem", p.py = "12px", p.px = "24px") : (p.fontSize = "0.85rem", p.py = "9px", p.px = "18px"), t) {
        case "primary":
          return {
            ...p,
            backgroundColor: e.amber[700],
            color: "#ffffff",
            "&:hover": {
              backgroundColor: e.amber[800],
              transform: "translateY(-1px)",
              boxShadow: "0 4px 12px rgba(180, 83, 9, 0.25)"
            }
          };
        case "secondary":
          return {
            ...p,
            backgroundColor: e.coffee[900],
            color: "#ffffff",
            "&:hover": {
              backgroundColor: e.coffee[950],
              transform: "translateY(-1px)",
              boxShadow: "0 4px 12px rgba(44, 30, 25, 0.25)"
            }
          };
        case "outline":
          return {
            ...p,
            backgroundColor: "transparent",
            color: e.slate[800],
            border: `1px solid ${e.slate[300]}`,
            "&:hover": {
              backgroundColor: e.slate[100],
              borderColor: e.slate[400]
            }
          };
        case "ghost":
          return {
            ...p,
            backgroundColor: "transparent",
            color: e.slate[700],
            "&:hover": {
              backgroundColor: e.slate[100]
            }
          };
        case "danger":
          return {
            ...p,
            backgroundColor: e.status.error.main,
            color: "#ffffff",
            "&:hover": {
              backgroundColor: e.status.error.dark,
              boxShadow: "0 4px 12px rgba(239, 68, 68, 0.25)"
            }
          };
      }
    })(),
    className: h,
    children: i ? /* @__PURE__ */ f(S, { children: [
      /* @__PURE__ */ r(z, { size: 16, color: "inherit", sx: { mr: 1 } }),
      /* @__PURE__ */ r("span", { children: "Loading..." })
    ] }) : /* @__PURE__ */ f(S, { children: [
      d && /* @__PURE__ */ r("span", { style: { display: "inline-flex" }, children: d }),
      o,
      c && /* @__PURE__ */ r("span", { style: { display: "inline-flex" }, children: c })
    ] })
  }
), m = ({
  children: o,
  variant: t = "outlined",
  padding: n = "md",
  hoverEffect: i = !1,
  onClick: a,
  className: s = ""
}) => {
  const d = () => {
    switch (n) {
      case "none":
        return 0;
      case "sm":
        return "12px";
      case "lg":
        return "28px";
      default:
        return "20px";
    }
  };
  return /* @__PURE__ */ r(P, { sx: (() => {
    const l = {
      borderRadius: u["2xl"],
      transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: a ? "pointer" : "default"
    };
    return t === "elevated" ? (l.backgroundColor = "#ffffff", l.boxShadow = x.md, l.border = "none", i && (l["&:hover"] = {
      boxShadow: x.xl,
      transform: "translateY(-2px)"
    })) : t === "flat" ? (l.backgroundColor = e.slate[50], l.boxShadow = "none", l.border = `1px solid ${e.slate[100]}`) : (l.backgroundColor = "#ffffff", l.border = `1px solid ${e.slate[200]}`, l.boxShadow = x.xs, i && (l["&:hover"] = {
      borderColor: e.amber[500],
      boxShadow: x.md,
      transform: "translateY(-2px)"
    })), l;
  })(), onClick: a, className: s, children: /* @__PURE__ */ r(T, { sx: { p: `${d()} !important` }, children: o }) });
};
m.Header = ({ title: o, subtitle: t, action: n }) => /* @__PURE__ */ f("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }, children: [
  /* @__PURE__ */ f("div", { children: [
    /* @__PURE__ */ r("div", { style: { fontWeight: 800, fontSize: "1.05rem", color: e.slate[900], letterSpacing: "-0.01em" }, children: o }),
    t && /* @__PURE__ */ r("div", { style: { fontSize: "0.75rem", color: e.slate[500], marginTop: "2px" }, children: t })
  ] }),
  n && /* @__PURE__ */ r("div", { children: n })
] });
m.Body = ({ children: o, className: t = "" }) => /* @__PURE__ */ r("div", { className: t, children: o });
m.Footer = ({ children: o, className: t = "" }) => /* @__PURE__ */ r(
  "div",
  {
    className: t,
    style: {
      marginTop: "16px",
      paddingTop: "12px",
      borderTop: `1px solid ${e.slate[100]}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    children: o
  }
);
const V = ({
  label: o,
  status: t = "neutral",
  pulse: n = !1,
  icon: i,
  size: a = "md",
  className: s = ""
}) => {
  const c = (() => {
    switch (t) {
      case "success":
        return {
          bg: e.status.success.light,
          text: e.status.success.text,
          border: e.status.success.border,
          dot: e.status.success.main
        };
      case "warning":
        return {
          bg: e.status.warning.light,
          text: e.status.warning.text,
          border: e.status.warning.border,
          dot: e.status.warning.main
        };
      case "error":
        return {
          bg: e.status.error.light,
          text: e.status.error.text,
          border: e.status.error.border,
          dot: e.status.error.main
        };
      case "info":
        return {
          bg: e.status.info.light,
          text: e.status.info.text,
          border: e.status.info.border,
          dot: e.status.info.main
        };
      case "coffee":
        return {
          bg: e.amber[50],
          text: e.amber[800],
          border: e.amber[200],
          dot: e.amber[600]
        };
      default:
        return {
          bg: e.slate[100],
          text: e.slate[700],
          border: e.slate[200],
          dot: e.slate[500]
        };
    }
  })(), l = a === "sm" ? "2px" : "4px", g = a === "sm" ? "8px" : "10px", h = a === "sm" ? "0.6875rem" : "0.75rem";
  return /* @__PURE__ */ f(
    "span",
    {
      className: s,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: `${l} ${g}`,
        borderRadius: u.full,
        backgroundColor: c.bg,
        color: c.text,
        border: `1px solid ${c.border}`,
        fontSize: h,
        fontWeight: 700,
        letterSpacing: "-0.01em",
        lineHeight: 1.2
      },
      children: [
        n && /* @__PURE__ */ r(
          "span",
          {
            style: {
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: c.dot,
              display: "inline-block"
            }
          }
        ),
        i && /* @__PURE__ */ r("span", { style: { display: "inline-flex" }, children: i }),
        /* @__PURE__ */ r("span", { children: o })
      ]
    }
  );
}, _ = ({
  label: o,
  value: t,
  onChange: n,
  placeholder: i,
  type: a = "text",
  error: s = !1,
  helperText: d,
  disabled: c = !1,
  fullWidth: l = !0,
  startAdornment: g,
  endAdornment: h,
  className: y = ""
}) => /* @__PURE__ */ r(
  R,
  {
    label: o,
    value: t,
    onChange: n,
    placeholder: i,
    type: a,
    error: s,
    helperText: d,
    disabled: c,
    fullWidth: l,
    variant: "outlined",
    size: "small",
    className: y,
    InputProps: {
      startAdornment: g ? /* @__PURE__ */ r(C, { position: "start", children: g }) : void 0,
      endAdornment: h ? /* @__PURE__ */ r(C, { position: "end", children: h }) : void 0,
      sx: {
        borderRadius: u.lg,
        backgroundColor: "#ffffff",
        fontSize: "0.85rem",
        "& fieldset": {
          borderColor: e.slate[300]
        },
        "&:hover fieldset": {
          borderColor: e.amber[600]
        },
        "&.Mui-focused fieldset": {
          borderColor: e.amber[700],
          borderWidth: "2px"
        }
      }
    },
    InputLabelProps: {
      sx: {
        fontSize: "0.85rem",
        fontWeight: 600,
        "&.Mui-focused": {
          color: e.amber[800]
        }
      }
    }
  }
), q = ({
  value: o,
  onChange: t,
  min: n = 30,
  max: i = 70,
  step: a = 1,
  unit: s = "cm",
  label: d,
  className: c = ""
}) => /* @__PURE__ */ f("div", { className: c, style: { width: "100%" }, children: [
  d && /* @__PURE__ */ f("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }, children: [
    /* @__PURE__ */ r("span", { style: { fontSize: "0.75rem", fontWeight: 700, color: e.slate[700] }, children: d }),
    /* @__PURE__ */ f(
      "span",
      {
        style: {
          fontSize: "0.75rem",
          fontWeight: 800,
          color: e.amber[800],
          backgroundColor: e.amber[50],
          border: `1px solid ${e.amber[200]}`,
          padding: "2px 8px",
          borderRadius: u.md
        },
        children: [
          o,
          " ",
          s
        ]
      }
    )
  ] }),
  /* @__PURE__ */ r(
    $,
    {
      value: o,
      min: n,
      max: i,
      step: a,
      onChange: (l, g) => t(g),
      sx: {
        color: e.amber[700],
        height: 6,
        "& .MuiSlider-track": {
          border: "none"
        },
        "& .MuiSlider-thumb": {
          height: 18,
          width: 18,
          backgroundColor: "#ffffff",
          border: `3px solid ${e.amber[700]}`,
          "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "0 0 0 8px rgba(180, 83, 9, 0.16)"
          }
        },
        "& .MuiSlider-rail": {
          color: e.slate[200],
          opacity: 1
        }
      }
    }
  )
] }), G = ({
  isOpen: o,
  onClose: t,
  title: n,
  subtitle: i,
  children: a,
  actions: s,
  maxWidth: d = "sm",
  className: c = ""
}) => /* @__PURE__ */ f(
  M,
  {
    open: o,
    onClose: t,
    maxWidth: d,
    fullWidth: !0,
    className: c,
    PaperProps: {
      sx: {
        borderRadius: u["2xl"],
        p: 1
      }
    },
    children: [
      n && /* @__PURE__ */ f(B, { sx: { pb: 1 }, children: [
        /* @__PURE__ */ r("div", { style: { fontWeight: 800, fontSize: "1.25rem", color: e.slate[900], letterSpacing: "-0.02em" }, children: n }),
        i && /* @__PURE__ */ r("div", { style: { fontSize: "0.8rem", color: e.slate[500], marginTop: "4px", fontWeight: 500 }, children: i })
      ] }),
      /* @__PURE__ */ r(H, { sx: { py: 2 }, children: a }),
      s && /* @__PURE__ */ r(I, { sx: { px: 3, pb: 2, pt: 1 }, children: s })
    ]
  }
), J = ({
  title: o = "Physical Dimensions",
  badgeText: t = "Metric Specs",
  metrics: n,
  highlightNotice: i,
  className: a = ""
}) => /* @__PURE__ */ f(
  "div",
  {
    className: a,
    style: {
      backgroundColor: "#ffffff",
      borderRadius: u["2xl"],
      border: `1px solid ${e.slate[200]}`,
      padding: "20px"
    },
    children: [
      /* @__PURE__ */ f("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [
        /* @__PURE__ */ r(
          "h4",
          {
            style: {
              margin: 0,
              fontSize: "0.75rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: e.slate[400]
            },
            children: o
          }
        ),
        t && /* @__PURE__ */ r(
          "span",
          {
            style: {
              fontSize: "0.65rem",
              fontWeight: 700,
              backgroundColor: e.slate[100],
              color: e.slate[600],
              padding: "2px 8px",
              borderRadius: u.full,
              fontFamily: "monospace"
            },
            children: t
          }
        )
      ] }),
      /* @__PURE__ */ r(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: `repeat(${n.length}, 1fr)`,
            backgroundColor: e.slate[50],
            borderRadius: u.xl,
            border: `1px solid ${e.slate[100]}`,
            padding: "14px",
            textAlign: "center",
            gap: "8px"
          },
          children: n.map((s, d) => /* @__PURE__ */ f(
            "div",
            {
              style: {
                borderLeft: d > 0 ? `1px solid ${e.slate[200]}` : "none",
                paddingLeft: d > 0 ? "8px" : "0"
              },
              children: [
                /* @__PURE__ */ r("span", { style: { display: "block", fontSize: "0.75rem", color: e.slate[400], fontWeight: 500 }, children: s.label }),
                /* @__PURE__ */ f("span", { style: { display: "block", fontSize: "0.95rem", fontWeight: 900, color: e.slate[800], marginTop: "2px" }, children: [
                  s.value,
                  " ",
                  s.unit || "cm"
                ] })
              ]
            },
            s.label
          ))
        }
      ),
      i && /* @__PURE__ */ r(
        "div",
        {
          style: {
            marginTop: "12px",
            padding: "10px 14px",
            backgroundColor: e.amber[50],
            border: `1px solid ${e.amber[200]}`,
            borderRadius: u.lg,
            fontSize: "0.75rem",
            color: e.amber[900],
            fontWeight: 600
          },
          children: i
        }
      )
    ]
  }
), K = ({
  level: o = 2,
  children: t,
  className: n = "",
  style: i = {}
}) => {
  const a = () => {
    const s = {
      color: e.slate[900],
      fontFamily: b.fonts.sans,
      letterSpacing: "-0.02em",
      margin: 0,
      ...i
    };
    switch (o) {
      case 1:
        return { ...s, fontSize: "2.5rem", fontWeight: 900, lineHeight: 1.1 };
      case 2:
        return { ...s, fontSize: "1.75rem", fontWeight: 800, lineHeight: 1.2 };
      case 3:
        return { ...s, fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.3 };
      case 4:
        return { ...s, fontSize: "1rem", fontWeight: 700, lineHeight: 1.4 };
      default:
        return { ...s, fontSize: "0.875rem", fontWeight: 600 };
    }
  };
  return o === 1 ? /* @__PURE__ */ r("h1", { className: n, style: a(), children: t }) : o === 2 ? /* @__PURE__ */ r("h2", { className: n, style: a(), children: t }) : o === 3 ? /* @__PURE__ */ r("h3", { className: n, style: a(), children: t }) : o === 4 ? /* @__PURE__ */ r("h4", { className: n, style: a(), children: t }) : o === 5 ? /* @__PURE__ */ r("h5", { className: n, style: a(), children: t }) : /* @__PURE__ */ r("h6", { className: n, style: a(), children: t });
}, Q = ({
  children: o,
  variant: t = "body",
  className: n = "",
  style: i = {}
}) => /* @__PURE__ */ r("p", { className: n, style: (() => {
  const s = {
    fontFamily: b.fonts.sans,
    margin: 0,
    ...i
  };
  switch (t) {
    case "caption":
      return { ...s, fontSize: "0.75rem", color: e.slate[500], lineHeight: 1.3 };
    case "muted":
      return { ...s, fontSize: "0.85rem", color: e.slate[400], lineHeight: 1.4 };
    default:
      return { ...s, fontSize: "0.9rem", color: e.slate[700], lineHeight: 1.5 };
  }
})(), children: o });
export {
  L as P,
  m as a,
  G as b,
  K as c,
  _ as d,
  J as e,
  q as f,
  V as g,
  Q as h,
  A as i,
  j,
  D as p
};
