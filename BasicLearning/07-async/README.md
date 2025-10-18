# ⚡ Lesson 7: Async Programming

## 🎯 What You'll Learn
- Promises and async/await
- Fetch API for HTTP requests
- Error handling with try/catch
- Promise chaining
- Async functions
- Handling multiple promises

## 🔧 Key Concepts

### **Promises**
```javascript
const promise = new Promise((resolve, reject) => {
  // Async operation
  setTimeout(() => resolve("Success!"), 1000)
})

promise.then(result => console.log(result))
```

### **Async/Await**
```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
  }
}
```

### **Fetch API**
```javascript
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error))
```

## 🚀 Practice Exercises

1. **Create a promise** that resolves after 2 seconds
2. **Fetch data** from a public API
3. **Handle errors** with try/catch
4. **Chain multiple** async operations

## 📁 Files in this folder:
- `async.js` - Examples and practice
- `exercises.js` - Hands-on exercises
- `solutions.js` - Answer keys
