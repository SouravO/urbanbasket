'use client';

import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { SunIcon } from '@/components/sun-icon';

interface KochiChapterProps {
  onKochiCtaClick: () => void;
}

export function KochiChapter({ onKochiCtaClick }: KochiChapterProps) {
  return (
    <section id="kochi" className="launch-section" aria-labelledby="kochi-heading">
      {/* Left Copy Panel */}
      <div className="launch-copy">
        <span className="eyebrow">
          <MapPin size={12} aria-hidden="true" />
          OUR FIRST CHAPTER
        </span>

        <h2 id="kochi-heading">
          First stop,
          <br />
          <em>Kochi.</em>
          <SunIcon size={49} />
        </h2>

        <p>
          Every movement starts with a neighbourhood. Ours begins in Kochi, with
          showcase stores planned to bring the Hello experience to life.
        </p>

        <a
          href="#partner"
          onClick={(e) => {
            e.preventDefault();
            onKochiCtaClick();
          }}
          className="underlined-link light-link"
        >
          <span>Be part of the first chapter</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <span className="launch-coordinates">
          KOCHI, KERALA · ROOTED HERE. GROWING TOGETHER.
        </span>
      </div>

      {/* Right Artwork Panel */}
      <div className="launch-image">
        <img
          src="/images/local-delivery.webp"
          alt="Hello Stores neighbourhood delivery rider on motorcycle in Kochi"
          loading="lazy"
          decoding="async"
        />
        <span>THE NEIGHBOURHOOD, DELIVERED.</span>
      </div>
    </section>
  );
}
