import React from 'react';

interface SunIconProps {
  className?: string;
  size?: number | string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

export function SunIcon({
  className = '',
  size = 24,
  'aria-hidden': ariaHidden = true,
}: SunIconProps) {
  // A solid central sun circle with 12 radiating rounded ray petals
  const angles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden={ariaHidden}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="7.5" />
      {angles.map((deg) => (
        <rect
          key={deg}
          x="22.5"
          y="2.5"
          width="3"
          height="8"
          rx="1.5"
          transform={`rotate(${deg} 24 24)`}
        />
      ))}
    </svg>
  );
}
