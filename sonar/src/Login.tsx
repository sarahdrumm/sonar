import * as React from 'react';
import {  Link } from 'react-router-dom';

import './App.css';
import './Login.css';
import './Map.css';

class Login extends React.Component {
    public render() {
        return (
            <div className="container centerL all-text">
                <form>
                    <div className="login-text">
                            Welcome to SONAR
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <Link to="/home">
                        <button type="submit" className="btn btn-info link-text">
                            Login
                        </button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default Login;
