// ## Q + A
// 1. How do we assign a value to a variable?
// 2. How do we change the value of a variable?
// 3. How do we assign an existing variable to a new variable?
// 4. Remind me, what are declare, assign, and define?

// Declare is to let js know that there is a variable `let a;`
// To assign a value to the variable. I need to use `=`.
// For example: `let a = 0`

// ### Research 

// 5. What is pseudocoding and why should you do it?

// Pseudocoding is writing code in plain spoken language that humans can understand.

// It's important because it allows you to write the logic and steps of the you want to accomplish in code without worrying about the rigid syntax.

// Psuedocode allows us to break down problems into solvable peices that can be transfered to code. 

// Psudocode is the bridge between our minds and the code. 

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// ## Strings

// **For all other questions that involve writing code, you can solve them via the app.js folder under it's respectice section** 

// - Create a variable called firstVariable
// - Assign it the value of the string "Hello World"
// - Change the value of this variable to some number
// - Store the value of firstVariablein a new variable called secondVariable
// - Change the value of secondVariableto any string.

// What is the value of firstVariable?

// - Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string `"Hello, my name is "` and the variable yourName. 

// ex output: Hello, my name is Jean Valjean

// ## Booleans

// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console:

//   `const a = 4;`
//   `const b = 53;`
//   `const c = 57;`
//   `const d = 16;`
//   `const e = 'Kevin';`
 

//   `console.log(a __ b);`
//   `console.log(c __ d);`
//   `console.log('Name' __ 'Name');`
  
//   ### // FOR THE NEXT TWO, USE ONLY && OR ||

//   `console.log(true __ false);`
//   `console.log(false __ false __ false __ false __ false __ true);`
//   `console.log(false __ false)`
//   `console.log(e ___ 'Kevin');`
//   `console.log(a __ b ___ c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)`
//   `console.log(a __ a ___ d); // note: the answer is a simple arithmetic equation, not something "weird"`
//   `console.log(48 __ '48');`

// ### The Farm 

// 1. Declare a variable animal. Set it to be either "cow" or something else
// 2. Write code that will print out "mooooo" if the it is equal to cow
// 3. Change your code so that if the variable animalis anything other than a cow, it will print `"Hey! You're not a cow."`
// 4. Commit

// ### Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."


// ## Loops

// Remember: USE letwhen you initialize your for loops!

// This is GOOD: `for(let i = 0; i < 100; i++)`

// This is NO GOOD: `for(i = 0; i < 100; i++)`




// ### The basics

// - Write a loop that will print out all the numbers from 0 to 10, inclusive
// - Write a loop that will print out all the numbers from 10 up to and including 400
// - Write a loop that will print out every third number starting with 12 and going no higher than 4000



// ### B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"



// ### C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five:

// **Example Output:**

// I found a 5. High five!
// I found a 10. High five!


// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

// **Example Output:**

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!


// For numbers divisible by both three and five, be sure your code prints both messages



// ### D. Savings account

// - Write code that will save the sum of all the numbers between 1 - 10 to a variable called `bank_account`.
// - Check your work! Your `bank_account` should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

// Check your work! Your `bank_account` should have $10,100 in it.




// ## III. Arrays & Control flow



// ### A. Talk about it:
// What are the things in an array called?
// Do Arrays guarantee those things will be in order?
// What real-life thing could you model with an array?



// ### B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes



// ### C. Accessing elements

// Given the following array `const randomThings = [1, 10, "Hello", true]`

// - How do you access the 1st element in the array?

// - Change the value of `"Hello"` to `"World"`

// - Check the value of the array to make sure it updated the array using `console.log()`


// ### D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array



// ### E. Mix It Up

// Note: You don't really need `.splice()` for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: `const myArray = [5, 10, 500, 20]`

// - Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// - Remove the 5from the beginning of the array.
// - Add the string "Bob Marley"to the beginning of the array.
// - Remove the string of your choice from the end of the array.
// - Reverse this array using `Array.prototype.reverse()`. 
// - Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?



// ### F. Biggie Smalls

// Create a variable that contains an integer.

// Write an `if ... else` statement that:

// - `console.log()s` "little number" if the number is entered is less than 100
// - `console.log()s` "big number" if the number is greater than or equal to 100.



// ### G. Monkey in the Middle

// Write an `if ... else if ... else` statement:

// 1. console.log()little numberif the number entered is less than 5.
// 2. If the number entered is more than 10, log big number.
// 3. Otherwise, log "monkey".



