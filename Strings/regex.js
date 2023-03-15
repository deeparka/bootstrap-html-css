you can check website as - regexr.com 

================================================================================================================
Method		Description
exec()		Executes a search for a match in a string and returns an array of information. It returns null on a mismatch.
test()		Tests for a match in a string and returns true or false.
match()		Returns an array containing all the matches. It returns null on a mismatch.
matchAll()	Returns an iterator containing all of the matches.
search()	Tests for a match in a string and returns the index of the match. It returns -1 if the search fails.
replace()	Searches for a match in a string and replaces the matched substring with a replacement substring.
split()		Break a string into an array of substrings.

-----------------------Example 1: Regular Expressions---------------------
const string = 'Find me';
const pattern = /me/;

// search if the pattern is in string variable
const result1 = string.search(pattern);
console.log(result1); // 5

// replace the character with another character
const string1 = 'Find me';
string1.replace(pattern, 'found you'); // Find found you

// splitting strings into array elements
const regex1 = /[\s,]+/;
const result2 = 'Hello world! '.split(regex1);
console.log(result2); // ["I", "am", "learning", "JavaScript", "RegEx"]

// searching the phone number pattern
const regex2 = /(\d{3})\D(\d{3})-(\d{4})/g;
const result3 = regex2.exec('My phone number is: 555 123-4567.');
console.log(result3); // ["555 123-4567", "555", "123", "4567"]


================================================================================================
Flags	Description
g	Performs a global match (find all matches)
m	Performs multiline match
i	Performs case-insensitive matching

--------------------Example 2: Regular Expression Modifier-------------------
const string = 'Hello hello hello';

// performing a replacement
const result1 = string.replace(/hello/, 'world');
console.log(result1); // Hello world hello

// performing global replacement
const result2 = string.replace(/hello/g, 'world');
console.log(result2); // Hello world world

// performing case-insensitive replacement
const result3 = string.replace(/hello/i, 'world');
console.log(result3); // world hello hello

// performing global case-insensitive replacement
const result4 = string.replace(/hello/gi, 'world');
console.log(result4); // world world world



-------------------Example 3: Validating the Phone Number-------------------
// program to validate the phone number

function validatePhone(num) {

    // regex pattern for phone number
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;

    // check if the phone number is valid
    let result = num.match(re);
    if (result) {
        console.log('The number is valid.');
    }
    else {
        let num = prompt('Enter number in XXX-XXX-XXXX format:');
        validatePhone(num);
    }
}

// take input
let number = prompt('Enter a number XXX-XXX-XXXX');

validatePhone(number);