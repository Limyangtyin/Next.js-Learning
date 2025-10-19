// 📝 Lesson 2: Functions - EXERCISES
// Complete these exercises to practice what you've learned

console.log("=== FUNCTIONS EXERCISES ===")

// Exercise 1: Basic Function Declaration
console.log("\nExercise 1: Basic Function Declaration")
// TODO: Create a function called 'greet' that takes a name parameter
// - The function should return a greeting message like "Hello, [name]!"
// - Call the function with your name and log the result

// Your code here:
function greet(name) {
    return `Hello, ${name}`
};

console.log(greet("Yang"));

// Exercise 2: Arrow Function
console.log("\nExercise 2: Arrow Function")
// TODO: Create an arrow function called 'calculateAge' that takes birth year
// - The function should calculate and return the current age
// - Use the current year (2024) for calculation
// - Call the function with your birth year and log the result

// Your code here:
const calculateAge = (currentYear, birthYear) => {
    return `Age: ${currentYear - birthYear}`
};

console.log(calculateAge(2025, 1995));


// Exercise 3: Function with Multiple Parameters
console.log("\nExercise 3: Multiple Parameters")
// TODO: Create a function called 'createProfile' that takes 3 parameters:
// - name (string)
// - age (number) 
// - hobby (string)
// - Return an object with these properties plus an 'id' property (use any number)
// - Call the function with your information and log the result

// Your code here:
function createPortfolio(name, age, hobby) {
    return {
        name: name,
        age: age,
        hobby: hobby,
        id: Date.now()
    }
};

console.log(createPortfolio("Yang", 29, ["game", "sleep", "food"]));


// Exercise 4: Default Parameters
console.log("\nExercise 4: Default Parameters")
// TODO: Create a function called 'introduce' that takes 2 parameters:
// - name (required)
// - greeting (optional, default to "Hello")
// - Return a message like "[greeting], my name is [name]"
// - Call it twice: once with just name, once with both parameters

// Your code here:
function introduce(name, greeting = "Hello"){
    return `${greeting}, my name is ${name}`
};

console.log(introduce("Yang"));
console.log(introduce("Yang", "Hi"));

// Exercise 5: Return Values
console.log("\nExercise 5: Return Values")
// TODO: Create a function called 'isAdult' that takes an age parameter
// - Return true if age is 18 or older, false otherwise
// - Create another function called 'canVote' that takes an age parameter
// - Return true if age is 21 or older, false otherwise
// - Test both functions with different ages

// Your code here:
function isAdult(age){
    return age >= 18
};

function canVote(age){
    return age >=21
};

console.log(isAdult(15));
console.log(isAdult(28));
console.log(canVote(15));
console.log(canVote(28));

// Exercise 6: Function Expression
console.log("\nExercise 6: Function Expression")
// TODO: Create a function expression called 'calculateBMI'
// - Takes weight (kg) and height (m) as parameters
// - Calculate BMI using formula: weight / (height * height)
// - Return the BMI value
// - Call the function with sample values and log the result

// Your code here:
const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100
    const bmi = weight / (heightInMeters * heightInMeters);

    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    return `You're ${category} and your BMI: ${bmi}.`
};

console.log(calculateBMI(75, 170));

// Exercise 7: Array Processing Function
console.log("\nExercise 7: Array Processing")
// TODO: Create a function called 'processNumbers' that takes an array of numbers
// - Return an object with these properties:
//   - sum: total of all numbers
//   - average: average of all numbers
//   - max: largest number
//   - min: smallest number
// - Test with an array of your choice

// Your code here:
function processNumbers(num) {
    num.sort((a, b) => a - b);
    let maxNumIndex = num.length - 1
    let minNumIndex = 0
    let sumNum = 0
    while(minNumIndex <= maxNumIndex){
        sumNum += num[minNumIndex++]
    }
    return {
        sum: sumNum,
        average: sumNum/2,
        max: num[maxNumIndex],
        min: num[0]
    };
};

let num = [11, 5, 5, 9, 10];
console.log(processNumbers(num));

// Exercise 8: String Manipulation Function
console.log("\nExercise 8: String Manipulation")
// TODO: Create a function called 'formatName' that takes a full name string
// - Return an object with:
//   - fullName: original string
//   - firstName: first word
//   - lastName: last word
//   - initials: first letter of each word (e.g., "J.D.")
//   - length: total character count
// - Test with your full name

// Your code here:
function formatName(name){
    let word = name.split(" ")
    let minIndex = 0
    let maxIndex = word.length - 1
    let length = name.split(" ").join("").length
    let initial = ""
    while(minIndex < word.length){
        initial += word[minIndex][0]
        minIndex ++
    }
    return {
        fullName: name,
        firstName: word[0],
        lastName: word[maxIndex],
        initials: initial,
        length: length
    }
};

console.log(formatName("Yang Tyin"))

// Exercise 9: Higher-Order Function
console.log("\nExercise 9: Higher-Order Function")
// TODO: Create a function called 'createMultiplier' that takes a factor
// - Return a new function that multiplies any number by that factor
// - Create a 'double' function (factor = 2) and a 'triple' function (factor = 3)
// - Test both functions with different numbers

// Your code here:
function createMultiplier(factor){
    return function (num){
        return num * factor
    };
}

let double = createMultiplier(2);
console.log(double(4))
let triple = createMultiplier(3);
console.log(triple(5))

// Exercise 10: Callback Function
console.log("\nExercise 10: Callback Function")
// TODO: Create a function called 'processArray' that takes an array and a callback
// - Apply the callback function to each element in the array
// - Return a new array with the results
// - Create callback functions to:
//   - Square each number
//   - Convert strings to uppercase
// - Test with both number and string arrays

