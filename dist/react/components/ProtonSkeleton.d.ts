import React from 'react';
export interface ProtonSkeletonProps {
    variant?: 'text' | 'rectangular' | 'rounded' | 'circular';
    width?: number | string;
    height?: number | string;
    animation?: 'pulse' | 'wave' | false;
    className?: string;
    borderRadius?: string;
}
export declare const ProtonSkeleton: React.FC<ProtonSkeletonProps>;
