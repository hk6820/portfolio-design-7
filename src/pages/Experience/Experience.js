import './Experience.css';

const Experience = ({ data,id }) => {
  return (
    <section className="experience-wrapper" id={id || 'experience'}>
      <div className="experience-column left-column">
        <h3 className="section-title">Software Skills</h3>
        {data.softwareSkills.map((skill, index) => (
          <div key={index} className="skill-bar">
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
            <input type="range" value={skill.level} disabled />
          </div>
        ))}

        <h3 className="section-title">Languages</h3>
        {data.languages.map((lang, index) => (
          <div key={index} className="skill-bar">
            <span>{lang.name}</span>
            <input type="range" value={lang.level} disabled />
          </div>
        ))}

        <h3 className="section-title">Personal Skills</h3>
        <ul className="simple-list">
          {data.personalSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="experience-column center-column">
        <h3 className="section-title">Experience</h3>
        <div className="timeline">
          {data.experience.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-badge">
                <span>{item.year}</span>
              </div>
              <div className="timeline-content">
                <h4>{item.company}</h4>
                <p className="position">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="section-title">Education</h3>
        <div className="education-block">
          <h4>{data.education.degree}</h4>
          <p>{data.education.institution}</p>
        </div>
      </div>

      <div className="experience-column right-column">
        <h3 className="section-title">What Can I Do?</h3>
        <ul className="simple-list">
          {data.whatICanDo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="section-title">Design Skills</h3>
        <ul className="simple-list">
          {data.designSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <h3 className="section-title">Hobbies & Interests</h3>
        <div className="hobby-icons">
          {data.hobbies.map((hobby, index) => (
            <div key={index} className="hobby-item">
              <div className="hobby-icon">{hobby.icon}</div>
              <span>{hobby.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
