import React from 'react';
export interface ProtonHeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export declare const ProtonHeading: React.FC<ProtonHeadingProps>;
export interface ProtonTextProps {
    children: React.ReactNode;
    variant?: 'body' | 'caption' | 'muted';
    className?: string;
    style?: React.CSSProperties;
}
export declare const ProtonText: React.FC<ProtonTextProps>;
