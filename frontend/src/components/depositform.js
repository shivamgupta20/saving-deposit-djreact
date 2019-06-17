import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Layouts/styling.css';

class DepositForm extends React.Component {
    constructor(props) {
        super(props);
        this.fieldUpdate = this.fieldUpdate.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = { userid: 1 }

    }

    fieldUpdate = (e) => {
        const fname = e.target.name;
        const fval = e.target.value;
        this.setState({ [fname]: fval });
    }
    handleFormCancelSubmit = (event) => {
        this.setState = ({ account_number: undefined, bankname: undefined, initial_amount: undefined, start_date: undefined, end_date: undefined, interest: undefined, tax: undefined });
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/deposit/', this.state)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    render() {
        const requestType = this.props.requestType;
        if (this.state.deposit === undefined && requestType !== 'POST')
            return (
                <h1>Loading</h1>
            )
        else {
            return (
                <Form noValidate onSubmit={e => this.handleSubmit(e)}>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Account Number
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="account_number" placeholder="Account Number" onChange={this.fieldUpdate} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Bank Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="bankname" placeholder="Bank Name" onChange={this.fieldUpdate} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Amount Deposited
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="initial_amount" placeholder="Amount Deposited" onChange={this.fieldUpdate} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Start Date
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="start_date" placeholder="Start Date" onChange={this.fieldUpdate} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            End Date
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="end_date" placeholder="End Date" onChange={this.fieldUpdate} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Interest
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="interest" placeholder="Interest" onChange={this.fieldUpdate} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Tax%
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="tax" placeholder="Tax%" onChange={this.fieldUpdate} />
                        </Col>
                    </Form.Group>
                    <Button bsClass="custom-btn" onClick={this.handleFormSubmit}> Save </Button>
                    <Button bsClass="custom-btn" onClick={this.handleFormCancelSubmit}><Link to="/deposit"> Cancel </Link></Button>
                </Form>
            )
        };
    }
}
export default DepositForm;