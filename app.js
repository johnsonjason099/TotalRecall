// 1. Variables are assigned using an (=) from the variable name to a value 
// 2. The value of a variable can be changed with (let and var) by simply assigning a new value to the variable on a new line with = .
// 3. An existing variable can be assigned a new variable by changing the name of the variable for example myVar = yourVar.
// 4. Declaring a variable is to create a variable, assigning it, is giving it a value and to define it is to give it properties.
// 5. Pseudocode is non-computer language specific programming language to understand how a program works.
// 6. When coding, take 5 minutes or less thinking about the problem before coding with what you know and you will be able to think while working.

// STRINGS 

let firstVariable = ("Hello World");
firstVariable = 7
let secondVariable = firstVariable
secondVariable = ("My sweets");
//The value of firstVariable is 7.
let yourName = "Jason"
console.log(`Hello, my name is ${yourName}`);

//BOOLEANS

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';


console.log(a > b);
console.log(c < d);
console.log('Name' === 'Name');

// ### // FOR THE NEXT TWO, USE ONLY && OR ||

console.log(true || false);
console.log(false && false && false && false && false || true);

console.log(false && false)
console.log(e == 'Kevin');
console.log(a * b > c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)`
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"`
console.log(48 == '48');

//The Farm

let animal;
animal === cow ? console.log("moo") : ("Hey! You're not a cow.")
// if(animal === "cow"){
//     console.log("moo");
//     else {
//         console.log("Hey, you're ot a cow.")
//     }
//Driver's Ed

let age; 
if (age >= 16){
    console.log("Here are your keys.")
 } else if(age >16){
    console.log("Sorry, you're too young.")
}

//LOOPS

//The Basics

for (let m = 0, m < 11, m++)
    console.log(m)

for (let f = 10, f < 401, f++)
    console.log(f);

for (let i = 12, i < 4001, i+=3)
    console.log(i);

for (let i=12, i< 4001, i++);

    console.log(i);

//Get Even

for (let i = 0, i < 101, i++);
if (i % 2 === 0)
    console.log(i + " is an even number");

//Give Me 5

