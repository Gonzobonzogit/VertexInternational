//Forms for different Transactions
import { useState } from 'react';
import { AccountFacts, processTransaction } from '../../services/AccountData.js';
import '../css/transactionForm.css';


const Transactions = ({ balances, setters, setTransactions, setNotifications }) => {
    //setting the account to activate
    const [activeAccount, setActiveAccount] = useState("debit");
    
    //Transaction (tx) type
    const [txType, setTxType] = useState("deposit"); //deposit is the default Tx

    //Form states &  state setters
    const [amount, setAmount] = useState("");
    const [depositType, setDepositType] = useState("cash");
    const [recipient, setRecipient] = useState("");
    const [targetAcct, setTargetAcct] = useState('savings');//internal tx
    const [notes, setNotes] = useState("");

    const currentBalance = balances[activeAccount + "Balance"];
    const setter  = setters["set" + activeAccount.charAt(0).toUpperCase() + activeAccount.slice(1) + "Balance"];

    const handleExec = () => {
        if(!amount || parseFloat(amount) <= 0){
            setNotifications({ type: 'error', message: 'Please enter a valid amount.' });
            return;
        }

        //1. process the  action
        const action = txType === "deposit" ? "Deposit" : 
                       txType === "withdraw" ? "Withdraw" : 
                       txType === "transfer" ? "Transfer" : 
                       txType === "pay" ? "Pay" : '';

        const result = processTransaction(currentBalance, action, amount);

        if(!result.success){
            setNotifications({ type: 'error', message: result.msg });
            return;
        }

        //2.update the source account
        setter(result.newBalance);

        //3.Internal Transfer handler
        if(txType === 'transfer' && targetAcct !== 'external'){
            const targetSetter = setters['set' + targetAcct.charAt(0).toUpperCase() + targetAcct.slice(1) + "Balance"];
            targetSetter(prev => prev + parseFloat(amount));
        }

        //4.log transaction
        setTransactions(prev => [{
                  id: Date.now(),
                  type: txType === "deposit" ? "Deposit" : txType,
                  transferType: txType === "deposit" ? depositType : null,
                  amount: parseFloat(amount),
                  account: AccountFacts[activeAccount].name,
                  recipient: txType === "pay" ? recipient : (txType === "transfer" ? (targetAcct === "external" ? recipient: AccountFacts[targetAcct].name): null),
                  notes: notes,
                  timestamp: new Date().toLocaleString(),
                  balanceAfter: result.newBalance,
          }, ...prev]);

        setNotifications({ type: "success", message: `${txType.toUpperCase()} in amount of $${amount} was successful! `});

        //reset form
        setAmount("");
        setRecipient("");
        setNotes("");

    };

    return (
       <div className="tx-card">
            <div className="tx-header">
                <div className="sourceAcct-info">
                    <span>Funding from: <strong>{AccountFacts[activeAccount].name}</strong></span>
                    <h2 className="source-balance">${currentBalance.toLocaleString()}</h2>
            <div className="txType-toggle">
                <button className={txType === 'deposit' ? 'active' : ''} onClick={() => setTxType('deposit')}>Deposit</button>

                <button className={txType === "transfer" ? "active" : ''} onClick={() => setTxType('transfer')} >Transfer</button>

                <button className={txType === "pay" ? "active" : ''} onClick={() => setTxType('pay')}>Pay</button>
            </div>

            <div className="form-body">
                {/*Deposit form*/}
                {txType === 'deposit' && (
                <div className="form-group">
                        <label>Deposit Method</label>
                        <select value={depositType} onChange={(e) => setDepositType(e.target.value)}>
                            <option value="cash">Cash</option>
                            <option value="check">Check</option>
                        </select>
                        <label>Amount to Deposit</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="--.--" />
                    </div>
                )}
            </div>

             {/*Transfer form*/}
                {txType === 'transfer' && (
                    <div className="form-group">
                        <label>Destination</label>
                        <select value={targetAcct} onChange={(e) => setTargetAcct(e.target.value)}>
                            <option value="savings">My Savings</option>
                            <option value="debit">My Debit</option>
                            <option value="credit">My Credit</option>
                            <option value="external">External Account</option>
                        </select>
                        {targetAcct === 'external' && (
                            <input type="text" placeholder="Recipient Account #" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
                        )}
                        <label>Amount to Transfer</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" />
                    </div>
                )}         



            {/* PAY FORM */}
                {txType === 'pay' && (
                    <div className="form-group">
                       <label>Recipient (Username/Email)</label>
                        <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="@username" />
                        <label>Amount to Pay</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" />
                        <label>Note</label>
                        <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="What is this for?" />
                    </div>
                )}
            
                <button className="exec-Btn" onClick={handleExec}>
                    Confirm {txType.charAt(0).toUpperCase() + txType.slice(1)}
                </button>
            </div>
        
    );
}

export default Transactions;














