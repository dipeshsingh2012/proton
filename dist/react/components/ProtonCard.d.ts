import React from 'react';
export interface ProtonCardProps {
    children: React.ReactNode;
    variant?: 'elevated' | 'outlined' | 'flat';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hoverEffect?: boolean;
    onClick?: () => void;
    className?: string;
}
export declare const ProtonCard: React.FC<ProtonCardProps> & {
    Header: React.FC<{
        title: React.ReactNode;
        subtitle?: React.ReactNode;
        action?: React.ReactNode;
    }>;
    Body: React.FC<{
        children: React.ReactNode;
        className?: string;
    }>;
    Footer: React.FC<{
        children: React.ReactNode;
        className?: string;
    }>;
};
export default ProtonCard;
