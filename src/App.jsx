import {useState} from 'react';
import NavBar from './components/JS/navbar.jsx';
import Account from './components/JS/accountSummary.jsx';
import Transaction from './components/JS/transactionForm.jsx';
import TransactionHistory from './components/JS/transactionHistory.jsx';

function App(){
    const [debitBalance, setDebitBalance] = useState(169420);
    const [savingsBalance, setSavingsBalance] = useState(42069);
    const [creditBalance, setCreditBalance] = useState(6969);
    const [transactions, setTransactions] = useState([]);


    return (
        <div className="outerContainer">
            <div className="titleContainer">
                <h1>Vertex International Bank</h1>
            </div>
            <div className="topContainer">
                <div className="navContainer">
                    <NavBar />
                </div>
                <h4>Welcome back, King Gonzo</h4>
            </div>
                <div className="mainInput">
                    <Account
                      balances={{debitBalance, creditBalance, savingsBalance}}
                      setters={{setDebitBalance, setCreditBalance, setSavingsBalance}}
                        transactions={transactions}
                        setTransactions={setTransactions}
                     />
                    <Transaction
                      balances={{debitBalance, creditBalance, savingsBalance}}
                      setters={{setDebitBalance, setCreditBalance, setSavingsBalance}}
                      setTransactions={setTransactions}
                    />

                  <TransactionHistory transactions={transactions} />
                </div>
        </div>
    );
}

export default App;
