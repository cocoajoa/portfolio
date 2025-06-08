import styles from './ProjectDetail.module.css';

export default function XdeskDetail() {
  return (
    <div className={styles.project_detail_container}>
      <h1 className={styles.project_title}>XDESK</h1>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>🗓 기간</h2>
        <p className={styles.project_content_paragraph}>2024.07 – 2024.08</p>
      </section>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>👥 참여 인원</h2>
        <p className={styles.project_content_paragraph}>
          6명 (AI/임베디드 3명, 백엔드 1명, 프론트엔드 1명, 인프라 1명)
        </p>
      </section>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>📌 개요</h2>
        <p className={styles.project_content_paragraph}>
          사용자 맞춤형 자동 조절 스마트 책상 시스템
        </p>
      </section>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>🛠 기술 스택</h2>
        <ul className={styles.project_content_list}>
          <li>Docker</li>
          <li>Nginx</li>
          <li>FastAPI</li>
          <li>Qt</li>
          <li>Numpy</li>
          <li>Pandas</li>
        </ul>
      </section>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>🎯 담당 역할</h2>
        <p className={styles.project_content_paragraph}>인프라 및 풀스택 보조</p>
      </section>

      <section className={styles.project_section}>
        <h2 className={styles.project_section_title}>🚀 주요 기능 및 구현 과정</h2>
        <ul className={styles.project_content_list}>
          <li className={styles.project_content_item}>
            <strong>자세 교정 데이터 캐싱 및 저장 최적화</strong>
            <div className={styles.project_detail_block}>
              <div className={styles.project_detail_label}>문제</div>
              <p className={styles.project_content_paragraph}>
                자세 교정 그래프에 필요한 통계 데이터를 요청할 때마다, 방대한 자세 로그 데이터를
                실시간으로 계산하는 것은 비효율적이라 판단.
              </p>
              <div className={styles.project_detail_label}>해결</div>
              <p className={styles.project_content_paragraph}>
                총 사용 시간, 전날 대비 올바른 자세 비율 등 주요 지표를 사전 계산해 저장하고,
                로그아웃 시 해당 통계와 함께 로그를 저장해 불필요한 계산을 방지함.
              </p>
            </div>
          </li>

          <li className={styles.project_content_item}>
            <strong>얼굴 로그인 속도 향상을 위한 DB 샤딩</strong>
            <div className={styles.project_detail_block}>
              <div className={styles.project_detail_label}>문제</div>
              <p className={styles.project_content_paragraph}>
                얼굴 로그인 시 수천 개 이상의 얼굴 데이터를 매번 전체 조회하는 방식은, 검색 속도
                저하와 확장성 문제를 초래할 가능성이 있었음.
              </p>
              <div className={styles.project_detail_label}>해결</div>
              <p className={styles.project_content_paragraph}>
                지역 키를 기준으로 DB를 샤딩하여 검색 범위를 좁히고, 일치율 기반 탐색 알고리즘의
                성능을 크게 향상시킴.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
