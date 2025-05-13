import Sidebar from '@/components/Sidebar/Sidebar';
export default function Home() {
  const sections = [
    { id: 'section1', title: 'Introduction' },
    { id: 'section2', title: 'Projects' },
    { id: 'section3', title: 'Conclusion' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar sections={sections} />
      다크모드 on off 스위치
      <main style={{ padding: '20px' }}>
        <section id="section1" style={{ height: '100vh', borderBottom: '1px solid #ccc' }}>
          <h2>안녕하세요, 장성일입니다.</h2>
        </section>

        <section id="section2" style={{ height: '100vh', borderBottom: '1px solid #ccc' }}>
          <h2>프로젝트3개</h2>
          프로젝트 개요 기술스택 참여인원, 기간ㅇ
        </section>

        <section id="section3" style={{ height: '100vh', borderBottom: '1px solid #ccc' }}>
          컨택정도?
        </section>
      </main>
    </div>
  );
}
