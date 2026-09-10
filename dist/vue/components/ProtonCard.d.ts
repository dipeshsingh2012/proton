export interface VueProtonCardProps {
    variant?: 'elevated' | 'outlined' | 'flat';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hoverEffect?: boolean;
}
export declare const ProtonCard: {
    name: string;
    props: {
        variant: {
            type: StringConstructor;
            default: string;
        };
        padding: {
            type: StringConstructor;
            default: string;
        };
        hoverEffect: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    setup(props: VueProtonCardProps, { slots }: any): {
        getStyle: () => Record<string, string>;
        slots: any;
    };
};
export default ProtonCard;
