// 📝 Lesson 1: Variables & Data Types - SOLUTIONS
// These are the solutions to the exercises

console.log("=== VARIABLES EXERCISES - SOLUTIONS ===")

// Exercise 1: Create Personal Information Variables
console.log("\nExercise 1: Personal Information")
const fullName = "John Doe"
let age = 25
const favoriteColor = "blue"
const likesProgramming = true

console.log("Full Name:", fullName)
console.log("Age:", age)
console.log("Favorite Color:", favoriteColor)
console.log("Likes Programming:", likesProgramming)

// Exercise 2: String Manipulation
console.log("\nExercise 2: String Manipulation")
const greeting = `Hello, ${fullName}! Welcome to programming!`
console.log(greeting)

// Exercise 3: Number Operations
console.log("\nExercise 3: Number Operations")
const num1 = 10
const num2 = 5
const sum = num1 + num2
const difference = num1 - num2
const product = num1 * num2
const quotient = num1 / num2

console.log(`${num1} + ${num2} = ${sum}`)
console.log(`${num1} - ${num2} = ${difference}`)
console.log(`${num1} * ${num2} = ${product}`)
console.log(`${num1} / ${num2} = ${quotient}`)

// Exercise 4: Array Creation
console.log("\nExercise 4: Array Creation")
const favoriteFoods = ["pizza", "sushi", "pasta"]
const favoriteMovies = ["Inception", "The Matrix", "Interstellar"]
const numbers1to10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("Favorite Foods:", favoriteFoods)
console.log("Favorite Movies:", favoriteMovies)
console.log("Numbers 1-10:", numbers1to10)

// Exercise 5: Object Creation
console.log("\nExercise 5: Object Creation")
const favoritePet = {
  name: "Buddy",
  species: "Dog",
  age: 3,
  color: "Golden",
  favoriteFood: "Chicken",
  tricks: ["sit", "stay", "roll over", "fetch"]
}

console.log("Favorite Pet:", favoritePet)
console.log("Pet Name:", favoritePet.name)
console.log("Pet Tricks:", favoritePet.tricks)

// Exercise 6: Type Checking
console.log("\nExercise 6: Type Checking")
console.log("Type of fullName:", typeof fullName)
console.log("Type of age:", typeof age)
console.log("Type of favoriteFoods:", typeof favoriteFoods)
console.log("Type of favoritePet:", typeof favoritePet)

// Exercise 7: String Methods Practice
console.log("\nExercise 7: String Methods")
const myName = "John Doe"
const upperName = myName.toUpperCase()
const lowerName = myName.toLowerCase()
const nameLength = myName.length
const studentName = myName.replace("John", "Student")

console.log("Original:", myName)
console.log("Uppercase:", upperName)
console.log("Lowercase:", lowerName)
console.log("Length:", nameLength)
console.log("Student Name:", studentName)

// Exercise 8: Array Methods Practice
console.log("\nExercise 8: Array Methods")
let fruits = ["apple", "banana", "orange", "grape", "kiwi"]
console.log("Original fruits:", fruits)

fruits.push("mango")
console.log("After push:", fruits)

const removedFruit = fruits.pop()
console.log("Removed fruit:", removedFruit)
console.log("After pop:", fruits)

fruits.unshift("strawberry")
console.log("After unshift:", fruits)

const removedFirst = fruits.shift()
console.log("Removed first:", removedFirst)
console.log("After shift:", fruits)

console.log("Final array length:", fruits.length)

// Exercise 9: Object Manipulation
console.log("\nExercise 9: Object Manipulation")
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
  isRead: false
}

console.log("Original book:", book)

book.genre = "Fiction"
book.isRead = true

console.log("Updated book:", book)
console.log("Title:", book.title)
console.log("Author:", book.author)
console.log("Pages:", book.pages)
console.log("Genre:", book.genre)
console.log("Is Read:", book.isRead)

// Exercise 10: Mixed Data Types
console.log("\nExercise 10: Mixed Data Types")
const student = {
  name: "Alice Johnson",
  age: 20,
  grades: [85, 92, 78, 96, 88],
  isGraduated: false,
  courses: ["JavaScript", "React", "Node.js", "Database"],
  contact: {
    email: "alice.johnson@email.com",
    phone: "555-1234"
  }
}

console.log("Student:", student)
console.log("Student Name:", student.name)
console.log("Student Age:", student.age)
console.log("Student Grades:", student.grades)
console.log("Is Graduated:", student.isGraduated)
console.log("Courses:", student.courses)
console.log("Email:", student.contact.email)
console.log("Phone:", student.contact.phone)

// Calculate average grade
const averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length
console.log("Average Grade:", averageGrade.toFixed(2))

console.log("\n=== END OF SOLUTIONS ===")
