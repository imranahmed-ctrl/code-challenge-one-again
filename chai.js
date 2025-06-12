// Function to calculate ingredients for making Chai Bora
function calculateChaiIngredients() {

    //Prompt the user
    let input = prompt("Karibu!How many cups of Chai Bora would you like to make?");
    let numberOfCups = Number(input);

    //Calculate total ingredients
    // milk and water(ml), sugar and majani(teaspoons)
    let water = numberOfCups * 200;
    let milk = numberOfCups * 50;
    let teaLeaves = numberOfCups * 1;
    let sugar = numberOfCups * 2;

    //Display results in console
    console.log(`To make ${numberOfCups} cups of Chai Bora, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`milk: ${milk} ml`);
    console.log(`Tea Leaves: ${teaLeaves} teaspoons`);
    console.log(`Sugar: ${sugar} teaspoons`);
    console.log(`\nEnjoy your ChaiBora`);
}

//Call the function
calculateChaiIngredients();