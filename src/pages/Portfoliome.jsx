// src/pages/Portfolio.jsx
import React from 'react';
import './Portfoliome.css';

const projects = [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' },
    { title: 'Project 3', description: 'Description of Project 3' },
    { title: 'Project 4', description: 'Description of Project 4' },
    { title: 'Project 5', description: 'Description of Project 5' },
    { title: 'Project 6', description: 'Description of Project 6' },
  ];
  
  const Portfolio = () => {
    return (
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h2 className="card-title">{project.title}</h2>
            <p className="card-description">{project.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
export default Portfolio;
