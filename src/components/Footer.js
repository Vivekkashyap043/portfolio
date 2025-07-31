import { Container, Row, Col } from "react-bootstrap";
import linkedIn from '../assets/img/linkedIn.svg';
import facebook from '../assets/img/facebook.svg';
import instagram from '../assets/img/instagram.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12}>
            <h1>Vivek Kumar Kashyap</h1>
            <a href="https://drive.google.com/file/d/1wTCseVfW0u2vMO44AruJ-BfuCOMVajr4/view?usp=sharing" target="_blank" style={{color: "yellow", marginLeft: "20%"}}>View My Resume</a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vivekkashyap043/" target="_blank"><img src={linkedIn} alt="" /></a>
              <a href="https://www.facebook.com/profile.php?id=100028097811487" target="_blank"><img src={facebook} alt="" /></a>
              <a href="https://www.instagram.com/vivek_kashyap043/?hl=en" target="_blank"><img src={instagram} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
