'use client';
import style from './Sidebar.module.css';
interface Section {
  id: string;
  title: string;
}

export default function Sidebar({ sections }: { sections: Section[] }) {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={style.sidebar}>
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            style={{ cursor: 'pointer', marginBottom: '10px' }}
            onClick={() => handleClick(section.id)}
          >
            {section.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}
