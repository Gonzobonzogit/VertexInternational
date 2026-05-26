//Forms for different Transactions
import React, { useState, useEffect } from 'react';
import { AccountFacts, DebitActions,  processingTransaction } from '../services/accountInfo.js';
import'./transactionForm.css';


function TransactionForm({account}) {
    const[activeAction, setActiveAccount]  = useState(null);
    const[inputAmount, setInputAmount]     = useState('');
    const[balance, setBalance]             = useState(
        account ? AccountFacts[account].balance: 0
    );

    const [feedback, setFeedback]          = useState(null);

//To reset the panel when the parent switches accounts
    useEffect(() =>{
        if(account){
            setbalance(AccountFacts[account].balance);
            setActiveAccount(null);
            setInputAmount(' ');
            setFeedback(null);

        }
    }, [account]);

    if(!account) return null;

    const { name, actions } = AccountFacts[account];
    const isDebit = activeAction && DebitActions.includes(activeAction);



    //Open/close panel on btn click
    const handleActionClick = (action) => {
        if(activeAction === action) {
            setActiveAction(null);
            setInputAmount('');
            setFeedback(null);
        }
    };


    //Confim transactions
    const confirmationHandler = () => {
        const amount = parseFloat(inputAmount);

        if(!amount || amount <= 0){
            setFeedback({msg: 'Please enter a Valid amount.', type: 'error'});

            return;
        }
        if(isDebit && amount > balance){
            setFeedback({ msg: "Insufficent Funds", type: "error" });
            return;
        }

        const result = processingTransaction(activeAction, amount);

        if(result.success){
            setBalance(prev =>
                result.isDebit
                    ? parseFloat((prev - amount).toFixed(2))
                    : parseFloat((prev + amount).toFixed(2))
            );
            setFeedback({
                msg: `${activeAction} of ${amount.toLocaleSting() confirmed.`,
                type: 'success'
            });
            setActiveAction(null);
            setInputAmount('');

        }

    };


    //Auto close the panel
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') handleConfirm();
        if(e.key === 'Escape'){
            setActiveAction(null);
            setInputAmount('');
        }
    };

    return (
        <div className="transactionCard">

            {/*Account name + live balance*/}
            <div className="txHeader">
                <span className="txAccountName">{name}></span>
                <span className="txBalance">
                    ${balance.toLocaleString('en-US', { minimumFractionDigits: 2})}
                </span>
            </div>


            {/*Action Btns*/}
            <div className="txActions">
                {actions.map(action => (
                    <button
                        key={action}
                        className={`txBtn $${activeAction === action ? 'txBtn--active' : ''} ${DEBIT_ACTIONS.includes(action) ? 'txBtn--debit' : 'txBtn--credit'}`}
                        onClick={() => handleActionClick(action)}
                    >
                        {action}
                    </button>
                ))}
            </div>


            {/*Disappearing Dynamic input field*/}
            <div className={`txInputPanel ${activeAction ? 'txInputPanel--open' : ''}`}>
                {activeAction && (
                    <>
                        <label
                            className={`txLabel ${isDebit ? 'txInput--debit' : 'txInput--credit'}`}
                            type="number"
                            min="00.05"
                            step="0.01"
                            placeholder="0.00"
                            value={inputAmount}
                            onChange={e => setInputAmount(e.target.value)}
                            onKeyDown={handleKeyPress}
                            autoFocus
                        />
                        <button
                                className={`txConfirm ${isDebit ? 'txConfirm--debit' : 'txConfirm--credit'}`}
                                onClick={confirmationHandler}
                            >
                                Confirm
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Feedback message */}
            {feedback && (
                <p className={`txFeedback txFeedback--${feedback.type}`}>
                    {feedback.msg}
                </p>
            )}

        </div>
    );
}

export default TransactionForm;

                )}


        </div>
    )


}
