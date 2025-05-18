'use client';
import { useState, useEffect } from 'react';
import styles from './AnimatedQuote.module.css';

export default function AnimatedQuote({ children }: { children: string }) {
  const [animKey, setAnimKey] = useState(0);
  const [intensity, setIntensity] = useState(-0.6);
  const [color, setColor] = useState('');

  const getRandomColor = () => {
    const colors = ['#f87171', '#60a5fa', '#34d399', '#facc15', '#a78bfa'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    setColor(getRandomColor());
  }, []);

  const handleClick = () => {
    setAnimKey((prev) => prev + 1);
    setColor(getRandomColor());
    setIntensity(-parseFloat((Math.random() * 0.6 + 0.3).toFixed(2))); // -0.3 ~ 0.9
  };

  return (
    <span className={styles.quote_wrap_l} onClick={handleClick}>
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
          className={styles.quote_letter}
        >
          {char}
        </span>
      ))}
      <span className={styles.quote_right}>’</span>
    </span>
  );
}
