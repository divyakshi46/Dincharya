import React from 'react';
import './About.css';
import aboutPhoto from './aboutPhoto.avif'; // Correctly import the image

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h5 className="firstline">About DinCharya</h5>
        <h3 className="secondline">Helping People to Manage Their Tasks Properly</h3>
        <p className="container">
          Welcome to Dincharya, your simple and effective personal task management tool designed to keep your day organized and productive.
          Whether you’re juggling daily chores, planning your work schedule, or tracking personal goals, Dincharya makes it easy to manage tasks in a clean, distraction-free interface.
        </p>
        <h4 className="sub-head">Key Features</h4>
        <ul>
          <li className="lists">Task Management: Easily add and delete tasks to stay on top of your daily routine.</li>
          <li className="lists">Simple & Intuitive Design: A user-friendly interface that allows you to focus on your tasks without unnecessary distractions.</li>
          <li className="lists">Task Descriptions: Add detailed descriptions to each task for better clarity and understanding.</li>
          <li className="lists">Responsive Layout: Access your to-do list seamlessly across different devices.</li>
        </ul>
        <h5 className="ending">With Dincharya, you can transform your daily tasks into manageable, actionable items, helping you achieve more while staying organized.</h5>
      </div>
      <div className="image-container">
        <img src={aboutPhoto} alt="aboutImg" className="about-image" />
      </div>
    </div>
  );
}
