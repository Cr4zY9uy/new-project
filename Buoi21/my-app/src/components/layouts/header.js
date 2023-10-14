// import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ACTION from '../../redux/action';
// import Context from '../../context/context';
import "./header.css"
function Header(props) {
    // const { state, setState } = useContext(Context);
    const logOut = () => {
        props.logOut();
    }
    return (
        < header className="container" >
            <div className="row ">
                <div className="col-4">
                    <img src="/logo192.png" width={"30px"} height={"30px"} alt='LogIimage' />
                </div>
                <div className="col">
                    <ul className="list-group list-group-horizontal float-end">
                        {(typeof props.state.currentUser === "object" && Object.keys(props.state.currentUser).length
                            === 0) ? <>
                            <li className="list-group-item border border-0">
                                <NavLink to={"/login"} className="nav-link" aria-current="page" >Login</NavLink>
                            </li>
                            <li className="list-group-item border border-0">
                                <NavLink to={"/sign-up"} className="nav-link" aria-current="page" >Sign up</NavLink>
                            </li>
                        </> : <li className="list-group-item border border-0 menu1">
                            {props.state.currentUser.username}
                            <ul className="list-group list-group-horizontal float-end menu2">
                                <li>
                                    <NavLink to={"/account"} className="nav-link" aria-current="page">Account</NavLink>
                                </li>
                                <li>
                                    <NavLink as {...Button} onClick={logOut} className="nav-link" aria-current="page">Log out</NavLink>
                                </li>
                            </ul>
                        </li>
                        }
                        <li className="list-group-item border border-0">
                            <NavLink to={"/favourite"} className="nav-link" aria-current="page" >Favourites{props.state?.favourite?.length}</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header >
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch({ type: ACTION.ADD_CURRENT_USER, payload: {} })
        }

    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);