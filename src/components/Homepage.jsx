import "../styles/Homepage.css";
import RatingSystem from "./RatingSystem";

const Homepage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "RIKI AWAL SYAHPUTRA",
      role: "Frontend Developer",
      image: "rik.jpg",
    },
    {
      id: 2,
      name: "MARCELLINUS GANESIA L.",
      role: "Backend Developer",
      image: "marcel.jpg",
    },
    {
      id: 3,
      name: "MICHAEL LEE KOESUMO",
      role: "UI/UX Designer",
      image: "mike.jpg",
    },
    {
      id: 4,
      name: "FARZAN FIRDOUS",
      role: "Full Stack Developer",
      image: "farzan.jpg",
    },
  ];

  return (
    <div className="homepage">
      <section className="hero">
        <h1 className="hero-title">Welcome to Our Group Project</h1>
        <p className="hero-subtitle">
          Building Amazing Web Applications Together
        </p>
      </section>

      <section className="team-section" id="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-card flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="team-member-image"
              />
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
              <RatingSystem />
              <a href={`#/profile/${member.id}`} className="view-profile-btn">
                View Profile
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section" id="about-section">
        <h2 className="section-title">About Our Project</h2>
        <p className="about-text">
          We are a team of passionate developers working together to create
          innovative web solutions. Our project combines modern technologies
          with creative design to deliver exceptional user experiences.
        </p>
      </section>
    </div>
  );
};

export default Homepage;
