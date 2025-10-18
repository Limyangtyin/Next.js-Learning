// 📝 Lesson 5: Objects & Classes - EXERCISES
// Complete these exercises to practice what you've learned

console.log("=== OBJECTS & CLASSES EXERCISES ===")

// Exercise 1: Basic Object Creation
console.log("\nExercise 1: Basic Object Creation")
// TODO: Create an object called 'book' with properties:
// - title: "The Great Gatsby"
// - author: "F. Scott Fitzgerald"
// - year: 1925
// - pages: 180
// - isRead: false
// - Log the object and access each property

// Your code here:

// Exercise 2: Object Methods
console.log("\nExercise 2: Object Methods")
// TODO: Create an object called 'calculator' with methods:
// - add(a, b): returns sum of a and b
// - subtract(a, b): returns difference of a and b
// - multiply(a, b): returns product of a and b
// - divide(a, b): returns quotient (handle division by zero)
// - Test all methods with sample values

// Your code here:

// Exercise 3: Object Property Manipulation
console.log("\nExercise 3: Object Property Manipulation")
// TODO: Create an object called 'person' with initial properties:
// - name: "John"
// - age: 25
// - city: "New York"
// - Add new properties: email and phone
// - Modify the age to 26
// - Log the updated object

// Your code here:

// Exercise 4: Object with Nested Objects
console.log("\nExercise 4: Object with Nested Objects")
// TODO: Create an object called 'student' with:
// - name: "Alice"
// - age: 20
// - grades: object with math: 85, science: 92, english: 78
// - address: object with street, city, zipCode
// - Log the student's name, math grade, and city

// Your code here:

// Exercise 5: Object Destructuring
console.log("\nExercise 5: Object Destructuring")
// TODO: Create an object called 'product' with properties:
// - name: "Laptop"
// - price: 999.99
// - brand: "Dell"
// - inStock: true
// - Use destructuring to extract name, price, and brand
// - Log each extracted value

// Your code here:

// Exercise 6: Object Spread Operator
console.log("\nExercise 6: Object Spread Operator")
// TODO: Create two objects:
// - user1: { name: "John", age: 30, city: "Boston" }
// - user2: { name: "Jane", age: 25, country: "USA" }
// - Use spread operator to merge them into user3
// - Log the merged object

// Your code here:

// Exercise 7: Object Methods with 'this'
console.log("\nExercise 7: Object Methods with 'this'")
// TODO: Create an object called 'bankAccount' with:
// - Properties: balance (1000), accountNumber ("123456")
// - Methods:
//   - deposit(amount): adds to balance, returns new balance
//   - withdraw(amount): subtracts from balance (check sufficient funds)
//   - getBalance(): returns current balance
//   - getInfo(): returns account info string
// - Test all methods

// Your code here:

// Exercise 8: Basic Class Creation
console.log("\nExercise 8: Basic Class Creation")
// TODO: Create a class called 'Person' with:
// - Constructor that takes name, age, email
// - Method greet() that returns "Hello, I'm [name]"
// - Method getInfo() that returns person details
// - Create two instances and test methods

// Your code here:

// Exercise 9: Class with Methods
console.log("\nExercise 9: Class with Methods")
// TODO: Create a class called 'Rectangle' with:
// - Constructor that takes width and height
// - Method getArea() that returns area
// - Method getPerimeter() that returns perimeter
// - Method isSquare() that returns true if width equals height
// - Method scale(factor) that multiplies width and height by factor
// - Create instance and test all methods

// Your code here:

// Exercise 10: Class Inheritance
console.log("\nExercise 10: Class Inheritance")
// TODO: Create a base class 'Animal' with:
// - Constructor: name, species, age
// - Method speak() that returns "[name] makes a sound"
// - Method getInfo() that returns animal details
// - Create subclass 'Dog' that extends Animal:
//   - Override speak() to return "[name] barks"
//   - Add method fetch() that returns "[name] fetches the ball"
// - Create instances and test methods

// Your code here:

// Exercise 11: Static Methods
console.log("\nExercise 11: Static Methods")
// TODO: Create a class called 'MathHelper' with static methods:
// - add(a, b): returns sum
// - multiply(a, b): returns product
// - isEven(number): returns true if even
// - getRandomNumber(min, max): returns random number between min and max
// - Test all static methods

