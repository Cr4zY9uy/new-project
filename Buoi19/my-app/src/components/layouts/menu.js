import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import { useEffect, useState } from 'react';
export default function Menu(props) {
    const [categories, setCategory] = useState([]);
    const loadCategory = () => {
        const url = "https://dummyjson.com/products?limit=12";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCategory(data.products)
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        loadCategory();
    }, []);
    const uniqueCategories = new Set();

    categories.forEach((item) => {
        uniqueCategories.add(item.category);
    });


    return (

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <LinkContainer to="/">
                            <Nav.Link href="#">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/product">
                            <Nav.Link href="#">Products</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Category" id="navbarScrollingDropdown">{
                            Array.from(uniqueCategories).map((item, index) => {
                                return <NavDropdown.Item key={index}>{item.category}</NavDropdown.Item>
                            })
                        }
                        </NavDropdown>
                        <LinkContainer to="/cart">
                            <Nav.Link href="#">
                                Cart
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}