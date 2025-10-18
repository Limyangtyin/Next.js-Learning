// 📝 Lesson 1: Variables & Data Types - Examples

console.log("=== VARIABLES & DATA TYPES ===")

// 1. Variable Declarations
console.log("\n1. Variable Declarations:")
let firstName = "John"
const lastName = "Doe"
var oldStyle = "Avoid this in modern JS"

console.log("First Name:", firstName)
console.log("Last Name:", lastName)

// 2. String Data Type
console.log("\n2. Strings:")
let greeting = "Hello"
let name = "World"
let templateLiteral = `${greeting}, ${name}!`
let multiLine = `This is a
multi-line string`

console.log("Simple string:", greeting)
console.log("Template literal:", templateLiteral)
console.log("Multi-line:", multiLine)

// 3. Number Data Type
console.log("\n3. Numbers:")
let age = 25
let price = 19.99
let bigNumber = 1e6 // 1,000,000
let negative = -42

console.log("Age:", age)
console.log("Price:", price)
console.log("Big number:", bigNumber)
console.log("Negative:", negative)

// 4. Boolean Data Type
console.log("\n4. Booleans:")
let isActive = true
let isComplete = false
let hasPermission = true

console.log("Is active:", isActive)
console.log("Is complete:", isComplete)
console.log("Has permission:", hasPermission)

// 5. Array Data Type
console.log("\n5. Arrays:")
let fruits = ["apple", "banana", "orange"]
let numbers = [1, 2, 3, 4, 5]
let mixed = ["hello", 42, true, null]

console.log("Fruits:", fruits)
console.log("Numbers:", numbers)
console.log("Mixed array:", mixed)
console.log("First fruit:", fruits[0])
console.log("Array length:", fruits.length)

// 6. Object Data Type
console.log("\n6. Objects:")
let person = {
  name: "John Doe",
  age: 25,
  isActive: true,
  hobbies: ["reading", "coding", "gaming"]
}

console.log("Person object:", person)
console.log("Person name:", person.name)
console.log("Person age:", person.age)
console.log("Person hobbies:", person.hobbies)

// 7. Type Checking
console.log("\n7. Type Checking:")
console.log("Type of firstName:", typeof firstName)
console.log("Type of age:", typeof age)
console.log("Type of isActive:", typeof isActive)
console.log("Type of fruits:", typeof fruits)
console.log("Type of person:", typeof person)

// 8. String Methods
console.log("\n8. String Methods:")
let text = "Hello World"
console.log("Original:", text)
console.log("Uppercase:", text.toUpperCase())
console.log("Lowercase:", text.toLowerCase())
console.log("Length:", text.length)
console.log("Substring:", text.substring(0, 5))
console.log("Replace:", text.replace("World", "JavaScript"))

// 9. Array Methods
console.log("\n9. Array Methods:")
let numbers2 = [1, 2, 3, 4, 5]
console.log("Original array:", numbers2)
console.log("Push (add to end):", numbers2.push(6), numbers2)
console.log("Pop (remove from end):", numbers2.pop(), numbers2)
console.log("Unshift (add to start):", numbers2.unshift(0), numbers2)
console.log("Shift (remove from start):", numbers2.shift(), numbers2)

// 10. Object Manipulation
console.log("\n10. Object Manipulation:")
let user = {
  name: "Alice",
  age: 30
}

console.log("Original user:", user)
user.email = "alice@example.com" // Add property
user.age = 31 // Update property
console.log("Updated user:", user)

// 11. Constants and Immutability
console.log("\n11. Constants:")
const PI = 3.14159
const COMPANY_NAME = "My Company"

console.log("PI:", PI)
console.log("Company:", COMPANY_NAME)

// Note: You cannot reassign const variables
// PI = 3.14 // This would cause an error

// 12. Variable Hoisting (var vs let/const)
console.log("\n12. Variable Hoisting:")
console.log("varVariable (hoisted):", varVariable) // undefined (not error)
var varVariable = "I'm hoisted"

// console.log("letVariable:", letVariable) // This would cause an error
let letVariable = "I'm not hoisted"

console.log("After declaration - var:", varVariable)
console.log("After declaration - let:", letVariable)

console.log("\n=== END OF VARIABLES LESSON ===")
