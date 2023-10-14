import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
function Account(props) {
    const toHome = useNavigate();
    const currentUser = props.state.currentUser;
    const { username, email } = currentUser;
    return (
        (typeof currentUser === "object" && Object.keys(currentUser).length) ? <div>
            <h1>Username:</h1>
            <h3>{username}</h3>
            <h1>Email:</h1>
            <h3>{email}</h3>
        </div>
            : toHome('/')
    );
}
const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    }
}
export default connect(mapStateToProps, null)(Account);