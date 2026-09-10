import { colors } from '../../tokens/colors';
import { radii } from '../../tokens/radii';

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
export const ProtonButton = {
  name: 'ProtonButton',
  props: {
    variant: { type: String, default: 'primary' },
    size: { type: String, default: 'md' },
    isLoading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    type: { type: String, default: 'button' },
    className: { type: String, default: '' },
  },
  emits: ['click'],
  setup(props: VueProtonButtonProps, { slots, emit }: any) {
    const getStyle = () => {
      const base: Record<string, string> = {
        borderRadius: radii.xl,
        fontWeight: '700',
        letterSpacing: '-0.01em',
        cursor: props.disabled || props.isLoading ? 'not-allowed' : 'pointer',
        opacity: props.disabled ? '0.6' : '1',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        border: 'none',
        transition: 'all 0.2s ease-in-out',
      };

      if (props.size === 'sm') {
        base.fontSize = '0.75rem';
        base.padding = '6px 12px';
      } else if (props.size === 'lg') {
        base.fontSize = '0.95rem';
        base.padding = '12px 24px';
      } else {
        base.fontSize = '0.85rem';
        base.padding = '9px 18px';
      }

      switch (props.variant) {
        case 'secondary':
          base.backgroundColor = colors.coffee[900];
          base.color = '#ffffff';
          break;
        case 'outline':
          base.backgroundColor = 'transparent';
          base.color = colors.slate[800];
          base.border = `1px solid ${colors.slate[300]}`;
          break;
        case 'ghost':
          base.backgroundColor = 'transparent';
          base.color = colors.slate[700];
          break;
        case 'danger':
          base.backgroundColor = colors.status.error.main;
          base.color = '#ffffff';
          break;
        default:
          base.backgroundColor = colors.amber[700];
          base.color = '#ffffff';
          break;
      }
      return base;
    };

    return {
      getStyle,
      handleClick: (e: Event) => {
        if (!props.disabled && !props.isLoading) emit('click', e);
      },
      slots,
    };
  },
};

export default ProtonButton;
