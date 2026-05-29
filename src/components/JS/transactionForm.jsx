//Forms for different Transactions
import { useState } from 'react';
import { AccountFacts, processTransaction } from '../../services/AccountData.js';
import Notifications from './notifications.jsx';
import '../css/transactionForm.css';


const Transactions = ({ balances, setters, setTransactions, setNotifications }) => {
    const [activeAccount, setActiveAccount] = useState("debit");

    //Deposit State
    const [depositAmount, setDepositAmount] = useState("");
    const [depositType, setDepositType] = useState("cash");

    //transfer state
    const [transferForm, setTransferForm] = useState({
        beneficiaryAccount: "",
        beneficiaryName: "",
        transferType: "SWIFT",
        amount: "",
        notes: "",
    });

    //dynamic keys
    const currentBalanceKey = activeAccount + "Balance";
    const setterKey = "set" + activeAccount.charAt(0).toUpperCase() + activeAccount.slice(1) + "Balance";

    const depositHandler = () => {
        const result = processTransaction(balances[currentBalanceKey], "Deposit",
                                          depositAmount);
        if (!result.success) {
            setNotifications({ type: "error", result.message });
            alert(result.msg);
            return;
        }
        setters[setterKey](result.newBalance);
        setTransactions(prev => [{
            id: Date.now(),
            type: "deposit",
            depositType,
            amount: parseFloat(depositAmount),
            account: AccountFacts[activeAccount].name,
            timestamp: new Date().toLocaleString(),
            balanceAfter: result.newBalance,
        }, ...prev]);
        setDepositAmount("");
    };


  const transferHandler = () => {
          // processTransaction returns a result object — check it with a normal if block
          const result = processTransaction(balances[currentBalanceKey], "Transfer",
  transferForm.amount);
          if (!result.success) {
              alert(result.msg);
              return;
          }
          setters[setterKey](result.newBalance);
          setTransactions(prev => [{
              id: Date.now(),
              type: "transfer",
              transferType: transferForm.transferType.toUpperCase(),
              amount: parseFloat(transferForm.amount),
              beneficiaryAccount: transferForm.beneficiaryAccount,
              beneficiaryName: transferForm.beneficiaryName,
              notes: transferForm.notes,
              account: AccountFacts[activeAccount].name,
              timestamp: new Date().toLocaleString(),
              balanceAfter: result.newBalance,
          }, ...prev]);
          setNotifications({ type: "success", msg: `${$depositType} deposit of ${depositAmount} successful!` });
          setTransferForm({ beneficiaryAccount: "", beneficiaryName: "", transferType:
  "SWIFT", amount: "", notes: "" });
      };

return (
          <div className="transactionContainer">

              <div className="typeSelect">
                  <button onClick={() => setActiveAccount("debit")}>Debit</button>
                  <button onClick={() => setActiveAccount("savings")}>Savings</button>
                  <button onClick={() => setActiveAccount("credit")}>Credit</button>
              </div>

              {activeAccount && (
                  <div className="dynamicCard">
                      <h3>{AccountFacts[activeAccount].name}</h3>
                      <h2>${balances[currentBalanceKey].toLocaleString()}</h2>
                  </div>
              )}

              <div className="DepositForm-container">
                  <div className="form-group">
                      <label>Deposit Type</label>
                      <select value={depositType} onChange={(e) =>
  setDepositType(e.target.value)}>
                          <option value="cash">Cash</option>
                          <option value="check">Check</option>
                      </select>
                  </div>
                  <div className="form-group">
                      <label>Amount</label>
                      <input
                          type="number"
                          value={depositAmount}
                          onChange={(e) => setDepositAmount(e.target.value)}
                          placeholder="Enter amount"
                      />
                  </div>
                  <button onClick={depositHandler}>Deposit</button>
              </div>

              <div className="transferFormContainer">
                  <div className="form-group2">
                      <label>Beneficiary Account</label>
                      <input
                          type="text"
                          placeholder="Account number"
                          value={transferForm.beneficiaryAccount}
                          onChange={(e) => setTransferForm(prev => ({ ...prev,
  beneficiaryAccount: e.target.value }))}
                      />
                  </div>
                  <div className="form-group2">
                      <label>Beneficiary Name</label>
                      <input
                          type="text"
                          placeholder="Recipient name"
                          value={transferForm.beneficiaryName}
                          onChange={(e) => setTransferForm(prev => ({ ...prev,
  beneficiaryName: e.target.value }))}
                      />
                  </div>
                  <div className="form-group2">
                      <label>Transfer Type</label>
                      <select
                          value={transferForm.transferType}
                          onChange={(e) => setTransferForm(prev => ({ ...prev, transferType:
   e.target.value }))}
                      >
                          <option value="ach">ACH</option>
                          <option value="wire">WIRE</option>
                          <option value="swift">SWIFT</option>
                      </select>
                  </div>
                  <div className="form-group2">
                      <label>Amount</label>
                      <input
                          type="number"
                          placeholder="Enter amount"
                          value={transferForm.amount}
                          onChange={(e) => setTransferForm(prev => ({ ...prev, amount:
  e.target.value }))}
                      />
                  </div>
                  <div className="form-group2">
                      <label>Notes</label>
                      <input
                          type="text"
                          placeholder="What's this for?"
                          value={transferForm.notes}
                          onChange={(e) => setTransferForm(prev => ({ ...prev, notes:
  e.target.value }))}
                      />
                  </div>
                  <div className="transfer-button">
                      <button onClick={transferHandler}>Transfer</button>
                  </div>
              </div>

          </div>
      );
  }

  export default Transactions;


