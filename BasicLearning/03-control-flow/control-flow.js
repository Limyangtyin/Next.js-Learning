// 🔀 Lesson 3: Control Flow - Examples

console.log("=== CONTROL FLOW LESSON ===")

// 1. If/Else Statements
console.log("\n1. If/Else Statements:")
const age = 20

if (age >= 18) {
  console.log("You are an adult")
} else if (age >= 13) {
  console.log("You are a teenager")
} else {
  console.log("You are a child")
}

// 2. Multiple Conditions
console.log("\n2. Multiple Conditions:")
const score = 85
const hasCompletedProject = true

if (score >= 90 && hasCompletedProject) {
  console.log("Grade: A")
} else if (score >= 80 && hasCompletedProject) {
  console.log("Grade: B")
} else if (score >= 70) {
  console.log("Grade: C")
} else {
  console.log("Grade: F")
}

// 3. Switch Statements
console.log("\n3. Switch Statements:")
const day = "Friday"

switch (day) {
  case 'Monday':
    console.log("Start of work week")
    break
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
    console.log("Mid week")
    break
  case 'Friday':
    console.log("TGIF!")
    break
  case 'Saturday':
  case 'Sunday':
    console.log("Weekend!")
    break
  default:
    console.log("Invalid day")
}

// 4. Ternary Operator
console.log("\n4. Ternary Operator:")
const userAge = 25
const message = userAge >= 18 ? "Adult" : "Minor"
console.log("Status:", message)

// Nested ternary
const grade = 85
const letterGrade = grade >= 90 ? "A" : 
                   grade >= 80 ? "B" : 
                   grade >= 70 ? "C" : "F"
console.log("Letter Grade:", letterGrade)

// 5. Logical Operators
console.log("\n5. Logical Operators:")

// AND (&&) - both conditions must be true
const hasLicense = true
const hasInsurance = true

if (hasLicense && hasInsurance) {
  console.log("Can drive legally")
} else {
  console.log("Cannot drive legally")
}

// OR (||) - at least one condition must be true
const isStudent = true
const isSenior = false

if (isStudent || isSenior) {
  console.log("Gets discount")
} else {
  console.log("No discount")
}

// NOT (!) - reverses the boolean value
const isLoggedIn = false

if (!isLoggedIn) {
  console.log("Please log in")
} else {
  console.log("Welcome!")
}

// 6. Comparison Operators
console.log("\n6. Comparison Operators:")
const a = 10
const b = 5

console.log("a > b:", a > b)        // true
console.log("a < b:", a < b)        // false
console.log("a >= b:", a >= b)      // true
console.log("a <= b:", a <= b)      // false
console.log("a == b:", a == b)      // false
console.log("a != b:", a != b)      // true
console.log("a === b:", a === b)    // false (strict equality)
console.log("a !== b:", a !== b)    // true (strict inequality)

// 7. Truthy and Falsy Values
console.log("\n7. Truthy and Falsy Values:")

// Falsy values: false, 0, "", null, undefined, NaN
console.log("Boolean of false:", Boolean(false))
console.log("Boolean of 0:", Boolean(0))
console.log("Boolean of '':", Boolean(""))
console.log("Boolean of null:", Boolean(null))
console.log("Boolean of undefined:", Boolean(undefined))
console.log("Boolean of NaN:", Boolean(NaN))

// Truthy values: everything else
console.log("Boolean of 1:", Boolean(1))
console.log("Boolean of 'hello':", Boolean("hello"))
console.log("Boolean of []:", Boolean([]))
console.log("Boolean of {}:", Boolean({}))

// 8. Short-circuit Evaluation
console.log("\n8. Short-circuit Evaluation:")

// && - returns first falsy value or last value
const result1 = false && "This won't be logged"
const result2 = "Hello" && "World"
console.log("false && 'text':", result1)
console.log("'Hello' && 'World':", result2)

// || - returns first truthy value or last value
const result3 = false || "This will be returned"
const result4 = "Hello" || "World"
console.log("false || 'text':", result3)
console.log("'Hello' || 'World':", result4)

// 9. Complex Conditions
console.log("\n9. Complex Conditions:")
const temperature = 25
const isRaining = false
const hasUmbrella = true

if (temperature > 30) {
  console.log("It's hot outside")
} else if (temperature < 10) {
  console.log("It's cold outside")
} else if (isRaining && !hasUmbrella) {
  console.log("Stay inside, it's raining and you don't have an umbrella")
} else if (isRaining && hasUmbrella) {
  console.log("You can go out with your umbrella")
} else {
  console.log("Nice weather for a walk")
}

// 10. Nested If Statements
console.log("\n10. Nested If Statements:")
const userRole = "admin"
const isAuthenticated = true
const hasPermission = true

if (isAuthenticated) {
  if (userRole === "admin") {
    if (hasPermission) {
      console.log("Full access granted")
    } else {
      console.log("Admin but no permission")
    }
  } else if (userRole === "user") {
    console.log("User access granted")
  } else {
    console.log("Unknown role")
  }
} else {
  console.log("Please authenticate first")
}

// 11. Switch with Multiple Cases
console.log("\n11. Switch with Multiple Cases:")
const month = 3

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter")
    break
  case 3:
  case 4:
  case 5:
    console.log("Spring")
    break
  case 6:
  case 7:
  case 8:
    console.log("Summer")
    break
  case 9:
  case 10:
  case 11:
    console.log("Fall")
    break
  default:
    console.log("Invalid month")
}

// 12. Conditional Assignment
console.log("\n12. Conditional Assignment:")
const user = {
  name: "John",
  age: 25,
  isVip: false
}

// Using logical operators for default values
const displayName = user.name || "Anonymous"
const userStatus = user.isVip ? "VIP" : "Regular"
const canVote = user.age >= 18 ? "Yes" : "No"

console.log("Display Name:", displayName)
console.log("User Status:", userStatus)
console.log("Can Vote:", canVote)

// 13. Type Checking in Conditions
console.log("\n13. Type Checking in Conditions:")
const value = "42"

if (typeof value === "string") {
  console.log("Value is a string")
  if (value.length > 0) {
    console.log("String is not empty")
  }
} else if (typeof value === "number") {
  console.log("Value is a number")
  if (value > 0) {
    console.log("Number is positive")
  }
} else {
  console.log("Value is neither string nor number")
}

// 14. Array and Object Checks
console.log("\n14. Array and Object Checks:")
const items = [1, 2, 3]
const person = { name: "Alice" }
const emptyArray = []
const emptyObject = {}

// Check if array has items
if (items.length > 0) {
  console.log("Array has items")
}

// Check if object has properties
if (Object.keys(person).length > 0) {
  console.log("Object has properties")
}

// Check for empty arrays/objects
if (emptyArray.length === 0) {
  console.log("Array is empty")
}

if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty")
}

console.log("\n=== END OF CONTROL FLOW LESSON ===")
