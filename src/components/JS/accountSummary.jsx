//This module will hold the ui information for the users account
import { useState } from "react";
import { AccountFacts } from "../../services/AccountData.js";
import '../css/accountSummary.css';

const AccountSummary = ({ balances }) => {
    return(
        <div className="accountContainer">
            <div className="currentBalance">
                <h1 className="mainMsg">Your current debit balance is,</h1>
                <h2 className="debitBalance">{`$${balances.debitBalance.toLocaleString()}`}</h2>

            </div>
            <div className="savingsContainer">
                <h1 className="saveMsg">Good job you have saved,</h1>
                <h2 className="saveBalance">{`$${balances.savingsBalance.toLocaleString()}`}</h2>
            </div>
            <div className="creditContainer">
                <h1 className="creditMsg">You have earned a credit amount of,</h1>
                <h2 className="credit">{`$${balances.creditBalance.toLocaleString()}`}</h2>
            </div>
        </div>
    );
}

export default AccountSummary;
