import { Card, Button, Col } from "react-bootstrap";
import "./product-grid.css"
import { NavLink } from 'react-router-dom';
import { Route } from "react-router-dom";
export function ProductGrid(props) {
    const products = props.product;
    return (
        <Col xs={3} className="mt-2 mb-2 text-center h-50">
            <Card>
                <Card.Img variant="top" src={products.thumbnail} alt="product-img" height={"250px"} loading="lazy" />
                <Card.Title>{products.title}</Card.Title>
                <Card.Body>
                    <Card.Text>
                        {products.description}
                    </Card.Text>
                </Card.Body>
                <Button variant="outline-primary"><NavLink to={`/products/${products.id}`}>Buy</NavLink></Button>
            </Card>
        </Col>
    );
}