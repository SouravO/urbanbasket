import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Hello Stores | Your neighbourhood, connected',
  description:
    'The next chapter for your neighbourhood kirana. Discover Hello Stores: shared supply, simple store technology and local online shopping. Starting in Kochi.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Hello Stores | Your neighbourhood, connected',
    description:
      'The next chapter for your neighbourhood kirana. Discover Hello Stores: shared supply, simple store technology and local online shopping. Starting in Kochi.',
    url: siteUrl,
    siteName: 'Hello Stores',
    images: [
      {
        url: '/images/hello-store.webp',
        width: 1200,
        height: 630,
        alt: 'Hello Stores concept store in Kerala',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hello Stores | Your neighbourhood, connected',
    description:
      'The next chapter for your neighbourhood kirana. Discover Hello Stores: shared supply, simple store technology and local online shopping. Starting in Kochi.',
    images: ['/images/hello-store.webp'],
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
