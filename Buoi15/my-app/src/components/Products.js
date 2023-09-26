import logo from '../logo.svg';
import './Products.css';

function Products(props) {
    const products = props.product;
    return (
        <div className='col-4 product'>
            <img src={products.img} width={"80px"} height={"100px"} alt='productImage' />
            <h4>{products.name}</h4>
            <h5>{products.sale !==0 ? <div><span>{products.price}</span><span>{products.sale}</span></div> : <span>{products.price}</span>}</h5>
            <button className='btn btn-light'>Select option...</button>
        </div>
    );
}
export default Products;
