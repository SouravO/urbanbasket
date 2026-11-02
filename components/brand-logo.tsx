import Image from 'next/image';

/** Original, unmodified logo artwork extracted from the supplied brandbook. */
export function BrandLogo() {
  return (
    <span className="urbanbasket-logo">
      <Image src="/brand/urbanbasket-master.png" alt="Urbanbasket" width={270} height={180} preload />
    </span>
  );
}
