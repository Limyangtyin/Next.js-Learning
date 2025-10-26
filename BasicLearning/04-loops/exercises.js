// 📝 Lesson 4: Loops - EXERCISES
// Complete these exercises to practice what you've learned

console.log("=== LOOPS EXERCISES ===")

// Exercise 1: Basic For Loop
console.log("\nExercise 1: Basic For Loop")
// TODO: Create a for loop that prints numbers from 1 to 10
// - Each number should be on a new line
// - Format: "Number: X"

// Your code here:
for(let i = 1; i < 11; i++){
    console.log(`Number: ${i}`);
}

// Exercise 2: Countdown Loop
console.log("\nExercise 2: Countdown Loop")
// TODO: Create a for loop that counts down from 10 to 1
// - Print each number with "Countdown: X"
// - After the loop, print "Blast off!"

// Your code here:
for(let i = 10; i >= 1; i--){
    console.log(`Countdown: ${i}`)
}

console.log("Blast off!")


// Exercise 3: Array Iteration
console.log("\nExercise 3: Array Iteration")
// TODO: Create an array of your favorite foods (at least 5 items)
// - Use a for loop to print each food with its index
// - Format: "Food 1: [food name]"

// Your code here:
let favFood = ["Burger", "Fries", "Chicken Wings", "Ice Cream", "Snacks"]
for(let i = 0; i < favFood.length; i++){
    console.log(`Food ${i+1}: ${favFood[i]}`);
}

// Exercise 4: While Loop
console.log("\nExercise 4: While Loop")
// TODO: Create a while loop that prints even numbers from 2 to 20
// - Use a counter variable starting at 2
// - Increment by 2 each time
// - Format: "Even number: X"

// Your code here:
let x = 2
while(x <= 20){
    console.log(`Even number: ${x}`)
    x += 2
}

// Exercise 5: Do-While Loop
console.log("\nExercise 5: Do-While Loop")
// TODO: Create a do-while loop that asks for a number (simulate with a counter)
// - Start with a counter at 1
// - Print "Attempt: X" for each iteration
// - Continue until counter reaches 5
// - After the loop, print "Done!"

// Your code here:
let counter = 1;
do{
    console.log(`Attempt: ${counter}`)
    counter++
} while(counter < 6) 

console.log("Done!")


// Exercise 6: For...of Loop
console.log("\nExercise 6: For...of Loop")
// TODO: Create an array of colors: ["red", "green", "blue", "yellow", "purple"]
// - Use for...of loop to print each color
// - Format: "Color: [color name]"

// Your code here:
const colorArray = ["red", "green", "blue", "yellow", "purple"]

for(let i of colorArray){
    console.log(`Color: ${i}`)
}

// Exercise 7: For...in Loop
console.log("\nExercise 7: For...in Loop")
// TODO: Create an object representing a car with properties:
// - make: "Toyota"
// - model: "Camry"
// - year: 2020
// - color: "blue"
// - Use for...in loop to print each property and value
// - Format: "[property]: [value]"

// Your code here:
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"
}

for(let i in car){
    console.log(`${i}: ${car[i]}`)
}

// Exercise 8: Nested Loops
console.log("\nExercise 8: Nested Loops")
// TODO: Create nested loops to print a multiplication table
// - Outer loop: 1 to 5
// - Inner loop: 1 to 5
// - Print: "X × Y = Z"
// - Only print the first 3 rows and 3 columns

// Your code here:
for(let i = 1; i < 6; i++){
    for(let j = 1; j < 6; j++){
        if(i < 4 && j < 4){
            console.log(`${i} x ${j} = ${i*j}`)
        }
    }
}

// Exercise 9: Loop with Break
console.log("\nExercise 9: Loop with Break")
// TODO: Create a for loop that prints numbers 1 to 10
// - Break the loop when you reach 7
// - Print "Stopped at 7" after breaking
// - Format: "Number: X"

