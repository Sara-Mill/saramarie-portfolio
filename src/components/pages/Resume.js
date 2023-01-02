import React from "react";

export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <div>
        <h4> Front-end Proficiencies</h4>
        <ul class="list">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>DOM Manipulation</li>
          <li>Responsive Design</li>
        </ul>
        <h4> Back-end Proficiencies</h4>
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
          <li>APIs</li>
        </ul>
      </div>
    </div>
  );
}
