import Logo from "./Logo";
import Login from "./Login";
import Links from "./Links";
import "../../../styles/Header.scss";
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <Logo />
      <div className="menu-icon" onClick={() => setMenuOpen(!isMenuOpen)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </div>
      <div className="header-links">
        <Links />
      </div>
      <Login />
    </div>
  );
};

export default Header;