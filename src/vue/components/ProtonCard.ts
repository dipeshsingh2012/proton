import { colors } from '../../tokens/colors';
import { radii } from '../../tokens/radii';
import { shadows } from '../../tokens/shadows';

export interface VueProtonCardProps {
  variant?: 'elevated' | 'outlined' | 'flat';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverEffect?: boolean;
}

export const ProtonCard = {
  name: 'ProtonCard',
  props: {
    variant: { type: String, default: 'outlined' },
    padding: { type: String, default: 'md' },
    hoverEffect: { type: Boolean, default: false },
  },
  setup(props: VueProtonCardProps, { slots }: any) {
    const getStyle = () => {
      const base: Record<string, string> = {
        borderRadius: radii['2xl'],
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      };

      if (props.padding === 'none') base.padding = '0px';
      else if (props.padding === 'sm') base.padding = '12px';
      else if (props.padding === 'lg') base.padding = '28px';
      else base.padding = '20px';

      if (props.variant === 'elevated') {
        base.backgroundColor = '#ffffff';
        base.boxShadow = shadows.md;
      } else if (props.variant === 'flat') {
        base.backgroundColor = colors.slate[50];
        base.border = `1px solid ${colors.slate[100]}`;
      } else {
        base.backgroundColor = '#ffffff';
        base.border = `1px solid ${colors.slate[200]}`;
        base.boxShadow = shadows.xs;
      }
      return base;
    };

    return { getStyle, slots };
  },
};

export default ProtonCard;
