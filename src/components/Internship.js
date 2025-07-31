import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function Internship({ company, description, imgUrl, url }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Card style={{ width: "20rem", height:"27rem", padding: 0 }}>
        <div style={{ margin: "30px", height: "70%" }} className='d-flex justify-content-center align-items-center'>
          <Card.Img
            variant="top"
            src={imgUrl}
            style={{ width: "85%", height: "100%", cursor: 'pointer' }}
            onClick={() => handleShow(imgUrl)}
          />
        </div>
        <Card.Body style={{ margin: 0, padding: 0, height: "32%", backgroundColor: "#212f3d"}}>
          <Card.Title style={{ fontSize: 19, textAlign: "center", fontWeight: 600, width: "100%", marginTop: '10px', marginBottom: 0, color: "white" }}>{company}</Card.Title>
          <Card.Text style={{ fontSize: 11, textAlign: "center", width: "100%",  color: "#bdc3c7", marginBottom: 0 }}>
            {description}
          </Card.Text>
          <div className="d-flex justify-content-center mt-0" style={{color: "#f4d03f", cursor: "pointer"}} onClick={()=> window.open(url, "_blank")}><u>View Certificate</u></div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <img src={url} alt="Selected" style={{ width: '100%' }} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Internship;
