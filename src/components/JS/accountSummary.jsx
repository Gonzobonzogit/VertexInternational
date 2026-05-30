//This module will hold the ui information for the users account
import { useState } from 'react';
import { AccountFacts } from "../../services/AccountData.js";
import TransactionHistory from "./transactionHistory.jsx";
import '../css/accountSummary.css';

const AccountSummary = ({ balances, showDetails, setShowDetails, transitions }) => {
    //Sets the defualt account viewed at home screen
    const [activeAccount, setActiveAccount] = useState("debit");
    //sets up live history feed
    const [showHistory, setShowHistory] = useState(false);

    //Maps the current account to the related balance to keep the screen clean
    const accountsMapped = {
        debit:{
            label: "Debit Account",
            balance: balances.debitBalance,
            msg: "Your current balance is,",
            color: "var(--ctp-blue)"
        },
        savings:{
            label: "Savings Account",
            balance: balances.savingsBalance,
            msg: "Your saved balance is,",
            color: "var(--ctp-green)"
        },
        credit: {
            label: "Credit Account",
            balance: balances.creditBalance,
            msg: "Your current credit is,",
            color: "var(--ctp-peach)"
        }
    };
    
    const current = accountsMapped[activeAccount];

    return(
        <div className="accnt-wrapper">       
            <div className="accnt-card">
                {/*Privacy toggle*/}
                <div className="privacy-control">
                    <label className="private-label">
                        <input
                            type="checkbox"
                            checked={showDetails}
                            onChange={() => setShowDetails(prev => !prev)}
                        />
                        <span className="toggle-text">{showDetails ? "Hide" : "Unhide"}</span>
                    </label>
                </div>
                
                {/*Dynamic balance, Will change depending on account type*/}
                <div className="balance-shown">
                    <h3 className="type-label">{current.label}</h3>
                    <p className="accnt-Cap">{current.msg}</p>
                    <h2 className="dollar-amount">{showDetails ? `$${current.balance.toLocaleString(2)}` : "$********"}</h2>
                </div>

                {/*These Buttons control which account is selected for display
                default account balance is debitBalance
                */}
                <div className="switchbtns">
                    <button
                        className="debit-btn"
                        onClick={()=> setActiveAccount('debit')}
                    >
                        {`${activeAccount === 'debit' ? 'Active' : 'Debit'}`}
                    </button>
                    <button
                        className="credit-btn"
                        onClick={()=> setActiveAccount('credit')}
                    >
                        {`${activeAccount === 'credit' ? 'Active' : 'Credit'}`}
                    </button>
                    <button
                        className="savings-btn"
                        onClick={()=> setActiveAccount('savings')}
                    >
                        {`${activeAccount === 'savings' ? 'Active' : 'Savings'}`}
                    </button>
                </div>
                <div className="tx-history">
                    <button className="history-toggle" onClick={() => setShowHistory(!showHistory)}>
                        {showHistory ? "Hide Recent Activity ▲" : "View Recent Activity ▼"}
                    </button>
                </div>

                {/*Drop down*/}
                {showHistory && (
                  <div className="drop-down">
                        <TransactionHistory transitions={transitions} layout="dropdown" />
                  </div>  
                )}
            </div>
        </div>
    );
}

export default AccountSummary;
