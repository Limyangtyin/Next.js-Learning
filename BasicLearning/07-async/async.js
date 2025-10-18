// ⚡ Lesson 7: Async Programming - Examples

console.log("=== ASYNC PROGRAMMING LESSON ===")

// 1. Callbacks
console.log("\n1. Callbacks:")
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "John Doe", email: "john@example.com" }
    callback(null, data)
  }, 1000)
}

function handleData(error, data) {
  if (error) {
    console.log("Error:", error)
  } else {
    console.log("Data received:", data)
  }
}

fetchData(handleData)

// 2. Callback Hell Example
console.log("\n2. Callback Hell Example:")
function getUser(id, callback) {
  setTimeout(() => {
    callback(null, { id: id, name: `User ${id}` })
  }, 500)
}

function getPosts(userId, callback) {
  setTimeout(() => {
    callback(null, [{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }])
  }, 500)
}

function getComments(postId, callback) {
  setTimeout(() => {
    callback(null, [{ id: 1, text: "Great post!" }])
  }, 500)
}

// Callback hell - nested callbacks
getUser(1, (err, user) => {
  if (err) {
    console.log("Error getting user:", err)
    return
  }
  console.log("User:", user)
  
  getPosts(user.id, (err, posts) => {
    if (err) {
      console.log("Error getting posts:", err)
      return
    }
    console.log("Posts:", posts)
    
    getComments(posts[0].id, (err, comments) => {
      if (err) {
        console.log("Error getting comments:", err)
        return
      }
      console.log("Comments:", comments)
    })
  })
})

// 3. Promises
console.log("\n3. Promises:")
function fetchUserData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id: id, name: `User ${id}`, email: `user${id}@example.com` })
      } else {
        reject(new Error("Invalid user ID"))
      }
    }, 1000)
  })
}

// Using promises
fetchUserData(1)
  .then(user => {
    console.log("User data:", user)
    return fetchUserData(2) // Chain another promise
  })
  .then(user => {
    console.log("Second user:", user)
  })
  .catch(error => {
    console.log("Error:", error.message)
  })

// 4. Promise.all
console.log("\n4. Promise.all:")
function fetchPost(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, title: `Post ${id}`, content: `Content of post ${id}` })
    }, Math.random() * 1000)
  })
}

const postPromises = [fetchPost(1), fetchPost(2), fetchPost(3)]

Promise.all(postPromises)
  .then(posts => {
    console.log("All posts:", posts)
  })
  .catch(error => {
    console.log("Error fetching posts:", error)
  })

// 5. Promise.race
console.log("\n5. Promise.race:")
function fastRequest() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Fast response"), 500)
  })
}

function slowRequest() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Slow response"), 2000)
  })
}

Promise.race([fastRequest(), slowRequest()])
  .then(result => {
    console.log("Race winner:", result)
  })

// 6. Async/Await
console.log("\n6. Async/Await:")
async function fetchUserPosts(userId) {
  try {
    const user = await fetchUserData(userId)
    console.log("User:", user)
    
    const posts = await fetchPost(userId)
    console.log("User posts:", posts)
    
    return { user, posts }
  } catch (error) {
    console.log("Error:", error.message)
    throw error
  }
}

// Using async/await
fetchUserPosts(1)
  .then(result => {
    console.log("Complete result:", result)
  })
  .catch(error => {
    console.log("Final error:", error.message)
  })

// 7. Async/Await with Promise.all
console.log("\n7. Async/Await with Promise.all:")
async function fetchMultipleUsers() {
  try {
    const users = await Promise.all([
      fetchUserData(1),
      fetchUserData(2),
      fetchUserData(3)
    ])
    console.log("Multiple users:", users)
    return users
  } catch (error) {
    console.log("Error fetching users:", error.message)
  }
}

fetchMultipleUsers()

// 8. Error Handling
console.log("\n8. Error Handling:")
async function riskyOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random()
      if (random > 0.5) {
        resolve("Success!")
      } else {
        reject(new Error("Random failure"))
      }
    }, 1000)
  })
}

async function handleRiskyOperation() {
  try {
    const result = await riskyOperation()
    console.log("Operation result:", result)
  } catch (error) {
    console.log("Operation failed:", error.message)
  }
}

