//This module will hold the ui information for the users account

import React from 'react';

function AccountSummary(){
    return(
        <div className="accountContainer">
            <div className="currentBalance">
                <h1 className="mainMsg">Your current debit balance is,</h1>
                <h2 className="debitBalance">$169,420</h2>
                <span>
                    <button type="button" onClick="">Transfer</button>
                    <button type="button" onClick="">Pay</button>
                    <button type="button" onClick="">Withdraw</button>\
                </span>
            </div>
            <div className="savingsContainer">
                <h1 className="saveMsg">Good job you have saved,</h1>
                <h2 className="saveBalance">$42,069</h2>
                <span>
                    <button type="button" onClick="">Transfer</button>
                    <button type="button" onClick="">Deposit</button>
                    <button type="button" onClick="">Withdraw</button>
                </span>
            </div>
            <div className="creditBalance">
                <h1 className="creditMsg">You have earned a credit amount of,</h1>
                <h2 className="credit">$6,969</h2>
                <span>
                    <button type="button" onClick="">Pay</button>
                    <button type="" onClick="">Deposit</button>
                </span>
            </div>
        </div>
    );
}

export default AccountSummary;
