'use client';
import { useState } from 'react';
import styles from './AnimatedQuote.module.css';

const colorMap = {
  red: '#f87171',
  blue: '#60a5fa',
  green: '#34d399',
  yellow: '#facc15',
  purple: '#a78bfa',
};

type ColorKey = keyof typeof colorMap;

export default function AnimatedQuote({
  children,
  defaultColor = 'green',
}: {
  children: string;
  defaultColor?: ColorKey;
}) {
  const [animKey, setAnimKey] = useState(0);
  const [intensity, setIntensity] = useState(-0.4);
  const [color, setColor] = useState(colorMap[defaultColor]);

  const getRandomColor = () => {
    const values = Object.values(colorMap);
    return values[Math.floor(Math.random() * values.length)];
  };

  const handleClick = () => {
    setAnimKey((prev) => prev + 1);
    setColor(getRandomColor());
    setIntensity(-parseFloat((Math.random() * 0.6 + 0.3).toFixed(2))); // -0.3 ~ 0.9
  };

  return (
    <span className={styles.quote_wrap} onClick={handleClick}>
      <span className={styles.quote_left}>‘</span>
      {children.split('').map((char, i) => (
        <span
          key={`${animKey}-${i}`}
          style={
            {
              animationDelay: `${i * 0.1}s`,
              '--wave-intensity': `${intensity}em`,
              color,
            } as React.CSSProperties
          }
          className={`${styles.quote_letter} ${char === ' ' ? styles.narrow_space : ''}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      <span className={styles.quote_right}>’</span>
    </span>
  );
}
