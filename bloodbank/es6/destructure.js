let [bookName, author] = ["HeadFirst Java", "KathySieera"];

console.log(bookName);
console.log(author);

let [bookName1, ...details] = ["HeadFirst Java", "KathySieera", "450.0", "O'Riley"];
console.log(bookName1);
console.log(details);