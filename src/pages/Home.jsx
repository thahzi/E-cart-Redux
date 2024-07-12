import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <>
    <Row className='w-100 p-3 my-5'> 
      <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center p-3'>
      <Card style={{ width: '100%' }} className='border shadow rounded'>
      <Card.Img variant="top" src="https://rukminim2.flixcart.com/image/850/1000/j6chuvk0/puzzle/u/y/h/1-infinity-cube-fidgets-for-stress-relief-toys-for-adult-and-original-imaewu5vx7gruhgr.jpeg?q=90&crop=false" className='w-100' style={{height:"200px"}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button variant="danger">Go somewhere</Button>
          <Button variant="primary">Go somewhere</Button>
        </div>
      </Card.Body>
      </Card>      
      </Col>
    </Row>
    </>
  )
}

export default Home