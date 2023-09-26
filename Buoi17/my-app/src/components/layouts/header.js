import { NavLink } from 'react-router-dom';
export default function Header(props) {
    return (
        < header className="container" >
            <div className="row ">
                <div className="col-4">
                    <a href="#" className="logo">
                        <img src="/logo192.png" width={"30px"} height={"30px"} />
                    </a>
                </div>
                <div className="col">
                    <ul className="list-group list-group-horizontal float-end">
                        <li className="list-group-item border border-0">
                            <NavLink to={"/login"} className="nav-link" aria-current="page" >Login</NavLink>
                        </li>
                        <li className="list-group-item border border-0">
                            <NavLink to={"/sign-up"} className="nav-link" aria-current="page" >Sign up</NavLink>
                        </li>
                        <li className="list-group-item border border-0">
                            <a className="text-black text-decoration-none" href="#">Favourites</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header >
    );
}