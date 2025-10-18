// 📝 Lesson 3: Control Flow - EXERCISES
// Complete these exercises to practice what you've learned

console.log("=== CONTROL FLOW EXERCISES ===")

// Exercise 1: Basic If/Else
console.log("\nExercise 1: Basic If/Else")
// TODO: Create a function called 'checkAge' that takes an age parameter
// - If age is 18 or older, return "Adult"
// - If age is 13-17, return "Teenager" 
// - If age is under 13, return "Child"
// - Test with different ages

// Your code here:

// Exercise 2: Grade Calculator
console.log("\nExercise 2: Grade Calculator")
// TODO: Create a function called 'calculateGrade' that takes a score (0-100)
// - 90-100: return "A"
// - 80-89: return "B"
// - 70-79: return "C"
// - 60-69: return "D"
// - Below 60: return "F"
// - Test with different scores

// Your code here:

// Exercise 3: Switch Statement
console.log("\nExercise 3: Switch Statement")
// TODO: Create a function called 'getDayType' that takes a day of the week
// - Use switch statement to return:
//   - "Weekend" for Saturday and Sunday
//   - "Workday" for Monday through Friday
//   - "Invalid" for anything else
// - Test with different days

// Your code here:

// Exercise 4: Ternary Operator
console.log("\nExercise 4: Ternary Operator")
// TODO: Create a function called 'getDiscount' that takes age and isStudent
// - Use ternary operator to return:
//   - "Senior Discount" if age >= 65
//   - "Student Discount" if isStudent is true
//   - "No Discount" otherwise
// - Test with different combinations

// Your code here:

// Exercise 5: Logical Operators
console.log("\nExercise 5: Logical Operators")
// TODO: Create a function called 'canDrive' that takes age, hasLicense, hasInsurance
// - Return true only if:
//   - Age is 18 or older AND
//   - Has license AND
//   - Has insurance
// - Return false otherwise
// - Test with different combinations

// Your code here:

// Exercise 6: Multiple Conditions
console.log("\nExercise 6: Multiple Conditions")
// TODO: Create a function called 'weatherAdvice' that takes temperature and isRaining
// - If temperature > 30: return "Stay cool, it's hot!"
// - If temperature < 10: return "Bundle up, it's cold!"
// - If isRaining is true: return "Don't forget your umbrella!"
// - Otherwise: return "Nice weather for outdoor activities!"
// - Test with different conditions

// Your code here:

// Exercise 7: Nested Conditions
console.log("\nExercise 7: Nested Conditions")
// TODO: Create a function called 'accessLevel' that takes role, isAuthenticated, hasPermission
// - First check if user is authenticated
//   - If not authenticated: return "Please log in"
//   - If authenticated, check role:
//     - If admin and has permission: return "Full access"
//     - If admin but no permission: return "Admin access denied"
//     - If user: return "User access"
//     - Otherwise: return "Unknown role"
// - Test with different combinations

// Your code here:

// Exercise 8: Comparison Operators
console.log("\nExercise 8: Comparison Operators")
// TODO: Create a function called 'compareNumbers' that takes two numbers
// - Return an object with these properties:
//   - isEqual: true if numbers are equal (use ===)
//   - isGreater: true if first number is greater
//   - isLess: true if first number is less
//   - difference: absolute difference between numbers
// - Test with different number pairs

// Your code here:

// Exercise 9: Truthy/Falsy Values
console.log("\nExercise 9: Truthy/Falsy Values")
// TODO: Create a function called 'checkValue' that takes any value
// - Return an object with:
//   - value: the original value
//   - isTruthy: true if value is truthy
//   - type: the data type of the value
//   - length: length if it's a string/array, undefined otherwise
// - Test with: "", "hello", 0, 42, null, undefined, [], [1,2,3], {}, {name: "test"}

// Your code here:

// Exercise 10: Short-circuit Evaluation
console.log("\nExercise 10: Short-circuit Evaluation")
// TODO: Create a function called 'getDefaultValue' that takes value and defaultValue
// - Use || operator to return value if it's truthy, otherwise return defaultValue
// - Create another function called 'checkAndLog' that takes condition and message
// - Use && operator to log message only if condition is true
// - Test both functions

// Your code here:

// Exercise 11: Season Detector
console.log("\nExercise 11: Season Detector")
// TODO: Create a function called 'getSeason' that takes a month number (1-12)
// - Use switch statement to return the season:
//   - Winter: Dec(12), Jan(1), Feb(2)
//   - Spring: Mar(3), Apr(4), May(5)
//   - Summer: Jun(6), Jul(7), Aug(8)
//   - Fall: Sep(9), Oct(10), Nov(11)
// - Return "Invalid month" for numbers outside 1-12
// - Test with different months

// Your code here:

// Exercise 12: Password Validator
console.log("\nExercise 12: Password Validator")
// TODO: Create a function called 'validatePassword' that takes a password string
// - Return an object with:
//   - isValid: true if password meets all criteria
//   - errors: array of error messages
// - Criteria:
//   - At least 8 characters long
//   - Contains at least one uppercase letter
//   - Contains at least one lowercase letter
//   - Contains at least one number
// - Test with different passwords

// Your code here:

// Exercise 13: Temperature Converter
console.log("\nExercise 13: Temperature Converter")
// TODO: Create a function called 'convertTemperature' that takes temperature and unit
// - unit can be "C" (Celsius) or "F" (Fahrenheit)
// - If unit is "C", convert to Fahrenheit: F = (C * 9/5) + 32
// - If unit is "F", convert to Celsius: C = (F - 32) * 5/9
// - Return an object with both temperatures and the conversion
// - Test with different temperatures

// Your code here:

// Exercise 14: Array/Object Validation
console.log("\nExercise 14: Array/Object Validation")
// TODO: Create a function called 'validateData' that takes any value
// - Return an object with:
//   - isEmpty: true if value is empty (empty string, array, or object)
//   - hasContent: true if value has content
//   - type: the data type
//   - size: length for strings/arrays, number of keys for objects, undefined for others
// - Test with: "", "hello", [], [1,2,3], {}, {name: "test"}, null, undefined

// Your code here:

// Exercise 15: Complex Decision Tree
console.log("\nExercise 15: Complex Decision Tree")
// TODO: Create a function called 'recommendActivity' that takes weather, temperature, timeOfDay, isWeekend
// - Return a recommended activity based on conditions:
//   - If raining: "Stay indoors and read a book"
//   - If temperature > 30: "Go swimming or stay in air conditioning"
//   - If temperature < 10: "Stay warm indoors with hot chocolate"
//   - If isWeekend and timeOfDay === "morning": "Go for a hike"
//   - If isWeekend and timeOfDay === "evening": "Go to a restaurant"
//   - If timeOfDay === "morning": "Go for a jog"
//   - If timeOfDay === "afternoon": "Have a picnic"
//   - If timeOfDay === "evening": "Watch a movie"
//   - Otherwise: "Take a relaxing walk"
// - Test with different combinations

// Your code here:

console.log("\n=== END OF EXERCISES ===")
console.log("Great job! Check your solutions against the solutions.js file!")
