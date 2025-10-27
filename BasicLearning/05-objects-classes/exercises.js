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
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    pages: 180,
    isRead: false,
}

console.log(book)

// Exercise 2: Object Methods
console.log("\nExercise 2: Object Methods")
// TODO: Create an object called 'calculator' with methods:
// - add(a, b): returns sum of a and b
// - subtract(a, b): returns difference of a and b
// - multiply(a, b): returns product of a and b
// - divide(a, b): returns quotient (handle division by zero)
// - Test all methods with sample values

// Your code here:
const calculator = {
    add: function(a, b){
        return a + b
    },
    subtract: function(a, b){
        return a - b
    },
    multiply: function(a, b){
        return a * b
    },
    divide: function(a, b){
        if(b!==0){
            return a / b
        } else {
            return "Cannot divide by zero"
        }
    }
}

let a = 10
let b = 3
console.log(calculator.add(a, b))
console.log(calculator.subtract(a, b))
console.log(calculator.multiply(a, b))
console.log(calculator.divide(a, b))

b = 0
console.log(calculator.add(a, b))
console.log(calculator.subtract(a, b))
console.log(calculator.multiply(a, b))
console.log(calculator.divide(a, b))

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
const person = {
    name: "John",
    age: 25,
    city: "New York"
}

person.email = "john@gmail.com"
person.phone = "012-3456789"
person.age = 26
console.log(person)

// Exercise 4: Object with Nested Objects
console.log("\nExercise 4: Object with Nested Objects")
// TODO: Create an object called 'student' with:
// - name: "Alice"
// - age: 20
// - grades: object with math: 85, science: 92, english: 78
// - address: object with street, city, zipCode
// - Log the student's name, math grade, and city

// Your code here:
const student = {
    name: "Alice",
    age: 20,
    grades: {
        math: 85,
        science: 92, 
        english: 78
    },
    address: {
        street: "Baker Street",
        city: "Brooklyn",
        zipCode: 12345
    }
}

console.log(student.name)
console.log(student.grades.math)
console.log(student.address.city)

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
const product = {
    name: "Laptop",
    price: 999.99,
    brand: "Dell",
    inStock: true
}

const {name, price, brand} = product
console.log(name)
console.log(price)
console.log(brand)

// Exercise 6: Object Spread Operator
console.log("\nExercise 6: Object Spread Operator")
// TODO: Create two objects:
// - user1: { name: "John", age: 30, city: "Boston" }
// - user2: { name: "Jane", age: 25, country: "USA" }
// - Use spread operator to merge them into user3
// - Log the merged object

// Your code here:
const user1 = {
    name: "John",
    age: 30,
    city: "Boston"
}

const user2 = {
    name: "Jane",
    age: 25,
    country: "USA"
}

const user3 = {
    ...user1,
    ...user2
}

console.log(user3)

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
const bankAccount = {
    balance: 1000,
    accountNumber: "123456",
    deposit: function (a){
        return this.balance = a + this.balance
    },
    withdraw: function(a){
        if(a > this.balance){
            return "Insufficient Money"
        } else{
            return this.balance= this.balance - a
        }
    },
    getBalance: function(){
        return this.balance
    },
    getInfo: function(){
        return `Acc Num: ${this.accountNumber}, Balance: ${this.balance}`
    }
}

console.log(bankAccount.deposit(500))
console.log(bankAccount.withdraw(1000))
console.log(bankAccount.getBalance())
console.log(bankAccount.deposit(1000))
console.log(bankAccount.getInfo())

// Exercise 8: Basic Class Creation
console.log("\nExercise 8: Basic Class Creation")
// TODO: Create a class called 'Person' with:
// - Constructor that takes name, age, email
// - Method greet() that returns "Hello, I'm [name]"
// - Method getInfo() that returns person details
// - Create two instances and test methods

