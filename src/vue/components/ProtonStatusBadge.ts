import { colors } from '../../tokens/colors';
import { radii } from '../../tokens/radii';

export interface VueProtonStatusBadgeProps {
  label: string;
  status?: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'coffee';
  pulse?: boolean;
}

export const ProtonStatusBadge = {
  name: 'ProtonStatusBadge',
  props: {
    label: { type: String, required: true },
    status: { type: String, default: 'neutral' },
    pulse: { type: Boolean, default: false },
  },
  setup(props: VueProtonStatusBadgeProps) {
    const getStyle = () => {
      let bg: string = colors.slate[100];
      let text: string = colors.slate[700];
      let border: string = colors.slate[200];
      let dot: string = colors.slate[500];

      if (props.status === 'success') {
        bg = colors.status.success.light;
        text = colors.status.success.text;
        border = colors.status.success.border;
        dot = colors.status.success.main;
      } else if (props.status === 'warning') {
        bg = colors.status.warning.light;
        text = colors.status.warning.text;
        border = colors.status.warning.border;
        dot = colors.status.warning.main;
      } else if (props.status === 'error') {
        bg = colors.status.error.light;
        text = colors.status.error.text;
        border = colors.status.error.border;
        dot = colors.status.error.main;
      } else if (props.status === 'coffee') {
        bg = colors.amber[50];
        text = colors.amber[800];
        border = colors.amber[200];
        dot = colors.amber[600];
      }

      return {
        pill: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 10px',
          borderRadius: radii.full,
          backgroundColor: bg,
          color: text,
          border: `1px solid ${border}`,
          fontSize: '0.75rem',
          fontWeight: '700',
        },
        dot: {
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: dot,
          display: 'inline-block',
        },
      };
    };

    return { getStyle, props };
  },
};

export default ProtonStatusBadge;
