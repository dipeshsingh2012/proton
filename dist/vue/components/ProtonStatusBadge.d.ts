export interface VueProtonStatusBadgeProps {
    label: string;
    status?: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'coffee';
    pulse?: boolean;
}
export declare const ProtonStatusBadge: {
    name: string;
    props: {
        label: {
            type: StringConstructor;
            required: boolean;
        };
        status: {
            type: StringConstructor;
            default: string;
        };
        pulse: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    setup(props: VueProtonStatusBadgeProps): {
        getStyle: () => {
            pill: {
                display: string;
                alignItems: string;
                gap: string;
                padding: string;
                borderRadius: "9999px";
                backgroundColor: string;
                color: string;
                border: string;
                fontSize: string;
                fontWeight: string;
            };
            dot: {
                width: string;
                height: string;
                borderRadius: string;
                backgroundColor: string;
                display: string;
            };
        };
        props: VueProtonStatusBadgeProps;
    };
};
export default ProtonStatusBadge;
