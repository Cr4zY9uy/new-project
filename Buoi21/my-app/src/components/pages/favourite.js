import Context from "../../context/context";
import { useContext } from "react";
import { Button, Row } from "react-bootstrap";
import ACTION from "../../context/action";
import { Card, Col } from "react-bootstrap"
import { NavLink } from "react-router-dom";
function Favourite() {
    const { state, dispatch } = useContext(Context);
    const favouriteList = state.favourite;
    console.log(favouriteList);
    const deleteFavourite = (index) => {
        const deleteList = [...favouriteList];
        deleteList.splice(index, 1);
        dispatch({ type: ACTION.UPDATE_FAVOURITE, payload: deleteList });
    }
    const deleteAll = () => dispatch({ type: ACTION.UPDATE_FAVOURITE, payload: [] })
    return (
        <>
            <h2>Favourite</h2>
            <Button variant="outline-danger" onClick={deleteAll}>Delele all</Button>
            <div className="container">
                <Row className="h-30">
                    {
                        favouriteList.map((item, index) => {
                            return <><Col xs={3} className="mt-2 mb-2 text-center h-50">
                                <Card>
                                    <Card.Img variant="top" src={item.thumbnail} alt="product-img" height={"250px"} loading="lazy" />
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Button variant="outline-primary"><NavLink to={`/products/${item.id}`}>Buy</NavLink></Button>
                                    <Button variant="outline-danger" onClick={() => deleteFavourite(index)}>Delete</Button>
                                </Card>
                            </Col>

                            </>
                        })
                    }
                </Row>
            </div>
        </>
    );
}
export default Favourite;