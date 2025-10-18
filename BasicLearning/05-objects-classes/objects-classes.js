// 🏗️ Lesson 5: Objects & Classes - Examples

console.log("=== OBJECTS & CLASSES LESSON ===")

// 1. Object Literals
console.log("\n1. Object Literals:")
const person = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  isActive: true,
  hobbies: ["reading", "swimming", "coding"],
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001"
  }
}

console.log("Person:", person)
console.log("Name:", person.name)
console.log("Age:", person.age)
console.log("First hobby:", person.hobbies[0])

// 2. Object Methods
console.log("\n2. Object Methods:")
const calculator = {
  add: function(a, b) {
    return a + b
  },
  subtract: function(a, b) {
    return a - b
  },
  multiply: function(a, b) {
    return a * b
  },
  divide: function(a, b) {
    if (b !== 0) {
      return a / b
    } else {
      return "Cannot divide by zero"
    }
  }
}

console.log("Add:", calculator.add(10, 5))
console.log("Subtract:", calculator.subtract(10, 5))
console.log("Multiply:", calculator.multiply(10, 5))
console.log("Divide:", calculator.divide(10, 5))

// 3. Object Property Access
console.log("\n3. Object Property Access:")
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue"
}

// Dot notation
console.log("Make (dot):", car.make)
console.log("Model (dot):", car.model)

// Bracket notation
console.log("Year (bracket):", car["year"])
console.log("Color (bracket):", car["color"])

// Dynamic property access
const property = "make"
console.log("Dynamic access:", car[property])

// 4. Adding and Modifying Properties
console.log("\n4. Adding and Modifying Properties:")
const student = {
  name: "Alice",
  grade: "A"
}

// Add new properties
student.age = 20
student["major"] = "Computer Science"
student.subjects = ["Math", "Physics", "Chemistry"]

// Modify existing properties
student.grade = "A+"

console.log("Updated student:", student)

// 5. Object Methods with 'this'
console.log("\n5. Object Methods with 'this':")
const bankAccount = {
  balance: 1000,
  accountNumber: "123456789",
  owner: "John Smith",
  
  deposit: function(amount) {
    this.balance += amount
    return `Deposited $${amount}. New balance: $${this.balance}`
  },
  
  withdraw: function(amount) {
    if (amount <= this.balance) {
      this.balance -= amount
      return `Withdrew $${amount}. New balance: $${this.balance}`
    } else {
      return "Insufficient funds"
    }
  },
  
  getBalance: function() {
    return `Current balance: $${this.balance}`
  },
  
  getInfo: function() {
    return `Account: ${this.accountNumber}, Owner: ${this.owner}, Balance: $${this.balance}`
  }
}

console.log(bankAccount.deposit(500))
console.log(bankAccount.withdraw(200))
console.log(bankAccount.getBalance())
console.log(bankAccount.getInfo())

// 6. Object Destructuring
console.log("\n6. Object Destructuring:")
const user = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  email: "jane@example.com",
  preferences: {
    theme: "dark",
    language: "en"
  }
}

// Basic destructuring
const { firstName, lastName, age } = user
console.log("First name:", firstName)
console.log("Last name:", lastName)
console.log("Age:", age)

// Destructuring with renaming
const { firstName: fName, lastName: lName } = user
console.log("Renamed:", fName, lName)

// Nested destructuring
const { preferences: { theme, language } } = user
console.log("Theme:", theme)
console.log("Language:", language)

// 7. Object Spread Operator
console.log("\n7. Object Spread Operator:")
const originalUser = {
  name: "Bob",
  age: 30,
  city: "Boston"
}

// Spread to create new object
const updatedUser = {
  ...originalUser,
  age: 31,
  country: "USA"
}

console.log("Original:", originalUser)
console.log("Updated:", updatedUser)

// 8. Object.keys(), Object.values(), Object.entries()
console.log("\n8. Object Methods:")
const product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
  inStock: true
}

console.log("Keys:", Object.keys(product))
console.log("Values:", Object.values(product))
console.log("Entries:", Object.entries(product))

// 9. Class Declaration
console.log("\n9. Class Declaration:")
class Animal {
  constructor(name, species, age) {
    this.name = name
    this.species = species
    this.age = age
  }
  
  speak() {
    return `${this.name} makes a sound`
  }
  
  getInfo() {
    return `${this.name} is a ${this.age}-year-old ${this.species}`
  }
}

const dog = new Animal("Buddy", "Dog", 3)
const cat = new Animal("Whiskers", "Cat", 2)

console.log(dog.speak())
console.log(cat.getInfo())

