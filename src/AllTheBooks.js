import React from 'react';
import data from './books/fantasy.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function DrawAllTheBooks() {


    console.log(data);
    return(
      <div className="row">
       {data.map((el) => 
        <div class="col-2 mx-4" key={el.asin}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={el.img}/>
          <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
            EUR {el.price}
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
       </div>           
       )};
      </div>
    );
}

export default DrawAllTheBooks;

