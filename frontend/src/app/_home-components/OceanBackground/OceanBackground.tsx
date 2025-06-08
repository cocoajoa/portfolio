import React from 'react';
import styles from './OceanBackground.module.css';

const OceanBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.ocean_wrapper}>
      <div className={styles.ocean}>
        {children}
        {[...Array(10)].map((_, i) => {
          const size = `${Math.random() * 2 + 0.7}vw`;
          const x = Math.random();
          const delay = `${Math.random() * 5}s`;
          const duration = `${Math.random() * 6 + 10}s`;

          return (
            <div
              key={`bubble-${i}`}
              className={styles.bubble}
              style={
                {
                  '--x': x,
                  '--size': size,
                  '--delay': delay,
                  '--duration': duration,
                } as React.CSSProperties
              }
            ></div>
          );
        })}
      </div>
      <div className={styles.boat}></div>
    </div>
  );
};

export default OceanBackground;
