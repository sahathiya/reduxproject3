import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchdata } from '../features/mealSlice';
import { Container, Row, Col, Card } from 'react-bootstrap';


function Chickmeals() {
  const chicken = useSelector(state => state.chickmeals.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Chicken Meals</h1>
      <Row>
        {chicken &&
          chicken.map((item) => (
            <Col key={item.idMeal} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={item.strMealThumb} alt={item.strMeal} />
                <Card.Body>
                  <Card.Title>{item.strMeal}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Chickmeals;
