# 🔀 Lesson 3: Control Flow

## 🎯 What You'll Learn
- If/else statements
- Switch statements
- Ternary operators
- Logical operators (&&, ||, !)
- Comparison operators
- Truthy and falsy values

## 🔧 Key Concepts

### **If/Else Statements**
```javascript
if (age >= 18) {
  console.log("You are an adult")
} else if (age >= 13) {
  console.log("You are a teenager")
} else {
  console.log("You are a child")
}
```

### **Switch Statements**
```javascript
switch (day) {
  case 'Monday':
    console.log("Start of work week")
    break
  case 'Friday':
    console.log("TGIF!")
    break
  default:
    console.log("Regular day")
}
```

### **Ternary Operator**
```javascript
const message = age >= 18 ? "Adult" : "Minor"
```

### **Logical Operators**
```javascript
if (age >= 18 && hasLicense) {
  console.log("Can drive")
}

if (isStudent || isSenior) {
  console.log("Gets discount")
}
```

## 🚀 Practice Exercises

1. **Create a grade calculator** using if/else
2. **Build a day-of-week checker** using switch
3. **Write a login validator** using logical operators
4. **Make a temperature converter** with multiple conditions

## 📁 Files in this folder:
- `control-flow.js` - Examples and practice
- `exercises.js` - Hands-on exercises
- `solutions.js` - Answer keys
