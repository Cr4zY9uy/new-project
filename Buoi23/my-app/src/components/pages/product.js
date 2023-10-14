import { useParams } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import api from "../../api";
// import Context from "../../context/context";
// import { useContext } from "react";
// import ACTION from "../../context/action";
import CART_ACTION from "../../cart/cartAction";
import FavouriteExisted from "./favouriteExistedModal";
import "./loading.css"
import { connect } from "react-redux";
import FAVOURITE_ACTION from "../../favourite/favouriteAction";
import { detail_product } from "../../services/product.service";
function Product(props) {
    const { slug } = useParams();
    const [product, setProducts] = useState({});
    // const [cart,setCart]=useState(0);
    // const { state, dispatch } = useContext(Context);
    const [modalShow, setModalShow] = useState(false);
    const loadProduct = async () => {
        // api.get(url)
        //     .then(data => {
        //         setProducts(data.data.products)
        //     })
        //     .catch(error => console.error(error));
        try {
            const rs = await detail_product(slug);
            setProducts(rs.products)
        } catch (e) {
            console.error(e);
            throw new Error("Some thing's wrong")
        }
    }
    const addToCart = () => {
        const cart = [...props.state[0].cart];  // Create a shallow copy of the cart

        // Check if the product is already in the cart
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === product.id);

        if (existingItemIndex !== -1) {
            // If the product is already in the cart, update its quantity
            cart[existingItemIndex].quantity += 1;
        } else {
            // If the product is not in the cart, add it with quantity 1
            cart.push({ ...product, quantity: 1 });
        }

        props.dispatch(cart);
        // setTimeout(() => {

        //     props.hideLoading()
        // }, 1500);
    };



    const addToFavourite = () => {
        const favourite = [...props.state[1].favourite];  // Create a shallow copy of the cart

        // Check if the product is already in the cart
        const existingItemIndex = favourite.findIndex(favouriteItem => favouriteItem.id === product.id);

        if (existingItemIndex !== -1) {
            // If the product is already in the cart, update its quantity
            setModalShow(true)
        } else {
            // If the product is not in the cart, add it with quantity 1
            favourite.push(product);
        }
        props.addToFavourite(favourite);
        // Log the updated cart and hide loading after 2 seconds

    };

    useEffect(() => {
        loadProduct();
        console.log(props)
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
                    <Button variant="success" onClick={addToCart}>Add to cart</Button>
                    <Button variant="primary" onClick={addToFavourite}>Add to favourite</Button>
                    <div id="loading" style={{ display: "none" }}>
                    </div>
                    <FavouriteExisted
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Col>
            </Row>

        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    return {
        state: [state.cart_reducer, state.favourite_reducer]
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (cart) => {
            dispatch({ type: CART_ACTION.UPDATE_CART, payload: cart })
        },
        // hideLoading: () => {
        //     dispatch({ type: CART_ACTION.HIDE_LOADING })
        // },
        addToFavourite: (favourite) => {
            dispatch({ type: FAVOURITE_ACTION.UPDATE_FAVOURITE, payload: favourite })
        }


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);