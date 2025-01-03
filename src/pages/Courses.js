import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <div className="courses">
      <h2>หลักสูตรที่เปิดสอน</h2>
      <ul>
        <li>
          <h3>หลักสูตรที่อันที่ 1</h3>
          <p>ประเภทวิชาอุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศ

กลุ่มอาชีพซอฟต์แวร์และการประยุกต์
สาขาวิชาเทคโนโลยีสารสนเทศ</p>
          {/* ลิงค์ดาวน์โหลด PDF */}
          <a href="https://drive.google.com/file/d/1KlESxHfQdaNQ5trzY9rSJhpiDCU5GDe8/view" target="_blank" rel="noopener noreferrer">
            กดดูหลักสูตร
          </a>
          {/* หรือฝัง PDF ภายในหน้า */}
          {/* <embed src="/path/to/your-course-pdf-1.pdf" width="600" height="400" /> */}
        </li>
        <li>
          <h3>หลักสูตรที่อันที่ 2</h3>
          <p>ประเภทวิชาอุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศ

กลุ่มอาชีพซอฟต์แวร์และการประยุกต์
สาขาวิชาคอมพิวเตอร์โปรแกรมเมอร์</p>
          {/* ลิงค์ดาวน์โหลด PDF */}
          <a href="https://classroom.google.com/c/NzI4NTk1MTkyMjkx/a/Njg3NDMyNzM2ODIy/detailshttps://drive.google.com/file/d/1vx5diaTenzBsZuYRDX19YjesoCB6XA3m/view" target="_blank" rel="noopener noreferrer">
            กดดูหลักสูตร
          </a>
          {/* หรือฝัง PDF ภายในหน้า */}
          {/* <embed src="/path/to/your-course-pdf-2.pdf" width="600" height="400" /> */}
        </li>
      </ul>
      <ul>
        <li>
          <h3>หลักสูตรที่อันที่ 3</h3>
          <p>ประเภทวิชาอุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศ

กลุ่มอาชีพซอฟต์แวร์และการประยุกต์
สาขาวิชาเทคโนโลยีสารสนเทศ</p>
          {/* ลิงค์ดาวน์โหลด PDF */}
          <a href="https://drive.google.com/file/d/14qknn42lagFi_WuJoiOl_ibPwu7bUvte/view   " target="_blank" rel="noopener noreferrer">
            กดดูหลักสูตร
          </a>
          {/* หรือฝัง PDF ภายในหน้า */}
          {/* <embed src="/path/to/your-course-pdf-1.pdf" width="600" height="400" /> */}
        </li>
        <li>
          <h3>หลักสูตรที่อันที่ 4</h3>
          <p>ประเภทวิชาอุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศ

กลุ่มอาชีพซอฟต์แวร์และการประยุกต์
สาขาวิชาคอมพิวเตอร์โปรแกรมเมอร์</p>
          {/* ลิงค์ดาวน์โหลด PDF */}
          <a href="https://classroom.google.com/c/NzI4NTk1MTkyMjkx/a/Njg3NDMyNzM2ODIy/details" target="_blank" rel="noopener noreferrer">
            กดดูหลักสูตร
          </a>
          {/* หรือฝัง PDF ภายในหน้า */}
          {/* <embed src="/path/to/your-course-pdf-2.pdf" width="600" height="400" /> */}
        </li>
      </ul>
    </div>
  );
};

export default Courses;
