//The curried version will accept one argument and return a function, which also will accept one argument and return a function. This will loop/continue until the last argument is reached and the last function is returned, which will perform the multiplication operation with the previous arguments and the last argument.

function volume(l) {
    return (w) => {
        return (h) => {
            return l * w * h
        }
    }
}
const aCylinder = volume(100)(20)(90);
console.log(aCylinder);


//------------------- Example 2:----------------------

function discount(discount) {
    return (price) => {
        return price * discount;
    }
}
const tenPercentDiscount = discount(0.1);

console.log(tenPercentDiscount(500)); 

console.log(tenPercentDiscount(1500)); 
console.log(tenPercentDiscount(2000)); 
console.log(tenPercentDiscount(50)); 
console.log(tenPercentDiscount(300)); 
