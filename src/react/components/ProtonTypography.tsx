import React from 'react';
import { colors } from '../../tokens/colors';
import { typography } from '../../tokens/typography';

export interface ProtonHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const ProtonHeading: React.FC<ProtonHeadingProps> = ({
  level = 2,
  children,
  className = '',
  style = {},
}) => {
  const getStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      color: colors.slate[900],
      fontFamily: typography.fonts.sans,
      letterSpacing: '-0.02em',
      margin: 0,
      ...style,
    };
    switch (level) {
      case 1: return { ...base, fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.1 };
      case 2: return { ...base, fontSize: '1.75rem', fontWeight: 800, lineHeight: 1.2 };
      case 3: return { ...base, fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.3 };
      case 4: return { ...base, fontSize: '1rem', fontWeight: 700, lineHeight: 1.4 };
      default: return { ...base, fontSize: '0.875rem', fontWeight: 600 };
    }
  };

  if (level === 1) return <h1 className={className} style={getStyle()}>{children}</h1>;
  if (level === 2) return <h2 className={className} style={getStyle()}>{children}</h2>;
  if (level === 3) return <h3 className={className} style={getStyle()}>{children}</h3>;
  if (level === 4) return <h4 className={className} style={getStyle()}>{children}</h4>;
  if (level === 5) return <h5 className={className} style={getStyle()}>{children}</h5>;
  return <h6 className={className} style={getStyle()}>{children}</h6>;
};

export interface ProtonTextProps {
  children: React.ReactNode;
  variant?: 'body' | 'caption' | 'muted';
  className?: string;
  style?: React.CSSProperties;
}

export const ProtonText: React.FC<ProtonTextProps> = ({
  children,
  variant = 'body',
  className = '',
  style = {},
}) => {
  const getStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      fontFamily: typography.fonts.sans,
      margin: 0,
      ...style,
    };
    switch (variant) {
      case 'caption':
        return { ...base, fontSize: '0.75rem', color: colors.slate[500], lineHeight: 1.3 };
      case 'muted':
        return { ...base, fontSize: '0.85rem', color: colors.slate[400], lineHeight: 1.4 };
      default:
        return { ...base, fontSize: '0.9rem', color: colors.slate[700], lineHeight: 1.5 };
    }
  };

  return <p className={className} style={getStyle()}>{children}</p>;
};
