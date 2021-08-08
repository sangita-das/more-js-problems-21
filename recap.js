
// find the largest value from array
function largestElement(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > max) {
      max = element;
    }

  }
  return max;
}

const value = [4, 20, 8, 5, 15, 80, 45, 55];
const max = largestElement(value);
console.log('largest', max);





// find the smallest value from array
function smallestElement(numbers2) {
  let min = numbers2[0];
  for (let i = 0; i < numbers2.length; i++) {
    const element = numbers2[i];
    if (element < min) {
      min = element;
    }
  }
  return min;
}
const value2 = [4, 20, 8, 5, 15, 80, 45, 55];
const min = smallestElement(value2);
console.log('smallest', min);