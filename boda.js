// Function to calculate Boda Boda fare
function calculateBodaFare() {
    // Prompt user for distance
    let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
    let distanceInKm = Number(input); // Convert input to number

    // Fare elements
    const baseFare = 50;
    const chargePerKm = 15;
    const variableFare = distanceInKm * chargePerKm;
    const totalFare = baseFare + variableFare;

    // The breakdown in console
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${variableFare}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(`\nPanda Pikipiki!`);
}

// Call the function
calculateBodaFare();
