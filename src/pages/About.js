import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* ส่วนเนื้อหาเกี่ยวกับเรา */}
      <section className="about-info">
        <h2>เกี่ยวกับวิทยาลัยโปลิเทคนิคลานนาเชียงใหม่</h2>
        <p>วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนาเชียงใหม่ เป็นสถานศึกษาที่มุ่งเน้นการพัฒนาความรู้และทักษะวิชาชีพเพื่อเตรียมความพร้อมให้กับนักศึกษาในการทำงานในสายงานต่าง ๆ ที่เกี่ยวข้องกับเทคโนโลยีและวิทยาศาสตร์สมัยใหม่</p>
        <p>เป้าหมายของเราคือการเตรียมความพร้อมให้นักศึกษามีความสามารถในการประกอบอาชีพและตอบสนองต่อความต้องการของตลาดแรงงานที่เปลี่ยนแปลงอย่างรวดเร็ว</p>
      </section>

      {/* ส่วนรูปภาพ */}
      <section className="about-images">
        <h3>กิจกรรมและภาพบรรยากาศการเรียนการสอน</h3>
        <div className="activity-images">
          <img src="https://www.khaosod.co.th/wpapp/uploads/2024/06/IMG_4567.jpeg" alt="กิจกรรม 1" className="activity-image" />
          <img src="https://www.konlanna.com/media/img/4AUwxCDYS7E2xfP7QFEbLmUdksClTV78.jpg" alt="กิจกรรม 2" className="activity-image" />
        </div>
      </section>
    </div>
  );
};

export default About;
