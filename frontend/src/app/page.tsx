import style from './page.module.css';
import OceanBackground from '@/app/_home-components/OceanBackground/OceanBackground';
import IntroSection from './_home-components/IntroSection/IntroSection';
import ProjectSection from './_home-components/ProjectSection/ProjectSection';
import ContactSection from './_home-components/ContactSection/ContactSection';
export default function Home() {
  return (
    <div className={style.body}>
      <IntroSection />
      <OceanBackground>
        <ProjectSection />
        <ContactSection />
      </OceanBackground>
    </div>
  );
}
