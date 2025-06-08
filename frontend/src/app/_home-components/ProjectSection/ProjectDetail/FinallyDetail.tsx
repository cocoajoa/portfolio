import styles from './ProjectDetail.module.css';

export default function FinallyDetail() {
  return (
    <div className={styles.project_detail_container}>
      <h1 className={styles.project_title}>Finally</h1>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>🗓 기간</h2>
        <p className={styles.detail_paragraph}>2024.08 – 2024.10</p>
      </section>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>👥 참여 인원</h2>
        <p className={styles.detail_paragraph}>6명 (프론트엔드 3명, 백엔드 3명)</p>
      </section>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>📌 개요</h2>
        <p className={styles.detail_paragraph}>개인 맞춤 청년 정책 및 카드 추천 서비스</p>
      </section>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>🛠 기술 스택</h2>
        <ul className={styles.project_content_list}>
          <li>React</li>
          <li>TypeScript</li>
          <li>React Query</li>
          <li>Zustand</li>
        </ul>
      </section>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>🎯 담당 역할</h2>
        <p className={styles.detail_paragraph}>프론트엔드 개발</p>
      </section>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>🚀 주요 기능 및 구현 과정</h2>
        <ul className={styles.project_content_list}>
          <li className={styles.project_content_item}>
            <strong>1원 인증 이미지 로딩 최적화</strong>
            <div className={styles.detail_block}>
              <div className={styles.detail_label}>문제</div>
              <p className={styles.detail_paragraph}>
                1원 인증 시 사용자가 선택하는 카드사 로고 이미지들이 늦게 로드되어, 선택 시점에
                이미지가 보이지 않거나 깜빡이는 문제가 발생함.
              </p>
              <div className={styles.detail_label}>해결</div>
              <p className={styles.detail_paragraph}>
                선택 화면 진입 전에 주요 카드사 이미지 리소스를 <code>prefetch</code>로 미리
                로드함으로써, 화면 전환과 동시에 이미지가 바로 렌더링되도록 하여 UX를 개선함.
              </p>
            </div>
          </li>

          <li className={styles.project_content_item}>
            <strong>이메일 인증 자동화</strong>
            <div className={styles.detail_block}>
              <div className={styles.detail_label}>문제</div>
              <p className={styles.detail_paragraph}>
                기존에는 이메일 입력 후 사용자가 직접 중복확인 버튼을 눌러야 했으며, 입력 도중마다
                API를 호출하면 서버 부하가 발생할 수 있는 우려가 있었음.
              </p>
              <div className={styles.detail_label}>해결</div>
              <p className={styles.detail_paragraph}>
                <code>useEffect</code> 내에서 <code>setTimeout</code>과 <code>clearTimeout</code>을
                사용한 debounce 처리로, 입력 후 1초 이상 멈췄을 때만 중복확인을 자동 요청하여 UX와
                성능을 모두 개선함.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
