import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={{width: '100%', height: "100%"}}/>
        <div className="proj-txtx" style={{padding: "10px"}}>
          <h4>{title}</h4>
          <span >{description}</span>
          <div className="mt-4 d-flex justify-content-center">
          <button className="btn btn-light" onClick={() => window.open(url, "_blank")}>View</button>
          </div>
          
        </div>
      </div>
    </Col>
  )
}