// Your code here:
let i = 1;
while(i <= 10){
    if(i === 7){
        console.log("Stopped at 7")
        break
    }
    console.log(`Number: ${i}`)
    i++
}

// Exercise 10: Loop with Continue
console.log("\nExercise 10: Loop with Continue")
// TODO: Create a for loop that prints numbers 1 to 10
// - Skip numbers 3 and 7 (use continue)
// - Print "Skipped X" when skipping
// - Format: "Number: X" for others

// Your code here:
for(let i = 1; i <= 10; i++){
    if(i === 3 || i === 7){
        console.log(`Skipped ${i}`)
        continue
    }
    console.log(`Number: ${i}`)
}

// Exercise 11: Sum of Numbers
console.log("\nExercise 11: Sum of Numbers")
// TODO: Create an array of numbers: [5, 10, 15, 20, 25]
// - Use a for loop to calculate the sum
// - Print each number and running total
// - Format: "Number: X, Running total: Y"
// - After loop, print "Final sum: Z"

// Your code here:
const numArrays = [5, 10, 15, 20, 25]
let sum = 0
for(let i = 0; i < numArrays.length; i++){
    sum += numArrays[i]
    console.log(`Number: ${numArrays[i]}, Running total: ${sum}`)
}
console.log(`Final sum: ${sum}`)

// Exercise 12: Find Maximum
console.log("\nExercise 12: Find Maximum")
// TODO: Create an array of numbers: [45, 23, 78, 12, 67, 34, 89]
// - Use a for loop to find the maximum number
// - Print each number and current maximum
// - Format: "Number: X, Current max: Y"
// - After loop, print "Maximum number: Z"

// Your code here:
const numArray = [45, 23, 78, 12, 67, 34, 89]
let max = numArray[0]
for(let i = 0; i < numArray.length; i++){
    if(numArray[i] > max){
        max = numArray[i]
    }
    console.log(`Number: ${numArray[i]}, Current max: ${max}`)
}
console.log(`Maximum number: ${max}`)

// Exercise 13: String Processing
console.log("\nExercise 13: String Processing")
// TODO: Create a string: "Hello World"
// - Use a for loop to count vowels (a, e, i, o, u)
// - Print each character and vowel count
// - Format: "Character: X, Vowel count: Y"
// - After loop, print "Total vowels: Z"

// Your code here:
const string = "Hello World"
let count = 0
const vowels = ["a", "e", "i", "o", "u"]

for(let i = 0; i < string.length; i++){
    if(vowels.includes(string[i].toLowerCase())){
        count++
    }
    console.log(`Character: ${string[i]}, Vowel count: ${count}`)
}
console.log(`Total vowels: ${count}`)

// Exercise 14: Array Building
console.log("\nExercise 14: Array Building")
// TODO: Create an empty array called 'squares'
// - Use a for loop to add squares of numbers 1 to 10
// - Print each number and its square
// - Format: "Number: X, Square: Y"
// - After loop, print the complete squares array

// Your code here:
let squares = []
for(let i = 1; i <= 10; i++){
    let square = i*i
    console.log(`Number: ${i}, Square: ${square}`)
    squares.push(square)
}
console.log(squares)

// Exercise 15: Object Processing
console.log("\nExercise 15: Object Processing")
// TODO: Create an object with student grades:
// - Alice: 85, Bob: 92, Charlie: 78, Diana: 96, Eve: 88
// - Use for...in loop to find the highest grade
// - Print each student and their grade
// - Format: "Student: X, Grade: Y"
// - After loop, print "Highest grade: Z by [student name]"

// Your code here:
let studentGrade = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
    Diana: 96,
    Eve: 88
}
let highGrade = 0
let highGradeStudent = ""

for(let i in studentGrade){
    if(studentGrade[i] > highGrade){
        highGrade = studentGrade[i]
        highGradeStudent = i
    }
    console.log(`Student: ${i}, Grade: ${studentGrade[i]}`)
}
console.log(`Highest grade: ${highGrade} by ${highGradeStudent}`)

