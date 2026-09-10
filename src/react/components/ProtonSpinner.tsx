import React from 'react';
import { CircularProgress } from '@mui/material';
import { colors } from '../../tokens/colors';

export interface ProtonSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | number;
  variant?: 'coffee' | 'amber' | 'slate' | 'inherit';
  thickness?: number;
  label?: string;
  className?: string;
}

export const ProtonSpinner: React.FC<ProtonSpinnerProps> = ({
  size = 'md',
  variant = 'coffee',
  thickness = 3.6,
  label = 'Loading...',
  className = '',
}) => {
  const pixelSize =
    typeof size === 'number'
      ? size
      : size === 'sm'
      ? 18
      : size === 'lg'
      ? 40
      : 28;

  const colorHex =
    variant === 'amber'
      ? colors.amber[600]
      : variant === 'slate'
      ? colors.slate[500]
      : variant === 'inherit'
      ? 'inherit'
      : colors.coffee[900];

  return (
    <div
      role="status"
      aria-label={label}
      className={`inline-flex items-center justify-center ${className}`}
    >
      <CircularProgress
        size={pixelSize}
        thickness={thickness}
        sx={{
          color: colorHex,
          animationDuration: '750ms',
        }}
      />
      <span
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        {label}
      </span>
    </div>
  );
};

