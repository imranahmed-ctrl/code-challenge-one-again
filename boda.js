//Function to calculate fare for Boda Boda
function calculateBodaFare(){

  //'Prompt the user
  let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
  let distanceInKm = Number(input);
  
  
  //Fare elements
  const baseFare = 50 ;
  const chargePerKm =15 ;
  const variableFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + variableFare;

//show result in console
console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
console.log(`Ukikalia Pikipiki: KSH ${baseFare}`);
console.log(`Mpaka Uko: KSH ${variableFare}`);
console.log(`Total: KSH ${totalFare}`);
console.log(`\nPanda Pikipiki`);
}

//Call the function
calculateBodaFare();