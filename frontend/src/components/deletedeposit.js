import React from 'react';
import { connect } from 'react-redux';
import { delDeposit } from '../store/actions/depositActions';

class DeleteDeposit extends React.Component {
    componentWillMount() {
        const depositId = this.props.match.params.depositId;
        this.props.delDeposit(depositId);
    }
    render() {
        return <h1> deleting deposit </h1>
    }
}

export default connect(null, { delDeposit })(DeleteDeposit);