import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">โปลิเทคนิคลานนา</div>
      <ul className="navbar-links">
        <li><Link to="/">หน้าหลัก</Link></li>
        <li><Link to="/about">เกี่ยวกับเรา</Link></li>
        <li><Link to="/courses">หลักสูตร</Link></li>
        <li><Link to="/contact">ติดต่อเรา</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
