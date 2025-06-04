import React from 'react';
import styles from './OceanBackground.module.css';

const OceanBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.ocean_wrapper}>
      <div className={styles.ocean}>{children}</div>
      <div className={styles.boat}></div>
    </div>
  );
};

export default OceanBackground;
