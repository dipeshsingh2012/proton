import React from 'react';
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
export declare const ProtonSlider: React.FC<ProtonSliderProps>;
export default ProtonSlider;
