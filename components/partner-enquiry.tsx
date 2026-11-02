'use client';

import React, { useState, useRef } from 'react';
import {
  Store,
  Sparkles,
  Truck,
  ArrowUpRight,
  ChevronDown,
  MapPin,
  Check,
} from 'lucide-react';
import { PARTNERSHIP_ROLES, PartnershipRoleId } from '@/lib/content';
import { normalizePhone, INDIAN_PHONE_REGEX } from '@/lib/validation';

interface PartnerEnquiryProps {
  selectedRole: PartnershipRoleId;
  onSelectRole: (role: PartnershipRoleId) => void;
  onOpenPrivacy: () => void;
}

export function PartnerEnquiry({
  selectedRole,
  onSelectRole,
  onOpenPrivacy,
}: PartnerEnquiryProps) {
  // Submission UUID for idempotency
  const submissionId = useRef<string>('');

  // Form field states
  const [fullName, setFullName] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [businessName, setBusinessName] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [consentChecked, setConsentChecked] = useState<boolean>(false);
  const [honeypot, setHoneypot] = useState<string>('');

  // UI status
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);

  const getRoleIcon = (icon: string) => {
    switch (icon) {
      case 'store':
        return <Store size={18} aria-hidden="true" />;
      case 'sparkles':
        return <Sparkles size={18} aria-hidden="true" />;
      case 'truck':
        return <Truck size={18} aria-hidden="true" />;
      default:
        return <Store size={18} aria-hidden="true" />;
    }
  };

  const handleRoleButtonClick = (roleId: PartnershipRoleId) => {
    onSelectRole(roleId);
    setErrorMessage(null);
  };

  const handleSelectRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectRole(e.target.value as PartnershipRoleId);
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic client validation
    const trimmedName = fullName.trim();
    if (trimmedName.length < 2) {
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }

    const cleanedPhone = normalizePhone(mobileNumber);
    if (!INDIAN_PHONE_REGEX.test(cleanedPhone)) {
      setErrorMessage(
        'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).'
      );
      return;
    }

    const trimmedCity = city.trim();
    if (trimmedCity.length < 2) {
      setErrorMessage('Please enter your city.');
      return;
    }

    if (!consentChecked) {
      setErrorMessage('Please agree to be contacted about your enquiry.');
      return;
    }

    if (honeypot) {
      // Spam honeypot triggered
      return;
    }

    if (!submissionId.current) submissionId.current = crypto.randomUUID();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: submissionId.current,
          name: trimmedName,
          phone: cleanedPhone,
          business: businessName.trim() || null,
          city: trimmedCity,
          role: selectedRole,
          consent: true,
          website: honeypot || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setErrorMessage(
          data.error ||
            'We were unable to register your enquiry. Please check your details and try again.'
        );
        setIsSubmitting(false);
        return;
      }

      // Success
      setSubmittedReference(data.reference);
      setIsSubmitting(false);
    } catch {
      setErrorMessage(
        'Network error. Please check your internet connection and try again.'
      );
      setIsSubmitting(false);
    }
  };

  const handleRegisterAnother = () => {
    // Reset state and generate new UUID for a clean subsequent enquiry
    submissionId.current = crypto.randomUUID();
    setFullName('');
    setMobileNumber('');
    setBusinessName('');
    setCity('');
    setConsentChecked(false);
    setHoneypot('');
    setErrorMessage(null);
    setSubmittedReference(null);
  };

  return (
    <section id="partner" className="section partner-section" aria-labelledby="partner-heading">
      <div className="wrap partner-layout">
        {/* Left Editorial Copy & Audience Selectors */}
        <div className="partner-copy">
          <span className="eyebrow">05 / A NEW CONNECTION STARTS HERE</span>

          <h2 id="partner-heading">
            Put a little
            <br />
            <em>local</em> in your
            <br />
            next chapter
            <span className="yellow-period">.</span>
          </h2>

          <p>
            Own a kirana? Starting a new store? Have products our neighbourhoods
            will love? There’s a conversation waiting to happen.
          </p>

          {/* Interactive Role Buttons (synced with form dropdown) */}
          <div
            className="partner-role-options"
            role="group"
            aria-label="Choose your role to explore a partnership"
          >
            {PARTNERSHIP_ROLES.map((role) => {
              const isSelected = selectedRole === role.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleRoleButtonClick(role.id)}
                >
                  {getRoleIcon(role.icon)}
                  <span>{role.title}</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </button>
              );
            })}
          </div>

          <span className="partner-location">
            <MapPin size={13} aria-hidden="true" />
            Starting in Kochi. Welcoming interest from everywhere.
          </span>
        </div>

        {/* Right Column: Warm Paper Enquiry Card */}
        <div className="enquiry-card">
          {submittedReference ? (
            /* Success View */
            <div className="form-success" role="status" aria-live="polite">
              <div className="success-icon" aria-hidden="true">
                <Check size={32} />
              </div>

              <span className="eyebrow">A NEW CONNECTION BEGINS.</span>

              <h3>Welcome, future neighbour.</h3>

              <p>Your interest has been registered with Urbanbasket.</p>

              <div className="enquiry-reference">
                <span>YOUR ENQUIRY REFERENCE</span>
                <strong>{submittedReference}</strong>
              </div>

              <p className="success-note">
                The team has your details for a partnership conversation. Store
                plans and commercial terms will be discussed directly.
              </p>

              <button
                type="button"
                onClick={handleRegisterAnother}
                className="underlined-link"
              >
                <span>Register another enquiry</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </button>
            </div>
          ) : (
            /* Enquiry Form */
            <form onSubmit={handleSubmit} noValidate>
              <h3>A little about you.</h3>

              <p className="form-intro">
                Leave your details to explore an Urbanbasket partnership.
              </p>

              <div className="form-grid">
                {/* 1. Full Name */}
                <div>
                  <label htmlFor="field-name">
                    Your name <span>*</span>
                  </label>
                  <input
                    id="field-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Full name"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                {/* 2. Mobile Number */}
                <div>
                  <label htmlFor="field-phone">
                    Mobile number <span>*</span>
                  </label>
                  <div className="phone-input">
                    <span>+91</span>
                    <input
                      id="field-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="10-digit number"
                      autoComplete="tel-national"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                </div>

                {/* 3. Business Name (Optional) */}
                <div className="full-field">
                  <label htmlFor="field-business">Store or business name</label>
                  <input
                    id="field-business"
                    name="business"
                    type="text"
                    placeholder="Your store or company (optional)"
                    autoComplete="organization"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </div>

                {/* 4. City */}
                <div>
                  <label htmlFor="field-city">
                    City <span>*</span>
                  </label>
                  <input
                    id="field-city"
                    name="city"
                    type="text"
                    required
                    placeholder="e.g. Kochi"
                    autoComplete="address-level2"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                {/* 5. Role Selection Dropdown */}
                <div>
                  <label htmlFor="field-role">
                    I’m interested as <span>*</span>
                  </label>
                  <div className="select-wrapper">
                    <select
                      id="field-role"
                      name="role"
                      required
                      value={selectedRole}
                      onChange={handleSelectRoleChange}
                    >
                      {PARTNERSHIP_ROLES.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.selectLabel}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={14} aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Honeypot Field */}
              <div className="honey" aria-hidden="true">
                <label htmlFor="field-website">Website</label>
                <input
                  id="field-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Consent Checkbox */}
              <label className="consent">
                <input
                  type="checkbox"
                  required
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                />
                <span>
                  I agree to be contacted by Urbanbasket about my enquiry.{' '}
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    aria-haspopup="dialog"
                  >
                    Privacy note
                  </button>
                </span>
              </label>

              {/* Inline Error Banner */}
              {errorMessage && (
                <div className="form-error" role="alert">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="button button-green form-submit"
              >
                {isSubmitting ? (
                  <>
                    <span>Sending your enquiry…</span>
                    <span className="spinner" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    <span>Let’s grow together.</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </>
                )}
              </button>

              <span className="form-fine-print">
                <Check size={12} aria-hidden="true" />
                An expression of interest. No payment or commitment.
              </span>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
