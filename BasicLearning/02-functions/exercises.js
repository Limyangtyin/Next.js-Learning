// 📝 Lesson 2: Functions - EXERCISES
// Complete these exercises to practice what you've learned

console.log("=== FUNCTIONS EXERCISES ===")

// Exercise 1: Basic Function Declaration
console.log("\nExercise 1: Basic Function Declaration")
// TODO: Create a function called 'greet' that takes a name parameter
// - The function should return a greeting message like "Hello, [name]!"
// - Call the function with your name and log the result

// Your code here:

// Exercise 2: Arrow Function
console.log("\nExercise 2: Arrow Function")
// TODO: Create an arrow function called 'calculateAge' that takes birth year
// - The function should calculate and return the current age
// - Use the current year (2024) for calculation
// - Call the function with your birth year and log the result

// Your code here:

// Exercise 3: Function with Multiple Parameters
console.log("\nExercise 3: Multiple Parameters")
// TODO: Create a function called 'createProfile' that takes 3 parameters:
// - name (string)
// - age (number) 
// - hobby (string)
// - Return an object with these properties plus an 'id' property (use any number)
// - Call the function with your information and log the result

// Your code here:

// Exercise 4: Default Parameters
console.log("\nExercise 4: Default Parameters")
// TODO: Create a function called 'introduce' that takes 2 parameters:
// - name (required)
// - greeting (optional, default to "Hello")
// - Return a message like "[greeting], my name is [name]"
// - Call it twice: once with just name, once with both parameters

// Your code here:

// Exercise 5: Return Values
console.log("\nExercise 5: Return Values")
// TODO: Create a function called 'isAdult' that takes an age parameter
// - Return true if age is 18 or older, false otherwise
// - Create another function called 'canVote' that takes an age parameter
// - Return true if age is 21 or older, false otherwise
// - Test both functions with different ages

// Your code here:

// Exercise 6: Function Expression
console.log("\nExercise 6: Function Expression")
// TODO: Create a function expression called 'calculateBMI'
// - Takes weight (kg) and height (m) as parameters
// - Calculate BMI using formula: weight / (height * height)
// - Return the BMI value
// - Call the function with sample values and log the result

// Your code here:

// Exercise 7: Array Processing Function
console.log("\nExercise 7: Array Processing")
// TODO: Create a function called 'processNumbers' that takes an array of numbers
// - Return an object with these properties:
//   - sum: total of all numbers
//   - average: average of all numbers
//   - max: largest number
//   - min: smallest number
// - Test with an array of your choice

// Your code here:

// Exercise 8: String Manipulation Function
console.log("\nExercise 8: String Manipulation")
// TODO: Create a function called 'formatName' that takes a full name string
// - Return an object with:
//   - fullName: original string
//   - firstName: first word
//   - lastName: last word
//   - initials: first letter of each word (e.g., "J.D.")
//   - length: total character count
// - Test with your full name

// Your code here:

// Exercise 9: Higher-Order Function
console.log("\nExercise 9: Higher-Order Function")
// TODO: Create a function called 'createMultiplier' that takes a factor
// - Return a new function that multiplies any number by that factor
// - Create a 'double' function (factor = 2) and a 'triple' function (factor = 3)
// - Test both functions with different numbers

// Your code here:

// Exercise 10: Callback Function
console.log("\nExercise 10: Callback Function")
// TODO: Create a function called 'processArray' that takes an array and a callback
// - Apply the callback function to each element in the array
// - Return a new array with the results
// - Create callback functions to:
//   - Square each number
//   - Convert strings to uppercase
// - Test with both number and string arrays

// Your code here:

// Exercise 11: Object Method
console.log("\nExercise 11: Object Method")
// TODO: Create an object called 'bankAccount' with:
// - Properties: balance (number), accountNumber (string), owner (string)
// - Methods:
//   - deposit(amount): adds amount to balance
//   - withdraw(amount): subtracts amount from balance (check if sufficient funds)
//   - getBalance(): returns current balance
//   - getInfo(): returns account information as a string
// - Test all methods

// Your code here:

// Exercise 12: Rest Parameters
console.log("\nExercise 12: Rest Parameters")
// TODO: Create a function called 'calculateTotal' that uses rest parameters
// - Accept any number of price arguments
// - Calculate the total price
// - Apply a 10% discount if there are 3 or more items
// - Return the final total
// - Test with different numbers of items

// Your code here:

// Exercise 13: Function Scope Practice
console.log("\nExercise 13: Function Scope")
// TODO: Create a function called 'outerFunction' that:
// - Declares a variable 'outerVar' with value "I'm outside"
// - Contains an inner function called 'innerFunction' that:
//   - Declares a variable 'innerVar' with value "I'm inside"
//   - Logs both outerVar and innerVar
// - Calls the inner function
// - Try to log innerVar from the outer function (this should cause an error)
// - Comment out the problematic line

// Your code here:

// Exercise 14: IIFE (Immediately Invoked Function Expression)
console.log("\nExercise 14: IIFE")
// TODO: Create an IIFE that:
// - Declares a private variable 'secret' with value "This is secret"
// - Returns a function that can access and return the secret
// - Assign the returned function to a variable
// - Call the function to get the secret
// - Try to access 'secret' directly (this should cause an error)
// - Comment out the problematic line

// Your code here:

// Exercise 15: Complex Function
console.log("\nExercise 15: Complex Function")
// TODO: Create a function called 'analyzeText' that takes a text string
// - Return an object with:
//   - wordCount: number of words
//   - characterCount: number of characters (including spaces)
//   - characterCountNoSpaces: number of characters (excluding spaces)
//   - sentenceCount: number of sentences (count periods, exclamation marks, question marks)
//   - averageWordLength: average length of words
//   - longestWord: the longest word in the text
// - Test with a sample paragraph

// Your code here:

console.log("\n=== END OF EXERCISES ===")
console.log("Great job! Check your solutions against the solutions.js file!")
