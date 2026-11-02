'use client';

import { BrandLogo } from '@/components/brand-logo';
import React, { useState, useEffect } from 'react';
import { MapPin, ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/content';

interface SiteHeaderProps {
  onPartnerClick?: () => void;
}

export function SiteHeader({ onPartnerClick }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href === '#partner' && onPartnerClick) {
      e.preventDefault();
      onPartnerClick();
    }
  };

  return (
    <>
      {/* Announcement Strip */}
      <div className="announcement">
        <span>Local roots. New possibilities.</span>
        <a href="#kochi" aria-label="First chapter: Kochi, Kerala">
          <MapPin size={12} aria-hidden="true" />
          <span>FIRST CHAPTER: KOCHI, KERALA</span>
          <ArrowUpRight size={11} aria-hidden="true" />
        </a>
      </div>

      {/* Sticky Header */}
      <header className="site-header">
        <div className="wrap header-inner">
          {/* Logo */}
          <a href="#hero" className="logo-link" aria-label="Urbanbasket Home">
            <BrandLogo />
          </a>

          {/* Desktop Tagline */}
          <span className="header-tagline">
            Your neighbourhood,
            <br />
            connected.
          </span>

          {/* Navigation Links */}
          <nav
            id="site-navigation"
            className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`}
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Partner Button (shown inside expanded drawer on mobile) */}
            <a
              href="#partner"
              className="button button-yellow mobile-partner"
              onClick={(e) => handleNavClick(e, '#partner')}
            >
              <span>Let’s grow together</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </nav>

          {/* Compact CTA (visible on desktop and mobile header) */}
          <a
            href="#partner"
            className="button button-yellow header-partner"
            onClick={(e) => handleNavClick(e, '#partner')}
          >
            <span>Let’s grow together</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>

          {/* Hamburger Menu Toggle (mobile only) */}
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="site-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={23} aria-hidden="true" />
            ) : (
              <Menu size={23} aria-hidden="true" />
            )}
          </button>
        </div>
      </header>
    </>
  );
}