// ### H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// ```
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
// ```
// ```
// {
//   "firstName": "John",
//   "lastName": "Smith",
//   "age": 25
// }
// ```

// `// Thom's closet is more complicated. Check out this nested data structure!!`
// ```
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// ```

// **What's Kristyn wearing today?**

// 1. Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.


// 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

// 3. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

// **In the same way, access one item from Thom's pants array.**

// - Access one item from Thom's accessories array.
// - Log a sentence about what Thom's wearing. 
// *Example:* "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// - Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.



// ## IV. Functions


// ### A. printGreeting

// Do you think you could write a function called `printGreetingwith` a parameter name that returns a greeting with the argument interpolated into the greeting?

// Like so?

// ``console.log(printGreeting("Slimer")); `
// `=> Hello there, Slimer!``

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.


// ### B. printCool

// Write a function `printCoolthat` accepts one parameter, `name`, as an argument. The function should print the name and a message saying that that person is cool.

// `console.log(printCool("Captain Reynolds"));`
// `=> "Captain Reynolds is cool";`




// ### C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

// `console.log(calculateCube(5));`
// `=> 125`




// ## D. isVowel

// 1. Write a function `isVoweltha`t takes a character (i.e. a string of length 1) and returns `true` if it is a vowel, `false` otherwise. 

// 2. The vowel could be upper or lower case. 

// Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// `console.log(isVowel("a"));`
// `=> true`




// ### E. getTwoLengths

// Write a function `getTwoLengthsthat` accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// `console.log(getTwoLengths("Hank", "Hippopopalous"));`
// `=> [4, 13]`




// ### F. getMultipleLengths

// Write a function `getMultipleLengthsthat` accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// `console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));`
// `=> [5, 4, 2, 2, 4]`




// ### G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9

// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().




// ### H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"




// ## Objects

// Let's set up an object data structure. 

// Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.


// ### A. Make a user object

// - Create an object called user.

// Write in to the object the **key-value** pairs for name, email, age, and purchased. Set the value of purchased to an empty array `[]`. Set the other values to whatever you would like.



// ### B. Update the user

// - Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.

// - Our user has had a birthday! Without changing the original user object, increment the agevalue using the postfix operator. Hint: age++



// ### C. Adding keys and values

// You have decided to add your user's location to the data that you want to collect.

// - Without changing the original user object, add a new key locationto the object, and give it a value or some-or-other location (a string).



// ### D. Shopaholic!

// 1. Our user has purchased an item! They have purchased some "carbohydrates". Using `.push()`, add the string "carbohydrates" to the `purchasedarray`.

// 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the `purchasedarray`.

// 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using `.push()`, add the string "Merino jodhpurs" to the `purchasedarray`.
// Console.log just the "Merino jodhpurs" from the `purchasedarray`.



// ### E. Object-within-object

// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

// ```
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// ```

// When we console.log user, we would see the friend object added to our user object.

// 1. Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// 2. Console.log just the friend's name
// 3. Console.log just the friend's location
// 4. CHANGE the friend's age to 55
// The friend has purchased "The One Ring". Use `.push()` to add "The One Ring" to the friend's `purchasedarray`.
// 5. The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's `purchasedarray`.
// 6. Console.log just "A latte" from the friend's `purchasedarray`.



// ### F. Loops

// - Write a for loop that iterates over the User's `purchasedarray` (NOT the friend's purchased array), and prints each element to the console.
// - Write a for loop that iterates over the Friend's `purchasedarray`, and prints each element to the console.



// ### G. Functions can operate on objects

// Write a single function updateUserthat takes no parameters. When the function is run, it should:

// 1. it should increment the user's age by 1
// 2. make the user's name uppercase
// 3. The function does not need a return statement, it will merely modify the user object.

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.






// # Requirements Complete! Hungry for More?



// ## Cat Combinator



// 1. ### Mama cat

// Define an object called `cat1that` contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed



// 2. ### Papa cat

// Define an object called cat2that also contains the properties:

// name
// breed
// age (a number)



// 3. ### Combine Cats!

// The cats are multiplying!

// Write a function `combineCats` that has two parameters `mama`, and `papa`. The function will take two arguments -- each a cat object.

// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.

// **Example**:

// ```
// combineCats(cat1, cat2)
// { name: "Joe", age: 19, breed: "Mog" }

// { name: "Jam", age: 45, breed: "Siamese" }
// ```

// This is to demonstrate that functions can take objects as arguments.

// You could also invoke the combineCats function by writing the objects straight into the parentheses:

