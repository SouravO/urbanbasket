'use client';

import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/lib/content';
import { SunIcon } from '@/components/sun-icon';

export function FaqAccordion() {
  return (
    <section id="questions" className="section" aria-labelledby="faq-title">
      <div className="wrap faq-section">
        {/* Left Editorial Heading & Aside */}
        <div className="faq-heading">
          <span className="eyebrow">04 / A LITTLE CLARITY</span>

          <h2 id="faq-title">
            Good questions.
            <br />
            <em>Straight answers.</em>
          </h2>

          <div className="faq-aside" aria-hidden="true">
            <SunIcon size={43} />
            <p>
              A new way to grow.
              <br />
              Let’s make it simple.
            </p>
          </div>
        </div>

        {/* Right Accordion List */}
        <div className="faq-list" role="region" aria-label="Frequently Asked Questions">
          {FAQS.map((faq) => (
            <details key={faq.id}>
              <summary>
                <span className="faq-number">{faq.number}</span>
                <span>{faq.question}</span>
                <Plus className="faq-plus" size={16} aria-hidden="true" />
                <Minus className="faq-minus" size={16} aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
