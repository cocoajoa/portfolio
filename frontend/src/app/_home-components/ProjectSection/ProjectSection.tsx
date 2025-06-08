'use client';
import dynamic from 'next/dynamic';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import style from './ProjectSection.module.css';
import ProjectCard from './ProjectCard/ProjectCard';
import '@/utils/gsapSetup';
import CustomModal from '@/components/CustomModal/CustomModal';

const FitaPetDetail = dynamic(() => import('./ProjectDetail/FitaPetDetail'), {
  loading: () => <p>불러오는 중...</p>,
});

const FinallyDetail = dynamic(() => import('./ProjectDetail/FinallyDetail'), {
  loading: () => <p>불러오는 중...</p>,
});

const XDeskDetail = dynamic(() => import('./ProjectDetail/XDeskDetail'), {
  loading: () => <p>불러오는 중...</p>,
});

export default function ProjectSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

  const openModalWith = (content: React.ReactNode) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  useGSAP(
    () => {
      gsap.from('.quote-line', {
        scrollTrigger: {
          trigger: '.quote-line',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },

        opacity: 0,
        y: 40,
        duration: 2,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
        const isLeft = card.classList.contains('left');

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          x: isLeft ? -120 : 120,
          opacity: 0,
          duration: 2,
          ease: 'power3.out',
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="ProjectSection" className={style.section}>
      <h1 className="quote-line">프로젝트</h1>
      <ProjectCard
        title="Fit-a-Pet"
        period="2024.10 - 2024.11"
        summary={[
          '헬스 데이터 기반 펫 육성 앱.',
          '성능 최적화를 위해 스프라이트 기반 애니메이션 구성.',
        ]}
        stack={[
          'React Native',
          'TailwindCSS',
          'Tanstack-Query',
          'Zustand',
          'ReactNativeReanimated',
          'JavaScript',
        ]}
        className="project-card left"
        onClick={() => openModalWith(<FitaPetDetail />)}
      />
      <ProjectCard
        title="Finally"
        period="2024.08 - 2024.09"
        summary={[
          '청년 맞춤 정책과 카드를 추천하는 웹앱.',
          'Tanstack Query 기반 캐싱과 prefetch로 성능 최적화.',
        ]}
        stack={['React', 'TailwindCSS', 'Tanstack-Query', 'Justand', 'TypeScript']}
        className="project-card right"
        onClick={() => openModalWith(<FinallyDetail />)}
      />
      <ProjectCard
        title="XDESK"
        period="2024.07 - 2024.08"
        summary={[
          '사용자에 맞춰 자동 조절되는 스마트 거치대.',
          'Docker-compose 기반 인프라 구성과 풀스택 구현을 담당.',
        ]}
        stack={['QT', 'FastAPI', 'Docker', 'Nginx', 'Pandas', 'Jenkins', 'Python']}
        className="project-card left"
        onClick={() => openModalWith(<XDeskDetail />)}
      />

      <CustomModal isOpen={!!modalContent} onClose={closeModal}>
        {modalContent}
      </CustomModal>
    </section>
  );
}
