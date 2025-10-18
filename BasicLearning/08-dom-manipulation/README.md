# 🌐 Lesson 8: DOM Manipulation

## 🎯 What You'll Learn
- Selecting DOM elements
- Creating and modifying elements
- Event listeners
- Form handling
- Styling elements
- Working with classes and attributes

## 🔧 Key Concepts

### **Selecting Elements**
```javascript
// By ID
const element = document.getElementById('myId')

// By class
const elements = document.getElementsByClassName('myClass')

// By tag
const divs = document.getElementsByTagName('div')

// Modern selectors
const element = document.querySelector('#myId')
const elements = document.querySelectorAll('.myClass')
```

### **Creating Elements**
```javascript
const newDiv = document.createElement('div')
newDiv.textContent = 'Hello World'
newDiv.className = 'my-class'
document.body.appendChild(newDiv)
```

### **Event Listeners**
```javascript
const button = document.getElementById('myButton')
button.addEventListener('click', function() {
  console.log('Button clicked!')
})
```

### **Form Handling**
```javascript
const form = document.getElementById('myForm')
form.addEventListener('submit', function(event) {
  event.preventDefault()
  const formData = new FormData(form)
  console.log(formData.get('username'))
})
```

## 🚀 Practice Exercises

1. **Create a dynamic list** that adds/removes items
2. **Build a simple calculator** with DOM
3. **Make a form validator** with real-time feedback
4. **Create a color picker** that changes page background

## 📁 Files in this folder:
- `dom-manipulation.js` - Examples and practice
- `exercises.js` - Hands-on exercises
- `solutions.js` - Answer keys
