import React from 'react';
import styles from './Login.module.css'; // Importa o CSS Module
import FormField from "../FormField";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className={styles.body}>
        <div className={styles.formSignin}>
            <div className={`text-center mb-4 ${styles.fontColor}`}>
                <img className="mb-4" src={`${process.env.PUBLIC_URL}/images/markus/logoMarkusGray.png`} alt="" />
                <h1 className="h2 mb-3 font-weight-normal">Client Login</h1>
                <p>Log into where each line of code turns into insights and each interaction brings us closer to complete understanding.</p>
            </div>
            <form>
                <FormField
                    type="email"
                    id="inputEmail"
                    className={`form-control ${styles.inputcolor}`}
                    placeholder="Email address"
                    label="Email address"
                    required={true}
                    autoFocus={true}
                    groupClass={styles.formLabelGroup}
                />

                <FormField
                    type="password"
                    id="inputPassword"
                    className={`form-control ${styles.inputcolor}`}
                    placeholder="Password"
                    label="Password"
                    required={true}
                    groupClass={styles.formLabelGroup}
                />

                <p className={styles.left}><Link to="/forgotPassword">Forgot Password?</Link></p>

                <div className={`checkbox mb-3 ${styles.fontColor}`}>
                    <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-success btn-block" type="submit" style={{width:'390px'}}>Sign in</button>
                <button className="btn btn-lg btn-outline-success btn-block" type="reset" style={{width:'390px', marginTop:'15px'}}>Reset</button>
            </form>
            <p className={`text-center mt-4 ${styles.fontColor}`}> Don't have an account? <Link to="/joinUs">Sign Up</Link></p>
            <p className="mt-4 mb-3 text-muted text-center">&copy; 2022-2024 Markus, Inc</p>
        </div></div>
    )
}

export default Login;
