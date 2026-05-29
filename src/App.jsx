import {useState, useEffect} from 'react';
import NavBar from './components/JS/navbar.jsx';
import Account from './components/JS/accountSummary.jsx';
import Transaction from './components/JS/transactionForm.jsx';
import TransactionHistory from './components/JS/transactionHistory.jsx';
import Notifications from './components/JS/notifications.jsx';
import './style.css';

const App = () => {
    const [showDetails, setShowDetails] = useState(true);
    const [notifications, setNotifications] = useState(null);
    const [debitBalance, setDebitBalance] = useState(0);
    const [creditBalance, setCreditBalance] = useState(0);
    const [savingsBalance, setSavingsBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if(!notifications) return;
        const timer = setTimeout(() => setNotifications(null), 3000);
        return () => clearTimeout(timer);
    }, [notifications]);

    return (
        <div className="outerContainer">
            {/* Cleaned up: Navbar now handles the branding and greeting */}
            <div className="navContainer">
                <NavBar />
            </div>

            <div className="notifCont">
                {notifications && (
                    <Notifications
                        notifications={notifications}
                        onDismiss={() => setNotifications(null)}
                    />
                 )}
            </div>

            <div className="mainInput">
                <Account
                    balances={{debitBalance, creditBalance, savingsBalance}}
                    showDetails={showDetails}
                    setShowDetails={setShowDetails}
                />
                <Transaction
                    balances={{debitBalance, creditBalance, savingsBalance}}
                    setters={{setDebitBalance, setCreditBalance, setSavingsBalance}}
                    setTransactions={setTransactions}
                    setNotifications={setNotifications}
                />
                <TransactionHistory transactions={transactions} />
            </div>
        </div>
    );
}

export default App;
