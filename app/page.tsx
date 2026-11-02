'use client';

import React, { useState } from 'react';
import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';
import { BrandRibbon } from '@/components/brand-ribbon';
import { StoreComparison } from '@/components/store-comparison';
import { NetworkExplorer } from '@/components/network-explorer';
import { OwnerPrinciples } from '@/components/owner-principles';
import { KochiChapter } from '@/components/kochi-chapter';
import { FaqAccordion } from '@/components/faq-accordion';
import { PartnerEnquiry } from '@/components/partner-enquiry';
import { SiteFooter } from '@/components/site-footer';
import { PrivacyDialog } from '@/components/privacy-dialog';
import { PartnershipRoleId } from '@/lib/content';

export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState<PartnershipRoleId>('store-owner');
  const [privacyModalOpen, setPrivacyModalOpen] = useState<boolean>(false);

  const handleRoleSelectAndScroll = (role: PartnershipRoleId) => {
    setSelectedRole(role);
    const partnerSection = document.getElementById('partner');
    if (partnerSection) {
      partnerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Announcement Strip & Sticky Header */}
      <SiteHeader
        onPartnerClick={() => handleRoleSelectAndScroll('store-owner')}
      />

      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onBringUrbanbasketClick={() => handleRoleSelectAndScroll('store-owner')}
        />

        {/* Yellow Brand Ribbon */}
        <BrandRibbon />

        {/* 01: The Familiar, Reimagined & Store Comparison */}
        <StoreComparison />

        {/* 02: Network Explorer */}
        <NetworkExplorer />

        {/* 03: Owner Principles */}
        <OwnerPrinciples
          onOwnerCtaClick={() => handleRoleSelectAndScroll('store-owner')}
        />

        {/* Kochi Chapter */}
        <KochiChapter
          onKochiCtaClick={() => handleRoleSelectAndScroll('store-owner')}
        />

        {/* 04: FAQs */}
        <FaqAccordion />

        {/* 05: Partnership Section & Enquiry Form */}
        <PartnerEnquiry
          selectedRole={selectedRole}
          onSelectRole={setSelectedRole}
          onOpenPrivacy={() => setPrivacyModalOpen(true)}
        />
      </main>

      {/* Site Footer */}
      <SiteFooter
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onPartnerClick={() => handleRoleSelectAndScroll('store-owner')}
      />

      {/* Accessible Privacy Modal */}
      <PrivacyDialog
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </>
  );
}
