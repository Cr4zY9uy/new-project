import { Row } from "react-bootstrap";
import { ProductGrid } from "../layouts/product-grid";
import { Pagination } from "react-bootstrap";
import ControlledCarousel from "../Slider.js";
import { useEffect, useState } from "react";
import api from '../../api';
function Home() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const LIMIT = 16;
    const SKIP = (page - 1) * LIMIT;
    const url = `products?limit=${LIMIT}&skip=${SKIP}`;
    const loadProduct = async () => {
        // api.get(url)
        //     .then(data => {
        //         setProducts(data.data.products)
        //     })
        //     .catch(error => console.error(error));

        try {

            const rs = await api.get(url);
            setProducts(rs.data.products);
            setPageCount(Math.ceil(rs.data.total / LIMIT));

        } catch (e) {
            console.error(e);
            throw new Error("Some thing's wrong")
        }
    }
    useEffect(() => {
        loadProduct();
    }, [page])
    const handlNext = () => {
        if (page === pageCount) {
            return;
        }
        setPage(page + 1);
    }

    const handlPrev = () => {
        if (page === 1) {
            return;
        }
        setPage(page - 1);
    }
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
                <div className="d-flex justify-content-end">
                    <Pagination>
                        <Pagination.Prev onClick={handlPrev} disabled={page === 1}></Pagination.Prev>
                        {
                            Array.from(Array(pageCount).keys()).map((element, index) => {
                                return (<>
                                    <Pagination.Item active={page === index + 1 ? true : false} onClick={() => { setPage(index + 1) }}>{index + 1}</Pagination.Item>
                                </>);
                            })
                        }
                        <Pagination.Next onClick={handlNext} disabled={page === pageCount}></Pagination.Next>
                    </Pagination>
                </div>
            </div>
        </>
    );
}

export default Home;