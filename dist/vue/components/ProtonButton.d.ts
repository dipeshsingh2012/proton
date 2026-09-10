export interface VueProtonButtonProps {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}
/**
 * Vue 3 Component definition for ProtonButton.
 * Emits click events and applies the unified Proton Design Token styling.
 */
export declare const ProtonButton: {
    name: string;
    props: {
        variant: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            default: string;
        };
        isLoading: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        className: {
            type: StringConstructor;
            default: string;
        };
    };
    emits: string[];
    setup(props: VueProtonButtonProps, { slots, emit }: any): {
        getStyle: () => Record<string, string>;
        handleClick: (e: Event) => void;
        slots: any;
    };
};
export default ProtonButton;
