import React from 'react';
import { getUsers } from '../store/actions/userActions';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ListUser extends React.Component {
    componentDidMount() {
        this.props.getUsers();


    }
    render() {
        return (
            <div>
                <h1> User Component </h1>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>eMail</th>
                            <th>Role</th>
                            <th>Password</th>
                            <th>Google Id</th>
                            <th>Facebook Id</th>
                            <th>Is Email Verified</th>
                            <th>Retry Count</th>
                            <th>eMail Verification Code</th>
                            <th>edit/del</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(eachUser =>
                            <tr>
                                <td>{eachUser.id}</td>
                                <td>{eachUser.first_name}</td>
                                <td>{eachUser.last_name}</td>
                                <td>{eachUser.email}</td>
                                <td>{eachUser.role}</td>
                                <td>{eachUser.password}</td>
                                <td>{eachUser.googleid}</td>
                                <td>{eachUser.facebookid}</td>
                                <td>{eachUser.isEmailVerified}</td>
                                <td>{eachUser.RetryCount}</td>
                                <td>{eachUser.EmailVerificationCode}</td>
                                <td>
                                    <Link to={`/deposituser/${eachUser.id}`}>edit</Link>
                                    /
                                    <Link to={`/deluser/${eachUser.id}`}>delete</Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
                <Button bsclass="custom-btn">
                    <Link to="/createuser"> Create Deposit </Link>
                </Button>
            </div >
        )
    }
}

const mapStateToProp = state =>
    ({
        users: state.user.userItems
    })

export default connect(mapStateToProp, { getUsers })(ListUser);