// 10. Class with Methods
console.log("\n10. Class with Methods:")
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  
  getArea() {
    return this.width * this.height
  }
  
  getPerimeter() {
    return 2 * (this.width + this.height)
  }
  
  isSquare() {
    return this.width === this.height
  }
  
  scale(factor) {
    this.width *= factor
    this.height *= factor
  }
}

const rect = new Rectangle(5, 10)
console.log("Area:", rect.getArea())
console.log("Perimeter:", rect.getPerimeter())
console.log("Is square:", rect.isSquare())

rect.scale(2)
console.log("After scaling:", rect.getArea())

// 11. Class Inheritance
console.log("\n11. Class Inheritance:")
class Vehicle {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
    this.isRunning = false
  }
  
  start() {
    this.isRunning = true
    return `${this.make} ${this.model} started`
  }
  
  stop() {
    this.isRunning = false
    return `${this.make} ${this.model} stopped`
  }
  
  getInfo() {
    return `${this.year} ${this.make} ${this.model}`
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year)
    this.doors = doors
    this.fuelLevel = 100
  }
  
  drive() {
    if (this.isRunning && this.fuelLevel > 0) {
      this.fuelLevel -= 10
      return `Driving ${this.getInfo()}. Fuel: ${this.fuelLevel}%`
    } else {
      return "Cannot drive - not running or no fuel"
    }
  }
  
  refuel() {
    this.fuelLevel = 100
    return "Tank refueled"
  }
}

const myCar = new Car("Toyota", "Camry", 2020, 4)
console.log(myCar.start())
console.log(myCar.drive())
console.log(myCar.drive())
console.log(myCar.refuel())

// 12. Static Methods
console.log("\n12. Static Methods:")
class MathUtils {
  static add(a, b) {
    return a + b
  }
  
  static multiply(a, b) {
    return a * b
  }
  
  static isEven(number) {
    return number % 2 === 0
  }
  
  static getPi() {
    return Math.PI
  }
}

console.log("Add:", MathUtils.add(5, 3))
console.log("Multiply:", MathUtils.multiply(4, 6))
console.log("Is even:", MathUtils.isEven(8))
console.log("Pi:", MathUtils.getPi())

// 13. Getters and Setters
console.log("\n13. Getters and Setters:")
class Circle {
  constructor(radius) {
    this._radius = radius
  }
  
  get radius() {
    return this._radius
  }
  
  set radius(value) {
    if (value > 0) {
      this._radius = value
    } else {
      throw new Error("Radius must be positive")
    }
  }
  
  get area() {
    return Math.PI * this._radius * this._radius
  }
  
  get circumference() {
    return 2 * Math.PI * this._radius
  }
}

const circle = new Circle(5)
console.log("Radius:", circle.radius)
console.log("Area:", circle.area)
console.log("Circumference:", circle.circumference)

circle.radius = 10
console.log("New area:", circle.area)

// 14. Private Fields (ES2022)
console.log("\n14. Private Fields:")
class BankAccount {
  #balance = 0
  #accountNumber
  
  constructor(accountNumber, initialBalance = 0) {
    this.#accountNumber = accountNumber
    this.#balance = initialBalance
  }
  
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount
      return `Deposited $${amount}`
    }
    return "Invalid amount"
  }
  
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount
      return `Withdrew $${amount}`
    }
    return "Invalid amount or insufficient funds"
  }
  
  getBalance() {
    return this.#balance
  }
  
  getAccountNumber() {
    return this.#accountNumber
  }
}

const account = new BankAccount("123456", 1000)
console.log("Balance:", account.getBalance())
console.log(account.deposit(500))
console.log("New balance:", account.getBalance())

// 15. Object Composition
console.log("\n15. Object Composition:")
const engine = {
  type: "V6",
  horsepower: 300,
  start() {
    return "Engine started"
  },
  stop() {
    return "Engine stopped"
  }
}

const transmission = {
  type: "Automatic",
  gears: 6,
  shift(gear) {
    return `Shifted to gear ${gear}`
  }
}

const vehicle = {
  make: "Honda",
  model: "Accord",
  engine: engine,
  transmission: transmission,
  
  start() {
    return `${this.engine.start()}, ${this.transmission.shift(1)}`
  },
  
  getSpecs() {
    return `${this.make} ${this.model} with ${this.engine.type} engine (${this.engine.horsepower}hp) and ${this.transmission.type} transmission`
  }
}

console.log(vehicle.start())
console.log(vehicle.getSpecs())

console.log("\n=== END OF OBJECTS & CLASSES LESSON ===")
