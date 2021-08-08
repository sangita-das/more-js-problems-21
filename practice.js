// Practice1: find smallest and largest value 
function largestNumber(numbers) {
  let max = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    element = numbers[i];

    if (element > max) {
      max = element;
    }

  }
  return max;
}




const value = [4, 20, 8, 5, 15, 80, 45, 55];
const maximumValue = largestNumber(value);
console.log('largest', maximumValue);



function smallestNumber(numbers2) {
  let min = numbers2[0];
  for (i = 0; i < numbers2.length; i++) {
    element = numbers2[i];


    if (element < min) {
      min = element;
    }
  }
  return min;
}

const minimumValue = smallestNumber(value);
console.log('smallest', minimumValue)


// practice 2 : remove duplicate name from arrat

// const names = ['abul', 'babul', 'cabul', 'dadul', 'ebul', 'fabul', 'babul', 'ebul', 'gabul', 'abul', 'habul', 'dabul'];

const numbers = [8, 5, 3, 7, 5, 9, 12, 8, 20, 45, 15];

function removeDuplicate(numbers) {
  const unique = [0];
  for (const element of numbers) {
    console.log(element);
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}

const output = removeDuplicate(numbers);
console.log(output);




// practice 3: find the value of two sum number using function

function addingNumber(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
const inputNumber = addingNumber(80, 45);
console.log(inputNumber);



// practice 4: find the value of two multiply number using function
function multiply(num1, num2) {
  const into = num1 * num2;
  return into;
}
const multiplyNumber = multiply(4, 12);
console.log(multiplyNumber)


