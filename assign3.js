const line = "Java is open source language and Javascript is scripting language. Java is user-friendly and easy to use";

let pattern = "Java";
let new_line = line.replace(pattern, "Python");
console.log(new_line);

const pattern1 = /Java/g;
const new_line1 = line.replace(pattern1, "Python");
console.log(new_line1);

const pattern2 = /java/gi; // case-insensitive and global search
const new_line2 = line.replace(pattern, "Hello");
console.log(new_line2);

const pattern3 = /is/gi; // case-insensitive and global search
const new_line3 = line.replace(pattern3, "are");
console.log(new_line3);