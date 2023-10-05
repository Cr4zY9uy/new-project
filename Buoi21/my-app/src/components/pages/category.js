import { Route, useParams } from "react-router-dom";
import { ProductGrid } from "../layouts/product-grid";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import api from "../../api";
function Category() {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const loadProduct = async () => {
        // api.get(url)
        //     .then(data => {
        //         setProducts(data.data.products)
        //     })
        //     .catch(error => console.error(error));
        try {
            const url = `products/category/${slug}`;
            const rs = await api.get(url);
            setProducts(rs.data.products)
        } catch (e) {
            console.error(e);
            throw new Error("Some thing's wrong")
        }
    }

    useEffect(() => {
        loadProduct();
    }, [slug])
    return (

        <div className="container">
            <h1>{slug}</h1>
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

export default Category;