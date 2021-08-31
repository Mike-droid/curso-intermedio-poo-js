var numeritos = [9, 5, 8, 1, 78, 48, 46, 54, 8, 7];
/*let numerito = 0;
for (let index = 0; index < numeritos.length; index++) {
  numerito = numeritos[index];
  console.table({index, numerito});
} */
function recursiva(numbersArray) {
    if (numbersArray.length !== 0) {
        var firstNum = numbersArray[0];
        console.log("first number: " + firstNum);
        numbersArray.shift(); //* elimina el primer elemento del array
        recursiva(numbersArray);
    }
}
recursiva([9, 8, 7, 6, 5, 4, 3, 2, 1]);
recursiva(['😎', '🤩', '😜', '🤑']);
