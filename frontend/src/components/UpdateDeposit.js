import React from 'react';
import DepositForm from './depositform';

class UpdateDeposit extends React.Component {

    render() {

        return (

            <div>
                <h1> Update Deposit </h1>
                <DepositForm requestType='PUT' depositId={this.props.match.params.depositId} />
            </div>
        );
    }
}
export default UpdateDeposit;