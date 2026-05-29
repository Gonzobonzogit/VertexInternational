//This module will hold the ui information for the users account
import { AccountFacts } from "../../services/AccountData.js";
import '../css/accountSummary.css';

const AccountSummary = ({balances, showDetails, setShowDetails}) => {
    const hideAccount = (num) => {
        const str = String(num);
        return "X".repeat(str.length - 2) + str.slice(-2);
    };

    return(
        <div className="accountContainer">
            <input
            className="privacyBtn"
            type="checkbox"
            name={showDetails ? "Hide" : "Show"}
            checked={showDetails}
            onChange={() => setShowDetails(prev => !prev)}
            />


            <div className="currentBalance">
                <h1 className="mainMsg">Your current debit balance is,</h1>
                <h2 className="debitBalance">{showDetails ? `$${balances.debitBalance.toLocaleString()}` : "$********"}</h2>
            </div>

            <div className="savingsContainer">
                <h1 className="saveMsg">Good job you have saved,</h1>
                <h2 className="saveBalance">{showDetails ? `$${balances.savingsBalance.toLocaleString()}` : "$*******"}</h2>
            </div>

            <div className="creditContainer">
                <h1 className="creditMsg">You have earned a credit amount of,</h1>
                <h2 className="credit">{showDetails ? `$${balances.creditBalance.toLocaleString()}` : "$******"}</h2>
            </div>
        </div>
    );
}

export default AccountSummary;
