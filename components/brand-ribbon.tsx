'use client';

import React from 'react';
import { SunIcon } from '@/components/sun-icon';

export function BrandRibbon() {
  const sequence = [
    'LOCAL OWNERS',
    'SHARED SUPPLY',
    'FAMILIAR FACES',
    'NEW POSSIBILITIES',
  ];

  return (
    <div
      className="hello-ribbon"
      role="region"
      aria-label="Brand values ribbon"
    >
      {/* Screen reader text: clean single statement */}
      <span
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        Hello Stores: Local owners, shared supply, familiar faces, new possibilities.
      </span>

      {/* Continuously drifting decorative track */}
      <div className="ribbon-track" aria-hidden="true">
        {/* Render 3 repetitions to ensure smooth infinite loop across ultra-wide viewports */}
        {[1, 2, 3].map((batchIndex) => (
          <div key={batchIndex}>
            {sequence.map((item, idx) => (
              <React.Fragment key={`${batchIndex}-${idx}`}>
                <span>{item}</span>
                <SunIcon size={24} />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
