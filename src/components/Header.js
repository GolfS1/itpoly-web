import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>ยินดีต้อนรับสู่ วิทยาลัยโปลิเทคนิคลานนาเชียงใหม่</h1>
        <p>วิทยาลัยที่มุ่งเน้นการพัฒนาความรู้และทักษะวิชาชีพ เพื่อเตรียมพร้อมกับเรียนและโอกาสสำหรับอนาคต</p>
        <img src="/logo.png" alt="วิทยาลัยโปลิเทคนิคลานนา" className="header-logo" />
      </div>
    </header>
  );
};

export default Header;
