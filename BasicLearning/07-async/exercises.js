// 📝 Lesson 7: Async Programming - EXERCISES
// Complete these exercises to practice what you've learned

console.log("=== ASYNC PROGRAMMING EXERCISES ===")

// Exercise 1: Basic Callback
console.log("\nExercise 1: Basic Callback")
// TODO: Create a function called 'processData' that takes data and a callback
// - The function should simulate processing data (use setTimeout)
// - After 1 second, call the callback with the processed data
// - The processed data should be the original data with "Processed: " prefix
// - Test with sample data

// Your code here:

// Exercise 2: Callback with Error Handling
console.log("\nExercise 2: Callback with Error Handling")
// TODO: Create a function called 'divideNumbers' that takes a, b, and callback
// - If b is 0, call callback with error "Cannot divide by zero"
// - Otherwise, call callback with null error and the result
// - Test with valid and invalid inputs

// Your code here:

// Exercise 3: Basic Promise
console.log("\nExercise 3: Basic Promise")
// TODO: Create a function called 'fetchUser' that returns a Promise
// - The promise should resolve with user data after 1 second
// - User data: { id: 1, name: "John Doe", email: "john@example.com" }
// - Use .then() and .catch() to handle the result
// - Test the function

// Your code here:

// Exercise 4: Promise with Rejection
console.log("\nExercise 4: Promise with Rejection")
// TODO: Create a function called 'validateEmail' that takes an email
// - Return a Promise that resolves if email contains "@"
// - Reject with "Invalid email format" if no "@" found
// - Test with valid and invalid emails

// Your code here:

// Exercise 5: Promise Chaining
console.log("\nExercise 5: Promise Chaining")
// TODO: Create three functions that return promises:
// - getUser(id): resolves with user data
// - getPosts(userId): resolves with user's posts
// - getComments(postId): resolves with post's comments
// - Chain them together to get user -> posts -> comments
// - Test the chain

// Your code here:

// Exercise 6: Promise.all
console.log("\nExercise 6: Promise.all")
// TODO: Create a function called 'fetchMultipleUsers' that takes an array of user IDs
// - Use Promise.all to fetch all users simultaneously
// - Each user fetch should take 1 second
// - Return all users when all promises resolve
// - Test with [1, 2, 3]

// Your code here:

// Exercise 7: Promise.race
console.log("\nExercise 7: Promise.race")
// TODO: Create two functions that return promises:
// - fastService(): resolves after 500ms with "Fast service response"
// - slowService(): resolves after 2000ms with "Slow service response"
// - Use Promise.race to get the faster response
// - Test the race

// Your code here:

// Exercise 8: Basic Async/Await
console.log("\nExercise 8: Basic Async/Await")
// TODO: Convert the Promise-based fetchUser function to use async/await
// - Create an async function called 'getUserData'
// - Use await to get user data
// - Handle errors with try/catch
// - Test the function

// Your code here:

// Exercise 9: Async/Await with Multiple Operations
console.log("\nExercise 9: Async/Await with Multiple Operations")
// TODO: Create an async function called 'getUserProfile' that:
// - Gets user data (await fetchUser)
// - Gets user posts (await getPosts)
// - Gets user comments (await getComments)
// - Returns combined profile data
// - Use try/catch for error handling
// - Test the function

// Your code here:

// Exercise 10: Async/Await with Promise.all
console.log("\nExercise 10: Async/Await with Promise.all")
// TODO: Create an async function called 'getDashboardData' that:
// - Uses Promise.all to fetch user, posts, and comments simultaneously
// - Returns all data when complete
// - Handle errors appropriately
// - Test the function

// Your code here:

// Exercise 11: Timeout with Promises
console.log("\nExercise 11: Timeout with Promises")
// TODO: Create a function called 'withTimeout' that:
// - Takes a promise and timeout duration
// - Returns a promise that rejects if timeout is reached
// - Use Promise.race to implement timeout
// - Test with a slow operation and short timeout

// Your code here:

// Exercise 12: Retry Logic
console.log("\nExercise 12: Retry Logic")
// TODO: Create a function called 'retryOperation' that:
// - Takes an operation function and max retries
// - Retries the operation if it fails
// - Waits 1 second between retries
// - Returns the result or throws error after max retries
// - Test with an operation that sometimes fails

// Your code here:

// Exercise 13: Sequential vs Parallel
console.log("\nExercise 13: Sequential vs Parallel")
// TODO: Create two functions:
// - sequentialFetch(): fetches 3 users one after another
// - parallelFetch(): fetches 3 users simultaneously
// - Time both approaches and log the results
// - Use async/await for both

// Your code here:

// Exercise 14: Error Handling Patterns
console.log("\nExercise 14: Error Handling Patterns")
// TODO: Create an async function called 'safeOperation' that:
// - Wraps any async operation in try/catch
// - Returns { success: true, data } on success
// - Returns { success: false, error } on failure
// - Test with both successful and failing operations

// Your code here:

// Exercise 15: Async Generator
console.log("\nExercise 15: Async Generator")
// TODO: Create an async generator called 'asyncCounter' that:
// - Yields numbers from 1 to 5
// - Waits 500ms between each yield
// - Create a function that consumes the generator
// - Test the async generator

// Your code here:

// Exercise 16: Promise Utilities
console.log("\nExercise 16: Promise Utilities")
// TODO: Create utility functions:
// - delay(ms): returns a promise that resolves after ms milliseconds
// - timeout(ms): returns a promise that rejects after ms milliseconds
// - retry(fn, attempts): retries a function until it succeeds or max attempts
// - Test all utilities

// Your code here:

// Exercise 17: Async Queue
console.log("\nExercise 17: Async Queue")
// TODO: Create a simple async queue that:
// - Processes tasks one at a time
// - Each task is an async function
// - Returns results in order
// - Test with multiple tasks

// Your code here:

// Exercise 18: Promise Pool
console.log("\nExercise 18: Promise Pool")
// TODO: Create a function called 'processWithPool' that:
// - Takes an array of tasks and a pool size
// - Processes tasks in parallel with limited concurrency
// - Returns results when all tasks complete
// - Test with 10 tasks and pool size of 3

// Your code here:

// Exercise 19: Async Event Emitter
console.log("\nExercise 19: Async Event Emitter")
// TODO: Create an async event emitter that:
// - Allows registering async event handlers
// - Emits events and waits for all handlers to complete
// - Handles errors in event handlers
// - Test with multiple async handlers

// Your code here:

// Exercise 20: Complex Async Workflow
console.log("\nExercise 20: Complex Async Workflow")
// TODO: Create an async function called 'processOrder' that:
// - Validates order data
// - Checks inventory
// - Processes payment
// - Sends confirmation email
// - Updates inventory
// - Each step should be async and can fail
// - Handle errors and rollback if needed
// - Test the complete workflow

// Your code here:

console.log("\n=== END OF EXERCISES ===")
console.log("Great job! Check your solutions against the solutions.js file!")
