import React from 'react';
import '../css/statCard.css';

const StatisticCard = () => {
  const stats = {
    monthlySpending: 2450.88,
    monthlyIncome:  [
      { amount: 2100, date: "May 15", account: "Debit", from: "Red Hat corp." },
      { amount: 2100, date: "May 30", account: "Debit", from: "Red Hat corp." }
    ],
    billAverage: 1150.00,
    creditScore: 637,
  };

  const totalIncome = stats.monthlyIncome.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="stats">
      <h3>Quick Look</h3>

      <div className="stat-section">
        <label>Total Spending</label>
        <div className="spent">${stats.monthlySpending.toLocaleString()}</div>
      </div>

      <div className="income-Stat">
        <h3>Income recieved</h3>
        <div className="total-income">
          +${totalIncome.toLocaleString(2)}
          {stats.monthlyIncome.map((item, index) => (
          <div key={index} className="income-deets">
              <span className="employeer">{item.from}</span>
              <span className="pay-date">{item.date}</span>
              <span className="acct-paid">{item.account}</span>
              <span className="income-amt">{item.amount}</span>
            </div>
          ))}
        </div>

        <div className="stats">
          <label>Average spent on bills</label>
          <div className="bill-amt">${stats.billAverage.toLocaleString()}</div>
        </div>


        <div className="stat-score">
         <label>Credit Score</label>
          <span  className="cred-score">{stats.creditScore}</span>
        </div>
        <div className="score-bar-bg">
          <div className="score-bar-fill" style={{ width: '75%' }}></div>
        </div>
        <small>Exllent(Top 25%) </small>
      </div>
    </div>
  );
}

export default StatisticCard;
