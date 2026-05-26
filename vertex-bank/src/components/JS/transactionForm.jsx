//Forms for different Transactions
import React, { useState } from 'react';
import { AccountFacts, processingTransaction } from '../../services/accountInfo.js';




//Dynamic card that adjusts to account type
function Transactions(){
    const [activeAccount, setActiveAccount] = useState(null);

    //Action handler
    const performAction = (action) => {

        {processingTransaction("Deposit", 10000)};
        alert(`Using ${action} on ${AccountFacts[activeAccount].name}`);
    };

    return (
        <div className="transactionContainer">
            {activeAccount && (
                <div className="dymanicCard">
                    <h3>{AccountFacts[activeAccount].name}</h3>
                    <h2>{AccountFacts[activeAccount].balance}</h2>
                    <div className="actnBtns">
                        {AccountFacts[activeAccount].actions.map(action => (
                            <button key={action} onClick={() => performAction(action)}>{action}</button>
                        ))}
                    </div>
                </div>
            )}

            {/* The Account Selectors*/}
            <div className="typeSelect">
                <button onClick={() => setActiveAccount('debit')}>Debit</button>
                <button onClick={() => setActiveAccount('savings')}>Savings</button>
                <button onClick={() => setActiveAccount('credit')}>Credit</button>
            </div>
        </div>
    );
}

export default Transactions;
