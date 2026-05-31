import {useState, useEffect} from 'react';
import NavBar from './components/JS/navbar.jsx';
import AccountSummary from './components/JS/accountSummary.jsx'; 
import Transaction from './components/JS/transactionForm.jsx';
import TransactionHistory from './components/JS/transactionHistory.jsx';
import Notifications from './components/JS/notifications.jsx';
import StatisticCard from './components/JS/statCard.jsx';
import './style.css';




const App = () => {
    //Nav state setter
    const [currentPage, setCurrentPage] = useState('accounts'); 
    //setters and vars for acconts and transactions
    const [showDetails, setShowDetails] = useState(true);
    const [notifications, setNotifications] = useState(null);
    const [debitBalance, setDebitBalance] = useState(169420);
    const [creditBalance, setCreditBalance] = useState(6969);
    const [savingsBalance, setSavingsBalance] = useState(42069);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if(!notifications) return;
        const timer = setTimeout(() => setNotifications(null), 3000);
        return () => clearTimeout(timer);
    }, [notifications]);

    return (
        <div className="outerContainer">
          <NavBar setPage={setCurrentPage} />
            

            <div className="notifCont">
                {notifications && (
                    <Notifications
                        notifications={notifications}
                        onDismiss={() => setNotifications(null)}
                    />
                 )}
            </div>

            {/*Dashboard start*/}
            <div className="dash">
                {/*Left side bar start*/}
                <aside className="side-Bar-extras">
                    <div className="extra-actions">
                        <h3>Control Panel</h3>
                        <button className="panel-action">Freeze Card/New Card</button>
                        <button className="panel-action">Account Statement</button>
                        <button className="panel-action">Bills</button>
                        <button className="panel-action">24/7 Support</button>
                    </div>
                    <div className="side-Bar promo">
                        <div className="promo-card">
                            <h4>Vertex Plus</h4>
                            <h5>Plus members benifets include:</h5>
                            <ul className="plus-benefits">
                                <li>Get Direct desposit early!</li>
                                <li>Earn 5% cash back on any credit purchase</li>
                                <li>Access to payNow®</li>
                                <li>$20 in overdraft coverage</li>                                
                            </ul>
                            <button className="app4plus">Apply</button>
                        </div>
                    </div>
                </aside>
                {/*Left side bar end*/}

                {/*Main section start*/}
                <main className="main-input">
                    {/*Splitting the accounts summary and transactions actions*/}
                    {currentPage === 'accounts' ? (
                        <AccountSummary
                             balances={{debitBalance, creditBalance, savingsBalance}}
                             showDetails={showDetails}
                             setShowDetails={setShowDetails}                
                             transactions={transactions}           
                       />
                    ) : (
                        <>
                        <Transaction
                             balances={{debitBalance, creditBalance, savingsBalance}}
                             setters={{setDebitBalance, setCreditBalance, setSavingsBalance}}
                             setTransactions={setTransactions}
                             setNotifications={setNotifications}
                       />
                        <TransactionHistory transactions={transactions} />
                        </>
                    )}               
                </main>
                {/*Main section end*/}

                {/*Right side bar start*/}
                <aside className="side-Bar right">
                {currentPage === 'accounts' ? (<StatisticCard />) 
                : ( <div className="feed-container">
                        <h3>Transaction Feed</h3>
                        <TransactionHistory transactions={transactions} layout="feed" />
                    </div>
                    )}
                </aside>
            </div>
        </div>
    );
}

export default App;
