import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Header.css";

function Header(props) {
  const location = useLocation();

  return (
    <div className='header'>
      {/* Logo */}
      <div>
        <Link to={"/"} className="link">
          <div className='logo'>R</div>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className='nav-links'>
        {location.pathname === "/" || location.pathname === "/about" ? (
          <div>
            <Link to={"/resumebuild"} className="link">Start</Link>
          </div>
        ) : null}

        {location.pathname === "/" ? (
          <div onClick={() => props.handleclick()}>Contact</div>
        ) : null}

        <div>
          <Link to={"/about"} className="link">About</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
