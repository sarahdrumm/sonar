import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

import './App.css';
import './Login.css';
import './Map.css';

class Login extends React.Component {

    constructor(props: any, context: any) {
        super(props, context);

        this.changeHandler = this.changeHandler.bind(this);

        this.state = {
            value: ''
        };
    }

    changeHandler(e) {
        this.setState({ value: e.target.value });
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 0) return 'success';
        return null;
    }

    public render() {
        return (
            <div className="container centerL all-text">
                <div className="login-text">
                    Welcome to SONAR
                </div>
                <form>
                    <FormGroup
                        validationState={this.getValidationState()}
                    >
                            <ControlLabel>Email address</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="Enter email address"
                                onChange={this.changeHandler}
                            />
                        <FormControl.Feedback />
                    </FormGroup>
                </form>
                <Link to="/home">
                    <button type="submit" className="btn btn-info link-text">
                        Login
                        </button>
                </Link>
            </div>
        );
    }
}

export default Login;
