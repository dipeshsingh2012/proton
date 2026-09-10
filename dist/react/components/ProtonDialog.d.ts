import React from 'react';
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
export declare const ProtonDialog: React.FC<ProtonDialogProps>;
export default ProtonDialog;
