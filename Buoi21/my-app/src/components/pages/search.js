import { Route, useParams } from "react-router-dom";
import { ProductGrid } from "../layouts/product-grid";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import api from "../../api";
import { useContext } from "react";
import Context from "../../context/context";
function Search(props) {
    const { state, dispatch } = useContext(Context);
    const [products, setProducts] = useState([]);
    const loadProduct = async () => {
        // api.get(url)
        //     .then(data => {
        //         setProducts(data.data.products)
        //     })
        //     .catch(error => console.error(error));
        try {
            const url = `/products/search?q=${state.keyword}`;
            const rs = await api.get(url);
            setProducts(rs.data.products)
        } catch (e) {
            console.error(e);
            throw new Error("Some thing's wrong")
        }
    }

    useEffect(() => {
        loadProduct();
    }, [state.keyword])
    return (

        <div className="container">
            <h1>{state.keyword}</h1>
            <Row className="h-30">
                {
                    products.map((item, index) => {
                        return <ProductGrid key={index} product={item} />
                    })
                }
            </Row>

        </div>
    );
}
export default Search;