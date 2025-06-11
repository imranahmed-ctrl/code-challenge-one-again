// Function to calculate ingredients for making Kenyan Chai
function calculateChaiIngredients() {
    // Prompt user for number of cups
    let input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    let numberOfCups = Number(input); // Convert input to number

    // Calculate total ingredients
    let water = numberOfCups * 200; // in ml
    let milk = numberOfCups * 50;   // in ml
    let teaLeaves = numberOfCups * 1; // tablespoons
    let sugar = numberOfCups * 2;   // teaspoons

    // The results in console
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons`);
    console.log(`\nEnjoy your Chai Bora!`);
}

// Call the function
calculateChaiIngredients();
