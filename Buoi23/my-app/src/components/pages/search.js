import { ProductGrid } from "../layouts/product-grid";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import api from "../../api";
// import { useContext } from "react";
// import Context from "../../context/context";
import { connect } from "react-redux";
function Search(props) {
    // const { state, dispatch } = useContext(Context);
    const [products, setProducts] = useState([]);
    const loadProduct = async () => {
        // api.get(url)
        //     .then(data => {
        //         setProducts(data.data.products)
        //     })
        //     .catch(error => console.error(error));
        try {
            const url = `/products/search?q=${props.state.keyword}`;
            const rs = await api.get(url);
            setProducts(rs.data.products)
        } catch (e) {
            console.error(e);
            throw new Error("Some thing's wrong")
        }
    }

    useEffect(() => {
        loadProduct();
    }, [props.state.keyword])
    return (

        <div className="container">
            <h1>{props.state.keyword}</h1>
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
const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    }
}
export default connect(mapStateToProps, null)(Search)