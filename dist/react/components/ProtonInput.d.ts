import React from 'react';
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
export declare const ProtonInput: React.FC<ProtonInputProps>;
export default ProtonInput;
