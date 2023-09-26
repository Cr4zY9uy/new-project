import { Row } from "react-bootstrap";
import { ProductGrid } from "../layouts/product-grid";
import ControlledCarousel from "../Slider.js";
import { useEffect, useState } from "react";
function Home() {
    const [products, setProducts] = useState([]);
    const loadProduct = () => {
        const url = "https://dummyjson.com/products?limit=12";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProducts(data.products)
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {

    }, )
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