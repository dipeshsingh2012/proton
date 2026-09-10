import React from 'react';
import { colors } from '../../tokens/colors';
import { radii } from '../../tokens/radii';

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

export const ProtonMetricBox: React.FC<ProtonMetricBoxProps> = ({
  title = 'Physical Dimensions',
  badgeText = 'Metric Specs',
  metrics,
  highlightNotice,
  className = '',
}) => {
  return (
    <div
      className={className}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: radii['2xl'],
        border: `1px solid ${colors.slate[200]}`,
        padding: '20px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h4
          style={{
            margin: 0,
            fontSize: '0.75rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: colors.slate[400],
          }}
        >
          {title}
        </h4>
        {badgeText && (
          <span
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              backgroundColor: colors.slate[100],
              color: colors.slate[600],
              padding: '2px 8px',
              borderRadius: radii.full,
              fontFamily: 'monospace',
            }}
          >
            {badgeText}
          </span>
        )}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${metrics.length}, 1fr)`,
          backgroundColor: colors.slate[50],
          borderRadius: radii.xl,
          border: `1px solid ${colors.slate[100]}`,
          padding: '14px',
          textAlign: 'center',
          gap: '8px',
        }}
      >
        {metrics.map((m, idx) => (
          <div
            key={m.label}
            style={{
              borderLeft: idx > 0 ? `1px solid ${colors.slate[200]}` : 'none',
              paddingLeft: idx > 0 ? '8px' : '0',
            }}
          >
            <span style={{ display: 'block', fontSize: '0.75rem', color: colors.slate[400], fontWeight: 500 }}>
              {m.label}
            </span>
            <span style={{ display: 'block', fontSize: '0.95rem', fontWeight: 900, color: colors.slate[800], marginTop: '2px' }}>
              {m.value} {m.unit || 'cm'}
            </span>
          </div>
        ))}
      </div>

      {highlightNotice && (
        <div
          style={{
            marginTop: '12px',
            padding: '10px 14px',
            backgroundColor: colors.amber[50],
            border: `1px solid ${colors.amber[200]}`,
            borderRadius: radii.lg,
            fontSize: '0.75rem',
            color: colors.amber[900],
            fontWeight: 600,
          }}
        >
          {highlightNotice}
        </div>
      )}
    </div>
  );
};

export default ProtonMetricBox;
