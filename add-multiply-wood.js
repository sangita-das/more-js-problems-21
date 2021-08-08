/*
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
 */


function woodcalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perbedWood = 50;
  // wood calculation 
  const chairWoodQuantity = chairQuantity * perChairWood;
  const tableWoodQuantity = tableQuantity * perTableWood;
  const bedWoodQuantity = bedQuantity * perbedWood;

  const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

  return totalWood;
}

const firstOption = woodcalculator(1, 1, 1);
console.log(firstOption);