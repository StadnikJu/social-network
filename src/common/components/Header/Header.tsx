import s from "./Header.module.css"

export const Header = () => {
  return (
    <header className={s.header}>
      <h2 className={s.gradientItem}>SocialVibe</h2>
      <div className={s.searchWrapper}>
        <span className={s.searchIcon}>🔍</span>
        <input type="text" className={s.searchInput} placeholder="Search here..." />
      </div>
    </header>
  );
};
