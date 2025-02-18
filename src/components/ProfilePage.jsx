import { useState, useEffect } from "react";
import RatingSystem from "./RatingSystem";
import "../styles/ProfilePage.css";

const ProfilePage = ({ id }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Simulating profile data fetch
    const profileData = {
      1: {
        name: "Team Member 1",
        role: "Frontend Developer",
        image: "rik.jpg",
        skills: ["React", "JavaScript", "CSS", "HTML"],
        bio: "Passionate frontend developer with a keen eye for design and user experience. Specializing in creating responsive and interactive web applications.",
        projects: [
          {
            name: "E-commerce Platform",
            description:
              "Built a responsive e-commerce platform using React and Redux",
          },
          {
            name: "Portfolio Website",
            description:
              "Designed and developed personal portfolio websites for clients",
          },
        ],
      },
      2: {
        name: "Team Member 2",
        role: "Backend Developer",
        image: "marcel.jpg",
        skills: ["Node.js", "Python", "MongoDB", "SQL"],
        bio: "Experienced backend developer focused on building scalable and efficient server-side applications. Expert in database design and API development.",
        projects: [
          {
            name: "REST API Service",
            description:
              "Developed a RESTful API service for a social media platform",
          },
          {
            name: "Database Migration",
            description:
              "Led a major database migration project for a financial institution",
          },
        ],
      },
      3: {
        name: "Team Member 3",
        role: "UI/UX Designer",
        image: "mike.jpg",
        skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
        bio: "Creative UI/UX designer with a passion for creating intuitive and beautiful user interfaces. Focused on user-centered design principles.",
        projects: [
          {
            name: "Mobile App Design",
            description:
              "Created the UI/UX design for a fitness tracking mobile app",
          },
          {
            name: "Website Redesign",
            description: "Led the redesign of a major e-commerce website",
          },
        ],
      },
      4: {
        name: "Team Member 4",
        role: "Full Stack Developer",
        image: "farzan.jpg",
        skills: ["JavaScript", "React", "Node.js", "Express"],
        bio: "Full Stack Developer with experience in building scalable web applications. Proficient in both frontend and backend technologies.",
        projects: [
          {
            name: "Blog Platform",
            description:
              "Developed a full-stack blog platform using MERN stack",
          },
          {
            name: "Chat Application",
            description: "Built a real-time chat application using WebSocket",
          },
        ],
      },
    };

    setProfile(profileData[id]);
  }, [id]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={profile.image} alt={profile.name} className="profile-image" />
        <div className="profile-info">
          <h1 className="profile-name">{profile.name}</h1>
          <h2 className="profile-role">{profile.role}</h2>
          <RatingSystem />
        </div>
      </div>

      <div className="profile-content">
        <section className="profile-section">
          <h3>About Me</h3>
          <p>{profile.bio}</p>
        </section>

        <section className="profile-section">
          <h3>Skills</h3>
          <div className="skills-container">
            {profile.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="profile-section">
          <h3>Projects</h3>
          <div className="projects-grid">
            {profile.projects.map((project, index) => (
              <div key={index} className="project-card">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
