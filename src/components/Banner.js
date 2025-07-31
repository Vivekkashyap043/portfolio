import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilephoto from "../assets/img/vivek.jpg";
import { ArrowRightCircle, Download } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer", "React Developer", "Software Engineer", "Problem Solver" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const handleDownloadCV = () => {
    // Add your CV download logic here
    console.log('Download CV clicked');
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                <span className="tagline">👋 Welcome to my Portfolio</span>
                <h1>
                  Hi, I'm <span className="name-highlight">Vivek Kashyap</span>
                  <br/>
                  <div className="typing-container">
                    <span className="txt-rotate" dataPeriod="1000" data-rotate={JSON.stringify(toRotate)}>
                      <span className="typing-text">{text}</span>
                      <span className="cursor">|</span>
                    </span>
                  </div>
                </h1>
                <p className="hero-description">
                  Passionate Full Stack Developer with expertise in modern web technologies. 
                  I specialize in building scalable applications using React, Node.js, and cloud technologies. 
                  With a proven track record in both frontend and backend development, I transform ideas into 
                  innovative digital solutions.
                </p>
                <div className="hero-buttons">
                  <button className="btn-primary" onClick={() => document.getElementById('connect').scrollIntoView()}>
                    Let's Connect <ArrowRightCircle size={20} />
                  </button>
                  <button className="btn-secondary" onClick={handleDownloadCV}>
                    <Download size={18} /> Download CV
                  </button>
                </div>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">2+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <div className="profile-image-container">
                    <div className="profile-image-bg"></div>
                    <img src={profilephoto} alt="Vivek Kashyap - Profile" className="profile-image"/>
                    <div className="floating-icons">
                      <div className="floating-icon icon-1">⚛️</div>
                      <div className="floating-icon icon-2">🚀</div>
                      <div className="floating-icon icon-3">💻</div>
                      <div className="floating-icon icon-4">🎯</div>
                    </div>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
