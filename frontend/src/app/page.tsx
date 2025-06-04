import style from './page.module.css';
import OceanBackground from '@/app/_home-components/OceanBackground/OceanBackground';
import IntroSection from './_home-components/IntroSection/IntroSection';
import ProjectSection from './_home-components/ProjectSection/ProjectSection';
export default function Home() {
  return (
    <div className={style.body}>
      <IntroSection />
      <OceanBackground>
        <ProjectSection />

        <section id="section3" className={style.section}>
          <h2>Contact</h2>
          <p>이메일, 링크드인, GitHub</p>
        </section>
      </OceanBackground>
    </div>
  );
}
