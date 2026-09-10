import React from 'react';
import { Slider as MuiSlider } from '@mui/material';
import { colors } from '../../tokens/colors';
import { radii } from '../../tokens/radii';

export interface ProtonSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  label?: string;
  className?: string;
}

export const ProtonSlider: React.FC<ProtonSliderProps> = ({
  value,
  onChange,
  min = 30,
  max = 70,
  step = 1,
  unit = 'cm',
  label,
  className = '',
}) => {
  return (
    <div className={className} style={{ width: '100%' }}>
      {label && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: colors.slate[700] }}>
            {label}
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              color: colors.amber[800],
              backgroundColor: colors.amber[50],
              border: `1px solid ${colors.amber[200]}`,
              padding: '2px 8px',
              borderRadius: radii.md,
            }}
          >
            {value} {unit}
          </span>
        </div>
      )}

      <MuiSlider
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(_, val) => onChange(val as number)}
        sx={{
          color: colors.amber[700],
          height: 6,
          '& .MuiSlider-track': {
            border: 'none',
          },
          '& .MuiSlider-thumb': {
            height: 18,
            width: 18,
            backgroundColor: '#ffffff',
            border: `3px solid ${colors.amber[700]}`,
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
              boxShadow: '0 0 0 8px rgba(180, 83, 9, 0.16)',
            },
          },
          '& .MuiSlider-rail': {
            color: colors.slate[200],
            opacity: 1,
          },
        }}
      />
    </div>
  );
};

export default ProtonSlider;
