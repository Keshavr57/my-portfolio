import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Campus Club Tracker App",
      description: "A comprehensive application to track and manage university club activities, events, and memberships.",
      techStack: ["React.js", "Node.js", "MongoDB"],
      githubLink: "https://github.com/keshavr57/campus-club-tracker",
      demoLink: "https://campus-club-tracker.vercel.app"
    },
    {
      id: 2,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce website with product catalog, cart functionality, and checkout process.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/keshavr57/ecommerce-website",
      demoLink: "https://keshavr57.github.io/ecommerce-website"
    },
    {
      id: 3,
      title: "Tic-Tac-Toe Game",
      description: "Interactive tic-tac-toe game with AI opponent options and score tracking.",
      techStack: ["JavaScript", "HTML5", "CSS3"],
      githubLink: "https://github.com/keshavr57/tic-tac-toe",
      demoLink: "https://keshavr57.github.io/tic-tac-toe"
    },
    {
      id: 4,
      title: "Hacktoberfest 2024 PRs",
      description: "Collection of open-source contributions made during Hacktoberfest 2024.",
      techStack: ["Various", "Git", "GitHub"],
      githubLink: "https://github.com/keshavr57/hacktoberfest-2024",
      demoLink: null
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech-stack">
              <h4>Tech Stack:</h4>
              <ul>
                {project.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-links">
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github"
                >
                  GitHub
                </a>
              )}
              
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link demo"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;