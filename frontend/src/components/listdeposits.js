import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link, Prompt } from 'react-router-dom';
import './Layouts/styling.css';
import { connect } from 'react-redux';
import { getDeposits, delDeposits } from '../store/actions/depositActions';

class ListDeposits extends React.Component {
    componentWillMount() {
        this.props.getDeposits();

    }
    constructor(props) {
        super(props);
        this.delDeposit = this.delDeposit.bind(this);
    }

    delDeposit(depositId) {
        console.log(depositId);
        //this.props.delDeposits(depositId);
    }

    render() {
        return (
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>bankname</th>
                            <th>account number</th>
                            <th>Amount Deposited</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Interest</th>
                            <th>Tax</th>
                            <th>edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.deposits.map(eachDeposit =>
                                <tr key={eachDeposit.id}>
                                    <td>{eachDeposit.id}</td>
                                    <td>{eachDeposit.bankname}</td>
                                    <td>{eachDeposit.account_number}</td>
                                    <td>{eachDeposit.initial_amount}</td>
                                    <td>{eachDeposit.start_date}</td>
                                    <td>{eachDeposit.end_date}</td>
                                    <td>{eachDeposit.interest}</td>
                                    <td>{eachDeposit.tax}</td>
                                    <td><Link to={`/deposit/${eachDeposit.id}`}>edit</Link>/delete</td>
                                </tr>)

                        }
                    </tbody>
                </Table>
                <Button bsclass="custom-btn">
                    <Link to="/createdeposit"> Create Deposit </Link>
                </Button>

            </div>
        );
    }
}

const mapStateToProp = state => ({
    deposits: state.deposit.depositItems
})
export default connect(mapStateToProp, { getDeposits, delDeposits })(ListDeposits);