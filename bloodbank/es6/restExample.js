function sumNumber(...numbers){
    let total = 0;

    console.log(numbers[0])
    numbers.forEach(eachNumber => total+=eachNumber);

    return total;
}

let sumOfOneToFive = sumNumber(1,2,3,4,5);
console.log(sumOfOneToFive);

let sumEightToTen = sumNumber(8,9,10);
console.log(sumEightToTen);