import Context from "../../context/context";
import { useContext } from "react";
function Cart() {
    const { state, dispatch } = useContext(Context);
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

                            {state.cart.map((item, index) => {
                                return <>
                                    <tr>
                                        <td>X</td>
                                        <td><img src={item.thumbnail} width={"120px"} height={"180px"} /></td>
                                        <td>{item.title}</td>
                                        <td>{item.price}$</td>
                                        <td>{1}</td>
                                        <td>2000$</td>
                                    </tr>
                                </>
                            })}

                        </tbody>
                    </table>
                </div>
                <div className="col-4 invoice">
                    <div className="row">

                        <h3>Cart totals</h3>
                        <hr />
                        <div className="subTotal d-flex justify-content-between">
                            <h5>Subtotal</h5><span id="subtotal">6000$</span></div>
                        <hr />
                        <div className="shipping d-flex justify-content-between">
                            <h5>Shipping</h5><span id="shipping">100$</span></div>
                        <hr />
                        <div className="total d-flex justify-content-between">
                            <h6>Total</h6><span id="total" className="flex">6100$</span></div>
                        <button type="button" className="btn btn-dark mt-5">Proceed to checkout</button>
                    </div>
                </div>
                <div>
                    <button className="btn btn-danger">Delete all</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;