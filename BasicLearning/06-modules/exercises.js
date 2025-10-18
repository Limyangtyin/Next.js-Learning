// 📝 Lesson 6: Modules - EXERCISES
// Complete these exercises to practice what you've learned

console.log("=== MODULES EXERCISES ===")

// Exercise 1: Basic Module Pattern
console.log("\nExercise 1: Basic Module Pattern")
// TODO: Create a module called 'CounterModule' using IIFE pattern
// - Private variable: count (starts at 0)
// - Public methods:
//   - increment(): increases count by 1
//   - decrement(): decreases count by 1
//   - getCount(): returns current count
//   - reset(): sets count to 0
// - Test all methods

// Your code here:

// Exercise 2: Calculator Module
console.log("\nExercise 2: Calculator Module")
// TODO: Create a module called 'AdvancedCalculator' with:
// - Private variable: history (array to store operations)
// - Public methods:
//   - add(a, b): adds numbers and stores in history
//   - subtract(a, b): subtracts numbers and stores in history
//   - multiply(a, b): multiplies numbers and stores in history
//   - divide(a, b): divides numbers and stores in history
//   - getHistory(): returns copy of history
//   - clearHistory(): clears history
// - Test all methods and history functionality

// Your code here:

// Exercise 3: User Management Module
console.log("\nExercise 3: User Management Module")
// TODO: Create a module called 'UserManager' with:
// - Private variables: users (array), nextId (starts at 1)
// - Public methods:
//   - createUser(name, email, age): creates user with auto-generated ID
//   - getUserById(id): returns user by ID
//   - getAllUsers(): returns copy of all users
//   - updateUser(id, updates): updates user properties
//   - deleteUser(id): removes user by ID
//   - getUserCount(): returns number of users
// - Test all methods

// Your code here:

// Exercise 4: Configuration Module
console.log("\nExercise 4: Configuration Module")
// TODO: Create a module called 'AppConfig' with:
// - Private object: config with default settings
// - Public methods:
//   - get(key): returns config value or all config if no key
//   - set(key, value): sets config value
//   - reset(): resets config to defaults
//   - isEnabled(feature): checks if feature is enabled
// - Default config: { theme: 'light', language: 'en', notifications: true }
// - Test all methods

// Your code here:

// Exercise 5: Event System Module
console.log("\nExercise 5: Event System Module")
// TODO: Create a module called 'EventSystem' with:
// - Private variable: events (object to store event listeners)
// - Public methods:
//   - on(eventName, callback): registers event listener
//   - off(eventName, callback): removes event listener
//   - emit(eventName, data): triggers event with data
//   - once(eventName, callback): registers one-time listener
//   - getEventNames(): returns array of event names
// - Test event system with multiple listeners

// Your code here:

// Exercise 6: Storage Module
console.log("\nExercise 6: Storage Module")
// TODO: Create a module called 'Storage' with:
// - Private variable: data (Map to store key-value pairs)
// - Public methods:
//   - set(key, value): stores value with key
//   - get(key): retrieves value by key
//   - has(key): checks if key exists
//   - delete(key): removes key-value pair
//   - clear(): removes all data
//   - keys(): returns array of all keys
//   - size(): returns number of stored items
// - Test all storage operations

// Your code here:

// Exercise 7: Utility Module
console.log("\nExercise 7: Utility Module")
// TODO: Create a module called 'Utils' with utility functions:
// - String utilities: capitalize, reverse, isPalindrome
// - Number utilities: isEven, isOdd, random, round
// - Array utilities: shuffle, unique, chunk
// - Date utilities: format, isToday, addDays
// - Test all utility functions

// Your code here:

// Exercise 8: API Module
console.log("\nExercise 8: API Module")
// TODO: Create a module called 'ApiClient' with:
// - Private variables: baseUrl, timeout, headers
// - Public methods:
//   - setBaseUrl(url): sets base URL
//   - setHeader(key, value): sets request header
//   - get(endpoint): simulates GET request (return mock data)
//   - post(endpoint, data): simulates POST request
//   - put(endpoint, data): simulates PUT request
//   - delete(endpoint): simulates DELETE request
// - Test API methods with mock endpoints

