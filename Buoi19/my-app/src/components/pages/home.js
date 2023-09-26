import { Row } from "react-bootstrap";
import { ProductGrid } from "../layouts/product-grid";
import ControlledCarousel from "../Slider.js";
import { useEffect, useState } from "react";
import api from '../../api';
function Home() {
    const [products, setProducts] = useState([]);
    const loadProduct = async () => {
        const url = "products?limit=12";
        // api.get(url)
        //     .then(data => {
        //         setProducts(data.data.products)
        //     })
        //     .catch(error => console.error(error));
        try {
            const rs = await api.get(url);
            setProducts(rs.data.products)
        } catch (e) {
            console.error(e);
            throw new Error("Some thing's wrong")
        }
    }
    useEffect(() => {

    },)
    useEffect(() => {
        loadProduct();
    }, [])
    return (
        <>
            <ControlledCarousel />
            <div className="container">
                <Row className="h-30">
                    {
                        products.map((item, index) => {
                            return <ProductGrid key={index} product={item} />
                        })
                    }
                </Row>

            </div>
        </>
    );
}

export default Home;