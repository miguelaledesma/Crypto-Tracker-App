import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./about.css";
const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Hello, My name is Miguel! ",
  role: "Full Stack Developer",
  description:
    "Pocket Crypto has been a project that I have worked on since I was introduced to React. The idea behind this project was to create a crypto tracker that is fun and informative. Being able to see this project go from nothing to where it is now has been so exciting because when I first started, my skills in React were very basic. Now it has evolved to a website that allows users to create a account and add their favorite cryptoucurrencies to a watchlist, read some news about the current state of crypto and memes that will have you laughing.",
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
