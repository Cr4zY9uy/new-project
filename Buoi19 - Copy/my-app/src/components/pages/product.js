import { useParams } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import api from "../../api";
import Context from "../../context/context";
import { useContext } from "react";
import reducer from "../../context/reducer";
import ACTION from "../../context/action";
function Product() {
    const { slug } = useParams();
    const [product, setProducts] = useState({});
    // const [cart,setCart]=useState(0);
    const { state, dispatch } = useContext(Context);
    const loadProduct = async () => {
        // api.get(url)
        //     .then(data => {
        //         setProducts(data.data.products)
        //     })
        //     .catch(error => console.error(error));
        try {
            const url = `products/${slug}`;
            const rs = await api.get(url);
            setProducts(rs.data)
        } catch (e) {
            console.error(e);
            throw new Error("Some thing's wrong")
        }
    }
    const addToCart = () => {
        const cart = state.cart;
        cart.push(product);
        dispatch({ type: ACTION.UPDATE_CART, payload: cart })
    }

    const addToFavourite = () => {
        const favourite = state.favourite;
        favourite.push(favourite);
        dispatch({ type: ACTION.UPDATE_FAVOURITE, payload: favourite });
    }

    useEffect(() => {
        loadProduct();
    }, [])
    return (

        <div className="container">
            <Row>
                <Col className="d-flex justify-content-center">
                    <Image src={product.thumbnail} height={"auto"} width={"auto"} loading="lazy"></Image>
                </Col>
                <Col>
                    <h3>Product detail</h3>
                    <h1>{product.title}</h1>
                    <h4>Description: {product.description}</h4>
                    <h4>Rating: {product.rating}</h4>
                    <h4>Price: {product.price}</h4>
                    <Button variant="success" onClick={addToCart}><NavLink to="/cart" className={"text-decoration-none"}>Add to cart</NavLink></Button>
                    <Button variant="primary" onClick={addToFavourite}>Add to favourite</Button>
                </Col>
            </Row>

        </div>
    );
}

export default Product;