// ```
// combineCats({ 
//   name: "Craig", 
//   age: 20, 
//   breed: "unknown" }, 
// { 
//   name: "Linda", 
//   age: 20, breed: 
//   "undefined" 
//   }
// );
// ```

// **Make it so the combineCats function will return a combination of the two incoming cats!**

// - The result should be an object wherein the name is a concatenation of the parents' names, 
// - the age is 1
// - the breed is each of the parents' breeds with a hyphen in between


// Example:

// `console.log(combineCats(cat1, cat2));`

// Result:

// This is to demonstrate that a function can return an object



// 4. ### Cat brain bender

// If combineCats returns an object, and if combineCats takes objects as arguments, then it stands to reason that:

// - catCombinatorcan use itself as its own argument.

// Take a second to stew on that . . .

// What is the result of:

// `console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));`

// Whoa . . .

// The above console.log is two levels deep of combineCats.

// - Write a console.log that is **three** levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.

























// Q + A answers : 
//1. by using an equal sign " = " so variable = value; 
//2. by reassigning the variable with a new value. 
//3. by reassigning the variable to a new variable. 
//4. declaring is like establishing a created variable, assign is to set something equal to, define is to give someething value. 
//5. pseudocoding is basically giving the logic for how a code would work without actually using code syntax and saying how it would work. Its
// good to do because it helps you conceptualize what it is that you are trying to do. 
//6. This number is relative to your own work experience, so answers may vary. But I would say 50%




// STRINGS

// firstVariable = "hello world"; 
// firstVariable = 1;
// let secondVariable = firstVariable;
// secondVariable = "any string";
// thirdVariable = "nice to meet you";
// thirdVariable = 2;
// let thirdVariable = "new string";

// console.log(firstVariable); //1

// const yourName = "Sterling";
// let hello = `Hello, my name is ${yourName}`
// console.log(hello);

//BOOLEANS

// const a = 4; 
// const b = 53; 
// const c = 57; 
// const d = 16; 
// const e = 'Kevin';

// console.log(a < b); 
// console.log(c > d); 
// console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false); 
// console.log(false && false && false && false && false || true); 
// console.log(false === false) 
//console.log(e == 'Kevin'); 
// console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
// console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');



// Based on what was 
//the Farm
let animal = "cow";

const moo = (a) => {
   return a.toLowerCase === "cow"? "mooooo" : "Hey! You're not a cow."
} 

console.log(moo(animal));
//Driver's Ed
let age = 18;
if (age >= 16) {
   console.log("Here are the keys!")
}
else {
   console.log("Sorry, you're too young.")
}
//LOOPS
// for (let i = 0; i < 100; i++)
//The Basics
for (let i = 0; i <= 400; i++) {
   console.log(i);
}
for (let i = 12; i <= 4000; i += 3) {
   console.log(i);
}


//Get Even
for (let i = 0; i <= 100; i++) {
   if (i % 2 ===0) {
   console.log(i + "is an even number");
   }
   else {
      console.log(i + "is an odd number");
   }
}
//Give Me 5
for (let i = 0; i <= 100; i ++){
   if (i % 5 === 0) {
      console.log(`I found a ${i}. High five!`);
   }
   else if (i % 3 === 0) {
      console.log(`I found a ${i}. Three is a crowd`);
   }
   else if (i % 3 === 0 && i % 5 === 0) {
      console.log(`I found a ${i}. High five! Three is a crowd`); 
   }
}
//Savings Account
let bank_account = 0;
for (let i = 0; i <= 10; i++) {
   bank_account += i; 
}
 console.log("the total sum is " +bank_account);

  bank_account = 0;
for (let i = 1; i <= 100; i++) {
   bank_account += i * 2; 
}
 console.log("the total sum is " +bank_account);
//ARRAYS & CONTROL FLOW
// talk about it: 
// things in an array are called elements. no it doesn't guarantee they will be in order. I can model a shopping list with an array.

// Easy Does It
const quotes = ["hello", "ban...kai!", "Im going to be pirate king"];

//Accessing elements
 const randomThings = [1, 10, "Hello", true]
 console.log(randomThings[0]);
 //2. 
 randomThings[2] = "world"; 
 console.log(randomThings);

 // Change Values
 const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
  //1. access 3rd element
   console.log(ourClass[2]);
   ourClass[4] = "Octocat";
   ourClass.push("Cloud City");
   console.log(ourClass);

