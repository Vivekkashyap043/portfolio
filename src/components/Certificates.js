import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilephoto from "../assets/img/vivek.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Certificate from "./Certificate";
import SQL from "../assets/img/IBM RDBMS.jpg"
import HTML from "../assets/img/Html5.jpg"
import JavaScript from "../assets/img/JavaScript.jpg"
import AI from "../assets/img/ElementOfAI.png"
import Angular from "../assets/img/Angular.jpg"
import Java from "../assets/img/Java.jpg"
import Python from "../assets/img/python.png"

function Certificates() {

  const certificates = [
    {
      title: "Relational Databases",
      image: SQL
    },
    {
      title: "HTML5",
      image: HTML
    },
    {
      title: "JavaScript",
      image: JavaScript
    },
    {
      title: "Element of AI",
      image: AI
    },
    {
      title: "Angular",
      image: Angular
    },
    {
      title: "Java",
      image: Angular
    },
    {
      title: "Python",
      image: Python
    },
  ]

  return (
    <section className="certificate" id="certificates">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <h2>Certificates</h2>
              <p>
              I have successfully completed multiple online certification courses, enhancing my skills across various 
              domains such as Relational Database Management Systems (RDBMS), Java, Python, 
              JavaScript, and HTML. These certifications have provided me with a solid foundation in both 
              backend and frontend technologies.
              </p>
              <Row xs={1} sm={2} md={3} lg={4} style={{justifyContent: "center", gap: "50px"}}>
                {
                  certificates.map((certificate, index) => {
                    return (
                      <Certificate
                        key={index}
                        {...certificate}
                      />
                    )
                  })
                }
              </Row>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Certificates

