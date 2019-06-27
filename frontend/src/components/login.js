import React from 'react';
import { Button, Form, FormGroup, Tabs, Tab } from 'react-bootstrap';
import './Layouts/Login.css';
import { authLogin, authSignup } from '../store/actions/authAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.userLogin = this.userLogin.bind(this);
        this.fieldUpdate = this.fieldUpdate.bind(this);
        this.signup = this.signup.bind(this);
        this.state = { username: "", password: "", password1: "", password2: "", email: "" }
        // console.log("constructor, auth  =", this.props.auth);
    }

    userLogin() {
        const username = this.state.username
        const password = this.state.password
        // console.log("login=", username, password)
        this.props.authLogin(username, password)
    }

    fieldUpdate(e) {
        const fname = e.target.name
        const fval = e.target.value
        //console.log("fieldUpdate=", fname, fval);
        this.setState({
            ...this.state,
            [fname]: fval
        });
    }

    signup() {
        const email = this.state.email
        const username = this.state.username
        const password1 = this.state.password1
        const password2 = this.state.password2
        this.props.authSignup(username, email, password1, password2);
    }

    render() {
        if (this.props.auth.token !== null) {
            return <Redirect to='/' />
        }
        else {


            return (
                <form className="login-form">
                    <h1>
                        <span className="font-weight-bold">Saving Deposit</span></h1>
                    <h2 className="text-center"> Welcome </h2><br />
                    <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example">
                        <Tab eventKey="Login" title="Login" className="tabs-stretch">
                            <FormGroup>
                                <Form.Label>Login</Form.Label><br />
                                <Form.Control type="text" name="username" placeholder="Username" onChange={this.fieldUpdate} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Password</Form.Label><br />
                                <Form.Control type="password" name="password" placeholder="Password" onChange={this.fieldUpdate} />
                            </FormGroup>
                            <Button className="btn-lg btn-dark btn-block" onClick={this.userLogin}> login </Button>
                        </Tab>
                        <Tab eventKey="Register" title="Register" className="tabs-stretch">

                            <FormGroup>
                                <Form.Label>Email</Form.Label><br />
                                <Form.Control type="email" name="email" placeholder="Email Address" onChange={this.fieldUpdate} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>UserName</Form.Label><br />
                                <Form.Control type="text" name="username" placeholder="Username" onChange={this.fieldUpdate} />
                            </FormGroup>

                            <FormGroup>
                                <Form.Label>Password</Form.Label><br />
                                <Form.Control type="password" name="password1" placeholder="Password" onChange={this.fieldUpdate} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Confirm Password</Form.Label><br />
                                <Form.Control type="password" name="password2" placeholder="Confirm Password" onChange={this.fieldUpdate} />
                            </FormGroup>
                            <Button className="btn-lg btn-dark btn-block" onClick={this.signup}> Register </Button>
                        </Tab>
                    </Tabs>
                </form>
            )
        }
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, { authLogin, authSignup })(Login);