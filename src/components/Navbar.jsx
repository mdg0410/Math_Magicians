// import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'Calculator', text: 'Calculator' },
  { path: 'Quote', text: 'Quote' },
];

const Style = {
  display: 'flex',
  width: '35%',
  fontSize: '20px',
  fontWeight: '500',
  padding: '0',
};

const Nav = {
  display: 'flex',
  alignItems: 'center',
  width: '90%',
  margin: '4vh 0',
  padding: '0 10vh',
};

const Title = {
  display: 'flex',
  width: '65%',
  fontSize: '24px',
};

export default function Navbar() {
  return (
    <nav className="navbar" style={Nav}>
      <div style={Title}>
        <h1 style={{ fontWeight: '600' }}> Math Magicians</h1>
      </div>
      <ul style={Style}>
        {links.map((link) => (
          <li key={link.text} style={{ display: 'flex', width: 'auto', justifyContent: 'center' }}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
