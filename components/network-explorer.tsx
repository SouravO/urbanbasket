'use client';

import Image from 'next/image';
import React, { useRef, useState, useSyncExternalStore } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import {
  Package,
  Store,
  Smartphone,
  Bike,
  ArrowUpRight,
  ArrowRight,
  Check,
} from 'lucide-react';
import { NETWORK_TABS } from '@/lib/content';
import { SunIcon } from '@/components/sun-icon';

const SCROLL_QUERY = '(min-width: 1001px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)';
const subscribeScrollLayout = (notify: () => void) => {
  const media = window.matchMedia(SCROLL_QUERY);
  media.addEventListener('change', notify);
  return () => media.removeEventListener('change', notify);
};
const getScrollLayout = () => window.matchMedia(SCROLL_QUERY).matches;
const getServerScrollLayout = () => false;

export function NetworkExplorer() {
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const activeTab = NETWORK_TABS[activeTabIdx];
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollEnabled = useSyncExternalStore(subscribeScrollLayout, getScrollLayout, getServerScrollLayout);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (!scrollEnabled) return;
    const index = Math.min(NETWORK_TABS.length - 1, Math.floor(progress * NETWORK_TABS.length));
    setActiveTabIdx((previous) => previous === index ? previous : index);
  });

  const selectTab = (index: number) => {
    setActiveTabIdx(index);
    const track = trackRef.current;
    if (!scrollEnabled || !track) return;
    // Keep clicks and keyboard navigation aligned with the scroll-driven stage.
    const start = window.scrollY + track.getBoundingClientRect().top;
    const travel = Math.max(0, track.offsetHeight - window.innerHeight);
    const progress = (index + 0.5) / NETWORK_TABS.length;
    window.scrollTo({ top: start + progress * travel, behavior: 'instant' });
  };

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'stock':
        return <Package size={18} aria-hidden="true" />;
      case 'simplify':
        return <Store size={18} aria-hidden="true" />;
      case 'online':
        return <Smartphone size={18} aria-hidden="true" />;
      case 'deliver':
        return <Bike size={18} aria-hidden="true" />;
      default:
        return <Package size={18} aria-hidden="true" />;
    }
  };

  const handleNext = () => {
    selectTab((activeTabIdx + 1) % NETWORK_TABS.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (index + 1) % NETWORK_TABS.length;
      selectTab(next);
      document.getElementById(`network-tab-${next}`)?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (index - 1 + NETWORK_TABS.length) % NETWORK_TABS.length;
      selectTab(prev);
      document.getElementById(`network-tab-${prev}`)?.focus();
    }
  };

  return (
    <section id="network" className="section network-section" aria-labelledby="network-heading">
      <div className="wrap">
        {/* Section Kicker */}
        <div className="section-kicker">
          <span>02 / THE POWER OF TOGETHER</span>
          <span>ONE STORE. A WHOLE NETWORK.</span>
        </div>

        {/* Heading */}
        <div className="network-heading">
          <h2 id="network-heading">
            A whole lot behind
            <br />
            <em>your little shop.</em>
          </h2>
          <p>
            You take care of the neighbourhood.
            <br />
            Here’s how the Urbanbasket model takes care of the everyday.
          </p>
        </div>

        <div ref={trackRef} className="network-scroll-track" data-scroll-enabled={scrollEnabled}>
        <div className="network-scroll-stage">
        {/* Tabs Bar */}
        <div
          className="network-tabs"
          role="tablist"
          aria-label="Urbanbasket network services"
        >
          {NETWORK_TABS.map((tab, idx) => {
            const isSelected = activeTabIdx === idx;
            return (
              <button
                key={tab.id}
                id={`network-tab-${idx}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls="network-panel"
                tabIndex={isSelected ? 0 : -1}
                onClick={() => selectTab(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
              >
                <span className="tab-number">{tab.number}</span>
                {getTabIcon(tab.id)}
                <span>{tab.tabTitle}</span>
                <ArrowUpRight className="tab-arrow" size={15} aria-hidden="true" />
              </button>
            );
          })}
        </div>

        {/* Split Connection Panel */}
        <div
          id="network-panel"
          className="connection-panel"
          role="tabpanel"
          aria-labelledby={`network-tab-${activeTabIdx}`}
        >
          {/* Left: Artwork */}
          <div className="connection-image">
            {NETWORK_TABS.map((tab, index) => (
              <Image
                key={tab.id}
                src={tab.image}
                alt={tab.alt}
                aria-hidden={index !== activeTabIdx}
                style={{ objectPosition: tab.objectPosition, display: index === activeTabIdx ? 'block' : 'none' }}
                loading="eager"
                width={1600}
                height={705}
                sizes="(max-width: 760px) 100vw, 60vw"
              />
            ))}
            <span className="image-edition">
              THE URBANBASKET CONNECTION / {activeTab.number}
            </span>
          </div>

          {/* Right: Content */}
          <div className="connection-copy">
            <div className="connection-category">
              {getTabIcon(activeTab.id)}
              <span>
                {activeTab.number} — {activeTab.category}
              </span>
            </div>

            <h3>{activeTab.heading}</h3>

            <p>{activeTab.copy}</p>

            <ul>
              {activeTab.points.map((pt, i) => (
                <li key={i}>
                  <Check size={13} aria-hidden="true" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="connection-bottom">
              <span>
                {activeTab.number} <b>/ 04</b>
              </span>
              <button
                type="button"
                onClick={handleNext}
                aria-label="View next connection panel"
              >
                <span>NEXT CONNECTION</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        </div>
        </div>

        {/* Footnote Row */}
        <div className="network-footnote">
          <span>Independent stores. Connected possibilities.</span>
          <SunIcon size={26} />
          <span>The owner stays at the centre.</span>
        </div>
      </div>
    </section>
  );
}