for (let i = 0, i <= 100, i++);
if (i % 5 == 0 && i % 3 == 0){
}       console.log("I found a ${i}. Three is a crowd, but also a high five.");
   else if (i % 5 === 0){
        console.log("I found a ${i}. High five!");
}  else (i % 3 == 0){
        console.log(('I found a $(i).  Three is a crowd.')
}
//Bank Account

let bank_account = 0
for (i=1; i <=10; i++) {
bank_account = bank_account + i
}
    console.log(bank_account)

    let bank_account2 = 0
for (i=1; i<=100; i++) {
bank_account2 = bank_account2 + i
}
    console.log(bank_account2 *2)

//ARRAYS & CONTROL FLOW
//Q&A
Things inside an array are elements which are not guaranteed to be in any sort of order.
A real-life thing that could be modeled with an array is a shopping list.

let quotes = ["I pitty the fool", "You are awesome", "I'm feeling it"]

// C. Accessing elements

randomThings.arr(0);
randomThings.arr[2] = "World"


//D. Change values

console.log(ourclass(2))
ourClass.pop[Github],[Otocat]
ourClass.push(["Cloud City"])


// ### E. Mix It Up

myArray.push(["Aegon", "Carmelito"]);
myArray.shift();
myArray.unshift("Mob Marley");
myArray.pop();
console.log(myArray)
Array.prototype.reverse();
//After the reverse, the array was not mutated.
//To mutate is to change the Array via .push, .shift, .unshift and .pop.

// ### F. Biggie Smalls

 let myAge = 44
 if (myAge < 100) {
        console.log("little number")
 }
     else {
        console.log("big number")
 }

// ### G. Monkey in the Middle

 let num
 if (num > 10) {
     console.log("Big number")
     else if(num < 5) {
         console.log("Little number")
         else if(num >=5 && <= 10){
             console.log("monkey")
         }
     }
 }

// ### H. What's in Your Closet?

 const kristynsCloset = [
   "left shoe",
   "cowboy boots",
   "right sock",
   "GA hoodie",
   "green pants",
   "yellow knit hat",
   "marshmallow peeps"
 ];
 const thomsCloset = [
     "grey button-up",
     "dark grey button-up",
     "light blue button-up",
     "blue button-up",
   ],[
      "grey jeans",
     "blue jeans",
     "PJs"
   ],[
      "wool mittens",
     "wool scarf",
     "raybans"
   ]

// **What's Kristyn wearing today?**
 console.log("Kristyn is rocking that $(kristynsCloset[2]) today.")
 kristynsCloset.push["raybans"]
 kristynsCloset([5]) = "stained knit hat"

console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][2]} today!`)
thomsCloset([1][2])="footie pajamas" 
console.log("Thom will be enjoying this winter in Drake's signature sheepskin ${thomsCloset[1][3]} and accessorizing with ${thomsCloset[2][0]} and ${thomsCloset[2][1]}.");

// ## IV. Functions
// ### A. printGreeting

 function  printGreeting(person){
    console.log("Hello there" + person);
}
printGreeting("Slimer")

// ### B. printCool

 function printCool(name1){
     console.log("${name1} is cool.")
 }

// ### C. calculateCube

function calculateCube(num){
     console.log("${num ** num}")
}

// ## D. isVowel
 
 function isVowel(alpha){
 const vowels = ["a","e","i","o","u"]
     if (alpha.vowels.toLowerCase()){
        console.log("${alpha} is a vowel.")
     } else if (alpha !== "... vowels"){
     console.log("${alpha} is not a vowel")
     }
 }
//### E. getTwoLengths

function getTwoLengths(string1, string2) {
    let arr1= [string1.length, string2.length]
}

// F. getMultipleLengths

function getMultipleLengths (stringys){
    const output = [];
    for (let string of stringys){
        output.push(string.length);
    }
    return output;
}
//### G. maxOfThree

function maxOfThree(z,y,x){
    let max = z,
    if(y > max) max = y,
    elseif(x > max) max = x,
    return max;
}
//### H. printLongestWord
function printLongestWord(wordGroup){
    let longest = wordGroup[0];
    for(let i =1; i < wordGroup.length; i++){
        if (wordGroup[i].length > longest.length) longest = wordGroup[i];
            }
            return longest;
}
//## Objects

 const user = {
 name: "Jimmy",
 email: "email",
 age: 45,
 purchased: [] 
 }


// ### B. Update the user

user.name = "Jack"
 user.email = "JacobAlhyde@gmail.com"
 user.age = 32
 user.purchased = `["Books", "brakes", "olive oil", "mango"]`
    user.email = "JackylAndhyde@gmail.com",
    user.age++

// ### C. Adding keys and values

    user.addlocation = "userlocation"
    let location = "France"

// ### D. Shopaholic!

 user.purchased.push("carbohydrates")[4];
 user.purchased.push("peace of mind")[1];
 user.purchased.push("Merino jodhpurs")[3];
 console.log.user.purchased([3]);

// ### E. Object-within-object
 
user.friend = {
     name: "John Reacher",
     age: 85,
     location: "Colorado Springs",
     purchased: [],
 }

    Console.log(user.friend.name)
    Console.log(user.friend.location)
    user.friend.age = 55
    user.friend.purchased.push("The One Ring")[0];
    user.friend.purchased.push("A latte")[1];
       Console.log.user.friend.purchased([1]);

// ### F. Loops

// - Write a for loop that iterates over the User's purchasedarray.

const purchasedArray = []
for (let i = 0; i >= 0 ; i++){
console.log.user.purchased([i])};

// - Friend's purchasedarray.

for (let i =0; i >= 0; i++){
console.log.user.friend.purchased([i])};

// ### G. Functions can operate on objects

function updateUser (){
    user.name = user.name.toUppercase();
    user.age++
}
updateUser(); {
    console.log(user);
}

function oldAndLoud (newPerson) { 
    user.name = user.name.toUppercase();
    user.age++
    }
    oldAndLoud(); {
        console.log(user);
    }
