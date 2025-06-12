//Function to estimate mobile money transaction fee
function estimateTransactionFee(){


    //Prompt the user
    let input = prompt("Unatuma Ngapi?(KSH):");
    let amountToSend = Number(input);


    //How to calculate fee
    const feePercentage = 0.015
    let fee = amountToSend * feePercentage;


    //Apply min and max fee limits
    if(fee<10){
        fee = 10;
    } else if ( fee > 70){
        fee = 70;
    }


    //Calculate total amount to be debited
    const totalDebited = amountToSend + fee;

    //Display results in console
     console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log(`\nSend Money Securely!`);

}


//Call the function
estimateTransactionFee();