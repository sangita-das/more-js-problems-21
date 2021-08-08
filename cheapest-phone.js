const phones = [
  { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
  { name: 'walton m32', price: 15000, camera: 8, storage: 8 },
  { name: 'shaomi m3', price: 17000, camera: 16, storage: 32 },
  { name: 'nokia n95', price: 7000, camera: 4, storage: 32 },
  { name: 'oppo a2', price: 18000, camera: 8, storage: 32 },
  { name: 'htc h81', price: 25000, camera: 10, storage: 16 },
];


let cheapest = phones[0];
for (const phone of phones) {
  // compare price only
  if (phone.price < cheapest.price) {
    cheapest = phone;
  }
}
console.log(cheapest);