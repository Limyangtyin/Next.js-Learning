# 📦 Lesson 6: Modules & Imports

## 🎯 What You'll Learn
- Export/import syntax
- Default vs named exports
- Module patterns
- CommonJS vs ES6 modules
- Creating and using modules
- Module bundling concepts

## 🔧 Key Concepts

### **Named Exports**
```javascript
// math.js
export const add = (a, b) => a + b
export const subtract = (a, b) => a - b

// main.js
import { add, subtract } from './math.js'
```

### **Default Exports**
```javascript
// user.js
export default class User {
  constructor(name) {
    this.name = name
  }
}

// main.js
import User from './user.js'
```

### **Mixed Exports**
```javascript
// utils.js
export const PI = 3.14159
export default function calculateArea(radius) {
  return PI * radius * radius
}
```

## 🚀 Practice Exercises

1. **Create a math module** with basic operations
2. **Build a user module** with default export
3. **Make a utility module** with mixed exports
4. **Import and use** modules in a main file

## 📁 Files in this folder:
- `modules.js` - Examples and practice
- `exercises.js` - Hands-on exercises
- `solutions.js` - Answer keys
