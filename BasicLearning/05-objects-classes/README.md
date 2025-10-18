# 🏗️ Lesson 5: Objects & Classes

## 🎯 What You'll Learn
- Object creation and manipulation
- Object methods
- Class syntax
- Constructor functions
- Inheritance
- Static methods
- Getters and setters

## 🔧 Key Concepts

### **Object Creation**
```javascript
// Object literal
const person = {
  name: "John",
  age: 25,
  greet() {
    return `Hello, I'm ${this.name}`
  }
}
```

### **Class Syntax**
```javascript
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  
  greet() {
    return `Hello, I'm ${this.name}`
  }
}
```

### **Inheritance**
```javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade
  }
}
```

## 🚀 Practice Exercises

1. **Create a Car class** with properties and methods
2. **Build a Bank Account class** with deposit/withdraw
3. **Make a Book class** with inheritance
4. **Create a Calculator class** with static methods

## 📁 Files in this folder:
- `objects-classes.js` - Examples and practice
- `exercises.js` - Hands-on exercises
- `solutions.js` - Answer keys
