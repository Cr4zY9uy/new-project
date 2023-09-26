import { useState } from "react";
import Products from "./Products";

function Category() {
    const [products, setProducts] = useState([]);
    const [isUpdate, setUpdate] = useState(false);
    const [pr, setPr] = useState({
        name: "",
        email: ""
    });
    const [editIndex, setEditIndex] = useState();
    const handleInput = (e) => {
        const v = e.target.value;
        const k = e.target.name;
        // property[i] = v;
        // setProperty(property);

        setPr({ ...pr, [k]: v });
    }
    const submitProduct = (e) => {
        setProducts(products => [...products, pr]);
        e.preventDefault();
    }
    const deleteItem = (productID) => {
        const updatedProducts = products.filter((product, index) => index !== productID);
        setProducts(updatedProducts);
    };
    const handleEdit = (index) => {
        setPr(products[index]);
        console.log(products[index]);
        setUpdate(true);
        setEditIndex(index);
    }
    const handleUpdate = () => {
        products.splice(editIndex, 1, pr);
        console.log(products);
        setProducts(products);
        setUpdate(false);
    }
    return (
        <div className="container">
            <h1>Contacts</h1>
            <div className='row'>
                <div className="col-6">
                    <form action="#" method="POST" >
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input onChange={handleInput} className="form-control" type="text" name="name" value={pr.name}></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input onChange={handleInput} className="form-control" type="text" name="email" value={pr.email}></input>
                        </div>
                        <div className="mb-3">
                            {!isUpdate ? <button type="button" className="btn btn-primary" onClick={submitProduct}><i class="bi bi-plus"></i>Add Contact</button> :
                                <button type="button" className="btn btn-primary" onClick={handleUpdate}><i class="bi bi-plus"></i>Update</button>
                            }
                        </div>
                    </form>
                </div>
                <table className="col-9 table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item, index) => {
                                return (<Products key={index} product={item} productID={index} onDelete={() => deleteItem(index)} onEdit={() => handleEdit(index)} />
                                )
                            })}</tbody>
                </table>
            </div>
        </div>
    );
}
export default Category;
