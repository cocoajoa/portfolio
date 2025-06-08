'use client';

import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './CustomModal.module.css';
import { bubblesData } from './bubbleData';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function CustomModal({ isOpen, onClose, children }: CustomModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }

      setMounted(true);
    } else {
      setVisible(false);
      document.body.style.overflow = '';

      closeTimeoutRef.current = setTimeout(() => {
        setMounted(false);
        closeTimeoutRef.current = null;
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    if (mounted && isOpen) {
      requestAnimationFrame(() => {
        setVisible(true);
        document.body.style.overflow = 'hidden';
      });
    }
  }, [mounted, isOpen]);

  if (!mounted) return null;

  const bubbleElements = bubblesData.map((b, i) => (
    <div
      key={i}
      className={`${styles.bubble} ${visible ? styles.animate : ''}`}
      style={
        {
          '--x': b.x,
          '--size': b.size,
          '--delay': b.delay,
          '--duration': b.duration,
          '--bottom': b.bottom,
        } as React.CSSProperties
      }
    />
  ));

  return createPortal(
    <div className={`${styles.modal_overlay} ${visible ? styles.open : ''}`} onClick={onClose}>
      {bubbleElements}
      <div
        className={`${styles.modal_content} ${visible ? styles.open : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
