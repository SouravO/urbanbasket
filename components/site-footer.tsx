'use client';

import { BrandLogo } from '@/components/brand-logo';
import React, { useSyncExternalStore } from 'react';

const subscribeYear = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => 2026;
import { ArrowUpRight } from 'lucide-react';
import { SunIcon } from '@/components/sun-icon';

interface SiteFooterProps {
  onOpenPrivacy: () => void;
  onPartnerClick: () => void;
}

export function SiteFooter({ onOpenPrivacy, onPartnerClick }: SiteFooterProps) {
  const currentYear = useSyncExternalStore(subscribeYear, getYear, getServerYear);

  return (
    <footer className="site-footer">
      <div className="wrap">
        {/* Footer Top Row */}
        <div className="footer-top">
          {/* Brand Wordmark (links back to top) */}
          <a href="#hero" className="logo-link" aria-label="Urbanbasket Home">
            <BrandLogo />
          </a>

          <p>
            Good stores.
            <br />
            <em>Happier neighbours.</em>
          </p>

          <nav aria-label="Footer Navigation">
            <a href="#our-story">Our story</a>
            <a href="#network">The Urbanbasket way</a>
            <a href="#for-store-owners">For store owners</a>
            <a
              href="#partner"
              onClick={(e) => {
                e.preventDefault();
                onPartnerClick();
              }}
            >
              <span>Get in touch</span>
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </nav>
        </div>

        {/* Giant Memorable Brand Sign-Off */}
        <div className="footer-giant ">
          <span className=''>urbanbasket.</span>
          <SunIcon size={100} />
        </div>

        {/* Footer Bottom Row */}
        <div className="footer-bottom">
          <span>© {currentYear} Urbanbasket.</span>
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
