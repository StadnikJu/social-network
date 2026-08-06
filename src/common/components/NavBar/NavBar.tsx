import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/profile" className={s.menuItem}>
        <span className={s.menuIcon}>👤</span> Profile
      </NavLink>
      <NavLink to="/messages" className={s.menuItem}>
        <span className={s.menuIcon}>💬</span> Messages
      </NavLink>
      <NavLink to="/news" className={s.menuItem}>
        <span className={s.menuIcon}>📰</span> News
      </NavLink>
      <NavLink to="/music" className={s.menuItem}>
        <span className={s.menuIcon}>🎵</span> Music
      </NavLink>
      <NavLink to="/settings" className={s.menuItem}>
        <span className={s.menuIcon}>⚙️</span> Settings
      </NavLink>
    </nav>
  );
};
