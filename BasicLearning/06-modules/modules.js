// 📦 Lesson 6: Modules - Examples

console.log("=== MODULES LESSON ===")

// Note: This file demonstrates module concepts
// In a real environment, you would use separate files for each module

// 1. Basic Module Pattern (IIFE)
console.log("\n1. Basic Module Pattern (IIFE):")
const CalculatorModule = (function() {
  // Private variables
  let history = []
  
  // Private functions
  function addToHistory(operation, result) {
    history.push({ operation, result, timestamp: new Date() })
  }
  
  // Public API
  return {
    add: function(a, b) {
      const result = a + b
      addToHistory(`add(${a}, ${b})`, result)
      return result
    },
    
    subtract: function(a, b) {
      const result = a - b
      addToHistory(`subtract(${a}, ${b})`, result)
      return result
    },
    
    multiply: function(a, b) {
      const result = a * b
      addToHistory(`multiply(${a}, ${b})`, result)
      return result
    },
    
    divide: function(a, b) {
      if (b === 0) {
        addToHistory(`divide(${a}, ${b})`, "Error: Division by zero")
        return "Error: Division by zero"
      }
      const result = a / b
      addToHistory(`divide(${a}, ${b})`, result)
      return result
    },
    
    getHistory: function() {
      return [...history] // Return copy to prevent external modification
    },
    
    clearHistory: function() {
      history = []
    }
  }
})()

// Test the module
console.log("Add:", CalculatorModule.add(5, 3))
console.log("Multiply:", CalculatorModule.multiply(4, 6))
console.log("History:", CalculatorModule.getHistory())

// 2. ES6 Module Syntax (Simulated)
console.log("\n2. ES6 Module Syntax (Simulated):")

// Simulating export
const mathUtils = {
  // Named exports
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => b !== 0 ? a / b : "Cannot divide by zero",
  
  // Default export simulation
  default: {
    PI: Math.PI,
    E: Math.E,
    getRandomNumber: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  }
}

// Simulating import
const { add, subtract, multiply, divide } = mathUtils
const mathConstants = mathUtils.default

console.log("Add:", add(10, 5))
console.log("PI:", mathConstants.PI)
console.log("Random:", mathConstants.getRandomNumber(1, 10))

// 3. Object-based Module
console.log("\n3. Object-based Module:")
const UserModule = {
  // Private data (convention: underscore prefix)
  _users: [],
  _nextId: 1,
  
  // Public methods
  createUser: function(name, email, age) {
    const user = {
      id: this._nextId++,
      name: name,
      email: email,
      age: age,
      createdAt: new Date()
    }
    this._users.push(user)
    return user
  },
  
  getUserById: function(id) {
    return this._users.find(user => user.id === id)
  },
  
  getAllUsers: function() {
    return [...this._users] // Return copy
  },
  
  updateUser: function(id, updates) {
    const userIndex = this._users.findIndex(user => user.id === id)
    if (userIndex !== -1) {
      this._users[userIndex] = { ...this._users[userIndex], ...updates }
      return this._users[userIndex]
    }
    return null
  },
  
  deleteUser: function(id) {
    const userIndex = this._users.findIndex(user => user.id === id)
    if (userIndex !== -1) {
      return this._users.splice(userIndex, 1)[0]
    }
    return null
  },
  
  getUserCount: function() {
    return this._users.length
  }
}

// Test the module
const user1 = UserModule.createUser("John Doe", "john@example.com", 30)
const user2 = UserModule.createUser("Jane Smith", "jane@example.com", 25)
console.log("Created users:", UserModule.getAllUsers())
console.log("User count:", UserModule.getUserCount())

// 4. Class-based Module
console.log("\n4. Class-based Module:")
class DatabaseModule {
  constructor() {
    this._data = new Map()
    this._connectionStatus = false
  }
  
  connect() {
    this._connectionStatus = true
    console.log("Database connected")
  }
  
  disconnect() {
    this._connectionStatus = false
    console.log("Database disconnected")
  }
  
  isConnected() {
    return this._connectionStatus
  }
  
  insert(key, value) {
    if (!this._connectionStatus) {
      throw new Error("Database not connected")
    }
    this._data.set(key, value)
    return true
  }
  
  select(key) {
    if (!this._connectionStatus) {
      throw new Error("Database not connected")
    }
    return this._data.get(key)
  }
  
  update(key, value) {
    if (!this._connectionStatus) {
      throw new Error("Database not connected")
    }
    if (this._data.has(key)) {
      this._data.set(key, value)
      return true
    }
    return false
  }
  
  delete(key) {
    if (!this._connectionStatus) {
      throw new Error("Database not connected")
    }
    return this._data.delete(key)
  }
  
  getAllKeys() {
    if (!this._connectionStatus) {
      throw new Error("Database not connected")
    }
    return Array.from(this._data.keys())
  }
}

// Create singleton instance
const Database = new DatabaseModule()

// Test the module
Database.connect()
Database.insert("user:1", { name: "Alice", age: 30 })
Database.insert("user:2", { name: "Bob", age: 25 })
console.log("User 1:", Database.select("user:1"))
console.log("All keys:", Database.getAllKeys())

