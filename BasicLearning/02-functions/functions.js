// 🔧 Lesson 2: Functions - Examples

console.log("=== FUNCTIONS LESSON ===")

// 1. Function Declaration
console.log("\n1. Function Declaration:")
function greet(name) {
  return `Hello, ${name}!`
}

console.log(greet("John"))
console.log(greet("Alice"))

// 2. Function Expression
console.log("\n2. Function Expression:")
const sayGoodbye = function(name) {
  return `Goodbye, ${name}!`
}

console.log(sayGoodbye("Bob"))

// 3. Arrow Functions
console.log("\n3. Arrow Functions:")
const add = (a, b) => {
  return a + b
}

const multiply = (a, b) => a * b // Implicit return

const square = x => x * x // Single parameter, no parentheses needed

console.log("Add:", add(5, 3))
console.log("Multiply:", multiply(4, 6))
console.log("Square:", square(7))

// 4. Functions with Multiple Parameters
console.log("\n4. Multiple Parameters:")
function createUser(name, age, email) {
  return {
    name: name,
    age: age,
    email: email,
    isActive: true
  }
}

const user1 = createUser("John", 25, "john@example.com")
const user2 = createUser("Alice", 30, "alice@example.com")

console.log("User 1:", user1)
console.log("User 2:", user2)

// 5. Default Parameters
console.log("\n5. Default Parameters:")
function greetWithDefault(name, greeting = "Hello") {
  return `${greeting}, ${name}!`
}

console.log(greetWithDefault("John")) // Uses default greeting
console.log(greetWithDefault("Alice", "Hi")) // Uses custom greeting

// 6. Rest Parameters
console.log("\n6. Rest Parameters:")
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}

console.log("Sum of 1,2,3:", sumAll(1, 2, 3))
console.log("Sum of 1,2,3,4,5:", sumAll(1, 2, 3, 4, 5))

// 7. Return Values
console.log("\n7. Return Values:")
function calculateArea(length, width) {
  return length * width
}

function isEven(number) {
  return number % 2 === 0
}

const area = calculateArea(10, 5)
const evenCheck = isEven(8)

console.log("Area:", area)
console.log("Is 8 even?", evenCheck)

// 8. Functions that Don't Return (void functions)
console.log("\n8. Void Functions:")
function logMessage(message) {
  console.log(`[LOG]: ${message}`)
}

function displayUserInfo(user) {
  console.log(`Name: ${user.name}`)
  console.log(`Age: ${user.age}`)
  console.log(`Email: ${user.email}`)
}

logMessage("This is a log message")
displayUserInfo(user1)

// 9. Function Scope
console.log("\n9. Function Scope:")
function outerFunction() {
  let outerVariable = "I'm in the outer function"
  
  function innerFunction() {
    let innerVariable = "I'm in the inner function"
    console.log("Inner can see outer:", outerVariable)
    console.log("Inner can see inner:", innerVariable)
  }
  
  innerFunction()
  console.log("Outer can see outer:", outerVariable)
  // console.log("Outer can see inner:", innerVariable) // This would cause an error
}

outerFunction()

// 10. Higher-Order Functions
console.log("\n10. Higher-Order Functions:")
function createMultiplier(factor) {
  return function(number) {
    return number * factor
  }
}

const double = createMultiplier(2)
const triple = createMultiplier(3)

console.log("Double 5:", double(5))
console.log("Triple 4:", triple(4))

// 11. Callback Functions
console.log("\n11. Callback Functions:")
function processArray(array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]))
  }
  return result
}

const numbers = [1, 2, 3, 4, 5]
const doubled = processArray(numbers, x => x * 2)
const squared = processArray(numbers, x => x * x)

console.log("Original:", numbers)
console.log("Doubled:", doubled)
console.log("Squared:", squared)

// 12. Array Methods with Callbacks
console.log("\n12. Array Methods with Callbacks:")
const fruits = ["apple", "banana", "orange", "grape"]

// Map - transform each element
const upperFruits = fruits.map(fruit => fruit.toUpperCase())
console.log("Uppercase fruits:", upperFruits)

// Filter - select elements that meet condition
const longFruits = fruits.filter(fruit => fruit.length > 5)
console.log("Long fruits:", longFruits)

// Find - find first element that meets condition
const foundFruit = fruits.find(fruit => fruit.startsWith("b"))
console.log("Fruit starting with 'b':", foundFruit)

// Reduce - combine all elements into single value
const totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0)
console.log("Total length of all fruits:", totalLength)

// 13. Function as Object Property (Method)
console.log("\n13. Methods:")
const calculator = {
  add: function(a, b) {
    return a + b
  },
  subtract: function(a, b) {
    return a - b
  },
  multiply: function(a, b) {
    return a * b
  },
  divide: function(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero"
  }
}

console.log("Calculator add:", calculator.add(10, 5))
console.log("Calculator subtract:", calculator.subtract(10, 5))
console.log("Calculator multiply:", calculator.multiply(10, 5))
console.log("Calculator divide:", calculator.divide(10, 5))

// 14. Arrow Functions in Objects
console.log("\n14. Arrow Functions in Objects:")
const person = {
  name: "John",
  age: 25,
  greet: () => {
    return `Hello, I'm ${this.name}` // 'this' doesn't work as expected in arrow functions
  },
  greetProperly: function() {
    return `Hello, I'm ${this.name}`
  }
}

console.log("Arrow function greet:", person.greet())
console.log("Regular function greet:", person.greetProperly())

// 15. Immediately Invoked Function Expression (IIFE)
console.log("\n15. IIFE:")
const result = (function() {
  const secret = "This is private"
  return "IIFE executed successfully"
})()

console.log("IIFE result:", result)
// console.log(secret) // This would cause an error - secret is not accessible

console.log("\n=== END OF FUNCTIONS LESSON ===")
