let num = 0;
const numbers = [0, 2, 3, 4, 5, 8, 7, 9, 3, 3, 2, 5, 1, 5, 4, 1, 1, 3, 5, 8];

for (let index = 0; index < references.length; index++) {
  console.log({ index, references: references[index] });
}

function recursion(numbersArray) {
  if (numbersArray.length) {
    const number = numbersArray[0];
    numbersArray.shift();
    console.log(number);
    recursion(numbersArray);
  }
}

recursion(numbers);
