import { Card, Button, Col } from "react-bootstrap";
import "./product-grid.css"
import { NavLink } from 'react-router-dom';


export function ProductGrid(props) {
    const products = props.product;

    return (
        <>
            <Col xs={3} className="mt-2 mb-2 text-center h-50">
                <NavLink to={`/products/${products.id}`} className={"text-decoration-none"}><Card>
                    <Card.Img variant="top" src={products.thumbnail} alt="product-img" height={"300px"} loading="lazy" />
                    <Card.Title className="text-capitalize" style={{ display: "block", height: "50px" }}>{products.title}</Card.Title>
                    <Card.Body>
                        <Card.Text>
                            {products.description.slice(0, 30) + (products.description > 30 ? "" : "...")}
                        </Card.Text>
                    </Card.Body>
                </Card></NavLink>
            </Col>

        </>
    );
}