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
    <nav className={style.sidebar_container}>
      <ul className={style.sidebar_list}>
        {sections.map((section) => (
          <li
            key={section.id}
            className={style.sidebar_item}
            onClick={() => handleClick(section.id)}
          >
            <span className={style.text_base}> {section.title}</span>
            <span className={style.text_hover}>{section.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
