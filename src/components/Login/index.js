import FormField from "../FormField";
import "./Login.css"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="body">
        <div className="form-signin">
            <div className="text-center mb-4 font-color">
                <img className="mb-4" src={`${process.env.PUBLIC_URL}/images/markus/logoMarkusGray.png`} alt="" />
                <h1 className="h2 mb-3 font-weight-normal">Client Login</h1>
                <p>Log into where each line of code turns into insights and each interaction brings us closer to complete understanding.</p>
            </div>
            <form>
                <FormField
                    type="email"
                    id="inputEmail"
                    className="form-control inputcolor"
                    placeholder="Email address"
                    label="Email address"
                    required={true}
                    autoFocus={true}
                    groupClass="form-label-group"
                />

                <FormField
                    type="password"
                    id="inputPassword"
                    className="form-control inputcolor"
                    placeholder="Password"
                    label="Password"
                    required={true}
                    groupClass="form-label-group"
                />

                <p className="left"><Link to="/forgotPassword">Forgot Password?</Link></p>

                <div className="checkbox mb-3 font-color">
                    <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-success btn-block" type="submit" style={{width:'390px'}}>Sign in</button>
                <button className="btn btn-lg btn-outline-success btn-block" type="reset" style={{width:'390px', marginTop:'15px'}}>Reset</button>
            </form>
            <p className="font-color text-center mt-4"> Don't have an account? <Link to="/joinUs">Sign Up</Link></p>
            <p className="mt-4 mb-3 text-muted text-center">&copy; 2022-2024 Markus, Inc</p>
        </div></div>
    )
}

export default Login