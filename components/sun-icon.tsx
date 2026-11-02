import { ShoppingBasket } from 'lucide-react';

interface SunIconProps {
  className?: string;
  size?: number | string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

/** Basket motif used consistently in place of the previous brand's sun. */
export function SunIcon({ className = '', size = 24, 'aria-hidden': ariaHidden = true }: SunIconProps) {
  return <ShoppingBasket className={className} size={size} aria-hidden={ariaHidden} strokeWidth={1.7} />;
}
