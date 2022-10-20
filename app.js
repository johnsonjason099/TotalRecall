// Q&A
// 1. Variables are assigned using (var, let, const) and making that equal (=) a value 
// 2. A value of a variable can be changed with (let and var) by simply assigning a new value.
// 3. An existing variable can be assigned a new variable by changing the name of the variable.
// 4. Declaring a value is to set a president, assigning is giving it a value and define is to give properties toRemind me, what are declare, assign, and define?
// 5.Pseudocode is not language specific programming language to understand how a program work$.
// 6. When coding, it would help to begin coding with what you know and you will be able to think while working.

// // STRINGS 
// Create a variable called firstVariable
// - Assign it the value of the string "Hello World" 
// - Change the value of this variable to some number 
// - Store the value of firstVariablein a new variable called secondVariable
// - Change the value of secondVariableto any string.
// let firstVariable = ('Hello World');
// firstVariable = 7
// let secondVariable = firstVariable
// secondVariable = ("My sweets")

// What is the value of firstVariable?
// The value of firstVariable is 7.

// - Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string `"Hello, my name is "` and the variable yourName. 
// let yourName = "Jason"
// console.log("Hello, my name is ${yourName};
// ex output: Hello, my name is Jean Valjean



//BOOLEANS
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';


// console.log(a > b);
// console.log(c < d);
// console.log('Name' === 'Name');

// ### // FOR THE NEXT TWO, USE ONLY && OR ||

// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false && false)
// console.log(e == 'Kevin');
// console.log(a * b > c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)`
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"`
// console.log(48 == '48');

//the Farm
// 1. Declare a variable animal. Set it to be either "cow" or something else
// 2. Write code that will print out "mooooo" if the it is equal to cow
// 3. Change your code so that if the variable animalis anything other than a cow, it will print `"Hey! You're not a cow."`
// 4. Commit
// animal = "cow"
// animal === cow ? console.log("moo") : ("Hey! You're not a cow.")

// //Driver's Ed
// // Make a variable that holds a person's age; be semantic
// // Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
// let age 
// if (age > 16){
//     console.log("Here are your keys.");
//     else
//         console.log("Sorry, you're too young.");
// }

// //LOOPS

// //The Basics
// for (let i = 0, i<11, i++)
// console.log(i)

// for (let i = 10, i<401, i++)
// console.log(i);

// for (let i = 12, i <4001, i+=3)
// console.log(i);

// for (let i=12, i<4001, i++);
//  i % 3 = 0
// console.log(i);

//Get Even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
// for (let i = 0, i<101, i++);
// if (i % 2 == 0)
// console.log(i);

// //Give Me 5
// // For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five:
// for (let i = 0, i <=100, i++)
// if (i % 5 == 0){
// console.log("I found a ${i}. High five!")
// } else if (i % 3 == 0){
//     console.log(('I found a $(i).  Three is a crowd.')
// }else if (i % 5 == 0 && i % 3 ==0){
//     console.log("I found a ${i}. Three is a crowd, but also a high five.")
// }
// - Write code that will save the sum of all the numbers between 1 - 10 to a variable called `bank_account`.
// - Check your work! Your `bank_account` should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

// Check your work! Your `bank_account` should have $10,100 in it.

// let bank_account = 0
// for (i=1; i <=10; i++) {
// bank_account = bank_account + i
// }
//     console.log(bank_account)

//     let bank_account2 = 0
// for (i=1; i<=100; i++) {
// bank_account2 = bank_account2 + i
// }
//     console.log(bank_account2 *2)

//ARRAYS & CONTROL FLOW
// What are the things in an array called?
// Do Arrays guarantee those things will be in order?
// What real-life thing could you model with an array?

//Create an array that contains three quotes and store it in a variable called quotes

//Things inside an array are elements which are not guaranteed to be in any sort of order.
//A real-life thing that could be modeled with an array is a shopping list.

//let quotes = ["I pitty the fool", "You are awesome", "I'm feeling it"]

// C. Accessing elements
//Given the following array `const randomThings = [1, 10, "Hello", true]`
//How do you access the 1st element in the array?
//randomThings.arr(0);
//Change the value of `"Hello"` to `"World"`
//let true = "World"
//Check the value of the array to make sure it updated the array using `console.log()`


//D. Change values
//Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

What would you write to access the 3rd element of the array?
Change the value of "Github" to "Octocat"
Add a new element, "Cloud City" to the array
console.log(ourclass(2))
ourClass.pop[Github],[Otocat]
ourClass.push("Cloud City[]")


### E. Mix It Up

Note: You don't really need `.splice()` for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: `const myArray = [5, 10, 500, 20]`

- Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
- Remove the 5 from the beginning of the array.
- Add the string "Bob Marley"to the beginning of the array.
- Remove the string of your choice from the end of the array.
- Reverse this array using `Array.prototype.reverse()`. 
- Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.push(["Aegon", "Carmelito"]);
myArray.shift();
myArray.unshift("Mob Marley");
myArray.pop();
console.log(myArray)

