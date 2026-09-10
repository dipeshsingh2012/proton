import { jsxs as f, jsx as r, Fragment as S } from "react/jsx-runtime";
import { createTheme as k, ThemeProvider as v, CssBaseline as W, Button as z, CircularProgress as w, Card as P, CardContent as T, TextField as R, InputAdornment as C, Slider as $, Dialog as M, DialogTitle as H, DialogContent as B, DialogActions as j, Skeleton as I } from "@mui/material";
import { radii as c, colors as e, typography as b, shadows as x } from "./tokens/index.js";
const D = {
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
    borderRadius: parseInt(c.md, 10)
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: c.lg,
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
          borderRadius: c["2xl"],
          borderColor: e.slate[200],
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)"
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: c["2xl"]
        }
      }
    }
  }
}, F = k(D), A = ({
  children: t,
  theme: o = F
}) => /* @__PURE__ */ f(v, { theme: o, children: [
  /* @__PURE__ */ r(W, {}),
  t
] }), V = ({
  children: t,
  variant: o = "primary",
  size: n = "md",
  isLoading: i = !1,
  disabled: a = !1,
  fullWidth: s = !1,
  startIcon: d,
  endIcon: p,
  onClick: l,
  type: g = "button",
  className: h = ""
}) => /* @__PURE__ */ r(
  z,
  {
    type: g,
    onClick: l,
    disabled: a || i,
    fullWidth: s,
    sx: (() => {
      const u = {
        borderRadius: c.xl,
        fontWeight: 700,
        textTransform: "none",
        letterSpacing: "-0.01em",
        transition: "all 0.2s ease-in-out",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px"
      };
      switch (n === "sm" ? (u.fontSize = "0.75rem", u.py = "6px", u.px = "12px") : n === "lg" ? (u.fontSize = "0.95rem", u.py = "12px", u.px = "24px") : (u.fontSize = "0.85rem", u.py = "9px", u.px = "18px"), o) {
        case "primary":
          return {
            ...u,
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
            ...u,
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
            ...u,
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
            ...u,
            backgroundColor: "transparent",
            color: e.slate[700],
            "&:hover": {
              backgroundColor: e.slate[100]
            }
          };
        case "danger":
          return {
            ...u,
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
      /* @__PURE__ */ r(w, { size: 16, color: "inherit", sx: { mr: 1 } }),
      /* @__PURE__ */ r("span", { children: "Loading..." })
    ] }) : /* @__PURE__ */ f(S, { children: [
      d && /* @__PURE__ */ r("span", { style: { display: "inline-flex" }, children: d }),
      t,
      p && /* @__PURE__ */ r("span", { style: { display: "inline-flex" }, children: p })
    ] })
  }
), m = ({
  children: t,
  variant: o = "outlined",
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
      borderRadius: c["2xl"],
      transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: a ? "pointer" : "default"
    };
    return o === "elevated" ? (l.backgroundColor = "#ffffff", l.boxShadow = x.md, l.border = "none", i && (l["&:hover"] = {
      boxShadow: x.xl,
      transform: "translateY(-2px)"
    })) : o === "flat" ? (l.backgroundColor = e.slate[50], l.boxShadow = "none", l.border = `1px solid ${e.slate[100]}`) : (l.backgroundColor = "#ffffff", l.border = `1px solid ${e.slate[200]}`, l.boxShadow = x.xs, i && (l["&:hover"] = {
      borderColor: e.amber[500],
      boxShadow: x.md,
      transform: "translateY(-2px)"
    })), l;
  })(), onClick: a, className: s, children: /* @__PURE__ */ r(T, { sx: { p: `${d()} !important` }, children: t }) });
};
m.Header = ({ title: t, subtitle: o, action: n }) => /* @__PURE__ */ f("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }, children: [
  /* @__PURE__ */ f("div", { children: [
    /* @__PURE__ */ r("div", { style: { fontWeight: 800, fontSize: "1.05rem", color: e.slate[900], letterSpacing: "-0.01em" }, children: t }),
    o && /* @__PURE__ */ r("div", { style: { fontSize: "0.75rem", color: e.slate[500], marginTop: "2px" }, children: o })
  ] }),
  n && /* @__PURE__ */ r("div", { children: n })
] });
m.Body = ({ children: t, className: o = "" }) => /* @__PURE__ */ r("div", { className: o, children: t });
m.Footer = ({ children: t, className: o = "" }) => /* @__PURE__ */ r(
  "div",
  {
    className: o,
    style: {
      marginTop: "16px",
      paddingTop: "12px",
      borderTop: `1px solid ${e.slate[100]}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    children: t
  }
);
const _ = ({
  label: t,
  status: o = "neutral",
  pulse: n = !1,
  icon: i,
  size: a = "md",
  className: s = ""
}) => {
  const p = (() => {
    switch (o) {
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
        borderRadius: c.full,
        backgroundColor: p.bg,
        color: p.text,
        border: `1px solid ${p.border}`,
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
              backgroundColor: p.dot,
              display: "inline-block"
            }
          }
        ),
        i && /* @__PURE__ */ r("span", { style: { display: "inline-flex" }, children: i }),
        /* @__PURE__ */ r("span", { children: t })
      ]
    }
  );
}, q = ({
  label: t,
  value: o,
  onChange: n,
  placeholder: i,
  type: a = "text",
  error: s = !1,
  helperText: d,
  disabled: p = !1,
  fullWidth: l = !0,
  startAdornment: g,
  endAdornment: h,
  className: y = ""
}) => /* @__PURE__ */ r(
  R,
  {
    label: t,
    value: o,
    onChange: n,
    placeholder: i,
    type: a,
    error: s,
    helperText: d,
    disabled: p,
    fullWidth: l,
    variant: "outlined",
    size: "small",
    className: y,
    InputProps: {
      startAdornment: g ? /* @__PURE__ */ r(C, { position: "start", children: g }) : void 0,
      endAdornment: h ? /* @__PURE__ */ r(C, { position: "end", children: h }) : void 0,
      sx: {
        borderRadius: c.lg,
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
), G = ({
  value: t,
  onChange: o,
  min: n = 30,
  max: i = 70,
  step: a = 1,
  unit: s = "cm",
  label: d,
  className: p = ""
}) => /* @__PURE__ */ f("div", { className: p, style: { width: "100%" }, children: [
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
          borderRadius: c.md
        },
        children: [
          t,
          " ",
          s
        ]
      }
    )
  ] }),
  /* @__PURE__ */ r(
    $,
    {
      value: t,
      min: n,
      max: i,
      step: a,
      onChange: (l, g) => o(g),
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
] }), J = ({
  isOpen: t,
  onClose: o,
  title: n,
  subtitle: i,
  children: a,
  actions: s,
  maxWidth: d = "sm",
  className: p = ""
}) => /* @__PURE__ */ f(
  M,
  {
    open: t,
    onClose: o,
    maxWidth: d,
    fullWidth: !0,
    className: p,
    PaperProps: {
      sx: {
        borderRadius: c["2xl"],
        p: 1
      }
    },
    children: [
      n && /* @__PURE__ */ f(H, { sx: { pb: 1 }, children: [
        /* @__PURE__ */ r("div", { style: { fontWeight: 800, fontSize: "1.25rem", color: e.slate[900], letterSpacing: "-0.02em" }, children: n }),
        i && /* @__PURE__ */ r("div", { style: { fontSize: "0.8rem", color: e.slate[500], marginTop: "4px", fontWeight: 500 }, children: i })
      ] }),
      /* @__PURE__ */ r(B, { sx: { py: 2 }, children: a }),
      s && /* @__PURE__ */ r(j, { sx: { px: 3, pb: 2, pt: 1 }, children: s })
    ]
  }
), K = ({
  title: t = "Physical Dimensions",
  badgeText: o = "Metric Specs",
  metrics: n,
  highlightNotice: i,
  className: a = ""
}) => /* @__PURE__ */ f(
  "div",
  {
    className: a,
    style: {
      backgroundColor: "#ffffff",
      borderRadius: c["2xl"],
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
            children: t
          }
        ),
        o && /* @__PURE__ */ r(
          "span",
          {
            style: {
              fontSize: "0.65rem",
              fontWeight: 700,
              backgroundColor: e.slate[100],
              color: e.slate[600],
              padding: "2px 8px",
              borderRadius: c.full,
              fontFamily: "monospace"
            },
            children: o
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
            borderRadius: c.xl,
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
            borderRadius: c.lg,
            fontSize: "0.75rem",
            color: e.amber[900],
            fontWeight: 600
          },
          children: i
        }
      )
    ]
  }
), Q = ({
  level: t = 2,
  children: o,
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
    switch (t) {
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
  return t === 1 ? /* @__PURE__ */ r("h1", { className: n, style: a(), children: o }) : t === 2 ? /* @__PURE__ */ r("h2", { className: n, style: a(), children: o }) : t === 3 ? /* @__PURE__ */ r("h3", { className: n, style: a(), children: o }) : t === 4 ? /* @__PURE__ */ r("h4", { className: n, style: a(), children: o }) : t === 5 ? /* @__PURE__ */ r("h5", { className: n, style: a(), children: o }) : /* @__PURE__ */ r("h6", { className: n, style: a(), children: o });
}, U = ({
  children: t,
  variant: o = "body",
  className: n = "",
  style: i = {}
}) => /* @__PURE__ */ r("p", { className: n, style: (() => {
  const s = {
    fontFamily: b.fonts.sans,
    margin: 0,
    ...i
  };
  switch (o) {
    case "caption":
      return { ...s, fontSize: "0.75rem", color: e.slate[500], lineHeight: 1.3 };
    case "muted":
      return { ...s, fontSize: "0.85rem", color: e.slate[400], lineHeight: 1.4 };
    default:
      return { ...s, fontSize: "0.9rem", color: e.slate[700], lineHeight: 1.5 };
  }
})(), children: t }), X = ({
  size: t = "md",
  variant: o = "coffee",
  thickness: n = 3.6,
  label: i = "Loading...",
  className: a = ""
}) => {
  const s = typeof t == "number" ? t : t === "sm" ? 18 : t === "lg" ? 40 : 28, d = o === "amber" ? e.amber[600] : o === "slate" ? e.slate[500] : o === "inherit" ? "inherit" : e.coffee[900];
  return /* @__PURE__ */ f(
    "div",
    {
      role: "status",
      "aria-label": i,
      className: `inline-flex items-center justify-center ${a}`,
      children: [
        /* @__PURE__ */ r(
          w,
          {
            size: s,
            thickness: n,
            sx: {
              color: d,
              animationDuration: "750ms"
            }
          }
        ),
        /* @__PURE__ */ r(
          "span",
          {
            style: {
              position: "absolute",
              width: "1px",
              height: "1px",
              padding: 0,
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              border: 0
            },
            children: i
          }
        )
      ]
    }
  );
}, Z = ({
  variant: t = "rounded",
  width: o,
  height: n,
  animation: i = "wave",
  className: a = "",
  borderRadius: s
}) => /* @__PURE__ */ r(
  I,
  {
    variant: t,
    width: o,
    height: n,
    animation: i,
    className: a,
    sx: {
      borderRadius: s || (t === "circular" ? "50%" : c.xl),
      bgcolor: "rgba(0, 0, 0, 0.06)"
    }
  }
);
export {
  V as P,
  m as a,
  J as b,
  Q as c,
  q as d,
  K as e,
  Z as f,
  G as g,
  X as h,
  _ as i,
  U as j,
  A as k,
  D as l,
  F as p
};