// Your code here:

// Exercise 9: Validation Module
console.log("\nExercise 9: Validation Module")
// TODO: Create a module called 'Validator' with:
// - Public methods:
//   - isEmail(email): validates email format
//   - isPhone(phone): validates phone number
//   - isUrl(url): validates URL format
//   - isNumber(value): validates if value is number
//   - isString(value): validates if value is string
//   - isArray(value): validates if value is array
//   - isObject(value): validates if value is object
//   - validate(data, rules): validates data against rules
// - Test all validation methods

// Your code here:

// Exercise 10: Cache Module
console.log("\nExercise 10: Cache Module")
// TODO: Create a module called 'Cache' with:
// - Private variables: cache (Map), maxSize, ttl (time to live)
// - Public methods:
//   - set(key, value, ttl): stores value with optional TTL
//   - get(key): retrieves value if not expired
//   - has(key): checks if key exists and not expired
//   - delete(key): removes key from cache
//   - clear(): clears all cache
//   - size(): returns cache size
//   - isExpired(key): checks if key is expired
// - Test cache with expiration

// Your code here:

// Exercise 11: Logger Module
console.log("\nExercise 11: Logger Module")
// TODO: Create a module called 'Logger' with:
// - Private variables: logs (array), level ('info', 'warn', 'error')
// - Public methods:
//   - setLevel(level): sets log level
//   - info(message): logs info message
//   - warn(message): logs warning message
//   - error(message): logs error message
//   - getLogs(): returns all logs
//   - clearLogs(): clears all logs
//   - getLogsByLevel(level): returns logs by level
// - Test logging functionality

// Your code here:

// Exercise 12: Timer Module
console.log("\nExercise 12: Timer Module")
// TODO: Create a module called 'Timer' with:
// - Private variables: timers (Map), nextId
// - Public methods:
//   - setTimeout(callback, delay): creates timer, returns ID
//   - setInterval(callback, interval): creates interval, returns ID
//   - clearTimeout(id): clears timeout by ID
//   - clearInterval(id): clears interval by ID
//   - clearAll(): clears all timers
//   - getActiveTimers(): returns array of active timer IDs
// - Test timer functionality

// Your code here:

// Exercise 13: State Management Module
console.log("\nExercise 13: State Management Module")
// TODO: Create a module called 'StateManager' with:
// - Private variables: state (object), listeners (array)
// - Public methods:
//   - getState(): returns current state
//   - setState(newState): updates state and notifies listeners
//   - subscribe(callback): adds state change listener
//   - unsubscribe(callback): removes state change listener
//   - resetState(): resets state to initial value
// - Test state management with listeners

// Your code here:

// Exercise 14: Module Composition
console.log("\nExercise 14: Module Composition")
// TODO: Create a module called 'App' that composes other modules:
// - Import and use: CounterModule, UserManager, EventSystem
// - Public methods:
//   - init(): initializes the app
//   - createUser(name, email): creates user and emits event
//   - incrementCounter(): increments counter and emits event
//   - getAppState(): returns combined state
// - Test composed functionality

// Your code here:

// Exercise 15: Plugin System Module
console.log("\nExercise 15: Plugin System Module")
// TODO: Create a module called 'PluginSystem' with:
// - Private variables: plugins (Map), hooks (object)
// - Public methods:
//   - register(name, plugin): registers plugin
//   - unregister(name): removes plugin
//   - getPlugin(name): returns plugin by name
//   - addHook(name, callback): adds hook callback
//   - removeHook(name, callback): removes hook callback
//   - triggerHook(name, data): triggers hook with data
//   - getPlugins(): returns all registered plugins
// - Test plugin system

// Your code here:

console.log("\n=== END OF EXERCISES ===")
console.log("Great job! Check your solutions against the solutions.js file!")
