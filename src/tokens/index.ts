import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { radii } from './radii';
import { shadows } from './shadows';

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './radii';
export * from './shadows';

export const tokens = {
  colors,
  typography,
  spacing,
  radii,
  shadows,
} as const;

export type DesignTokens = typeof tokens;
export default tokens;
