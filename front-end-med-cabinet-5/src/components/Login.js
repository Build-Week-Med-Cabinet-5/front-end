import React from "react";
import {
    Card, Button
} from 'reactstrap';

import axiosWithAuth from "../utils/axiosWithAuth";
import Input from "reactstrap/es/Input";

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/login", this.state.credentials)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/protected");
                console.log(res);
            })
            .catch(err =>
                console.error("mjm: Login.js: login: err.message: ", err.message)
            );
    };

    render() {
        return (
            <Card>
                <form onSubmit={this.login}>
                    <Input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="Username"
                    />
                    <Input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="Password"
                    />
                    <Button>Log in</Button>
                </form>
            </Card>
        );
    }
}

export default Login;