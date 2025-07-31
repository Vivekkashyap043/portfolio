import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Blog from "../assets/img/Blog.webp";
import StudentService from "../assets/img/StudentServices.jpg";
import crimson from "../assets/img/crimson_innovative_logo.jpeg"
import sathya from "../assets/img/sathyasai.jpeg"
import Quickall from "../assets/img/quickall.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Internship from "./Internship";

export const Projects = () => {

  const projects = [
    {
      title: "Blog App",
      description: "A dynamic platform where users can create, manage, and engage with diverse articles, offering an intuitive and interactive blogging experience.",
      imgUrl: Blog,
      url: "https://github.com/Vivekkashyap043/blog-app",
    },
    {
      title: "Student Service Centre",
      description: "Student Service Centre is a comprehensive platform designed to streamline student services, offering easy access to essential resources and support for academic and administrative needs.",
      imgUrl: StudentService,
      url: "https://github.com/Vivekkashyap043/student-service-centre",
    },
    {
      title: "QuickAll",
      description: "QuickAll is a versatile web application that integrates chatting, news updates, games, and movie reviews into a single, user-friendly platform",
      imgUrl: Quickall,
      url: "https://github.com/Vivekkashyap043/quickall",
    },
  ];

  const internships = [
    {
      company: "Crimson Innovative Technologies",
      description: "Developed a Visitor Management App using React Native.",
      imgUrl: crimson,
      url: "https://drive.google.com/file/d/1Xz221Goa-voEXpPivDDRwrFa6v_ArOLl/view?usp=sharing",
    },
    {
      company: "Prashanti balamandira Trust",
      description: "Developed an Employee Management website with a collaborative team",
      imgUrl: sathya,
      url: "https://drive.google.com/file/d/1aVNrp-Sqrb-fMyvX3lQc5ABdy_JTHop-/view?usp=sharing",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                I have completed several projects and internships, including developing and deploying web and <br/>
                mobile applications, collaborating in teams, and gaining hands-on experience <br/>
                in various domains like React and React Native.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Internships</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Research</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row  xs={1} sm={2} md={3} lg={4} style={{justifyContent: "center", gap: "50px"}}>
                        {
                          internships.map((project, index) => {
                            return (
                              <Internship
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>No Research found</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
