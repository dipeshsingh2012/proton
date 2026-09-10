import React from 'react';
import { Dialog as MuiDialog, DialogTitle as MuiDialogTitle, DialogContent as MuiDialogContent, DialogActions as MuiDialogActions } from '@mui/material';



import { colors } from '../../tokens/colors';
import { radii } from '../../tokens/radii';

export interface ProtonDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const ProtonDialog: React.FC<ProtonDialogProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  actions,
  maxWidth = 'sm',
  className = '',
}) => {
  return (
    <MuiDialog
      open={isOpen}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth
      className={className}
      PaperProps={{
        sx: {
          borderRadius: radii['2xl'],
          p: 1,
        },
      }}
    >
      {title && (
        <MuiDialogTitle sx={{ pb: 1 }}>
          <div style={{ fontWeight: 800, fontSize: '1.25rem', color: colors.slate[900], letterSpacing: '-0.02em' }}>
            {title}
          </div>
          {subtitle && (
            <div style={{ fontSize: '0.8rem', color: colors.slate[500], marginTop: '4px', fontWeight: 500 }}>
              {subtitle}
            </div>
          )}
        </MuiDialogTitle>
      )}

      <MuiDialogContent sx={{ py: 2 }}>
        {children}
      </MuiDialogContent>

      {actions && (
        <MuiDialogActions sx={{ px: 3, pb: 2, pt: 1 }}>
          {actions}
        </MuiDialogActions>
      )}
    </MuiDialog>
  );
};

export default ProtonDialog;
