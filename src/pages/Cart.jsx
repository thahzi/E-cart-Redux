import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function Cart() {
  return (
    <>
    
    <Row className='p-3 mb-5 mt-5'>
      <Col sm={12} md={8}>
        <Table>
          <thead>
            <tr>
            <th>#</th>
            <th>product</th>
            <th>image</th>
            <th>price</th>
            <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>dior fadore</td>
              <td><img src="" alt="" /></td>
              <td>rs 80.00</td>
              <td><button className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>
          </tbody>
        </Table>
      </Col>

      <Col sm={12} md={4}>

      <div className="shadow border p-3">
      
          <h3>cart summary</h3>
          <p>total number of products : <span>3</span></p>
          <p>total price : <span>265.00</span></p>
        
        <div className="btn btn-info w-100 fs-5">cheack out</div>

      </div>

      </Col>
    </Row>

    <div style={{height:'50px',width:'100%',display:'flex',justifyContent:'center', alignItems:'center',flexDirection:'column'}}>

      <img src="https://www.adasglobal.com/img/empty-cart.png" alt="no image" width={"100%"}/>

    <Link to={'/'}><button className='  rounded-5 shadow bg-warning text-light fs-5 p-2'><FontAwesomeIcon icon={faArrowLeft} className='me-3'/>back to home</button></Link>
    
    </div>

    </>
  )
}

export default Cart