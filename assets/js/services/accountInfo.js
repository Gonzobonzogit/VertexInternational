//This is the JavaScript object that holds our information for our 3 account types

export const AccountFacts = {
    debit : { name:"Debit Account", balance : 169420, actions: ["Transfer", "Pay", "Withdraw"] },
    savings : { name:"Savings Account", balance : 42069, actions: ["Transfer", "Deposit", "Withdraw"] },
    credit : { name:"Credit", balance : 6969, actions: ["Pay", "Deposit"] }
};

//Below is the transaction mathmatical logic

export const processingTransaction = (type, amount) => {
// Fill with actual Athrmatic later

    console.log(`Processing a ${type} transaction for ${amount}`);

    return true;

};
