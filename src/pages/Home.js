import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* ส่วนข้อความต้อนรับ */}
      <section className="welcome">
        <h2>ยินดีต้อนรับสู่สาขาวิชาเทคโนโลยีสารสนเทศ</h2>
        <p>วิทยาลัยโปลิเทคนิคลานนาเชียงใหม่มุ่งมั่นในการพัฒนาความรู้และทักษะทางด้านเทคโนโลยีสารสนเทศเพื่อเตรียมพร้อมนักศึกษาสู่การทำงานในโลกยุคดิจิทัล</p>
        <img src="https://uat-backend.thaisisterhood.com/public/uploads/place/13/original/654c65f35a0a11699505651.jpg" alt="กิจกรรม" />
      </section>

      {/* ส่วนกิจกรรม */}
      <section className="activities">
        <h3>กิจกรรมในสาขาวิชา</h3>
        <div className="activity-images">
          <img src="https://www.cmvc.ac.th/main/wp-content/uploads/2023/12/S__4178196_0.jpg" alt="กิจกรรม 1" className="activity-image" />
          <img src="https://cdn.chiangmainews.co.th/wp-content/uploads/2024/06/05151929/1717575569_110650-chiangmainews.jpg" alt="กิจกรรม 2" className="activity-image" />
        </div>
      </section>
    </div>
  );
};

export default Home;
