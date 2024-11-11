import { useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../state/AllProductslice';
import { Product } from "../interface/Interface";
import { AppDispatch, RootState } from "../../state/Store"; 
import { addtoCart } from "../../state/CartSlice";

export const Productlist = () => {
  const products = useSelector((state: RootState) => state.product.items); 

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart= (product: Product) => {

    dispatch(addtoCart(product));
  };

  return (
    <Container>  
      <Row>
        {products.map((product: Product) => (
          <Col key={product.id}>
            <Card style={{ width: '18rem', }}>
              <Card.Img style={{ height: "300px" }} variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title} $</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart( product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
