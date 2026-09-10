import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { colors } from '../../tokens/colors';
import { radii } from '../../tokens/radii';

export interface ProtonButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const ProtonButton: React.FC<ProtonButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  onClick,
  type = 'button',
  className = '',
}) => {
  // Map variant to style overrides
  const getSx = () => {
    const baseSx: Record<string, any> = {
      borderRadius: radii.xl,
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: '-0.01em',
      transition: 'all 0.2s ease-in-out',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
    };

    if (size === 'sm') {
      baseSx.fontSize = '0.75rem';
      baseSx.py = '6px';
      baseSx.px = '12px';
    } else if (size === 'lg') {
      baseSx.fontSize = '0.95rem';
      baseSx.py = '12px';
      baseSx.px = '24px';
    } else {
      baseSx.fontSize = '0.85rem';
      baseSx.py = '9px';
      baseSx.px = '18px';
    }

    switch (variant) {
      case 'primary':
        return {
          ...baseSx,
          backgroundColor: colors.amber[700],
          color: '#ffffff',
          '&:hover': {
            backgroundColor: colors.amber[800],
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(180, 83, 9, 0.25)',
          },
        };
      case 'secondary':
        return {
          ...baseSx,
          backgroundColor: colors.coffee[900],
          color: '#ffffff',
          '&:hover': {
            backgroundColor: colors.coffee[950],
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(44, 30, 25, 0.25)',
          },
        };
      case 'outline':
        return {
          ...baseSx,
          backgroundColor: 'transparent',
          color: colors.slate[800],
          border: `1px solid ${colors.slate[300]}`,
          '&:hover': {
            backgroundColor: colors.slate[100],
            borderColor: colors.slate[400],
          },
        };
      case 'ghost':
        return {
          ...baseSx,
          backgroundColor: 'transparent',
          color: colors.slate[700],
          '&:hover': {
            backgroundColor: colors.slate[100],
          },
        };
      case 'danger':
        return {
          ...baseSx,
          backgroundColor: colors.status.error.main,
          color: '#ffffff',
          '&:hover': {
            backgroundColor: colors.status.error.dark,
            boxShadow: '0 4px 12px rgba(239, 68, 68, 0.25)',
          },
        };
    }
  };

  return (
    <MuiButton
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      fullWidth={fullWidth}
      sx={getSx()}
      className={className}
    >
      {isLoading ? (
        <>
          <CircularProgress size={16} color="inherit" sx={{ mr: 1 }} />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {startIcon && <span style={{ display: 'inline-flex' }}>{startIcon}</span>}
          {children}
          {endIcon && <span style={{ display: 'inline-flex' }}>{endIcon}</span>}
        </>
      )}
    </MuiButton>
  );
};

export default ProtonButton;
