// 📝 Lesson 1: Variables & Data Types - EXERCISES
// Complete these exercises to practice what you've learned

console.log("=== VARIABLES EXERCISES ===")

// Exercise 1: Create Personal Information Variables
console.log("\nExercise 1: Personal Information")
// TODO: Create variables for your personal information
// - Your full name (use const)
// - Your age (use let)
// - Your favorite color (use const)
// - Whether you like programming (use const, boolean)

// Your code here:
const fullName = "Lim Yang Tyin";
let age = 29;
const favoriteColor = "Blue";
const likesProgramming = true;

// Exercise 2: String Manipulation
console.log("\nExercise 2: String Manipulation")
// TODO: Create a greeting message using template literals
// - Use your name from Exercise 1
// - Create a message like "Hello, [Your Name]! Welcome to programming!"

// Your code here:
const greeting = `Hello, ${fullName}! Welcome to programming!`;

// Exercise 3: Number Operations
console.log("\nExercise 3: Number Operations")
// TODO: Create variables for basic math operations
// - Create two numbers (any values you like)
// - Calculate their sum, difference, product, and quotient
// - Store each result in a variable

// Your code here:
const num1 = 10;
const num2 = 20;
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

// Exercise 4: Array Creation
console.log("\nExercise 4: Array Creation")
// TODO: Create arrays for different categories
// - An array of your top 3 favorite foods
// - An array of your top 3 favorite movies/books
// - An array of numbers from 1 to 10

// Your code here:
const favouriteFood = ["KFC", "MCD", "Pizza"];
const favouriteMovies = ["ABC", "DEF", "GHK"];
const num = [1, 5, 7, 9, 2, 6];

// Exercise 5: Object Creation
console.log("\nExercise 5: Object Creation")
// TODO: Create an object representing your favorite pet (real or imaginary)
// - Include properties: name, species, age, color, favoriteFood
// - Include an array of tricks or activities

// Your code here:
const Pet = {
    Name: "Henry",
    Species: "Cat",
    Age: 2,
    Color: "Black",
    FavouriteFood: "Cat Food",
    Activities: [
        "Play ball",
        "Shit",
        "Eat"
    ]
};

// Exercise 6: Type Checking
console.log("\nExercise 6: Type Checking")
// TODO: Use typeof to check the types of your variables
// - Check the type of your name variable
// - Check the type of your age variable
// - Check the type of your arrays
// - Check the type of your object

// Your code here:
let userName = "YT"
let userAge = 29
let userArray = [1, 4, 6, 7, 8]
let userObject = {
    name: "YT",
    age: 29,
    sex: "male"
}

console.log(typeof userName)
console.log(typeof userAge)
console.log(typeof userArray)
console.log(typeof userObject)

// Exercise 7: String Methods Practice
console.log("\nExercise 7: String Methods")
// TODO: Create a string and practice different methods
// - Create a string with your full name
// - Convert it to uppercase
// - Convert it to lowercase
// - Get the length
// - Replace your first name with "Student"

// Your code here:
let myName = "Lim Yang Tyin";
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())
console.log(myName.length)

let replacedName = myName.replace("Lim", "Student")
console.log(replacedName)

// Exercise 8: Array Methods Practice
console.log("\nExercise 8: Array Methods")
// TODO: Practice array methods
// - Create an array of 5 fruits
// - Add a fruit to the end
// - Remove a fruit from the end
// - Add a fruit to the beginning
// - Remove a fruit from the beginning
// - Get the length of the array

// Your code here:
let fruitArray = ["Apple", "Banana", "Melon", "Grape", "Watermelon"]
fruitArray.push("Strawberry")
fruitArray.pop()
fruitArray.unshift("Kiwi")
fruitArray.shift()
console.log(fruitArray.length)

// Exercise 9: Object Manipulation
console.log("\nExercise 9: Object Manipulation")
// TODO: Create and modify an object
// - Create an object for a book with title, author, pages, isRead
// - Add a new property for genre
// - Update the isRead property to true
// - Access and log each property

// Your code here:
let Book = {
    title: "Harry Potter",
    author: "JK Rowling",
    pages: 552,
    isRead: false
}

Book.genre = "Fantasy"
Book.isRead = true
console.log(Book.title)
console.log(Book.author)
console.log(Book.pages)
console.log(Book.genre)
console.log(Book.isRead)

// Exercise 10: Mixed Data Types
console.log("\nExercise 10: Mixed Data Types")
// TODO: Create a complex data structure
// - Create an object representing a student
// - Include: name (string), age (number), grades (array of numbers)
// - Include: isGraduated (boolean), courses (array of strings)
// - Include: contact (object with email and phone)

// Your code here:
let Student = {
    name: "Bahahaha",
    age: 20,
    grades: [
        70, 40, 56, 39
    ],
    isGraduated: false,
    courses: [
        "Chemistry", "Physics", "Maths", "Biology"
    ],
    contact: {
        email: "bahahaha@gmail.com",
        phone: "+601234567890"
    }
}

console.log("\n=== END OF EXERCISES ===")
console.log("Check your solutions against the solutions.js file!")
