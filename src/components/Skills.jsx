import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      category: "Languages",
      skills: ["Python", "JavaScript"]
    },
    {
      id: 2,
      category: "Web",
      skills: ["HTML", "CSS", "React.js"]
    },
    {
      id: 3,
      category: "Core",
      skills: ["DSA", "Cyber Security", "OS", "Cryptography"]
    },
    {
      id: 4,
      category: "Soft Skills",
      skills: ["Teamwork", "Communication", "Problem-Solving"]
    }
  ];

  return (
    <div className="skills-container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.id} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <ul className="skills-list">
              {category.skills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;