// 5. Configuration Module
console.log("\n5. Configuration Module:")
const ConfigModule = (function() {
  const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3,
    debug: false,
    features: {
      notifications: true,
      analytics: false,
      caching: true
    }
  }
  
  return {
    get: function(key) {
      return key ? config[key] : { ...config }
    },
    
    set: function(key, value) {
      if (typeof key === 'object') {
        Object.assign(config, key)
      } else {
        config[key] = value
      }
    },
    
    reset: function() {
      Object.keys(config).forEach(key => {
        if (key === 'apiUrl') config[key] = "https://api.example.com"
        else if (key === 'timeout') config[key] = 5000
        else if (key === 'retries') config[key] = 3
        else if (key === 'debug') config[key] = false
        else if (key === 'features') {
          config[key] = {
            notifications: true,
            analytics: false,
            caching: true
          }
        }
      })
    },
    
    isFeatureEnabled: function(feature) {
      return config.features[feature] || false
    }
  }
})()

// Test configuration module
console.log("API URL:", ConfigModule.get('apiUrl'))
console.log("All config:", ConfigModule.get())
ConfigModule.set('debug', true)
console.log("Debug enabled:", ConfigModule.get('debug'))
console.log("Notifications enabled:", ConfigModule.isFeatureEnabled('notifications'))

// 6. Event Module
console.log("\n6. Event Module:")
const EventModule = (function() {
  const events = {}
  
  return {
    on: function(eventName, callback) {
      if (!events[eventName]) {
        events[eventName] = []
      }
      events[eventName].push(callback)
    },
    
    off: function(eventName, callback) {
      if (events[eventName]) {
        events[eventName] = events[eventName].filter(cb => cb !== callback)
      }
    },
    
    emit: function(eventName, data) {
      if (events[eventName]) {
        events[eventName].forEach(callback => {
          try {
            callback(data)
          } catch (error) {
            console.error(`Error in event handler for ${eventName}:`, error)
          }
        })
      }
    },
    
    once: function(eventName, callback) {
      const onceCallback = function(data) {
        callback(data)
        EventModule.off(eventName, onceCallback)
      }
      EventModule.on(eventName, onceCallback)
    },
    
    getEventNames: function() {
      return Object.keys(events)
    }
  }
})()

// Test event module
EventModule.on('user:login', (user) => {
  console.log(`User ${user.name} logged in`)
})

EventModule.on('user:logout', (user) => {
  console.log(`User ${user.name} logged out`)
})

EventModule.emit('user:login', { name: 'John', id: 1 })
EventModule.emit('user:logout', { name: 'John', id: 1 })

// 7. Utility Module
console.log("\n7. Utility Module:")
const UtilsModule = {
  // String utilities
  string: {
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
    reverse: (str) => str.split('').reverse().join(''),
    isPalindrome: (str) => {
      const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '')
      return cleaned === cleaned.split('').reverse().join('')
    },
    truncate: (str, length) => str.length > length ? str.substring(0, length) + '...' : str
  },
  
  // Number utilities
  number: {
    isEven: (num) => num % 2 === 0,
    isOdd: (num) => num % 2 !== 0,
    random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    round: (num, decimals = 2) => Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals)
  },
  
  // Array utilities
  array: {
    shuffle: (arr) => {
      const shuffled = [...arr]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      return shuffled
    },
    unique: (arr) => [...new Set(arr)],
    chunk: (arr, size) => {
      const chunks = []
      for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size))
      }
      return chunks
    }
  },
  
  // Date utilities
  date: {
    format: (date, format = 'YYYY-MM-DD') => {
      const d = new Date(date)
      const year = d.getFullYear()
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const day = String(d.getDate()).padStart(2, '0')
      return format.replace('YYYY', year).replace('MM', month).replace('DD', day)
    },
    isToday: (date) => {
      const today = new Date()
      const checkDate = new Date(date)
      return today.toDateString() === checkDate.toDateString()
    },
    addDays: (date, days) => {
      const result = new Date(date)
      result.setDate(result.getDate() + days)
      return result
    }
  }
}

// Test utility module
console.log("Capitalize:", UtilsModule.string.capitalize("hello"))
console.log("Is even:", UtilsModule.number.isEven(8))
console.log("Shuffle:", UtilsModule.array.shuffle([1, 2, 3, 4, 5]))
console.log("Format date:", UtilsModule.date.format(new Date()))

// 8. Module Composition
console.log("\n8. Module Composition:")
const AppModule = (function() {
  // Import other modules
  const calculator = CalculatorModule
  const config = ConfigModule
  const events = EventModule
  const utils = UtilsModule
  
  // App-specific functionality
  const app = {
    init: function() {
      console.log("App initialized")
      events.emit('app:init', { version: '1.0.0' })
    },
    
    calculate: function(operation, a, b) {
      const result = calculator[operation](a, b)
      events.emit('calculation:complete', { operation, a, b, result })
      return result
    },
    
    formatResult: function(result) {
      return utils.number.round(result, 2)
    },
    
    getConfig: function() {
      return config.get()
    }
  }
  
  return app
})()

// Test composed module
AppModule.init()
const result = AppModule.calculate('add', 3.14159, 2.71828)
console.log("Formatted result:", AppModule.formatResult(result))

console.log("\n=== END OF MODULES LESSON ===")
