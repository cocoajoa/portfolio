'use client';

import React from 'react';
import styles from './ContactSection.module.css';
export default function ContactSection() {
  return (
    <section id="ContactSection" className={styles.section}>
      <h2 className={styles.title}>연락처</h2>
      <ul className={styles.contact_list}>
        <li>
          Email: <a href="mailto:cocoajoa12@gmail.com">cocoajoa12@gmail.com</a>
        </li>
        <li>
          GitHub:{' '}
          <a href="https://github.com/cocoajoa" target="_blank" rel="noopener noreferrer">
            github.com/cocoajoa
          </a>
        </li>
        <li>
          Blog:{' '}
          <a href="https://cocoajoa12.tistory.com/" target="_blank" rel="noopener noreferrer">
            cocoajoa12.tistory.com/
          </a>
        </li>
      </ul>
    </section>
  );
}
