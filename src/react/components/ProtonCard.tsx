import React from 'react';
import { Card as MuiCard, CardContent as MuiCardContent } from '@mui/material';

import { colors } from '../../tokens/colors';
import { radii } from '../../tokens/radii';
import { shadows } from '../../tokens/shadows';

export interface ProtonCardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'outlined' | 'flat';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverEffect?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ProtonCard: React.FC<ProtonCardProps> & {
  Header: React.FC<{ title: React.ReactNode; subtitle?: React.ReactNode; action?: React.ReactNode }>;
  Body: React.FC<{ children: React.ReactNode; className?: string }>;
  Footer: React.FC<{ children: React.ReactNode; className?: string }>;
} = ({
  children,
  variant = 'outlined',
  padding = 'md',
  hoverEffect = false,
  onClick,
  className = '',
}) => {
  const getPadding = () => {
    switch (padding) {
      case 'none': return 0;
      case 'sm': return '12px';
      case 'lg': return '28px';
      default: return '20px';
    }
  };

  const getSx = () => {
    const base: Record<string, any> = {
      borderRadius: radii['2xl'],
      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: onClick ? 'pointer' : 'default',
    };

    if (variant === 'elevated') {
      base.backgroundColor = '#ffffff';
      base.boxShadow = shadows.md;
      base.border = 'none';
      if (hoverEffect) {
        base['&:hover'] = {
          boxShadow: shadows.xl,
          transform: 'translateY(-2px)',
        };
      }
    } else if (variant === 'flat') {
      base.backgroundColor = colors.slate[50];
      base.boxShadow = 'none';
      base.border = `1px solid ${colors.slate[100]}`;
    } else {
      // Outlined (default)
      base.backgroundColor = '#ffffff';
      base.border = `1px solid ${colors.slate[200]}`;
      base.boxShadow = shadows.xs;
      if (hoverEffect) {
        base['&:hover'] = {
          borderColor: colors.amber[500],
          boxShadow: shadows.md,
          transform: 'translateY(-2px)',
        };
      }
    }

    return base;
  };

  return (
    <MuiCard sx={getSx()} onClick={onClick} className={className}>
      <MuiCardContent sx={{ p: `${getPadding()} !important` }}>
        {children}
      </MuiCardContent>
    </MuiCard>
  );
};

ProtonCard.Header = ({ title, subtitle, action }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
    <div>
      <div style={{ fontWeight: 800, fontSize: '1.05rem', color: colors.slate[900], letterSpacing: '-0.01em' }}>
        {title}
      </div>
      {subtitle && (
        <div style={{ fontSize: '0.75rem', color: colors.slate[500], marginTop: '2px' }}>
          {subtitle}
        </div>
      )}
    </div>
    {action && <div>{action}</div>}
  </div>
);

ProtonCard.Body = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
);

ProtonCard.Footer = ({ children, className = '' }) => (
  <div
    className={className}
    style={{
      marginTop: '16px',
      paddingTop: '12px',
      borderTop: `1px solid ${colors.slate[100]}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    {children}
  </div>
);

export default ProtonCard;
