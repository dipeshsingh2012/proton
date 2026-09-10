import React from 'react';
export interface DimensionMetric {
    label: string;
    value: number | string;
    unit?: string;
}
export interface ProtonMetricBoxProps {
    title?: string;
    badgeText?: string;
    metrics: DimensionMetric[];
    highlightNotice?: string;
    className?: string;
}
export declare const ProtonMetricBox: React.FC<ProtonMetricBoxProps>;
export default ProtonMetricBox;
