// 🔄 Lesson 4: Loops - Examples

console.log("=== LOOPS LESSON ===")

// 1. For Loop
console.log("\n1. For Loop:")
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`)
}

// 2. For Loop with Array
console.log("\n2. For Loop with Array:")
const fruits = ["apple", "banana", "orange", "grape"]
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`)
}

// 3. While Loop
console.log("\n3. While Loop:")
let count = 1
while (count <= 3) {
  console.log(`While count: ${count}`)
  count++
}

// 4. Do-While Loop
console.log("\n4. Do-While Loop:")
let number = 1
do {
  console.log(`Do-while count: ${number}`)
  number++
} while (number <= 3)

// 5. For...of Loop (Arrays)
console.log("\n5. For...of Loop (Arrays):")
const colors = ["red", "green", "blue", "yellow"]
for (const color of colors) {
  console.log(`Color: ${color}`)
}

// 6. For...in Loop (Objects)
console.log("\n6. For...in Loop (Objects):")
const person = {
  name: "John",
  age: 30,
  city: "New York"
}

for (const key in person) {
  console.log(`${key}: ${person[key]}`)
}

// 7. Nested Loops
console.log("\n7. Nested Loops:")
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i: ${i}, j: ${j}`)
  }
}

// 8. Loop Control - Break
console.log("\n8. Loop Control - Break:")
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Breaking at 5")
    break
  }
  console.log(`Number: ${i}`)
}

// 9. Loop Control - Continue
console.log("\n9. Loop Control - Continue:")
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping 3")
    continue
  }
  console.log(`Number: ${i}`)
}

// 10. Array Methods (Alternative to Loops)
console.log("\n10. Array Methods (Alternative to Loops):")
const numbers = [1, 2, 3, 4, 5]

// forEach - execute function for each element
numbers.forEach((number, index) => {
  console.log(`Index ${index}: ${number}`)
})

// map - transform each element
const doubled = numbers.map(num => num * 2)
console.log("Doubled:", doubled)

// filter - select elements that meet condition
const evens = numbers.filter(num => num % 2 === 0)
console.log("Even numbers:", evens)

// reduce - combine all elements into single value
const sum = numbers.reduce((total, num) => total + num, 0)
console.log("Sum:", sum)

// 11. Loop with Conditions
console.log("\n11. Loop with Conditions:")
const scores = [85, 92, 78, 96, 88, 73]
let passedCount = 0

for (const score of scores) {
  if (score >= 80) {
    passedCount++
    console.log(`Score ${score}: Passed`)
  } else {
    console.log(`Score ${score}: Failed`)
  }
}
console.log(`Total passed: ${passedCount}`)

// 12. Building Arrays with Loops
console.log("\n12. Building Arrays with Loops:")
const squares = []
for (let i = 1; i <= 5; i++) {
  squares.push(i * i)
}
console.log("Squares:", squares)

// 13. String Processing with Loops
console.log("\n13. String Processing with Loops:")
const text = "Hello World"
let vowelCount = 0
const vowels = "aeiouAEIOU"

for (let i = 0; i < text.length; i++) {
  if (vowels.includes(text[i])) {
    vowelCount++
  }
}
console.log(`Vowels in "${text}": ${vowelCount}`)

// 14. Object Processing with Loops
console.log("\n14. Object Processing with Loops:")
const students = {
  "Alice": 85,
  "Bob": 92,
  "Charlie": 78,
  "Diana": 96
}

let totalScore = 0
let studentCount = 0

for (const name in students) {
  totalScore += students[name]
  studentCount++
  console.log(`${name}: ${students[name]}`)
}

const average = totalScore / studentCount
console.log(`Average score: ${average}`)

// 15. Loop Patterns
console.log("\n15. Loop Patterns:")

// Pattern 1: Counting up
console.log("Counting up:")
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i))
}

// Pattern 2: Counting down
console.log("Counting down:")
for (let i = 5; i >= 1; i--) {
  console.log("*".repeat(i))
}

// Pattern 3: Pyramid
console.log("Pyramid:")
for (let i = 1; i <= 3; i++) {
  const spaces = " ".repeat(3 - i)
  const stars = "*".repeat(2 * i - 1)
  console.log(spaces + stars)
}

// 16. Performance Considerations
console.log("\n16. Performance Considerations:")
const largeArray = Array.from({length: 1000}, (_, i) => i)

// Less efficient - accessing length property each iteration
console.time("Less efficient")
for (let i = 0; i < largeArray.length; i++) {
  // Do something
}
console.timeEnd("Less efficient")

// More efficient - cache length
console.time("More efficient")
const length = largeArray.length
for (let i = 0; i < length; i++) {
  // Do something
}
console.timeEnd("More efficient")

// 17. Error Handling in Loops
console.log("\n17. Error Handling in Loops:")
const mixedArray = [1, "hello", null, 42, undefined, "world"]

for (let i = 0; i < mixedArray.length; i++) {
  try {
    const value = mixedArray[i]
    if (typeof value === "number") {
      console.log(`Number: ${value}`)
    } else if (typeof value === "string") {
      console.log(`String: ${value}`)
    } else {
      console.log(`Other type: ${typeof value}`)
    }
  } catch (error) {
    console.log(`Error processing index ${i}: ${error.message}`)
  }
}

// 18. Loop with Functions
console.log("\n18. Loop with Functions:")
function processNumber(num) {
  return num * 2 + 1
}

const inputNumbers = [1, 2, 3, 4, 5]
const processedNumbers = []

for (const num of inputNumbers) {
  processedNumbers.push(processNumber(num))
}

console.log("Processed numbers:", processedNumbers)

console.log("\n=== END OF LOOPS LESSON ===")
