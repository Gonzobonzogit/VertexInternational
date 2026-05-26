//This is the JavaScript object that holds our information for our 3 account types

export const AccountFacts = {
    debit : { name:"Debit Account", balance : 169420, actions: ["Transfer", "Pay", "Withdraw"] },
    savings : { name:"Savings Account", balance : 42069, actions: ["Transfer", "Deposit", "Withdraw"] },
    credit : { name:"Credit", balance : 6969, actions: ["Pay", "Deposit"] }
};

//Below is the transaction mathmatical logic

let balance = 5000;
let savingsBalance = 50000;


export const processingTransaction = (type, amount) => {
    if(amount <= 0){
        return false;
    }

    if(type === "Deposit" ){
        balance += amount;
        return true;
    }

    if(type === "Withdraw"){
        if(balance < amount) return false; //To prevent overdrafts
        balance -= amount;
        return true;
    }

    if(type === "tranfser"){
        if(amount > savingsBalance) return false; //Can't pull more out than you have

        savingsBalance -= amount;
        balance += savingsBalance;
        return true;
    }
    console.log(`Processing a ${type} transaction for ${amount}`);
    return true;
};