// Exercise 16: Pattern Printing
console.log("\nExercise 16: Pattern Printing")
// TODO: Create a pattern using nested loops
// - Print a right triangle with asterisks
// - 5 rows, increasing number of asterisks per row
// - Use nested loops (outer for rows, inner for asterisks)
// - Each row should have row number of asterisks

// Your code here:
for(let i = 0; i <5; i++){
    let row = ""
    for(let j = 0; j <= i; j++){
        row += "*"
    }
    console.log(row)
}


// Exercise 17: Array Methods Alternative
console.log("\nExercise 17: Array Methods Alternative")
// TODO: Create an array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// - Use forEach to print each number doubled
// - Use map to create a new array of squared numbers
// - Use filter to create an array of even numbers
// - Use reduce to calculate the sum
// - Print all results

// Your code here:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.forEach(i => console.log(`Doubled number: ${i+i}`));
let squareNum = array.map(i => i*i);
let evenNum = array.filter(i => i % 2 === 0)
let sumNum = array.reduce((total, i) => total + i, 0)
console.log(squareNum)
console.log(evenNum)
console.log(sumNum)

// Exercise 18: Loop with Functions
console.log("\nExercise 18: Loop with Functions")
// TODO: Create a function called 'isPrime' that checks if a number is prime
// - Takes a number parameter
// - Returns true if prime, false otherwise
// - Use a for loop to check divisibility from 2 to number-1
// - Test the function with numbers 2 to 20
// - Print each number and whether it's prime

// Your code here:
function isPrime(num){
    if(num < 2){
        return false
    }
    for(let i = 2; i < num; i++){ 
        if(num % i === 0){
            return false
        }
    }
    
    return true
}

for(let num = 2; num <= 20; num++){
    console.log(`Number: ${num}, Prime: ${isPrime(num)}`)
}

// Exercise 19: Complex Loop Logic
console.log("\nExercise 19: Complex Loop Logic")
// TODO: Create a loop that processes a mixed array
// - Array: [1, "hello", 42, "world", 3.14, "test", 100]
// - For each element, check its type
// - If it's a number, add it to a sum
// - If it's a string, add it to a concatenated string
// - Print each element and running totals
// - After loop, print final sum and concatenated string

// Your code here:
let arrays = [1, "hello", 42, "world", 3.14, "test", 100]
let sumNums = 0  
let concatenated = ""  

for(let i = 0; i < arrays.length; i++){
    if(typeof arrays[i] === "number"){
        sumNums += arrays[i]
    } 
    if(typeof arrays[i] === "string"){
        concatenated += arrays[i]
    }
    console.log(`Element: ${arrays[i]}, Type: ${typeof arrays[i]}, Sum: ${sumNums}, Concatenated: ${concatenated}`)
}
console.log(`Final sum: ${sumNums}, Concatenated string: ${concatenated}`)

// Exercise 20: Performance Challenge
console.log("\nExercise 20: Performance Challenge")
// TODO: Create two different approaches to find even numbers
// - Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// - Approach 1: Use a for loop with if condition
// - Approach 2: Use forEach method
// - Time both approaches using console.time()
// - Print the results and execution times

// Your code here:
let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.time('For Loop') 
let evenNumbersForLoop = []
for(let i = 0; i < testArray.length; i++){
    if(testArray[i] % 2 === 0){
        evenNumbersForLoop.push(testArray[i])
    }
}
console.timeEnd('For Loop') 
console.log('For Loop result:', evenNumbersForLoop)


console.time('forEach Method') 
let evenNumbersForEach = []
testArray.forEach(num => {
    if(num % 2 === 0){
        evenNumbersForEach.push(num)
    }
})
console.timeEnd('forEach Method') 
console.log('forEach result:', evenNumbersForEach)
    


console.log("\n=== END OF EXERCISES ===")
console.log("Great job! Check your solutions against the solutions.js file!")
