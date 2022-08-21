import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./about.css";
const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Hello, My name is Miguel! ",
  role: "Full Stack Developer",
  description:
    "Pocket Crypto has been a project that I have worked on since I was introduced to React.js. The idea behind this project was to create a crypto tracker that is fun, informative and allows me to showcase my Full-Stack Engineering skills. The application is always changing due to the ideas that come to me. This is what makes programming so enjoyable to me. It allows me to express myself and my creativity. In the early days of this project, all that was able to be done by a user was see coin market data and a brief description of the coin. The current state of the application allows visitors to create a account and have their own personal dashboard that shows a watchlist of coins that they have added. Users who do not wish to make an account can visit the Crypto News page and scroll through the most recent news articles related to bitcoin.",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com/miguelaledesma",
  },
};

const About = () => {
  const { name, role, description, social } = about;
  return (
    <div className="about center">
      {name && (
        <h1>
          <span className="about__name">{name}</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
