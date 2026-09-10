import React from 'react';
import { Skeleton as MuiSkeleton } from '@mui/material';
import { radii } from '../../tokens/radii';

export interface ProtonSkeletonProps {
  variant?: 'text' | 'rectangular' | 'rounded' | 'circular';
  width?: number | string;
  height?: number | string;
  animation?: 'pulse' | 'wave' | false;
  className?: string;
  borderRadius?: string;
}

export const ProtonSkeleton: React.FC<ProtonSkeletonProps> = ({
  variant = 'rounded',
  width,
  height,
  animation = 'wave',
  className = '',
  borderRadius,
}) => {
  return (
    <MuiSkeleton
      variant={variant}
      width={width}
      height={height}
      animation={animation}
      className={className}
      sx={{
        borderRadius: borderRadius || (variant === 'circular' ? '50%' : radii.xl),
        bgcolor: 'rgba(0, 0, 0, 0.06)',
      }}
    />
  );
};

