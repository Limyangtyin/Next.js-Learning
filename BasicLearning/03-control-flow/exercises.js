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
function checkAge(age){
    if (age >= 18)
        return "Adult"
    else if (age >= 13 && age <= 17)
        return "Teenager"
    else if (age < 13 && age >= 1)
        return "Child"
    else if (age < 1)
        return "The baby is not even born yet!"
}

console.log(checkAge(12))
console.log(checkAge(15))
console.log(checkAge(20))
console.log(checkAge(30))
console.log(checkAge(0))

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
function calculateGrade(score){
    if (score >= 90)
        return "A"
    else if (score < 90 && score >= 80)
        return "B"
    else if (score < 80 && score >= 70)
        return "C"
    else if (score < 70 && score >= 60)
        return "D"
    else if (score < 60)
        return "F"
}

console.log(calculateGrade(91))
console.log(calculateGrade(86))
console.log(calculateGrade(73))
console.log(calculateGrade(69))
console.log(calculateGrade(60))
console.log(calculateGrade(59))

// Exercise 3: Switch Statement
console.log("\nExercise 3: Switch Statement")
// TODO: Create a function called 'getDayType' that takes a day of the week
// - Use switch statement to return:
//   - "Weekend" for Saturday and Sunday
//   - "Workday" for Monday through Friday
//   - "Invalid" for anything else
// - Test with different days

// Your code here:
function getDayType(day){
    switch (day){
        case "Monday":
            return "Workday"
        case "Tuesday":
            return "Workday"
        case "Wednesday":
            return "Workday"
        case "Thursday":
            return "Workday"
        case "Friday":
            return "Workday"
        case "Saturday":
            return "Weekend"
        case "Sunday":
            return "Weekend"
        default:
            return "Invalid"
    }
}

console.log(getDayType("Monday"))
console.log(getDayType("Tuesday"))
console.log(getDayType("Wednesday"))
console.log(getDayType("Thursday"))
console.log(getDayType("Friday"))
console.log(getDayType("Saturday"))
console.log(getDayType("Sunday"))
console.log(getDayType("HAHAHA"))

// Exercise 4: Ternary Operator
console.log("\nExercise 4: Ternary Operator")
// TODO: Create a function called 'getDiscount' that takes age and isStudent
// - Use ternary operator to return:
//   - "Senior Discount" if age >= 65
//   - "Student Discount" if isStudent is true
//   - "No Discount" otherwise
// - Test with different combinations

// Your code here:
function getDiscount(age, isStudent){
    return age >= 65 ? "Senior Discount" : isStudent ? "Student Discount" : "No Discount"
}

console.log(getDiscount(65, false))
console.log(getDiscount(20, true))
console.log(getDiscount(40, false))
console.log(getDiscount(115, true))

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
function canDrive(age, hasLicense, hasInsurance){
    if (age >= 18 && hasLicense === true && hasInsurance === true)
        return true 
    else return false
}

console.log(canDrive(18, true, true))
console.log(canDrive(17, true, true))
console.log(canDrive(20, false, true))
console.log(canDrive(18, true, false))

// Exercise 6: Multiple Conditions
console.log("\nExercise 6: Multiple Conditions")
// TODO: Create a function called 'weatherAdvice' that takes temperature and isRaining
// - If temperature > 30: return "Stay cool, it's hot!"
// - If temperature < 10: return "Bundle up, it's cold!"
// - If isRaining is true: return "Don't forget your umbrella!"
// - Otherwise: return "Nice weather for outdoor activities!"
// - Test with different conditions

// Your code here:
function weatherAdvice(temp, isRaining){
    if (temp > 30)
        return "Stay cool, it's hot!"
    else if (temp < 10)
        return "Bundle up, it's cold!"
    else if (isRaining === true)
        return "Don't forget your umbrella!"
    else return "Nice weather for outdoor activities!"
}

console.log(weatherAdvice(35, false))
console.log(weatherAdvice(30, false))
console.log(weatherAdvice(28, true))
console.log(weatherAdvice(9, true))
console.log(weatherAdvice(15, false))

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
function accessLevel(role, isAuthenticated, hasPermission){
    if (isAuthenticated === true)
        if(role === 'admin')
            if(hasPermission === true)
                return "Full access"
            else return "Admin access denied"
        else if(role === 'user') 
            return "User access"
        else return "Unknown role"
    else return "Please log in"
}

console.log(accessLevel('admin', true, true))
console.log(accessLevel('admin', true, false))
console.log(accessLevel('user', true, false))
console.log(accessLevel('Yang', true, true))
console.log(accessLevel('Yang', false, false))

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
function compareNumbers(a, b){
    return {
        isEqual: a === b,
        isGreater: a > b,
        isLess: a < b,
        difference: Math.abs(a - b)
    }
}

console.log(compareNumbers(100, 10))

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
function checkValue(a){
    return {
        value: a,
        isTruthy: Boolean(a),
        type: typeof a,
        length: a?.length
    };
}

console.log(checkValue(""))
console.log(checkValue("hello"))
console.log(checkValue(0))
console.log(checkValue(42))
console.log(checkValue(null))
console.log(checkValue(undefined))
console.log(checkValue([]))
console.log(checkValue([1, 2, 3]))
console.log(checkValue({}))
console.log(checkValue({name: "test"}))

// Exercise 10: Short-circuit Evaluation
console.log("\nExercise 10: Short-circuit Evaluation")
// TODO: Create a function called 'getDefaultValue' that takes value and defaultValue
// - Use || operator to return value if it's truthy, otherwise return defaultValue
// - Create another function called 'checkAndLog' that takes condition and message
// - Use && operator to log message only if condition is true
// - Test both functions

