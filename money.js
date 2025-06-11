// Function to estimate mobile money transaction fee
function estimateTransactionFee() {
    // Prompt user for amount to send
    let input = prompt("Unatuma Ngapi? (KES):");
    let amountToSend = Number(input); // Convert input to number

    // Fee calculation rules
    const feePercentage = 0.015;
    let fee = amountToSend * feePercentage;

    // Enforce minimum and maximum fee limits
    if (fee < 10) {
        fee = 10;
    } else if (fee > 70) {
        fee = 70;
    }

    // Calculate total amount 
    const totalDebited = amountToSend + fee;

    // The output to console
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalamount}`);
    console.log(`\nSend Money Securely!`);
}

// Call the function
estimateTransactionFee();
