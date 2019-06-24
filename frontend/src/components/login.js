import React from 'react';
import { Button, Form, FormGroup, Tabs, Tab, Input } from 'react-bootstrap';

class Login extends React.Component {
    render() {
        return (
            <form className="login-form">
                <h1>
                    <span className="font-weight-bold">Saving Deposit</span></h1>
                <h2 className="text-center"> Welcome </h2><br />
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="Login" title="Login" className="tabs-stretch">
                        <FormGroup>
                            <Form.Label>Login</Form.Label><br />
                            <Form.Control type="text" placeholder="Username" />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Password</Form.Label><br />
                            <Form.Control type="password" placeholder="Password" />
                        </FormGroup>
                        <Button className="btn-lg btn-dark btn-block"> login </Button>

                    </Tab>
                    <Tab eventKey="Register" title="Register" className="tabs-stretch">

                        <FormGroup>
                            <Form.Label>Email</Form.Label><br />
                            <Form.Control type="email" placeholder="Email Address" />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>UserName</Form.Label><br />
                            <Form.Control type="text" placeholder="Username" />
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>Password</Form.Label><br />
                            <Form.Control type="password" placeholder="Password" />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Confirm Password</Form.Label><br />
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </FormGroup>
                        <Button className="btn-lg btn-dark btn-block"> Register </Button>
                    </Tab>
                </Tabs>
            </form>
        )
    }
}
export default Login;