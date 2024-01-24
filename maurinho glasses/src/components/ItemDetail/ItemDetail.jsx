import React from 'react'
import "./ItemDetail.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <Container>
    <Row className='itemDetail'>
      <Col>
      <img src={img} alt={nombre} />
      </Col>
      <Col className='itemDetail2'>
        <h2>{nombre} </h2>
        <h3>${precio} </h3>
        <h4>Descripción</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea eum in consequatur nesciunt dolores nam, fugiat eligendi ipsa esse quod voluptatem accusamus facere natus! Numquam expedita ut repellendus inventore!</p>
      </Col>
    </Row>
    </Container>
  )
}

export default ItemDetail