import './login.css'
import { NavLink } from 'react-router-dom'
import SingUp from './signup';
import Button from 'react-bootstrap/Button';
function Login() {
    return (
        <div className="container w-25">
            <form>
                <h2 className='mb-4 pt-3'>LOG IN</h2>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div className='d-flex justify-content-center '>
                    <Button type="button" className="btn btn-success w-100">Login</Button></div>
            </form>
            <div className='icon-group d-flex align-items-center flex-column'>
                <div className='tag mt-4'><hr /></div>
                <div className='or'>OR</div>
                <div className='social d-flex justify-content-evenly w-50 mt-1'>
                    <div id="google" className='d-flex justify-content-center align-items-center'><i class="bi bi-google"></i></div>
                    <div id="facebook" className='d-flex justify-content-center align-items-center'><i class="bi bi-facebook"></i></div>
                    <div id="linkedin" className='d-flex justify-content-center align-items-center'><i class="bi bi-linkedin"></i></div>
                </div>
            </div>
            <div className='sign-up d-flex justify-content-center mt-4 pb-5'>
                Have no account?<NavLink to='/sign-up' element={<SingUp />} className={'text-body'}>Sign up</NavLink>
            </div>
        </div>
    );
}

export default Login;