# 🔄 Lesson 4: Loops

## 🎯 What You'll Learn
- For loops
- While loops
- Do-while loops
- For...of loops
- For...in loops
- Array methods (map, filter, reduce, forEach)
- Loop control (break, continue)

## 🔧 Key Concepts

### **For Loop**
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

### **While Loop**
```javascript
let count = 0
while (count < 5) {
  console.log(count)
  count++
}
```

### **For...of Loop**
```javascript
const fruits = ['apple', 'banana', 'orange']
for (const fruit of fruits) {
  console.log(fruit)
}
```

### **Array Methods**
```javascript
const numbers = [1, 2, 3, 4, 5]

// Map - transform each element
const doubled = numbers.map(n => n * 2)

// Filter - select elements
const evens = numbers.filter(n => n % 2 === 0)

// Reduce - combine elements
const sum = numbers.reduce((total, n) => total + n, 0)
```

## 🚀 Practice Exercises

1. **Count from 1 to 10** using different loop types
2. **Sum all numbers** in an array
3. **Find the largest number** in an array
4. **Create a multiplication table** using nested loops

## 📁 Files in this folder:
- `loops.js` - Examples and practice
- `exercises.js` - Hands-on exercises
- `solutions.js` - Answer keys
