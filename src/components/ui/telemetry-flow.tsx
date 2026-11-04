import React from 'react';
import { Database, Network, Server } from 'lucide-react';

const NODES = [
  { label: 'GATEWAY', Icon: Network, color: '#818CF8' },
  { label: 'CORE', Icon: Server, color: '#38BDF8' },
  { label: 'DATA', Icon: Database, color: '#22C55E' },
];

/**
 * TelemetryFlow — microservice chain with travelling data pulses.
 * Purely decorative; the pulses animate transform/opacity only.
 */
export function TelemetryFlow() {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-white/5 bg-ground-base/40 px-4 py-3.5"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between pb-3">
        <span className="font-mono text-[9px] tracking-[0.18em] text-ink-muted">
          MICROSERVICE DATA FLOW
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.14em] text-accent-cyan">
          <span className="h-1 w-1 rounded-full bg-accent-cyan animate-pulse" />
          STREAM
        </span>
      </div>

      <div className="relative flex items-center justify-between">
        {/* Static rail + travelling pulses */}
        <span className="absolute left-4 right-4 top-4 h-px bg-white/10" />
        <span className="absolute left-4 right-4 top-4 h-px overflow-hidden">
          <span className="data-comet" />
          <span className="data-comet data-comet--alt" />
        </span>

        {NODES.map(({ label, Icon, color }) => (
          <div key={label} className="relative z-10 flex flex-col items-center gap-1.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-ground-surface"
              style={{ color }}
            >
              <Icon className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <span className="font-mono text-[9px] tracking-[0.16em] text-ink-secondary">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