// Your code here:
function processArray(array, callback){
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(callback(array[i]))
    }
    return newArray
}

let numArray = [1, 2, 3, 4, 5]
let strArray = ["bad", "good", "great", "better", "awesome"]
console.log(processArray(numArray, x => x * x))
console.log(processArray(strArray, x => x.toUpperCase()))


// Exercise 11: Object Method
console.log("\nExercise 11: Object Method")
// TODO: Create an object called 'bankAccount' with:
// - Properties: balance (number), accountNumber (string), owner (string)
// - Methods:
//   - deposit(amount): adds amount to balance
//   - withdraw(amount): subtracts amount from balance (check if sufficient funds)
//   - getBalance(): returns current balance
//   - getInfo(): returns account information as a string
// - Test all methods

// Your code here:
function bankAccount(initialBalance, owner, accountNumber){
    return{
        balance: initialBalance,
        owner: owner,
        accNum: accountNumber,

        deposit: function(amount){
            console.log(`Balance: $${this.balance}`)
            this.balance += amount
            return `Deposit Amount: $${amount}, Current Balance: $${this.balance}`
        },
        withdraw: function(amount){
            console.log(`Balance: $${this.balance}`)
            if(amount > this.balance){
                return "Insufficient Money"
            }
            this.balance -= amount
            return `Withdraw Amount: $${amount}, Current Balance: $${this.balance}`
        },
        getBalance: function(balance){
            return `Balance: $${this.balance}`
        },
        getInfo: function(owner, accountNumber, balance){
            return `Owner: ${this.owner.toUpperCase()}, Account Number: ${this.accNum}, Current Balance: $${this.balance}`
        }
    };
}

const yangAcc = bankAccount(10000, "Yang Tyin", "123456789")
console.log(yangAcc.getBalance())
console.log(yangAcc.deposit(2000))
console.log(yangAcc.withdraw(338))
console.log(yangAcc.getInfo())

// Exercise 12: Rest Parameters
console.log("\nExercise 12: Rest Parameters")
// TODO: Create a function called 'calculateTotal' that uses rest parameters
// - Accept any number of price arguments
// - Calculate the total price
// - Apply a 10% discount if there are 3 or more items
// - Return the final total
// - Test with different numbers of items

// Your code here:
function calculateTotal(...prices){
    let total = prices.reduce((total, num) => total + num, 0).toFixed(2)

    let discount = 0
    if(prices.length >= 3){
        discount += 0.1
    }

    let final = (total - (total * discount)).toFixed(2)

    return {
        totalPrice: total,
        discount: `${discount*100}%`,
        finalTotal: final
    }
}

console.log(calculateTotal(20.4, 5.6, 7.8, 9.9))
console.log(calculateTotal(9.4, 14.8))

// Exercise 13: Function Scope Practice
console.log("\nExercise 13: Function Scope")
// TODO: Create a function called 'outerFunction' that:
// - Declares a variable 'outerVar' with value "I'm outside"
// - Contains an inner function called 'innerFunction' that:
//   - Declares a variable 'innerVar' with value "I'm inside"
//   - Logs both outerVar and innerVar
// - Calls the inner function
// - Try to log innerVar from the outer function (this should cause an error)
// - Comment out the problematic line

// Your code here:
function outerFunction(){
    let outerVar = "I'm outside"
    function innerFunction(){
        let innerVar = "I'm inside"
        console.log("Inside", outerVar) // Inside can read outside variable
        console.log("Inside", innerVar)
    }
    innerFunction()
    console.log("Outside", outerVar)
    // console.log("Outside", innerVar) // Outside cannot read inside variable
}

console.log(outerFunction())

// Exercise 14: IIFE (Immediately Invoked Function Expression)
console.log("\nExercise 14: IIFE")
// TODO: Create an IIFE that:
// - Declares a private variable 'secret' with value "This is secret"
// - Returns a function that can access and return the secret
// - Assign the returned function to a variable
// - Call the function to get the secret
// - Try to access 'secret' directly (this should cause an error)
// - Comment out the problematic line

// Your code here:
const IIFE = (function (){
    let secret = "This is secret"

    return {
        reveal: function () {
            return secret
        }
    }
})()

console.log(IIFE.reveal())
console.log(IIFE)

// Exercise 15: Complex Function
console.log("\nExercise 15: Complex Function")
// TODO: Create a function called 'analyzeText' that takes a text string
// - Return an object with:
//   - wordCount: number of words
//   - characterCount: number of characters (including spaces)
//   - characterCountNoSpaces: number of characters (excluding spaces)
//   - sentenceCount: number of sentences (count periods, exclamation marks, question marks)
//   - averageWordLength: average length of words
//   - longestWord: the longest word in the text
// - Test with a sample paragraph

// Your code here:
function analyzeText(text) {
    let words = text.trim().split(/\s+/);
    let wordCount = words.length;
    let charCount = text.length;
    let charCountNoSpace = text.replace(/\s/g, "").length;
    let sentCount = text.split(/[.!?]/).filter(s => s.trim() !== "").length;
  
    let sumCharCount = 0;
    let longestWord = "";
  
    for (let word of words) {
      sumCharCount += word.length;
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    let avgWordLength = sumCharCount / wordCount;
  
    return {
      wordCount,
      characterCount: charCount,
      characterCountNoSpaces: charCountNoSpace,
      sentenceCount: sentCount,
      averageWordLength: avgWordLength.toFixed(2),
      longestWord
    };
  }
  
  console.log(analyzeText("Hi My Name Is Yang Tyin"));
  


console.log("\n=== END OF EXERCISES ===")
console.log("Great job! Check your solutions against the solutions.js file!")
