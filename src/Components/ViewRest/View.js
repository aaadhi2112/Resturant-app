import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'        //import
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from '../RestOp/Restop';
import Restreview from '../RestReview/Restreview';


function View() {

    //05...state creation to hold particular resturant details
    const [RestDetails,setRestDetails]=useState([])

    //01...creating variable pathParameter to get particular id from the resturant
    // const pathParameter = useParams()
    // console.log(pathParameter.id);                         // 1 , 2 ...etc

    //02...destructing the above code....01st
    const {id} = useParams()
    console.log(id);                                          //  1 , 2 ...etc

    //03...api call to fetch particular resturant details
    const fetchData=async()=>{
        const {data} = await axios.get(`http://localhost:3001/resturants/${id}`)
        console.log(data);
        setRestDetails(data)
    }
    console.log(RestDetails);    //resturants data

    //04...fetchData function call
    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
        <Row>
            <Col sm={12} md={6}>
            {/* image */}
            <Image className='rounded border m-5' src={RestDetails.photograph} fluid />
            </Col>

            <Col>
            {/* details */}
            <h2 className='text-center mt-5'><strong>{RestDetails.name}</strong></h2>

            <div className='container w-75 mt-3'> 
            <ListGroup className='shadow'>
                <ListGroup.Item>Neighborhood : <strong>{RestDetails.neighborhood}</strong> </ListGroup.Item>
                <ListGroup.Item>Cuisine type : <strong>{RestDetails.cuisine_type}</strong> </ListGroup.Item>
                <ListGroup.Item>Address : <strong>{RestDetails.address}</strong> </ListGroup.Item>
                <ListGroup.Item><Restop op={RestDetails.operating_hours}/></ListGroup.Item>
                <ListGroup.Item><Restreview rv={RestDetails.reviews}/></ListGroup.Item>
            </ListGroup>
            </div>

            </Col>
        </Row>
    </>
  )
}

export default View