// Mix It Up
const myArray = [5, 10, 500, 20]
myArray.push("Aegon");
myArray.push("bear");
myArray.shift();
myArray.unshift("Bob Marley");
console.log(myArray);
myArray.pop();
myArray.reverse();
console.log(myArray);
// Yes I mutated the array. To mutate the array means to change the array instead of making a new one.  Yes it did return something.


//Biggie Smalls
let x = 2;
if (x < 100) {
   console.log('little number');
}
else if (x >= 100) {
   console.log('big number');
}

// Monkey in the Middle
let num = 10;
if (num < 5) {
   console.log('little number');
}
else if (num > 10) {
   console.log('big number');
}
else {
   console.log('monkey');
}

// Whats in Your Closet?
const kristynsCloset = [
   "left shoe",
   "cowboy boots",
   "right sock",
   "GA hoodie",
   "green pants",
   "yellow knit hat",
   "marshmallow peeps"
 ];


// Thom's closet is more complicated. Check out this nested data structure!!

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

//1
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
//2
kristynsCloset.splice(6,0,"raybans");
console.log(kristynsCloset);
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset)
//3
thomsCloset[0][0];
thomsCloset[1][0];
thomsCloset[2][1];
console.log(`Thom is wearing a ${thomsCloset[0][0]} shirt and ${thomsCloset[1][0]} pants and ${thomsCloset[2][0]} accessories`)
thomsCloset[1][2] = " Footie Pajamas";
console.log(`Thom is wearing ${thomsCloset[1][2]}`);

// Functions
// printGreeting
function printGreetingwith (name) {
   console.log("hello ! " , name)
}
printGreetingwith("sterling");

// printCool
function printCoolthat (name) {
   console.log(name + " is cool!");
}
printCoolthat("sterling");

// CalculateCube
function calculateCube(num) {
   let volume = num * num * num;
   console.log("The volume of this cube is " , volume )
}

calculateCube(3);

// isVowel
function isVowel (string) {
if (string === "a" || string === "e" || string === "i" || string === "o" || string === "u" || string === "y") {
   console.log("true");
}
else {
   console.log("false");
}
}
isVowel("a");


//getTwoLengths
function getTwoLengths (string1, string2) {
   console.log([string1.length, string2.length]);
}
getTwoLengths("bear", "Dog")

// getMultipleLengths
function getMultipleLengths (newArr) {
// myArr = newArr.length         ignore these 2 lines, it didnt work
// console.log(getMultipleLengths["hi", "fear", "coding", "cat"]);
let answer = [];
for(let i = 0; i < newArr.length; i++) {
   answer.push(newArr[i].length);
}
console.log(answer);

}
let myArr = ["dog", "bear", "lion", "Hippo"];
console.log(getMultipleLengths(myArr));


//maxOfThree
function maxOfThree (num1,num2,num3) {
      if (num1 > num2 && num1 > num3) {
         console.log(num1 + " is the largest number");
      }
      else if (num2 > num1 && num2 > num3) {
         console.log(num2 + " is the largest number");
      }
      else if (num3 > num1 && num3 > num2) {
         console.log(num3 + " is the largest number");
      }
}
maxOfThree(1,2,3);

// printLongestWord
function  printLongestWord (Arr) {
let longestWord = Arr[0];
for(let i = 1; i <Arr.length; i++) {
   if (longestWord.length < Arr[i].length) {
         longestWord = Arr[i];
   }
}
return longestWord;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));



//OBJECTS
// Make a User Object

const user = {
   name : "sterling",
   email: "sterling@gmail.com",
   age: 1000,
   purchased: []
}

// Update the user
user.email = "duncan@gmail.com";
user.age = user.age+1;

// Adding keys and Values
user.location = "NC";

// Shopaholic!

user.purchased.push("carbohydrates");


user.purchased.push("peace of mind");

user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);


// Object within object 

user.friend = {
   name : "Sam",
   age: 25,
   location : "NY",
   purchased : []
}
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[1]);



// Loops
for(let i = 0; i < user.purchased.length; i++) {
   console.log (user.purchased[i])
}
for(let i = 0; i < user.friend.purchased.length; i++) {
   console.log (user.friend.purchased[i])
}

// Functions can operate on objects
function updateUser () {
   user.age = user.age + 1;
   user.name = user.name[0].toUpperCase;
}

function oldAndLoud (person) {
   person.age = person.age + 1;
   person.name = person.name[0].toUpperCase;
}
oldAndLoud(user);











// let longest = array.reduce( (firstEl, secondEl) => {
//         //if the first el is greater than the second el return firstEl
//         return firstEl.length > secondEl.length ? firstEl : secondEl;
//     }
// );

// console.log(longest)


