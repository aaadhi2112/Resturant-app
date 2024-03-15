import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Restcard from '../RestCard/Restcard';


function Allrest() {

  //03...state creation - state to hold the array items
  const [allItems,setAllItems]=useState([])

  //01...function creation
  const fetchData =async()=>{
    const response = await axios.get('http://localhost:3001/resturants')
    console.log(response.data);
    setAllItems(response.data)     //assigning array to allItems
  }
  console.log(allItems);           //array of data

  //02...hook for function calling
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>

    <Row>
      {
        allItems.map((item)=>(
          <Col sm={12} md={6} lg={4} xl={3}>
          <Restcard resturants={item} />
          </Col>
        ))  
      }
    </Row>

    </>
  )
}

export default Allrest