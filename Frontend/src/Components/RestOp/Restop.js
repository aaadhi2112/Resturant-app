import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Restop({op}) {
    console.log(op);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>

      <Button variant="primary" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><strong>Operating Hours</strong></Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <ListGroup>
        <ListGroup.Item><strong>Monday : </strong>{op?.Monday}</ListGroup.Item>
        <ListGroup.Item><strong>Tuesday : </strong>{op?.Tuesday}</ListGroup.Item>
        <ListGroup.Item><strong>Wednesday : </strong>{op?.Wednesday}</ListGroup.Item>
        <ListGroup.Item><strong>Thursday : </strong>{op?.Thursday}</ListGroup.Item>
        <ListGroup.Item><strong>Friday : </strong>{op?.Friday}</ListGroup.Item>
        <ListGroup.Item><strong>Saturday : </strong>{op?.Saturday}</ListGroup.Item>
        <ListGroup.Item><strong>Sunday : </strong>{op?.Sunday}</ListGroup.Item>
        </ListGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Restop