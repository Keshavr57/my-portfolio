import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Runner-Up – GDG Ideathon",
      description: "Secured second place in the Google Developer Group Ideathon with an innovative AI-powered solution."
    },
    {
      id: 2,
      title: "Participant – Smart India Hackathon",
      description: "Participated in India's largest hackathon, working on real-world problem statements provided by government and industry organizations."
    },
    {
      id: 3,
      title: "Participant – Buzz on Hackathon @ IIT Kanpur",
      description: "Collaborated with a team to develop creative solutions at a prestigious hackathon held at IIT Kanpur."
    },
    {
      id: 4,
      title: "Hacktoberfest 2024 Contributor",
      description: "Successfully completed multiple accepted pull requests to open-source projects during Hacktoberfest 2024."
    }
  ];

  return (
    <div className="achievements-container">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-list">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="achievement-card">
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;