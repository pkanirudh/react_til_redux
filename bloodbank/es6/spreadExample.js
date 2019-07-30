function printName(firstName, lastName){
    return (firstName+lastName).toUpperCase();
}

let name = ["John", "Wick"];
let result = printName(...name);

console.log(result);