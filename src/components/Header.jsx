import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

function Header() {
  return (
    <>
    
      <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-between p-3">
        
          <Link to={'/'}><Navbar.Brand className='ms-5' href="#">E-cart</Navbar.Brand></Link>
        
        <div className='me-5 gap-5 d-flex'>

          <Link to={'/wishlist'}><button className='btn btn-info'>wishlist <Badge bg="secondary">7</Badge></button></Link>

          <Link to={'/cart'}><button className='btn btn-danger'>cart <Badge bg="secondary">8</Badge></button></Link>
        </div>
      </Navbar>
    
    
    </>
  )
}

export default Header