Array.prototype.reverse();

### F. Biggie Smalls

Create a variable that contains an integer.

Write an `if ... else` statement that:

- `console.log()s` "little number" if the number is entered is less than 100
- `console.log()s` "big number" if the number is greater than or equal to 100.
let age = 44
if age < 100 {
console.log("little number")
}
    else {
        console.log("big number")
    }

### G. Monkey in the Middle

Write an `if ... else if ... else` statement:

1. console.log()little numberif the number entered is less than 5.
2. If the number entered is more than 10, log big number.
3. Otherwise, log "monkey".
let num
if num > 10 {
    console.log("Big number")
    esle if num < 5 {
        console.log("Little number")
        else if num >=5 && <=10{
            console.log("monkey")
        }
    }
}

### H. What's in Your Closet?
 examples of Kristyn and Thom's closets modeled as data in JavaScript.

```
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
```
```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

`// Thom's closet is more complicated. Check out this nested data structure!!`
```
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
```

**What's Kristyn wearing today?**

1. Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that $([2]) today.`)

2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset.push["raybans"]
"yellow knit hat" = "stained knit hat"
3. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
**In the same way, access one item from Thom's pants array.**
- Access one item from Thom's accessories array.
- Log a sentence about what Thom's wearing. 
*Example:* "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
- Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.


console.log(`Thom is looking fierce in a ${thomsCloset[0][2]}, ${thomsCloset[1][2]} and ${thomsCloset[2][1]} today!`)



## IV. Functions


### A. printGreeting

Do you think you could write a function called `printGreetingwith` a parameter name that returns a greeting with the argument interpolated into the greeting?
const = "printGreetingwith"
 let printGreeting = ("Hello there")

 Like so?
``console.log(printGreeting("Slimer")); `
`=> Hello there, Slimer!``

You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.


### B. printCool

Write a function `printCoolthat` accepts one parameter, `name`, as an argument. The function should print the name and a message saying that that person is cool.

`console.log(printCool("Captain Reynolds"));`
`=> "Captain Reynolds is cool";`
function printCool(name){
    console.log(`${name} is cool`)
}




### C. calculateCube
Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

`console.log(calculateCube(5));`
`=> 125`
function calculateCubethat(numb){
    console.log(`${num ** num})
}



## D. isVowel

1. Write a function `isVoweltha`t takes a character (i.e. a string of length 1) and returns `true` if it is a vowel, `false` otherwise. 

2. The vowel could be upper or lower case. 

Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

console.log(isVowel("a"));
=> true




### E. getTwoLengths

Write a function `getTwoLengthsthat` accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

`console.log(getTwoLengths("Hank", "Hippopopalous"));`
`=> [4, 13]`




### F. getMultipleLengths

Write a function `getMultipleLengthsthat` accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

`console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));`
`=> [5, 4, 2, 2, 4]`




### G. maxOfThree
Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

console.log(maxOfThree(6, 9, 1));
=> 9

Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().




### H. printLongestWord
Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
=> "Peanutbutter"




## Objects

Let's set up an object data structure. 

Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.


### A. Make a user object

- Create an object called user.

Write in to the object the **key-value** pairs for name, email, age, and purchased. Set the value of purchased to an empty array `[]`. Set the other values to whatever you would like.



### B. Update the user

- Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.

- Our user has had a birthday! Without changing the original user object, increment the agevalue using the postfix operator. Hint: age++



### C. Adding keys and values

You have decided to add your user's location to the data that you want to collect.

- Without changing the original user object, add a new key locationto the object, and give it a value or some-or-other location (a string).



### D. Shopaholic!

1. Our user has purchased an item! They have purchased some "carbohydrates". Using `.push()`, add the string "carbohydrates" to the `purchasedarray`.

2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the `purchasedarray`.

3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using `.push()`, add the string "Merino jodhpurs" to the `purchasedarray`.
Console.log just the "Merino jodhpurs" from the `purchasedarray`.



### E. Object-within-object

Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

If we want to give our user a friendwith a nameand age, we could write:

```
user.friend = {
    name: "Grace Hopper",
    age: 85
}
```

When we console.log user, we would see the friend object added to our user object.

1. Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
2. Console.log just the friend's name
3. Console.log just the friend's location
4. CHANGE the friend's age to 55
The friend has purchased "The One Ring". Use `.push()` to add "The One Ring" to the friend's `purchasedarray`.
5. The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's `purchasedarray`.
6. Console.log just "A latte" from the friend's `purchasedarray`.



### F. Loops

- Write a for loop that iterates over the User's `purchasedarray` (NOT the friend's purchased array), and prints each element to the console.
- Write a for loop that iterates over the Friend's `purchasedarray`, and prints each element to the console.



### G. Functions can operate on objects

Write a single function updateUserthat takes no parameters. When the function is run, it should:

1. it should increment the user's age by 1
2. make the user's name uppercase
3. The function does not need a return statement, it will merely modify the user object.

Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
