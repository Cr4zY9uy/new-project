import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import { useEffect, useState } from 'react';
import './menu.css'
import api from '../../api';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../../context/context';
import ACTION from '../../context/action';
import { InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function Menu(props) {
    const [categories, setCategory] = useState([]);
    const { state, dispatch } = useContext(Context);
    const [q, setQ] = useState("");
    const loadCategory = async () => {
        const url = "products/categories";
        // api.get(url)
        //     .then(data => {
        //         setCategory(data.data.products)
        //     })
        //     .catch(error => console.error(error));
        try {
            const rs = await api.get(url);
            setCategory(rs.data);
        } catch (e) { console.error(e) };
    }

    useEffect(() => {
        loadCategory();
    }, []);
    // const uniqueCategories = new Set();

    // categories.forEach((item) => {
    //     uniqueCategories.add(item.category);
    // });
    const history = useNavigate();


    const search = () => {
        dispatch({ type: ACTION.UPDATE_KEYWORD, payload: q });
    }
    const stopSubmit = (e) => {
        e.preventDefault();
        search();
        history('/search');
    }
    useEffect(() => { console.log(q) }, [q]);
    return (

        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
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
                            categories.map((item, index) => {
                                return <NavDropdown.Item key={index}><Nav.Link as={NavLink} to={`/category/${item}`} className={"text-decoration-none"}>{item}</Nav.Link></NavDropdown.Item>
                            })
                        }
                        </NavDropdown>
                        <LinkContainer to="/cart">
                            <Nav.Link href="#">
                                Cart{state.cart.length}
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>

                    <Form className="d-flex" onSubmit={stopSubmit} >
                        <InputGroup className="mb-3">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={q}
                                onChange={(e) => { setQ(e.target.value) }}
                            />
                            <InputGroup.Text><i class="bi bi-search"></i></InputGroup.Text>
                        </InputGroup>
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
}