import type { Metadata } from 'next';
import './globals.css';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Urbanbasket | Your neighbourhood, connected',
  description:
    'The next chapter for your neighbourhood kirana. Discover Urbanbasket: shared supply, simple store technology and local online shopping. Starting in Kochi.',
  icons: {
    icon: '/brand/urbanbasket-master.png',
  },
  openGraph: {
    title: 'Urbanbasket | Your neighbourhood, connected',
    description:
      'The next chapter for your neighbourhood kirana. Discover Urbanbasket: shared supply, simple store technology and local online shopping. Starting in Kochi.',
    url: siteUrl,
    siteName: 'Urbanbasket',
    images: [
      {
        url: '/images/urbanbasket-neighbourhood-cartoon.webp',
        width: 1600,
        height: 710,
        alt: 'Cartoon Urbanbasket neighbourhood concept in Kerala',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urbanbasket | Your neighbourhood, connected',
    description:
      'The next chapter for your neighbourhood kirana. Discover Urbanbasket: shared supply, simple store technology and local online shopping. Starting in Kochi.',
    images: ['/images/urbanbasket-neighbourhood-cartoon.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