// Your code here:
class Person {
    constructor(name, age, email){
        this.name = name,
        this.age = age,
        this.email = email
    }
    greet(){
        return `Hello, I'm ${this.name}`
    }
    getInfo(){
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`
    }
}

const John = new Person("John", 28, "john@gmail.com")
const Jane = new Person("Jane", 30, "jane@gmail.com")

console.log(John.greet())
console.log(John.getInfo())
console.log(Jane.greet())
console.log(Jane.getInfo())

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
class Rectangle {
    constructor(width, height){
        this.width = width,
        this.height = height
    }

    getArea(){
        return this.width * this.height
    }
    getPerimeter(){
        return (this.width + this.height) * 2
    }
    isSquare(){
        if(this.width === this.height){
            return true
        }else{
            return false
        }
    }
    scale(a){
        this.width *= a
        this.height *= a
    }
}

let rect = new Rectangle(7, 9)
console.log(rect.getArea())
console.log(rect.getPerimeter())
console.log(rect.isSquare())
rect.scale(3)
console.log(rect.getArea())

rect = new Rectangle(5, 5)
console.log(rect.getArea())
console.log(rect.getPerimeter())
console.log(rect.isSquare())
rect.scale(3)
console.log(rect.getArea())

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
class Animal {
    constructor(name, species, age){
        this.name = name,
        this.species = species,
        this.age = age
    }

    speak(){
        return `${this.name} makes a sound`
    }
    getInfo(){
        return `This is a ${this.species}, His/Her name is ${this.name} and he/she is ${this.age}-years old.`
    }
}

class Dog extends Animal{
    speak(){
        return `${this.name} barks!`
    }
    fetch(){
        return `${this.name} fetches the ball`
    }
}

const dog = new Dog("John", "BullDog", 5)
console.log(dog.speak())
console.log(dog.fetch())
console.log(dog.getInfo())

// Exercise 11: Static Methods
console.log("\nExercise 11: Static Methods")
// TODO: Create a class called 'MathHelper' with static methods:
// - add(a, b): returns sum
// - multiply(a, b): returns product
// - isEven(number): returns true if even
// - getRandomNumber(min, max): returns random number between min and max
// - Test all static methods

// Your code here:
class MathHelper{
    static add(a, b){
        return a + b
    }
    static multiply(a, b){
        return a * b
    }
    static isEven(number){
        return number % 2 === 0
    }
    static getRandomNumber(min, max){
        // Math.floor() - round to whole number
        // Math.random() - gives random float number from 0 to 1
        // (max - min) - get the range
        // Math.random() * (max - min) - scale to your desired factor
        // + min - shift to the starting point (always start from "min")

        return Math.floor(Math.random() * (max - min) + min)  
    }
}

console.log(MathHelper.add(2, 6))
console.log(MathHelper.multiply(2, 6))
console.log(MathHelper.isEven(6))
console.log(MathHelper.isEven(9))
console.log(MathHelper.getRandomNumber(2, 50))

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
class Temperature{
    #_celsius
    constructor(celsius){
        this.#_celsius = celsius
    }

    get celsius() {
        return this.#_celsius
    }

    set celsius(value){
        if(typeof value === "number"){
            this.#_celsius = value
        }
    }

    get fahrenheit() {
        return (this.#_celsius * 9/5) + 32
    }

    set fahrenheit(value) {
        if(typeof value === "number"){
            this.#_celsius = (value - 32) * 5/9
        }
    }
}

const temp = new Temperature(32)
console.log(temp.celsius)
console.log(temp.fahrenheit)

temp.celsius = "Hello"
console.log(temp.celsius) // It will ignore the faulty value and print the previous value
console.log(temp.fahrenheit)

temp.fahrenheit = 90
console.log(temp.celsius)
console.log(temp.fahrenheit)

// Exercise 13: Object Composition
console.log("\nExercise 13: Object Composition")
// TODO: Create objects for composition:
// - engine: { type: "V8", horsepower: 400, start(), stop() }
// - wheels: { count: 4, material: "alloy", rotate() }
// - car: { make: "BMW", model: "X5", engine, wheels }
// - Add methods to car: start(), getSpecs()
// - Test the composed object

// Your code here:
const engine = {
    type: "V8",
    horsepower: 400,
    start(){
        return "Engine started"
    },
    stop(){
        return "Engine stopped"
    }
}

const wheels = {
    count: 4, 
    material: "alloy",
    rotate(){}
}

const car = {
    make: "BMW",
    model: "X5",
    engine: engine,
    wheels: wheels,
    start(){
        return `${this.make}-${this.model} turns on`
    },
    getSpecs(){
        return `This is ${this.make}-${this.model} with ${this.engine.type} engine and ${this.engine.horsepower}hp. All ${this.wheels.count} wheels are made of ${this.wheels.material}.`
    }
}

console.log(car.start())
console.log(car.getSpecs())

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
