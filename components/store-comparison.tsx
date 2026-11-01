'use client';

import React, { useState } from 'react';
import { ArrowLeftRight, MoveHorizontal, ArrowDown, ArrowUpRight } from 'lucide-react';
import { SunIcon } from '@/components/sun-icon';

export function StoreComparison() {
  // Default: 48% original kirana on the left, 52% Hello chapter on the right
  const [sliderPos, setSliderPos] = useState<number>(48);

  const handlePreset = (pos: number) => {
    setSliderPos(pos);
  };

  return (
    <section id="our-story" className="section" aria-labelledby="story-heading">
      <div className="wrap">
        {/* Section Kicker */}
        <div className="section-kicker">
          <span>01 / THE FAMILIAR, REIMAGINED</span>
          <span>GOOD STORES. HAPPIER NEIGHBOURS.</span>
        </div>

        {/* Editorial Two-Column Heading */}
        <div className="story-heading">
          <h2 id="story-heading">
            A new chapter.
            <br />
            <em>The same familiar face.</em>
          </h2>
          <div>
            <p>
              Every neighbourhood has that one shop. The owner knows your name. You
              know where to find them.
            </p>
            <p>
              Hello Stores is being built to give those local businesses more support,
              while keeping everything that makes them special.
            </p>
          </div>
        </div>

        {/* Interactive Comparison Component */}
        <div
          className="comparison"
          style={
            {
              '--comparison': `${sliderPos}%`,
            } as React.CSSProperties
          }
        >
          {/* Base: Original Kirana Image */}
          <img
            src="/images/original-store.webp"
            alt="The familiar traditional kirana store"
            loading="lazy"
            decoding="async"
          />

          {/* Overlay: Hello Chapter Concept Store with clip-path */}
          <div
            className="comparison-after"
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <img
              src="/images/hello-store.webp"
              alt="The modernised Hello Stores concept kirana"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Left Label */}
          <span
            className="comparison-label label-before"
            style={{ opacity: sliderPos <= 8 ? 0 : 1 }}
          >
            THE FAMILIAR KIRANA
          </span>

          {/* Right Label */}
          <span
            className="comparison-label label-after"
            style={{ opacity: sliderPos >= 92 ? 0 : 1 }}
          >
            <SunIcon size={14} />
            THE HELLO CHAPTER
          </span>

          {/* Moving Divider with Circular Handle */}
          <div className="comparison-divider" aria-hidden="true">
            <span>
              <ArrowLeftRight size={20} />
            </span>
          </div>

          {/* Accessible Range Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            aria-label="Store comparison slider: drag horizontally to compare the traditional kirana with the Hello Stores model"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={sliderPos}
            aria-valuetext={`${sliderPos}% traditional kirana, ${100 - sliderPos}% Hello store`}
          />
        </div>

        {/* Comparison Metadata & Controls */}
        <div className="comparison-meta">
          <span>
            <MoveHorizontal size={14} aria-hidden="true" />
            Drag to discover what’s possible.
          </span>

          <div role="group" aria-label="Comparison presets">
            <button
              type="button"
              aria-pressed={sliderPos === 100}
              onClick={() => handlePreset(100)}
            >
              Before Hello
            </button>
            <button
              type="button"
              aria-pressed={sliderPos === 48}
              onClick={() => handlePreset(48)}
            >
              Compare
            </button>
            <button
              type="button"
              aria-pressed={sliderPos === 0}
              onClick={() => handlePreset(0)}
            >
              <span>With Hello</span>
              <ArrowUpRight size={11} aria-hidden="true" />
            </button>
          </div>

          <span className="concept-note">
            An illustrated look at the Hello Stores model.
          </span>
        </div>

        {/* Story Closing Row */}
        <div className="story-closing">
          <SunIcon size={58} />
          <p>
            New tools. Shared supply.
            <br />
            <em>The local heart stays.</em>
          </p>
          <a
            href="#network"
            className="round-link"
            aria-label="Explore the Hello network"
          >
            <ArrowDown size={24} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
