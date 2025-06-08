import styles from './ProjectDetail.module.css';

export default function FitaPetDetail() {
  return (
    <div className={styles.project_detail_container}>
      <h1 className={styles.project_title}>Fit-a-Pet</h1>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>🗓 기간</h2>
        <p className={styles.project_content_paragraph}>2024.10 – 2024.11</p>
      </section>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>👥 참여 인원</h2>
        <p className={styles.project_content_paragraph}>6명 (프론트엔드 3명, 백엔드 3명)</p>
      </section>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>📌 개요</h2>
        <p className={styles.project_content_paragraph}>헬스 데이터 기반 펫 육성 앱</p>
      </section>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>🛠 기술 스택</h2>
        <ul className={styles.project_content_list}>
          <li>React Native</li>
          <li>JavaScript</li>
          <li>React Query</li>
          <li>Zustand</li>
        </ul>
      </section>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>🎯 담당 역할</h2>
        <p className={styles.project_content_paragraph}>프론트엔드 개발 및 팀장</p>
      </section>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>🚀 주요 기능 및 구현 과정</h2>
        <ul className={styles.project_content_list}>
          <li className={styles.project_content_item}>
            <strong>동적 애니메이션 컴포넌트 구현</strong>
            <div className={styles.project_detail_block}>
              <div className={styles.project_detail_label}>문제</div>
              <p className={styles.project_content_paragraph}>
                GIF 기반 애니메이션은 성능 저하와 메모리 누수 우려가 있었고, 이후 다양한 동작을
                추가하기에도 구조적으로 한계가 있었음.
              </p>
              <p className={styles.project_content_paragraph}>
                이를 해결하고자 이미지 스프라이트 기반의 라이브러리 활용을 검토했지만, 모든
                라이브러리들이 React Native 0.73 환경과 호환되지 않아 도입이 불가능했음.
              </p>
              <div className={styles.project_detail_label}>해결</div>
              <p className={styles.project_content_paragraph}>
                여러 오픈소스 스프라이트 라이브러리 코드를 분석해 직접 React Native에 맞는 커스텀
                애니메이션 컴포넌트를 제작함.
              </p>
              <p className={styles.project_content_paragraph}>
                props 기반으로 추상화해 다양한 화면에서 쉽게 재사용할 수 있도록 구현했고, 성능 문제
                없이 부드러운 동작을 지원함.
              </p>
            </div>
          </li>

          <li className={styles.project_content_item}>
            <strong>상태 관리 및 캐싱 최적화</strong>
            <div className={styles.project_detail_block}>
              <div className={styles.project_detail_label}>문제</div>
              <p className={styles.project_content_paragraph}>
                사용자 기기의 헬스 데이터를 지속적으로 최신 상태로 유지해야 했음.
              </p>
              <p className={styles.project_content_paragraph}>
                하지만 백그라운드에서 주기적으로 데이터를 가져오는 방식은 배터리 소모와 성능
                측면에서 비효율적이라고 판단함.
              </p>
              <div className={styles.project_detail_label}>해결</div>
              <p className={styles.project_content_paragraph}>
                사용자가 가장 자주 방문하는 메인 화면에 <code>useFocusEffect</code>를 적용해, 복귀
                시점마다 헬스 데이터를 다시 가져오도록 구현함.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
