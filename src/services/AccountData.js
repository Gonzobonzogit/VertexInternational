//The data for the accounts is held here
//exported to use in other files
export const AccountFacts = {
    debit : {
        name:"Debit Account",
        balance : 169420,
        actions: ["transfer", "pay", "withdraw"]
    },
    savings : {
        name:"Savings Account",
        balance : 42069,
        actions: ["transfer", "deposit", "withdraw"]
    },
    credit : {
        name:"Credit",
        balance : 6969,
        actions: ["pay", "deposit"]
    }
};





//Exporting to ensure usefulness in other files
export const processTransaction = (currentBalance, action, amount) => {
    const floated = parseFloat(amount);

    if(isNaN(floated) || floated <= 0){
        return { success: false, msg: "Please use a valid amount"};
    };

    if((action === "Withdraw" || action === "Pay" || action === "Transfer") && floated > currentBalance){
        return { success: false, msg: "Transaction failed due to Insufficent Funds!" };
    };

    let newBalance = currentBalance;

    if (action === "Deposit")  newBalance += floated;

    if (action === "Withdraw" || action === "Transfer" || action === "Pay") newBalance -= floated;
    return { success: true, newBalance };


};
