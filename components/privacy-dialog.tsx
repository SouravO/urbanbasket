'use client';

import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface PrivacyDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyDialog({ isOpen, onClose }: PrivacyDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    dialog.addEventListener('cancel', handleCancel);
    return () => dialog.removeEventListener('cancel', handleCancel);
  }, [onClose]);

  // Click outside backdrop to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;
    if (!isInDialog) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="privacy-dialog"
      onClick={handleBackdropClick}
      aria-labelledby="privacy-heading"
    >
      <div className="privacy-content">
        <button
          type="button"
          className="dialog-close"
          onClick={onClose}
          aria-label="Close privacy note"
        >
          <X size={17} aria-hidden="true" />
        </button>

        <span className="eyebrow">YOUR DETAILS, TREATED WITH CARE.</span>

        <h2 id="privacy-heading">Privacy note</h2>

        <p>
          When you register interest, Hello Stores collects your name, mobile number,
          city, partnership type, business name (if provided), your consent and the
          submission time.
        </p>

        <p>
          These details are stored to review and respond to your partnership enquiry.
          Submitting this form does not create an order, charge a payment, or commit
          either party to a partnership.
        </p>

        <p>
          Only share business enquiry details here. Please do not include financial,
          identity-document or other sensitive information. You can request a correction
          or withdrawal when the team contacts you.
        </p>

        <button
          type="button"
          className="button button-green"
          onClick={onClose}
        >
          Got it
        </button>
      </div>
    </dialog>
  );
}
