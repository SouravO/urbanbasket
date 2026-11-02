'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { SunIcon } from '@/components/sun-icon';

interface HeroProps {
  onBringUrbanbasketClick: () => void;
}

export function Hero({ onBringUrbanbasketClick }: HeroProps) {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      {/* Immersive Kerala Neighbourhood Illustration */}
      <div className="hero-artwork">
        <Image
          src="/images/urbanbasket-neighbourhood-cartoon.webp"
          alt="Illustrated Kerala neighbourhood with an Urbanbasket store, customers, and delivery van"
          className="hero-scene"
          fill
          sizes="100vw"
          preload
        />
      </div>

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
                onBringUrbanbasketClick();
              }}
              className="button button-yellow"
            >
              <span>Bring Urbanbasket to my store</span>
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
            BY URBANBASKET.
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
          <span className="note-foot">THE URBANBASKET VISION</span>
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
