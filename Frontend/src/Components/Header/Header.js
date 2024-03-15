import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
        <Navbar className="bg-black p-1">
        <Container>
          <Navbar.Brand href="/" className='text-light'>
            <i class="fa-solid fa-utensils fa-bounce me-3"></i>
            Capital Resturant
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header