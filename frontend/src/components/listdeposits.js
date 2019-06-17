import React from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Prompt, Link } from 'react-router-dom';
import './Layouts/styling.css';

class ListDeposits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deposits: []
        }
    }
    componentDidMount() {
        //const  id = this.props.params.depositId;
        axios.get(`http://127.0.0.1:8000/api/deposit/`)
            .then(res => {
                this.setState({ deposits: res.data });

            })
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
                            <th>
                                edit/delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.deposits.map(eachDeposit => <tr>
                            <td>{eachDeposit.id}</td>
                            <td>{eachDeposit.bankname}</td>
                            <td>{eachDeposit.account_number}</td>
                            <td>{eachDeposit.initial_amount}</td>
                            <td>{eachDeposit.start_date}</td>
                            <td>{eachDeposit.end_date}</td>
                            <td>{eachDeposit.interest}</td>
                            <td>{eachDeposit.tax}</td>
                            <td><Link to={`/deposit/${eachDeposit.id}`}>edit</Link>/delete</td>
                        </tr>)}
                    </tbody>
                </Table>
                <Button bsClass="custom-btn">
                    <Link to="/createdeposit"> Create Deposit </Link>
                </Button>

            </div>
        );
    }
}
export default ListDeposits;