handleRiskyOperation()

// 9. Fetch API (Simulated)
console.log("\n9. Fetch API (Simulated):")
function mockFetch(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.includes("error")) {
        reject(new Error("Network error"))
      } else {
        resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve({ data: "Mock API response" })
        })
      }
    }, 1000)
  })
}

async function fetchData(url) {
  try {
    const response = await mockFetch(url)
    if (response.ok) {
      const data = await response.json()
      console.log("Fetched data:", data)
      return data
    }
  } catch (error) {
    console.log("Fetch error:", error.message)
  }
}

fetchData("https://api.example.com/data")

// 10. Timeout with Promises
console.log("\n10. Timeout with Promises:")
function withTimeout(promise, timeoutMs) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Operation timed out")), timeoutMs)
    })
  ])
}

async function slowOperation() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Slow operation completed"), 2000)
  })
}

withTimeout(slowOperation(), 1500)
  .then(result => console.log("Result:", result))
  .catch(error => console.log("Error:", error.message))

// 11. Retry Logic
console.log("\n11. Retry Logic:")
async function retryOperation(operation, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await operation()
      console.log(`Operation succeeded on attempt ${attempt}`)
      return result
    } catch (error) {
      console.log(`Attempt ${attempt} failed:`, error.message)
      if (attempt === maxRetries) {
        throw new Error(`Operation failed after ${maxRetries} attempts`)
      }
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt))
    }
  }
}

async function unreliableOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.7) {
        resolve("Operation succeeded")
      } else {
        reject(new Error("Operation failed"))
      }
    }, 500)
  })
}

retryOperation(unreliableOperation, 3)
  .then(result => console.log("Final result:", result))
  .catch(error => console.log("Final error:", error.message))

// 12. Sequential vs Parallel Execution
console.log("\n12. Sequential vs Parallel Execution:")
async function sequentialExecution() {
  console.log("Starting sequential execution...")
  const start = Date.now()
  
  const result1 = await fetchUserData(1)
  const result2 = await fetchUserData(2)
  const result3 = await fetchUserData(3)
  
  const end = Date.now()
  console.log(`Sequential execution took: ${end - start}ms`)
  return [result1, result2, result3]
}

async function parallelExecution() {
  console.log("Starting parallel execution...")
  const start = Date.now()
  
  const [result1, result2, result3] = await Promise.all([
    fetchUserData(1),
    fetchUserData(2),
    fetchUserData(3)
  ])
  
  const end = Date.now()
  console.log(`Parallel execution took: ${end - start}ms`)
  return [result1, result2, result3]
}

// Run both examples
setTimeout(() => {
  sequentialExecution()
}, 2000)

setTimeout(() => {
  parallelExecution()
}, 4000)

// 13. Async Iteration
console.log("\n13. Async Iteration:")
async function* asyncGenerator() {
  for (let i = 1; i <= 3; i++) {
    await new Promise(resolve => setTimeout(resolve, 500))
    yield `Item ${i}`
  }
}

async function processAsyncGenerator() {
  for await (const item of asyncGenerator()) {
    console.log("Generated item:", item)
  }
}

processAsyncGenerator()

// 14. Promise Chaining
console.log("\n14. Promise Chaining:")
function step1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 1 completed"), 500)
  })
}

function step2(data) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${data} -> Step 2 completed`), 500)
  })
}

function step3(data) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${data} -> Step 3 completed`), 500)
  })
}

step1()
  .then(step2)
  .then(step3)
  .then(finalResult => {
    console.log("Final result:", finalResult)
  })

// 15. Async Error Boundaries
console.log("\n15. Async Error Boundaries:")
async function safeAsyncOperation(operation) {
  try {
    return await operation()
  } catch (error) {
    console.log("Caught error:", error.message)
    return null
  }
}

async function dangerousOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong"))
    }, 1000)
  })
}

safeAsyncOperation(dangerousOperation)
  .then(result => {
    console.log("Safe operation result:", result)
  })

console.log("\n=== END OF ASYNC PROGRAMMING LESSON ===")
