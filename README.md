# Proton (`proton`)

> **Unified Design System & Framework-Agnostic Abstraction Layer for Hiljhil Cafe**

`proton` is the foundational design system powering all micro-frontends (`homepage-ui`, `discovery-ui`, `product-page-ui`, `counter-check`, `cart-ui`, `checkout-ui`, `mycommerce`).

It serves as a clean **abstraction barrier** over underlying UI component libraries (currently Material UI v6). By importing exclusively from `proton`, UI fragments remain decoupled from the specific rendering engine — allowing the team to swap or replace Material UI (e.g., with Radix primitives, Tailwind, or custom CSS) at any point in the future without touching fragment code.

---

## 🏗️ Multi-Target Architecture

`proton` provides framework-specific exports alongside shared, framework-agnostic design tokens:

- **`proton/tokens`**: Pure JavaScript/TypeScript tokens (colors, typography, 4px grid spacing, radii, shadows).
- **`proton/react`** (or `proton`): React components wrapping Material UI (`ProtonButton`, `ProtonCard`, `ProtonDialog`, etc.).
- **`proton/vue`**: Vue 3 component adapters consuming the identical token specifications.

```
┌────────────────────────────────────────────────────────┐
│               proton/tokens (Ground Truth)              │
│       Colors • Typography • Spacing • Radii • Shadows  │
└───────────────────────────┬────────────────────────────┘
                            │
            ┌───────────────┴───────────────┐
            ▼                               ▼
  ┌───────────────────┐           ┌───────────────────┐
  │   proton/react    │           │    proton/vue     │
  │ (MUI Abstraction) │           │  (Vue 3 Adapter)  │
  └───────────────────┘           └───────────────────┘
```

---

## 🚀 Installation & Consumption

In your micro-frontend's `package.json`:
```json
{
  "dependencies": {
    "proton": "file:../proton"
  }
}
```

### 1. React Micro-Frontends (`proton/react`)
```tsx
import React from 'react';
import {
  ProtonThemeProvider,
  ProtonButton,
  ProtonCard,
  ProtonStatusBadge,
  ProtonSlider,
  ProtonMetricBox,
} from 'proton/react';
// or directly from 'proton'
```

#### Theme Wrapping
Wrap your root fragment or app in `<ProtonThemeProvider>`:
```tsx
import { ProtonThemeProvider } from 'proton/react';

export const App = () => (
  <ProtonThemeProvider>
    <YourFragment />
  </ProtonThemeProvider>
);
```

#### Reusable Component Primitives
```tsx
// 1. Buttons
<ProtonButton variant="primary" size="md" onClick={handleOrder}>
  Order Ahead for Bar Pickup
</ProtonButton>

// 2. Cards
<ProtonCard variant="outlined" hoverEffect>
  <ProtonCard.Header 
    title="Single-Origin Pour-Over" 
    subtitle="Ethiopian Guji Natural" 
  />
  <ProtonCard.Body>
    Crisp floral aromas with nectarine and wild lavender.
  </ProtonCard.Body>
  <ProtonCard.Footer>
    <span className="price">$5.50</span>
    <ProtonButton size="sm">Add to Order</ProtonButton>
  </ProtonCard.Footer>
</ProtonCard>

// 3. Status Badges (with optional live pulse)
<ProtonStatusBadge status="success" pulse label="Countertop Verified (+8.2 cm)" />
<ProtonStatusBadge status="coffee" label="Open Today 7am–9pm" />

// 4. Cabinet Clearance Slider
<ProtonSlider
  min={30}
  max={70}
  value={clearanceCm}
  unit="cm"
  label="Kitchen Cabinet Clearance"
  onChange={(cm) => setClearance(cm)}
/>

// 5. Dimension Specifications Box
<ProtonMetricBox
  title="Ground Truth Dimensions"
  metrics={[
    { label: 'Width', value: 32.2, unit: 'cm' },
    { label: 'Height', value: 40.7, unit: 'cm' },
    { label: 'Depth', value: 32.2, unit: 'cm' },
  ]}
  highlightNotice="Requires +12.0 cm overhead clearance for bean hopper"
/>
```

---

### 2. Vue Micro-Frontends (`proton/vue`)
```ts
import { ProtonButton, ProtonCard, ProtonStatusBadge } from 'proton/vue';
```

---

### 3. Design Tokens (`proton/tokens`)
```ts
import { tokens, colors, spacing, radii } from 'proton/tokens';

console.log(colors.coffee[900]); // "#2c1e19" (Hiljhil espresso tone)
console.log(colors.amber[700]);  // "#b45309" (Hiljhil golden roast)
console.log(radii['2xl']);       // "24px"
```

---

## 🔄 How to Swap Material UI in the Future

Because no micro-frontend imports `@mui/material` directly, changing the underlying implementation is isolated to `proton/src/react/`:
1. Modify `src/react/components/*.tsx` to use the replacement primitives (e.g. Radix UI, Base UI, Tailwind, or custom HTML).
2. Retain the same TypeScript component prop interface (`variant`, `size`, `isLoading`, etc.).
3. Re-run `npm run build` in `proton`.
4. All micro-frontends automatically inherit the new engine without requiring changes to their source code!

---

## 🛠️ Build Commands
```bash
npm run build       # Compiles TypeScript declarations & bundles ES modules to dist/
npm run type-check  # Validates strict TypeScript compliance
```
