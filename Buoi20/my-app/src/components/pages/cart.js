import { Button } from "react-bootstrap";
import Context from "../../context/context";
import { useContext } from "react";
import ACTION from "../../context/action";
function Cart() {
    const { state, dispatch } = useContext(Context);
    const shippingCost = 100;
    const cartItems = state.cart;
    const sumMoney = cartItems.reduce((initValue, item) => {
        initValue += item.price * item.quantity;
        return initValue;
    }, 0)
    const deleteItem = (index) => {
        const deletedCart = [...cartItems];
        deletedCart.splice(index, 1);
        dispatch({ type: ACTION.UPDATE_CART, payload: deletedCart })
    }
    const deleteAll = () => {
        dispatch({ type: ACTION.UPDATE_CART, payload: [] })
    }
    return (
        <div className="container mt-5">
            <div className="row  d-flex justify-content-between" id="shopping">
                <div className="col-7 product">
                    <h3 className="title">Cart</h3>
                    <table id="shopping-products-table" className="table text-center align-middle">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody id="productShop">

                            {
                                cartItems.map((item, index) => (
                                    <tr key={index}>
                                        <td><Button onClick={() => { deleteItem(index) }}>X</Button></td>
                                        <td><img src={item.thumbnail} width={"120px"} height={"180px"} alt="Product thumbnail" /></td>
                                        <td>{item.title}</td>
                                        <td>{item.price}$</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price * item.quantity}$</td>
                                    </tr>))}

                        </tbody>
                    </table>
                </div>
                <div className="col-4 invoice">


                    <h3>Cart totals</h3>
                    <hr />
                    <div className="subTotal d-flex justify-content-between">
                    </div> <h5>Subtotal</h5><br />
                    {cartItems.map((item, index) => (
                        <div style={{ display: "flex", justifyContent: "space-between" }}><span>{item.title}</span><span>{item.price * item.quantity}$</span></div>
                    ))}
                    <div style={{ textAlign: "right", paddingTop: "10px" }}>{sumMoney}$
                    </div>
                    <hr />
                    <div className="shipping d-flex justify-content-between">
                        <h5>Shipping</h5><span id="shipping">{sumMoney ? shippingCost : ""}$</span></div>
                    <hr />
                    <div className="total d-flex justify-content-between align-items-center">
                        <h3>Total</h3><span id="total" className="flex">{sumMoney ? sumMoney + shippingCost : ""}$</span></div>
                    <button type="button" className="btn btn-dark mt-5">Proceed to checkout</button>
                </div>
            </div>
            <div>
                <button className="btn btn-danger" onClick={() => { deleteAll() }}>Delete all</button>
            </div>

        </div>
    );
}

export default Cart;