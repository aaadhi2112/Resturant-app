import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Restreview({rv}) {
    console.log(rv);

    const [open, setOpen] = useState(false);

  return (
    <div>
        <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text"aria-expanded={open}>Reviews</Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {
            rv?.map((item)=>(
                <div>
                    <p><strong>Name : {item.name}</strong></p>
                    <p><strong>Date : </strong>{item.date}</p>
                    <p><strong>Rating : </strong>{item.rating}</p>
                    <p><strong>Comments : </strong>{item.comments}</p>
                </div>
            ))
          }
        </div>
      </Collapse>
    </div>
  )
}

export default Restreview