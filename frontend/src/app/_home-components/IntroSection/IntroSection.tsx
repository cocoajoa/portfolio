import style from './IntroSection.module.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import AnimatedName from '@/components/AnimatedName/AnimatedName';
import AnimatedQuote from '@/components/AnimatedQuote/AnimatedQuote';

const sections = [
  { id: 'IntroSection', title: 'About Me' },
  { id: 'ProjectSection', title: 'Projects' },
  { id: 'section3', title: 'Contact' },
];

export default function IntroSection() {
  return (
    <header className={style.header_container}>
      <div className={style.sidebar_container}>
        <Sidebar sections={sections} />
      </div>
      <section id="IntroSection" className={style.section}>
        <h1>
          프론트엔드 개발자 <br />
          <AnimatedName /> 입니다.
        </h1>

        <ul className={style.intro_description}>
          <li>
            <p>
              CSS를 좋아하고, 사용자가{' '}
              <AnimatedQuote defaultColor="red">느낄 수 있는</AnimatedQuote> 심플하고 감각적인 UI를
              고민하는 걸 좋아합니다.
            </p>
          </li>
          <li>
            <p>
              웹 표준과 접근성을 고려한{' '}
              <AnimatedQuote defaultColor="green">사용자 경험</AnimatedQuote>을 고민합니다.
            </p>
          </li>
          <li>
            <p>
              소통 과정에서 발생한 미세한 간극도 무시하지 않고, 사소한 부분까지 확인하는{' '}
              <AnimatedQuote defaultColor="blue">정확한 협업</AnimatedQuote>을 추구합니다.
            </p>
          </li>
        </ul>
      </section>
    </header>
  );
}
