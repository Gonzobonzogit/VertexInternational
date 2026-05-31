// function for Transaction History

const TransactionHistory = ({ transactions = []}) => {
    if(!transactions || transactions.length === 0){
        return <p className="NoTransaction" style={{padding: '20px', color: 'var(--ctp-overlay0)'}}>No transactions made yet.</p>;
    }

    return (
        <div className="history">
          <h3>Transaction History</h3>

        {/*tx = transaction*/}
          <ul className="tx-list">
            {transactions.map(tx => (
                <li
                  key={tx.id}
                className={`tx-item ${tx.type === "Deposit" ? "tx-positive" : "tx-negative"}`}
                >
                  <div className="historyTop">
                    <span className="tx-type">
                      {tx.type === "Deposit" ? `${tx.transferType?.toUpperCase()} Deposit` : `${tx.type} to ${tx.recipient ?? "External"}`}
                    </span>
                    <span className="tx-amount">
                      {tx.type === "Deposit" ? "+" : "-"}${tx.amount.toFixed(2)}
                    </span>
                  </div>
                  <div className="history-bottom">
                    <span className="tx-account">{tx.account}</span>
                    <span className="tx-balance">${tx.balanceAfter.toLocaleString()}</span>
                    <span className="tx-time">{tx.timestamp}</span>
                  </div>
                </li>
            ))}
          </ul>
        </div>
    );
}

export default TransactionHistory;
