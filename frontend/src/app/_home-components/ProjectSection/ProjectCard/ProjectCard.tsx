'use client';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  period: string;
  summary: string[];
  stack: string[];
  className?: string;
  onClick?: () => void;
}

export default function ProjectCard({
  title,
  period,
  summary,
  stack,
  className = '',
  onClick,
}: ProjectCardProps) {
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty('--x', `${x}px`);
    target.style.setProperty('--y', `${y}px`);
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.currentTarget;

    // 카드 중심으로 리셋 (정가운데)
    const width = target.clientWidth;
    const height = target.clientHeight;

    target.style.setProperty('--x', `${width / 2}px`);
    target.style.setProperty('--y', `${height / 2}px`);
  };

  return (
    <div
      className={`${styles.card} ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
    >
      <div className={styles.cardInner}>
        <div className={styles.header}>
          <h3>{title}</h3>
          <span>{period}</span>
        </div>
        {summary.map((line, i) => (
          <p key={`summary-${i}`} className={styles.summary}>
            {line}
          </p>
        ))}

        <ul className={styles.stack}>
          {stack.map((item) => (
            <li key={`stack-${item}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
