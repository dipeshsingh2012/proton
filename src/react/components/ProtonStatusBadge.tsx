import React from 'react';
import { colors } from '../../tokens/colors';
import { radii } from '../../tokens/radii';

export type StatusVariant = 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'coffee';

export interface ProtonStatusBadgeProps {
  label: React.ReactNode;
  status?: StatusVariant;
  pulse?: boolean;
  icon?: React.ReactNode;
  size?: 'sm' | 'md';
  className?: string;
}

export const ProtonStatusBadge: React.FC<ProtonStatusBadgeProps> = ({
  label,
  status = 'neutral',
  pulse = false,
  icon,
  size = 'md',
  className = '',
}) => {
  const getStyles = () => {
    switch (status) {
      case 'success':
        return {
          bg: colors.status.success.light,
          text: colors.status.success.text,
          border: colors.status.success.border,
          dot: colors.status.success.main,
        };
      case 'warning':
        return {
          bg: colors.status.warning.light,
          text: colors.status.warning.text,
          border: colors.status.warning.border,
          dot: colors.status.warning.main,
        };
      case 'error':
        return {
          bg: colors.status.error.light,
          text: colors.status.error.text,
          border: colors.status.error.border,
          dot: colors.status.error.main,
        };
      case 'info':
        return {
          bg: colors.status.info.light,
          text: colors.status.info.text,
          border: colors.status.info.border,
          dot: colors.status.info.main,
        };
      case 'coffee':
        return {
          bg: colors.amber[50],
          text: colors.amber[800],
          border: colors.amber[200],
          dot: colors.amber[600],
        };
      default:
        return {
          bg: colors.slate[100],
          text: colors.slate[700],
          border: colors.slate[200],
          dot: colors.slate[500],
        };
    }
  };

  const current = getStyles();
  const py = size === 'sm' ? '2px' : '4px';
  const px = size === 'sm' ? '8px' : '10px';
  const fontSize = size === 'sm' ? '0.6875rem' : '0.75rem';

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: `${py} ${px}`,
        borderRadius: radii.full,
        backgroundColor: current.bg,
        color: current.text,
        border: `1px solid ${current.border}`,
        fontSize,
        fontWeight: 700,
        letterSpacing: '-0.01em',
        lineHeight: 1.2,
      }}
    >
      {pulse && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: current.dot,
            display: 'inline-block',
          }}
        />
      )}
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      <span>{label}</span>
    </span>
  );
};

export default ProtonStatusBadge;
