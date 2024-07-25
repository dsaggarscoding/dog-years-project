// My age is 31 and this variable will not change.
const myAge = 31;
// The first two years of a dog's life ages faster than the rest.
var earlyYears = 2;
earlyYears *= 10.5;
// The first two years have been accounted for above and can be subtracted from my age.
laterYears = myAge - 2;
// Each dog year after the first two is equivalent to 4 human years.
laterYears *= 4;
// Calculate the age in dog years by adding the early years and later years.
myAgeInDogYears = earlyYears + laterYears;
// To make name lower case, call the lower case method in the variable.
var myName = 'Danielle'.toLowerCase();
// Finalize the sentence by creating a string and interpolating each variable into their respective places.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
