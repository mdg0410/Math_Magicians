// import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'Calculator', text: 'Calculator' },
  { path: 'Quote', text: 'Quote' },
];

const Style = {
  display: 'flex',
  gap: '5vh',
};

const Nav = {
  display: 'flex',
  justifyContent: 'space-around',
};

export default function Navbar() {
  return (
    <nav className="navbar" style={Nav}>
      <div>
        <h1> Math Magicians</h1>
      </div>
      <ul style={Style}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
