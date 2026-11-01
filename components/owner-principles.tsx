'use client';

import React from 'react';
import { Store, Package, Smartphone, ArrowUpRight } from 'lucide-react';
import { OWNER_PRINCIPLES } from '@/lib/content';

interface OwnerPrinciplesProps {
  onOwnerCtaClick: () => void;
}

export function OwnerPrinciples({ onOwnerCtaClick }: OwnerPrinciplesProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'store':
        return <Store size={28} aria-hidden="true" />;
      case 'package':
        return <Package size={28} aria-hidden="true" />;
      case 'phone':
        return <Smartphone size={28} aria-hidden="true" />;
      default:
        return <Store size={28} aria-hidden="true" />;
    }
  };

  return (
    <section id="for-store-owners" className="section" aria-labelledby="owners-heading">
      <div className="wrap">
        {/* Section Kicker */}
        <div className="section-kicker">
          <span>03 / MADE FOR LOCAL HEROES</span>
          <span>YOUR STORE. YOUR NEXT CHAPTER.</span>
        </div>

        {/* Heading & Circular CTA */}
        <div className="owners-heading">
          <h2 id="owners-heading">
            Your name on the door.
            <br />
            <em>Our network behind it.</em>
          </h2>
          <a
            href="#partner"
            onClick={(e) => {
              e.preventDefault();
              onOwnerCtaClick();
            }}
            className="round-link round-green"
            aria-label="Partner enquiry for store owners"
          >
            <ArrowUpRight size={26} aria-hidden="true" />
          </a>
        </div>

        {/* 3 Editorial Columns */}
        <div className="owner-principles">
          {OWNER_PRINCIPLES.map((principle) => (
            <article key={principle.number}>
              <span className="principle-number">{principle.number}</span>
              {getIcon(principle.icon)}
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>

        {/* Closing Invite Row */}
        <div className="owners-invite">
          <p>
            A familiar business. <em>A fresh possibility.</em>
          </p>
          <a
            href="#partner"
            onClick={(e) => {
              e.preventDefault();
              onOwnerCtaClick();
            }}
            className="underlined-link"
          >
            <span>Let’s talk about your store</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
