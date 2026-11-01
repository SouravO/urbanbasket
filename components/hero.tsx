'use client';

import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { SunIcon } from '@/components/sun-icon';

interface HeroProps {
  onBringHelloClick: () => void;
}

export function Hero({ onBringHelloClick }: HeroProps) {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      {/* Immersive Kerala Neighbourhood Illustration */}
      <img
        src="/images/hello-neighbourhood.webp"
        alt="Illustrated Kerala neighbourhood with a Hello Store, customers, and delivery van"
        className="hero-scene"
        loading="eager"
        decoding="async"
      />

      {/* Layered Gradient Shade for readable typography while preserving illustration */}
      <div className="hero-shade" aria-hidden="true" />

      {/* Hero Content */}
      <div className="wrap hero-content">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="live-dot" aria-hidden="true" />
            A FRESH CHAPTER FOR THE LOCAL KIRANA
          </span>

          <h1 id="hero-heading">
            Small stores.
            <br />
            <em>Big possibilities.</em>
          </h1>

          <p>
            Your neighbourhood already has something special. We’re helping it grow.
            Familiar local shops, connected to a whole new world of supply, technology and
            opportunity.
          </p>

          <div className="hero-actions">
            <a
              href="#partner"
              onClick={(e) => {
                e.preventDefault();
                onBringHelloClick();
              }}
              className="button button-yellow"
            >
              <span>Bring Hello to my store</span>
              <span className="button-icon">
                <ArrowUpRight size={17} aria-hidden="true" />
              </span>
            </a>

            <a href="#our-story" className="hero-explore">
              <span>Take a look around</span>
              <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Tilted Yellow Brand Seal (upper right) */}
        <div className="hello-seal" aria-hidden="true">
          <SunIcon size={22} />
          <strong>INDEPENDENT</strong>
          <span>
            AT HEART.
            <br />
            CONNECTED
            <br />
            BY HELLO.
          </span>
        </div>

        {/* Slightly rotated cream paper note (lower right) */}
        <div className="cover-note" aria-hidden="true">
          <ArrowUpRight size={15} />
          <span className="note-kicker">A NEW KIND OF TOGETHER.</span>
          <p>
            Your store.
            <br />
            Your community.
            <br />
            <em>A bigger tomorrow.</em>
          </p>
          <span className="note-foot">THE HELLO STORES VISION</span>
        </div>

        {/* Bottom Editorial Line */}
        <div className="hero-bottom wrap">
          <span>
            THE NEIGHBOURHOOD EDIT <b>VOL. 01</b>
          </span>
          <span>Rooted in Kerala. Built around you.</span>
          <a href="#our-story" aria-label="Scroll to story section">
            <ArrowDown size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
