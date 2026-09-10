import React from 'react';
export interface ProtonSpinnerProps {
    size?: 'sm' | 'md' | 'lg' | number;
    variant?: 'coffee' | 'amber' | 'slate' | 'inherit';
    thickness?: number;
    label?: string;
    className?: string;
}
export declare const ProtonSpinner: React.FC<ProtonSpinnerProps>;
