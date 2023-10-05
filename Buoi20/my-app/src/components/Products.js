import './Products.css';

function Products(props) {
    const { product, productID, onDelete, onEdit } = props;
    return (
        <tr className='col-4 product'>
            <td>{productID + 1}</td>
            <td>{product.name}</td>
            <td>{product.email}</td>
            <td><button className='btn btn-primary' type='button' onClick={onEdit}><i class="bi bi-file-text">Edit</i></button><button className='btn btn-danger' onClick={onDelete}><i class="bi bi-trash3-fill">Delete</i></button></td>
        </tr>
    );
}
export default Products;
