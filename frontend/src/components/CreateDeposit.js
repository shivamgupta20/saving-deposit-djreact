import React from 'react';
import DepositForm from './depositform';

class CreateDeposit extends React.Component {
    render() {
        return (
            <div>
                <h1> Create Deposit </h1>
                <DepositForm  requestType ="POST" depositId=""/>
                
            </div>
        );
    }
}
export default CreateDeposit;