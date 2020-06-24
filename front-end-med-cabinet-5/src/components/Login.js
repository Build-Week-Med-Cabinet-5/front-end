import React from "react";
import {
    Card, Button
} from 'reactstrap';
import { withRouter } from 'react-router-dom';


import axiosWithAuth from "../utils/axiosWithAuth";
import Input from "reactstrap/es/Input";

class Login extends React.Component {


    state = {
        credentials: {
            email: "",
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
            .post("/auth/login", this.state.credentials)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/profile");
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
                        name="email"
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                        placeholder="Email"
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

export default withRouter(Login);