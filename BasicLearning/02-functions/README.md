# 🔧 Lesson 2: Functions

## 🎯 What You'll Learn
- Function declarations and expressions
- Arrow functions
- Parameters and arguments
- Return values
- Function scope
- Higher-order functions
- Callback functions

## 🔧 Key Concepts

### **Function Declarations**
```javascript
function greet(name) {
  return `Hello, ${name}!`
}
```

### **Arrow Functions**
```javascript
const greet = (name) => {
  return `Hello, ${name}!`
}

// Shorthand for single expression
const greet = name => `Hello, ${name}!`
```

### **Parameters vs Arguments**
```javascript
// Parameters (in function definition)
function add(a, b) {
  return a + b
}

// Arguments (when calling function)
add(5, 3) // 5 and 3 are arguments
```

### **Function Scope**
```javascript
function outerFunction() {
  let outerVariable = "I'm outside"
  
  function innerFunction() {
    let innerVariable = "I'm inside"
    console.log(outerVariable) // Can access outer
  }
  
  // console.log(innerVariable) // Error! Can't access inner
}
```

## 🚀 Practice Exercises

1. **Create a function** that calculates the area of a rectangle
2. **Write an arrow function** that checks if a number is even
3. **Make a function** that takes an array and returns the largest number
4. **Create a callback function** for array methods

## 📁 Files in this folder:
- `functions.js` - Examples and practice
- `exercises.js` - Hands-on exercises
- `solutions.js` - Answer keys
