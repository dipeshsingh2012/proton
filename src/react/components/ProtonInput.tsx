import React from 'react';
import { TextField as MuiTextField, InputAdornment } from '@mui/material';

import { colors } from '../../tokens/colors';
import { radii } from '../../tokens/radii';

export interface ProtonInputProps {
  label?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  className?: string;
}

export const ProtonInput: React.FC<ProtonInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  error = false,
  helperText,
  disabled = false,
  fullWidth = true,
  startAdornment,
  endAdornment,
  className = '',
}) => {
  return (
    <MuiTextField
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      error={error}
      helperText={helperText}
      disabled={disabled}
      fullWidth={fullWidth}
      variant="outlined"
      size="small"
      className={className}
      InputProps={{
        startAdornment: startAdornment ? (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ) : undefined,
        endAdornment: endAdornment ? (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ) : undefined,
        sx: {
          borderRadius: radii.lg,
          backgroundColor: '#ffffff',
          fontSize: '0.85rem',
          '& fieldset': {
            borderColor: colors.slate[300],
          },
          '&:hover fieldset': {
            borderColor: colors.amber[600],
          },
          '&.Mui-focused fieldset': {
            borderColor: colors.amber[700],
            borderWidth: '2px',
          },
        },
      }}
      InputLabelProps={{
        sx: {
          fontSize: '0.85rem',
          fontWeight: 600,
          '&.Mui-focused': {
            color: colors.amber[800],
          },
        },
      }}
    />
  );
};

export default ProtonInput;
