import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Weather App using React-Vite"
              description="Developed a dynamic weather application utilizing React and React Bootstrap to deliver real-time weather updates and forecasts. The app offers an intuitive user interface with responsive design elements, ensuring seamless access across devices. Key features include location-based weather data, detailed forecasts, and visually appealing components. This project showcases my proficiency in modern web development technologies and emphasizes user-centric design principles"
              ghLink="https://github.com/karanshah254/Weather-App-React-Vite"
              demoLink="https://weather-app-react-vite-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Web Development Project"
              description="Showcased expertise in front-end development through projects built with React, Redux, Bootstrap, and Sass. Delivered responsive and interactive web applications with state management using Redux, styled components with Bootstrap for consistent UI, and efficient CSS pre-processing with Sass. These projects highlight my ability to create scalable, maintainable, and visually appealing user interfaces while adhering to modern web development practices"
              ghLink="https://github.com/karanshah254/FCC-FrontEndDevelopmentLibraries/blob/main/Projects/README.md"
              demoLink="https://github.com/karanshah254/FCC-FrontEndDevelopmentLibraries/blob/main/Projects/README.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CareerCruise: Gateway to Success"
              description="Our recruitment portal revolutionizes the hiring process by leveraging advanced AI matching, comprehensive skill assessments, and blockchain credential verification. Designed for all types of workers, it offers personalized career development tools, secure data privacy, and niche community networking. Employers benefit from enhanced branding tools and real-time analytics, while job seekers enjoy tailored job recommendations and seamless mobile access. Experience efficient, secure, and personalized recruitment like never before."
              ghLink="https://github.com/karanshah254/SSIP-HACKATHON-PROJECT"
              demoLink="https://ssip-hackathon-project.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
