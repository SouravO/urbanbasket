'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowLeftRight, MoveHorizontal, ArrowDown, ArrowUpRight } from 'lucide-react';
import { SunIcon } from '@/components/sun-icon';

const DEFAULT_POSITION = 48;

export function StoreComparison() {
  const comparisonRef = useRef<HTMLDivElement>(null);
  const manualRef = useRef(false);

  // Default: 48% original kirana on the left, 52% Urbanbasket chapter on the right
  const [sliderPos, setSliderPos] = useState<number>(DEFAULT_POSITION);

  const prefersReducedMotion = useReducedMotion();
  const inView = useInView(comparisonRef, { amount: 0.15 });

  // Single source of truth for the visible position, driven by scroll or manual input
  const position = useMotionValue(DEFAULT_POSITION);

  // Map the comparison card's travel through the viewport to a slider position.
  // 48% -> 100% (full original) -> 0% (full Urbanbasket store) for a "chapter" reveal.
  const { scrollYProgress } = useScroll({
    target: comparisonRef,
    offset: ['start 0.9', 'center 0.45'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.5,
  });
  const scrollPosition = useTransform(
    smoothProgress,
    [0, 0.45, 1],
    [DEFAULT_POSITION, 100, 0]
  );

  useMotionValueEvent(scrollPosition, 'change', (value) => {
    if (prefersReducedMotion || manualRef.current) return;
    position.set(value);
  });

  useMotionValueEvent(position, 'change', (value) => {
    const rounded = Math.round(value);
    setSliderPos((previous) => (previous === rounded ? previous : rounded));
  });

  // Once the user takes control, pause the auto-sweep until the card leaves the
  // viewport, so it plays fresh again on the next pass.
  useEffect(() => {
    if (!inView) {
      manualRef.current = false;
    }
  }, [inView]);

  const setManualPosition = (value: number) => {
    manualRef.current = true;
    position.set(value);
    setSliderPos(Math.round(value));
  };

  const comparisonLeft = useTransform(position, (value) => `${value}%`);
  const comparisonClip = useTransform(position, (value) => `inset(0 0 0 ${value}%)`);
  const beforeOpacity = useTransform(position, (value) => (value <= 8 ? 0 : 1));
  const afterOpacity = useTransform(position, (value) => (value >= 92 ? 0 : 1));

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
              Urbanbasket is being built to give those local businesses more support,
              while keeping everything that makes them special.
            </p>
          </div>
        </div>

        {/* Interactive Comparison Component */}
        <motion.div ref={comparisonRef} className="comparison">
          {/* Base: Original Kirana Image */}
          <Image
            src="/images/original-store.webp"
            alt="The familiar traditional kirana store"
            loading="lazy"
            width={1600}
            height={720}
            sizes="(max-width: 1392px) 100vw, 1280px"
          />

          {/* Overlay: Urbanbasket Chapter Concept Store with clip-path */}
          <motion.div className="comparison-after" style={{ clipPath: comparisonClip }}>
            <Image
              src="/images/urbanbasket-store-cartoon.webp"
              alt="The modernised Urbanbasket concept kirana"
              loading="lazy"
              width={1600}
              height={720}
              sizes="(max-width: 1392px) 100vw, 1280px"
            />
          </motion.div>

          {/* Left Label */}
          <motion.span
            className="comparison-label label-before"
            style={{ opacity: beforeOpacity }}
          >
            THE FAMILIAR KIRANA
          </motion.span>

          {/* Right Label */}
          <motion.span
            className="comparison-label label-after"
            style={{ opacity: afterOpacity }}
          >
            <SunIcon size={14} />
            THE URBANBASKET CHAPTER
          </motion.span>

          {/* Moving Divider with Circular Handle */}
          <motion.div
            className="comparison-divider"
            aria-hidden="true"
            style={{ left: comparisonLeft }}
          >
            <span>
              <ArrowLeftRight size={20} />
            </span>
          </motion.div>

          {/* Accessible Range Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setManualPosition(Number(e.target.value))}
            aria-label="Store comparison slider: drag horizontally to compare the traditional kirana with the Urbanbasket model"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={sliderPos}
            aria-valuetext={`${sliderPos}% traditional kirana, ${100 - sliderPos}% Urbanbasket store`}
          />
        </motion.div>

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
              onClick={() => setManualPosition(100)}
            >
              Before Urbanbasket
            </button>
            <button
              type="button"
              aria-pressed={sliderPos === DEFAULT_POSITION}
              onClick={() => setManualPosition(DEFAULT_POSITION)}
            >
              Compare
            </button>
            <button
              type="button"
              aria-pressed={sliderPos === 0}
              onClick={() => setManualPosition(0)}
            >
              <span>With Urbanbasket</span>
              <ArrowUpRight size={11} aria-hidden="true" />
            </button>
          </div>

          <span className="concept-note">
            A concept of the Urbanbasket experience.
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
            aria-label="Explore the Urbanbasket network"
          >
            <ArrowDown size={24} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