// Your code here:
function getDefaultValue(value, dValue){
    return value || dValue
}

function checkAndLog(c, m){
    return c && console.log(m) 
}

console.log(getDefaultValue(10, 50))
console.log(getDefaultValue(null, 50))
console.log(checkAndLog(1 > 10, "HAHAHAHA"))
console.log(checkAndLog(100 > 10, "HAHAHAHA"))

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
function getSeason(month){
    switch (month){
        case 1:
            return "Winter"
        case 2:
            return "Winter"
        case 3:
            return "Spring"
        case 4:
            return "Spring"
        case 5:
            return "Spring"
        case 6:
            return "Summer"
        case 7:
            return "Summer"
        case 8:
            return "Summer"
        case 9:
            return "Fall"
        case 10:
            return "Fall"
        case 11:
            return "Fall"
        case 12:
            return "Winter"
        default: 
            return "Invalid month"
    }
}

console.log(getSeason(1))
console.log(getSeason(2))
console.log(getSeason(3))
console.log(getSeason(4))
console.log(getSeason(5))
console.log(getSeason(6))
console.log(getSeason(7))
console.log(getSeason(8))
console.log(getSeason(9))
console.log(getSeason(10))
console.log(getSeason(11))
console.log(getSeason(12))
console.log(getSeason(100))

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
function validatePassword(p) {
    let errors = []

    if (p.length < 8)
        errors.push("Password must be at least 8")
    if (!/[A-Z]/.test(p))
        errors.push("Password must contain at least one Uppercase")
    if (!/[a-z]/.test(p))
        errors.push("Password must contain at least one Lowercase")
    if (!/[0-9]/.test(p))
        errors.push("Password must contain at least one number")
    return {
        isValid: errors.length === 0,
        errors: errors
    }
}

console.log(validatePassword("ME"))
console.log(validatePassword("12345678"))
console.log(validatePassword("123456MeHAHAHA"))

// Exercise 13: Temperature Converter
console.log("\nExercise 13: Temperature Converter")
// TODO: Create a function called 'convertTemperature' that takes temperature and unit
// - unit can be "C" (Celsius) or "F" (Fahrenheit)
// - If unit is "C", convert to Fahrenheit: F = (C * 9/5) + 32
// - If unit is "F", convert to Celsius: C = (F - 32) * 5/9
// - Return an object with both temperatures and the conversion
// - Test with different temperatures

// Your code here:
function convertTemperature(temp, unit){
    let newTemp;
    let newUnit;

    if(unit === "C"){
        newTemp = (temp * 9/5) + 32
        newUnit = "F"
    }
    else if(unit === "F"){
        newTemp = (temp -32) * 5/9
        newUnit = "C"
    }

    return {
        oriTemp: `${temp} ${unit}`,
        convertTemp: `${newTemp.toFixed(2)} ${newUnit}`
    }
}

console.log(convertTemperature(15, "C"))
console.log(convertTemperature(40, "F"))

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
function validateData(a) {
    let isEmpty;
    let hasContent;
    let size;
    
    if(a === null){
        isEmpty = true
    }
    else{
        isEmpty = false
    }

    if(a !== null && a !== undefined){
        hasContent = true
    }
    else{
        hasContent = false
    }

    if(a === null || a === undefined){
        size = "Null/Undefined value!"
    }
    else{
        size = a.length
    }

    return {
        isEmpty: isEmpty,
        hasContent: hasContent,
        type: typeof a,
        size: size
    }
}

console.log(validateData(""))
console.log(validateData("hello"))
console.log(validateData([]))
console.log(validateData([1, 2, 3]))
console.log(validateData({}))
console.log(validateData({name: "test"}))
console.log(validateData(null))
console.log(validateData(undefined))

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

function recommendActivity(weather, temp, timeOfDay, isWeekend){
    const rainyCondition = ["rain", "raining", "thunderstorm"]

    if(rainyCondition.includes(weather)){
        return "Stay indoors and read a book"
    } else if(temp > 30){
        return "Go swimming or stay in air conditioning"
    } else if(temp < 10){
        return "Stay warm infoors with hot chocolate"
    } else if(isWeekend === true && timeOfDay === "morning"){
        return "Go for a hike"
    } else if(isWeekend === true && timeOfDay === "everning"){
        return "Go to a restaurant"
    } else if(timeOfDay === "morning"){
        return "Go for a jog"
    } else if(timeOfDay === "afternoon"){
        return "Have a picnic"
    } else if(timeOfDay === "evening"){
        return "Watch a movie"
    } else{
        return "Take a relaxing walk"
    }
}

// Test cases for recommendActivity
console.log("\nTesting recommendActivity:")
console.log(recommendActivity("rain", 20, "morning", false))          // Should: Stay indoors and read a book
console.log(recommendActivity("thunderstorm", 25, "evening", true))   // Should: Stay indoors and read a book
console.log(recommendActivity("sunny", 35, "afternoon", false))       // Should: Go swimming or stay in air conditioning
console.log(recommendActivity("clear", 5, "evening", true))           // Should: Stay warm indoors with hot chocolate
console.log(recommendActivity("sunny", 20, "morning", true))          // Should: Go for a hike
console.log(recommendActivity("clear", 25, "evening", true))          // Should: Go to a restaurant
console.log(recommendActivity("sunny", 15, "morning", false))         // Should: Go for a jog
console.log(recommendActivity("cloudy", 22, "afternoon", false))      // Should: Have a picnic
console.log(recommendActivity("clear", 18, "evening", false))         // Should: Watch a movie
console.log(recommendActivity("windy", 20, "night", false))           // Should: Take a relaxing walk

console.log("\n=== END OF EXERCISES ===")
console.log("Great job! Check your solutions against the solutions.js file!")
