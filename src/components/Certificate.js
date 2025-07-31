import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const Certificate = ({ title, image }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: '18rem', height: '20rem' }}>
        <Card.Img
          variant="top"
          src={image}
          style={{ width: '100%', height: '210px', marginTop: '10px' }}
        />
        <Card.Body>
          <Card.Title
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 800,
            }}
          >
            {title}
          </Card.Title>
          <button className='btn btn-warning' style={{height: "40%", fontSize: 12, display: "flex", justifyContent: "center", alignItems: "center", margin: "auto"}} onClick={handleShow}>
            View Full Certificate
          </button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered size="lg" style={{marginTop: "50px"}}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: 0 }}>
          <img
            src={image}
            alt={title}
            style={{ width: '100%', height: 'auto' }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Certificate;
