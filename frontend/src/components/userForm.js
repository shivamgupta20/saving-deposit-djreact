import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postUser, getUser } from '../store/actions/userActions';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.fieldUpdate = this.fieldUpdate.bind(this);
        this.handleFormCancelSubmit = this.handleFormCancelSubmit.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = ({ user: ({ first_name: "", last_name: "", email: "", password: "", googleId: "", facebookId: "", isEmailVerified: "", retryCount: "", emailVerificationCode: "" }) })
    }
    componentDidMount() {

        this.props.getUser(this.props.userId);
        console.log(this);
    }
    handleFormCancelSubmit() {
        //this.state = ({ user: ({ first_name: "", last_name: "", email: "", password: "", googleId: "", facebookId: "", isEmailVerified: "", retryCount: "", emailVerificationCode: "" }) })
        this.setState({
            user:
            ({
                first_name: "", last_name: "", email: "", password: "", googleId: "", facebookId: "", isEmailVerified: "", retryCount: "", emailVerificationCode: ""
            })
        });
    }
    handleFormSubmit() {
        this.props.postUser(this.state.user)
    }
    fieldUpdate(e) {
        const fname = e.target.name
        const fvalue = e.target.value
        console.log(this);
        this.setState({
            user:
            {
                ...this.state.user,
                [fname]: fvalue
            }
        })
    }
    render() {
        return (
            <Form noValidate onSubmit={e => this.handleSubmit(e)}>
                <Form.Group as={Row} controlId="formHorizontalField">
                    <Form.Label column sm={2}>
                        First Name
                        </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="first_name" placeholder="First Name" onChange={this.fieldUpdate} value={this.state.first_name} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalField">
                    <Form.Label column sm={2}>
                        Last Name
                        </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="last_name" placeholder="Last Name" onChange={this.fieldUpdate} value={this.state.last_name} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalField">
                    <Form.Label column sm={2}>
                        eMail
                        </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="email" placeholder="eMail" onChange={this.fieldUpdate} value={this.state.email} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalField">
                    <Form.Label column sm={2}>
                        Password
                        </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="password" placeholder="Password" onChange={this.fieldUpdate} value={this.state.password} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalField">
                    <Form.Label column sm={2}>
                        Google Id
                        </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="googleId" placeholder="Google Id" onChange={this.fieldUpdate} value={this.state.googleId} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalField">
                    <Form.Label column sm={2}>
                        facebook Id
                        </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="facebookId" placeholder="facebook Id" onChange={this.fieldUpdate} value={this.state.facebookId} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalField">
                    <Form.Label column sm={2}>
                        Is Email Verified
                        </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="isEmailVerified" placeholder="Is Email Verified" onChange={this.fieldUpdate} value={this.state.isEmailVerified} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalField">
                    <Form.Label column sm={2}>
                        Retry Count
                        </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="retryCount" placeholder="Retry Count" onChange={this.fieldUpdate} value={this.state.retryCount} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalField">
                    <Form.Label column sm={2}>
                        Email Verification Code
                        </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="emailVerificationCode" placeholder="Email Verification Code" onChange={this.fieldUpdate} value={this.state.emailVerificationCode} />
                    </Col>
                </Form.Group>
                <Button bsclass="custom-btn" onClick={this.handleFormSubmit}><Link to="/user">Save</Link></Button>
                <Button bsclass="custom-btn" onClick={this.handleFormCancelSubmit}><Link to="/user"> Cancel </Link></Button>
            </Form>

        )
    }
}
const mapStateToProp = state => ({
    user: state.user.userItems
})

export default connect(mapStateToProp, { postUser, getUser })(UserForm);