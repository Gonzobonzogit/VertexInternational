import React from 'react';
import NavBar from './components/JS/navbar.jsx';
import Account from './components/JS/accountSummary.jsx';
import Transaction from './components/JS/transactionForm.jsx';



function App(){
    return (
        <div className="outerContainer">
            <h1>Vertex International Bank</h1>
            <NavBar />
            <h4>Welcome back, King Gonzo</h4>
            <Account />
            <Transaction />
        </div>
    );
}


export default App;