// Your code here:

// Exercise 12: Getters and Setters
console.log("\nExercise 12: Getters and Setters")
// TODO: Create a class called 'Temperature' with:
// - Private property _celsius
// - Getter celsius that returns _celsius
// - Setter celsius that sets _celsius (validate it's a number)
// - Getter fahrenheit that converts celsius to fahrenheit
// - Setter fahrenheit that converts fahrenheit to celsius
// - Create instance and test getters/setters

// Your code here:

// Exercise 13: Object Composition
console.log("\nExercise 13: Object Composition")
// TODO: Create objects for composition:
// - engine: { type: "V8", horsepower: 400, start(), stop() }
// - wheels: { count: 4, material: "alloy", rotate() }
// - car: { make: "BMW", model: "X5", engine, wheels }
// - Add methods to car: start(), getSpecs()
// - Test the composed object

// Your code here:

// Exercise 14: Object Methods (Object.keys, values, entries)
console.log("\nExercise 14: Object Methods")
// TODO: Create an object called 'inventory' with:
// - apples: 50, bananas: 30, oranges: 25, grapes: 40
// - Use Object.keys() to get all item names
// - Use Object.values() to get all quantities
// - Use Object.entries() to get key-value pairs
// - Log all results

// Your code here:

// Exercise 15: Complex Class with Validation
console.log("\nExercise 15: Complex Class with Validation")
// TODO: Create a class called 'User' with:
// - Constructor: username, email, age
// - Validate username (not empty, at least 3 characters)
// - Validate email (contains @ symbol)
// - Validate age (positive number, at least 13)
// - Method updateProfile(newData) that updates properties with validation
// - Method getProfile() that returns user info
// - Create instance and test validation

// Your code here:

// Exercise 16: Class with Array Property
console.log("\nExercise 16: Class with Array Property")
// TODO: Create a class called 'ShoppingCart' with:
// - Property items: empty array
// - Method addItem(name, price, quantity): adds item to array
// - Method removeItem(name): removes item by name
// - Method getTotal(): calculates total cost
// - Method getItemCount(): returns number of items
// - Method listItems(): returns formatted list of items
// - Test all methods

// Your code here:

// Exercise 17: Object with Callback Methods
console.log("\nExercise 17: Object with Callback Methods")
// TODO: Create an object called 'eventEmitter' with:
// - Property events: empty object
// - Method on(eventName, callback): registers event listener
// - Method emit(eventName, data): triggers event with data
// - Method off(eventName): removes event listener
// - Test by registering listeners and emitting events

// Your code here:

// Exercise 18: Class with Private-like Properties
console.log("\nExercise 18: Class with Private-like Properties")
// TODO: Create a class called 'Counter' with:
// - Private property _count (use underscore convention)
// - Method increment(): increases count by 1
// - Method decrement(): decreases count by 1
// - Method getCount(): returns current count
// - Method reset(): sets count to 0
// - Create instance and test all methods

// Your code here:

// Exercise 19: Object Factory Function
console.log("\nExercise 19: Object Factory Function")
// TODO: Create a factory function called 'createProduct' that:
// - Takes parameters: name, price, category
// - Returns object with properties and methods:
//   - Properties: name, price, category, id (auto-generated)
//   - Method getPriceWithTax(taxRate): returns price with tax
//   - Method isExpensive(): returns true if price > 100
//   - Method getInfo(): returns product info
// - Create multiple products and test methods

// Your code here:

// Exercise 20: Complex Inheritance Chain
console.log("\nExercise 20: Complex Inheritance Chain")
// TODO: Create inheritance chain:
// - Base class 'Vehicle': make, model, year, start(), stop()
// - Subclass 'Car': extends Vehicle, adds doors, drive()
// - Subclass 'SportsCar': extends Car, adds topSpeed, race()
// - Subclass 'ElectricCar': extends Car, adds batteryLevel, charge()
// - Create instances of each and test all methods

// Your code here:

console.log("\n=== END OF EXERCISES ===")
console.log("Great job! Check your solutions against the solutions.js file!")
