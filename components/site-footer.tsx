'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SunIcon } from '@/components/sun-icon';

interface SiteFooterProps {
  onOpenPrivacy: () => void;
  onPartnerClick: () => void;
}

export function SiteFooter({ onOpenPrivacy, onPartnerClick }: SiteFooterProps) {
  const [currentYear, setCurrentYear] = React.useState<number>(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="wrap">
        {/* Footer Top Row */}
        <div className="footer-top">
          {/* Brand Wordmark (links back to top) */}
          <a href="#hero" className="logo-link" aria-label="Hello Stores Home">
            <div className="brand brand-light">
              <span className="brand-word">
                hello
                <span className="brand-rays" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </span>
              <span className="brand-sub">STORES</span>
            </div>
          </a>

          <p>
            Good stores.
            <br />
            <em>Happier neighbours.</em>
          </p>

          <nav aria-label="Footer Navigation">
            <a href="#our-story">Our story</a>
            <a href="#network">The Hello way</a>
            <a href="#for-store-owners">For store owners</a>
            <a
              href="#partner"
              onClick={(e) => {
                e.preventDefault();
                onPartnerClick();
              }}
            >
              <span>Say hello</span>
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </nav>
        </div>

        {/* Giant Memorable Brand Sign-Off */}
        <div className="footer-giant">
          <span>hello.</span>
          <SunIcon size={100} />
        </div>

        {/* Footer Bottom Row */}
        <div className="footer-bottom">
          <span>© {currentYear} Hello Stores.</span>
          <span>Your neighbourhood, connected.</span>
          <button type="button" onClick={onOpenPrivacy}>
            <span>Privacy note</span>
            <ArrowUpRight size={10} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
