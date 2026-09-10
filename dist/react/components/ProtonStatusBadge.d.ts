import React from 'react';
export type StatusVariant = 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'coffee';
export interface ProtonStatusBadgeProps {
    label: React.ReactNode;
    status?: StatusVariant;
    pulse?: boolean;
    icon?: React.ReactNode;
    size?: 'sm' | 'md';
    className?: string;
}
export declare const ProtonStatusBadge: React.FC<ProtonStatusBadgeProps>;
export default ProtonStatusBadge;
