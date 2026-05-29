import { useState } from 'react';
import { AccountFacts } from "../../services/AccountData.js";
import '../css/accountSummary.css';

const AccountSummary = ({ balances, showDetails, setShowDetails }) => {
    // Track which account is currently being viewed
    const [activeAccount, setActiveAccount] = useState("debit");

    // Map the active account to the correct balance and display message
    const accountMap = {
        debit: {
            label: "Debit Account",
            balance: balances.debitBalance,
            msg: "Your current debit balance is,",
            color: "var(--ctp-blue)"
        },
        savings: {
            label: "Savings Account",
            balance: balances.savingsBalance,
            msg: "Good job you have saved,",
            color: "var(--ctp-green)"
        },
        credit: {
            label: "Credit Account",
            balance: balances.creditBalance,
            msg: "You have earned a credit amount of,",
            color: "var(--ctp-peach)"
        }
    };

    const current = accountMap[activeAccount];

    return (
        <div className="accountCard">
            {/* Top Corner: Privacy Toggle */}
            <div className="privacyControl">
                <label className="privacyLabel">
                    <input
                        type="checkbox"
                        checked={showDetails}
                        onChange={() => setShowDetails(prev => !prev)}
                    />
                    <span className="toggleText">{showDetails ? "Hide" : "Unhide"}</span>
                </label>
            </div>

            {/* Center: Dynamic Balance Display */}
            <div className="balanceDisplay">
                <h3 className="accountTypeLabel">{current.label}</h3>
                <p className="balanceCaption">{current.msg}</p>
                <h2 className="balanceAmount" style={{ color: current.color }}>
                    {showDetails ? `$${current.balance.toLocaleString()}` : "$ ••••••••"}
                </h2>
            </div>

            {/* Bottom: Account Switcher Buttons */}
            <div className="accountSwitcher">
                <button 
                    className={`switchBtn ${activeAccount === 'debit' ? 'active' : ''}`} 
                    onClick={() => setActiveAccount('debit')}
                >
                    Debit
                </button>
                <button 
                    className={`switchBtn ${activeAccount === 'savings' ? 'active' : ''}`} 
                    onClick={() => setActiveAccount('savings')}
                >
                    Savings
                </button>
                <button 
                    className={`switchBtn ${activeAccount === 'credit' ? 'active' : ''}`} 
                    onClick={() => setActiveAccount('credit')}
                >
                    Credit
                </button>
            </div>
        </div>
    );
}

export default AccountSummary;

