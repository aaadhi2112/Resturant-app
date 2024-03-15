import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Restcard.css'
import { Link } from 'react-router-dom';

function Restcard({resturants}) {
  console.log(resturants);

  return (
    <>

    <Link to={`/view/${resturants.id}`}>
    <Card className='cards'>
      <Card.Img variant="top" src={resturants.photograph} />
      <Card.Body>
        <Card.Title className='text-black'>{resturants.name}</Card.Title>
        <Card.Text  className='text-black'>
        {resturants.address}
        {resturants.cuisine_type}
        {resturants.neighborhood}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>

    </>
  )
}

export default Restcard