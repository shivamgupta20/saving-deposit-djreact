import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Layouts/styling.css';
import { postDeposit, putDeposit, getDeposit } from '../store/actions/depositActions';

class DepositForm extends React.Component {
    constructor(props) {
        super(props);
        this.fieldUpdate = this.fieldUpdate.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state =
            {
                deposit:
                    ({
                        userid: 1,
                        account_number: "",
                        bankname: "",
                        initial_amount: "",
                        start_date: "",
                        end_date: "",
                        interest: "",
                        tax: ""
                    })
            }

    }
    componentDidMount() {
        const reqType = this.props.requestType;
        const depositId = this.props.depositId;
        if (reqType === "PUT") {
            this.props.getDeposit(depositId)

            console.log(this, this.props.deposit)
        }
    }

    fieldUpdate = (e) => {
        const fname = e.target.name;
        const fval = e.target.value;
        this.setState({
            deposit:
            {
                ...this.state.deposit,
                [fname]: fval

            }
        })
    }
    handleFormCancelSubmit = (event) => {
        this.setState({
            deposit:
                ({
                    userid: 1,
                    account_number: "",
                    bankname: "",
                    initial_amount: "",
                    start_date: "",
                    end_date: "",
                    interest: "",
                    tax: ""
                })
        })
    }
    handleFormSubmit = (event) => {
        const requestType = this.props.requestType;
        const depositId = this.props.depositId;
        event.preventDefault();
        switch (requestType) {
            case 'POST':
                this.props.postDeposit(this.state.deposit);
                break
            case 'PUT':
                this.props.putDeposit(this.state.deposit, depositId);

                break
            default:
                return (this.state.deposit)
        }
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
                            <Form.Control name="account_number" placeholder="Account Number" onChange={this.fieldUpdate} value={this.state.deposit.account_number} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Bank Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="bankname" placeholder="Bank Name" onChange={this.fieldUpdate} value={this.state.deposit.bankname} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Amount Deposited
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="initial_amount" placeholder="Amount Deposited" onChange={this.fieldUpdate} value={this.state.deposit.initial_amount} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Start Date
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="start_date" placeholder="Start Date" onChange={this.fieldUpdate} value={this.state.deposit.start_date} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            End Date
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="end_date" placeholder="End Date" onChange={this.fieldUpdate} value={this.state.deposit.end_date} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Interest
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="interest" placeholder="Interest" onChange={this.fieldUpdate} value={this.state.deposit.interest} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Tax%
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="tax" placeholder="Tax%" onChange={this.fieldUpdate} value={this.state.deposit.tax} />
                        </Col>
                    </Form.Group>
                    <Button bsclass="custom-btn" onClick={this.handleFormSubmit}><Link to="/deposit"> Save </Link></Button>
                    <Button bsclass="custom-btn" onClick={this.handleFormCancelSubmit}><Link to="/deposit"> Cancel </Link></Button>
                </Form>
            )
        };
    }
}
const mapStateToProp = state => ({
    deposit: state.deposit.depositItem
})

export default connect(mapStateToProp, { postDeposit, putDeposit, getDeposit })(DepositForm);