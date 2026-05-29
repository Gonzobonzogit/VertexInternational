//This module will hold the ui information for the users account
import { useState } from 'react';
import { AccountFacts } from "../../services/AccountData.js";
import '../css/accountSummary.css';

const AccountSummary = ({balances, showDetails, setShowDetails}) => {
    //Sets the defualt account viewed at home screen
    const [activeAccount, setActiveAccount] = useState("debit");

    //Maps the current account to the related balance to keep the screen clean
    const accountsMapped = {
        debit:{
            label: "Debit Account",
            balance: balances.debitBalance,
            msg: "Your current balance is,",
            color: "var(--ctp-blue)"
        },
        savings: {
            label: "Savings Account",
            balance: balances.savingsBalance,
            msg: `You currently have ${savings.balance} saved.`,
            color: "var(--ctp-green)"
        },
        credit: {
            label: "Credit Account",
            balance: balances.creditBalance,
            msg: "Your current credit is,",
            color: var(ctp-peach)
        }
    };
    
    const current = accountsMapped[activeAccount];

    return(
        <div className="accountCard">
            {/*Privacy toggle*/}
            <div className="privacyControl">
                <label className="privateLabel">
                    <input
                        type="checkbox"
                        checked={showDetails}
                        onChange={() => setShowDetails(prev => !prev)}
                    />
                    <span className="toggleText">{showDetails ? "Hide" : "Unhide"}</span>
                </label>
            </div>
            
            {/*Dynamic balance, Will change depending on account type*/}
            <div className="balanceShown">
                <h3 className="typeLabel">{current.label}</h3>
                <p className="accountCap">{current.msg}</p>
                <h2 className="dollarAmount">{showDetails ? `$${current.balance.toLocaleString(2)}` : "$********"}</h2>
            </div>

            {/*These Buttons control which account is selected for display
               default account balance is debitBalance
            */}
            <div className="switchbtns">
                <button
                    className="debitBtn"
                    onClick={()=> setActiveAccount('debit')}
                >
                    {`${activeAccount !== 'debit' ? 'Debit' : 'Active'}`}
                </button>
                <button
                    className="creditBtn"
                    onClick={()=> setActiveAccount('credit')}
                >
                    {`${activeAccount} !== 'credit' ? 'Credit' : 'Active'`}
                </button>
                <button
                    className="savingsBtn"
                    onClick={()=> setActiveAccount('savings')}
                >
                    {`${activeAccount} !== 'savings' ? 'Savings' : 'Active'`}
                </button>
            </div>
        </div>
    );
}

export default AccountSummary;
