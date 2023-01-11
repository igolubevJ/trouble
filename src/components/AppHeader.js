import React, { useState } from 'react';
import { Link } from 'gatsby';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';

export default function AppHeader() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <nav className="navbar is-transparent mb-5 p-5">

      <div className="navbar-brand">
        <Link className={`${open ? 'is-active' : ''} navbar-item`} to="/">
          <h1 className="title">TROUBLE</h1>
        </Link>
        <div onClick={() => setOpen(!open)} className="navbar-burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className={`${open ? 'is-active' : ''} navbar-menu`}>
        <div className="navbar-end">
          <Link className="navbar-item" to="/">
            Главная
          </Link>
          <Link className="navbar-item" to="/blogs">
            Все записи
          </Link>

          <ThemeToggle className="is-flex is-align-self-center" />
        </div>
      </div>
    </nav>
  );
}
