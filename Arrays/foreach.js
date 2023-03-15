var numbers = [1,2,3,4,5];

// Create a variable to hold the sum
var sum = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach(function(number) {
    sum += number;
});

// Print the sum variable
console.log(sum);

//----------------Example 2------------------------//
const prices = [100, 210, 230, 102, 23]; 

const tt = function (tax) { 
  this.tax = tax;
  this.withTax = function (arr){
  let output = []; 
  arr.forEach(function (elem) {
  let withTax = (this.tax/100) * elem + elem; 
  output.push(withTax);
  }, this); 
  return output; 
  } ; 
}; 

const gst5 = new tt(5); 
const gst18 = new tt(18); 

console.log(gst5.withTax(prices)); 
console.log(gst18.withTax(prices));