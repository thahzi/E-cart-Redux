import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'




function Footer() {
  return (
    <>
      <div className=' bg-light shadow '>

        <Row className='container me-2 ms-2 text-dark pt-5 pb-5' >
          <Col sm={12} md={3}>
  
          <h3>e cart</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit quod illum maiores adipisci sapiente sequi molestiae earum, fuga nisi odit, voluptas ipsa vel doloremque aut laudantium placeat, officiis at.</p>
  
          </Col>
          <Col sm={12} md={3}>
          <h3>links</h3>
          <p>home page</p>
          <p>wishlist</p>
          <p>cart</p>
          </Col>

          <Col sm={12} md={3}>
          <h3>guides</h3>
          <p>react</p>
          <p>react bootstrap</p>
          <p>bootswatch</p>
          </Col>

          <Col sm={12} md={3}>
          <h3>contact us</h3>
          <div className='d-flex gap-2' style={{height:'40px'}}>
            <input type="text"  className='rounded ' / >
            <button className='btn btn-warning text-center'>subscrib</button>
          </div>

          <div className='d-flex fs-3 gap-5 mt-5 '>
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faFacebook} />
          </div>
          </Col>
        </Row>
      </div>
    
    </>
  )
}

export default Footer