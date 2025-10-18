// 🌐 Lesson 8: DOM Manipulation - Examples

console.log("=== DOM MANIPULATION LESSON ===")

// Note: This file demonstrates DOM concepts
// In a real browser environment, you would have access to the DOM

// 1. DOM Selection Methods
console.log("\n1. DOM Selection Methods:")
// Simulating DOM selection methods
const mockDOM = {
  // getElementById
  getElementById: function(id) {
    return { id: id, tagName: 'DIV', textContent: 'Element content' }
  },
  
  // getElementsByClassName
  getElementsByClassName: function(className) {
    return [
      { className: className, tagName: 'P', textContent: 'First element' },
      { className: className, tagName: 'P', textContent: 'Second element' }
    ]
  },
  
  // getElementsByTagName
  getElementsByTagName: function(tagName) {
    return [
      { tagName: tagName, textContent: 'First ' + tagName },
      { tagName: tagName, textContent: 'Second ' + tagName }
    ]
  },
  
  // querySelector
  querySelector: function(selector) {
    return { selector: selector, tagName: 'DIV', textContent: 'Selected element' }
  },
  
  // querySelectorAll
  querySelectorAll: function(selector) {
    return [
      { selector: selector, tagName: 'DIV', textContent: 'First match' },
      { selector: selector, tagName: 'DIV', textContent: 'Second match' }
    ]
  }
}

// Simulate DOM selections
const elementById = mockDOM.getElementById('myElement')
console.log("Element by ID:", elementById)

const elementsByClass = mockDOM.getElementsByClassName('myClass')
console.log("Elements by class:", elementsByClass)

const elementsByTag = mockDOM.getElementsByTagName('p')
console.log("Elements by tag:", elementsByTag)

const elementBySelector = mockDOM.querySelector('.myClass')
console.log("Element by selector:", elementBySelector)

const elementsBySelectorAll = mockDOM.querySelectorAll('.myClass')
console.log("Elements by selector all:", elementsBySelectorAll)

// 2. Creating and Adding Elements
console.log("\n2. Creating and Adding Elements:")
// Simulating DOM creation methods
const mockDocument = {
  createElement: function(tagName) {
    return {
      tagName: tagName.toUpperCase(),
      textContent: '',
      innerHTML: '',
      className: '',
      id: '',
      style: {},
      appendChild: function(child) {
        console.log(`Appending ${child.tagName} to ${this.tagName}`)
      },
      setAttribute: function(name, value) {
        console.log(`Setting ${name}="${value}" on ${this.tagName}`)
      }
    }
  },
  
  createTextNode: function(text) {
    return { textContent: text, nodeType: 'TEXT_NODE' }
  }
}

// Create elements
const div = mockDocument.createElement('div')
const paragraph = mockDocument.createElement('p')
const textNode = mockDocument.createTextNode('Hello World!')

// Set attributes
div.setAttribute('id', 'container')
div.setAttribute('class', 'main-container')
paragraph.setAttribute('class', 'content')

// Set content
paragraph.textContent = 'This is a paragraph'
div.innerHTML = '<h1>Title</h1><p>Content</p>'

console.log("Created div:", div)
console.log("Created paragraph:", paragraph)
console.log("Created text node:", textNode)

// 3. Modifying Element Properties
console.log("\n3. Modifying Element Properties:")
// Simulating element property modification
const mockElement = {
  tagName: 'DIV',
  id: '',
  className: '',
  textContent: '',
  innerHTML: '',
  style: {},
  
  setAttribute: function(name, value) {
    this[name] = value
    console.log(`Set ${name} to "${value}"`)
  },
  
  getAttribute: function(name) {
    return this[name]
  },
  
  removeAttribute: function(name) {
    delete this[name]
    console.log(`Removed ${name}`)
  },
  
  classList: {
    add: function(className) {
      console.log(`Added class: ${className}`)
    },
    remove: function(className) {
      console.log(`Removed class: ${className}`)
    },
    toggle: function(className) {
      console.log(`Toggled class: ${className}`)
    },
    contains: function(className) {
      console.log(`Checking for class: ${className}`)
      return true
    }
  }
}

// Modify element properties
mockElement.setAttribute('id', 'myElement')
mockElement.setAttribute('class', 'active')
mockElement.textContent = 'Updated content'
mockElement.innerHTML = '<span>Nested content</span>'

// Modify styles
mockElement.style.color = 'red'
mockElement.style.fontSize = '16px'
mockElement.style.backgroundColor = 'yellow'

// Class list operations
mockElement.classList.add('highlight')
mockElement.classList.remove('inactive')
mockElement.classList.toggle('visible')
mockElement.classList.contains('active')

console.log("Modified element:", mockElement)

// 4. Event Handling
console.log("\n4. Event Handling:")
// Simulating event handling
const mockEventTarget = {
  eventListeners: {},
  
  addEventListener: function(eventType, handler, options) {
    if (!this.eventListeners[eventType]) {
      this.eventListeners[eventType] = []
    }
    this.eventListeners[eventType].push(handler)
    console.log(`Added ${eventType} event listener`)
  },
  
  removeEventListener: function(eventType, handler) {
    if (this.eventListeners[eventType]) {
      const index = this.eventListeners[eventType].indexOf(handler)
      if (index > -1) {
        this.eventListeners[eventType].splice(index, 1)
        console.log(`Removed ${eventType} event listener`)
      }
    }
  },
  
  dispatchEvent: function(event) {
    if (this.eventListeners[event.type]) {
      this.eventListeners[event.type].forEach(handler => {
        handler(event)
      })
    }
  }
}

// Event handlers
function handleClick(event) {
  console.log('Button clicked!', event)
}

function handleMouseOver(event) {
  console.log('Mouse over element!', event)
}

// Add event listeners
mockEventTarget.addEventListener('click', handleClick)
mockEventTarget.addEventListener('mouseover', handleMouseOver)

// Simulate events
mockEventTarget.dispatchEvent({ type: 'click', target: mockEventTarget })
mockEventTarget.dispatchEvent({ type: 'mouseover', target: mockEventTarget })

// 5. Form Handling
console.log("\n5. Form Handling:")
// Simulating form handling
const mockForm = {
  elements: {
    username: { value: 'john_doe', type: 'text' },
    email: { value: 'john@example.com', type: 'email' },
    password: { value: 'secret123', type: 'password' },
    age: { value: '25', type: 'number' },
    newsletter: { checked: true, type: 'checkbox' }
  },
  
  addEventListener: function(eventType, handler) {
    console.log(`Form ${eventType} listener added`)
  },
  
  reset: function() {
    console.log('Form reset')
  },
  
  submit: function() {
    console.log('Form submitted')
  }
}

// Form event handlers
function handleSubmit(event) {
  event.preventDefault()
  console.log('Form submission prevented')
  
  const formData = {
    username: mockForm.elements.username.value,
    email: mockForm.elements.email.value,
    password: mockForm.elements.password.value,
    age: parseInt(mockForm.elements.age.value),
    newsletter: mockForm.elements.newsletter.checked
  }
  
  console.log('Form data:', formData)
}

function handleInput(event) {
  console.log(`Input changed: ${event.target.name} = ${event.target.value}`)
}

// Add form event listeners
mockForm.addEventListener('submit', handleSubmit)
mockForm.addEventListener('input', handleInput)

// Simulate form events
mockForm.dispatchEvent = function(event) {
  if (event.type === 'submit') {
    handleSubmit(event)
  } else if (event.type === 'input') {
    handleInput(event)
  }
}

mockForm.dispatchEvent({ type: 'submit', preventDefault: () => {} })
mockForm.dispatchEvent({ type: 'input', target: { name: 'username', value: 'new_username' } })

// 6. Dynamic Content Updates
console.log("\n6. Dynamic Content Updates:")
// Simulating dynamic content updates
const mockContainer = {
  innerHTML: '',
  textContent: '',
  children: [],
  
  appendChild: function(child) {
    this.children.push(child)
    console.log(`Appended child: ${child.tagName || child.textContent}`)
  },
  
  removeChild: function(child) {
    const index = this.children.indexOf(child)
    if (index > -1) {
      this.children.splice(index, 1)
      console.log(`Removed child: ${child.tagName || child.textContent}`)
    }
  },
  
  insertBefore: function(newChild, referenceChild) {
    const index = this.children.indexOf(referenceChild)
    if (index > -1) {
      this.children.splice(index, 0, newChild)
      console.log(`Inserted ${newChild.tagName} before ${referenceChild.tagName}`)
    }
  }
}

// Create dynamic content
const dynamicDiv = mockDocument.createElement('div')
dynamicDiv.textContent = 'Dynamic content'

const dynamicParagraph = mockDocument.createElement('p')
dynamicParagraph.textContent = 'This is dynamically added'

// Add to container
mockContainer.appendChild(dynamicDiv)
mockContainer.appendChild(dynamicParagraph)

// Update content
mockContainer.innerHTML = '<h2>Updated Content</h2><p>All content replaced</p>'
mockContainer.textContent = 'Plain text content'

console.log("Container children:", mockContainer.children)

// 7. CSS Class Manipulation
console.log("\n7. CSS Class Manipulation:")
// Simulating CSS class manipulation
const mockElementWithClasses = {
  className: 'initial-class',
  classList: {
    classes: ['initial-class'],
    
    add: function(...classNames) {
      classNames.forEach(className => {
        if (!this.classes.includes(className)) {
          this.classes.push(className)
          console.log(`Added class: ${className}`)
        }
      })
    },
    
    remove: function(...classNames) {
      classNames.forEach(className => {
        const index = this.classes.indexOf(className)
        if (index > -1) {
          this.classes.splice(index, 1)
          console.log(`Removed class: ${className}`)
        }
      })
    },
    
    toggle: function(className) {
      const index = this.classes.indexOf(className)
      if (index > -1) {
        this.classes.splice(index, 1)
        console.log(`Toggled off class: ${className}`)
      } else {
        this.classes.push(className)
        console.log(`Toggled on class: ${className}`)
      }
    },
    
    contains: function(className) {
      const hasClass = this.classes.includes(className)
      console.log(`Contains class ${className}: ${hasClass}`)
      return hasClass
    },
    
    replace: function(oldClass, newClass) {
      const index = this.classes.indexOf(oldClass)
      if (index > -1) {
        this.classes[index] = newClass
        console.log(`Replaced class ${oldClass} with ${newClass}`)
      }
    }
  }
}

// Manipulate classes
mockElementWithClasses.classList.add('active', 'highlight')
mockElementWithClasses.classList.remove('initial-class')
mockElementWithClasses.classList.toggle('visible')
mockElementWithClasses.classList.contains('active')
mockElementWithClasses.classList.replace('highlight', 'selected')

console.log("Final classes:", mockElementWithClasses.classList.classes)

// 8. Event Delegation
console.log("\nExercise 8: Event Delegation:")
// Simulating event delegation
const mockParent = {
  children: [
    { tagName: 'BUTTON', textContent: 'Button 1', dataset: { action: 'save' } },
    { tagName: 'BUTTON', textContent: 'Button 2', dataset: { action: 'delete' } },
    { tagName: 'A', textContent: 'Link 1', href: '#home' }
  ],
  
  addEventListener: function(eventType, handler) {
    console.log(`Parent ${eventType} listener added (delegation)`)
  }
}

// Event delegation handler
function handleDelegatedClick(event) {
  const target = event.target
  
  if (target.tagName === 'BUTTON') {
    const action = target.dataset.action
    console.log(`Button clicked with action: ${action}`)
    
    switch (action) {
      case 'save':
        console.log('Saving data...')
        break
      case 'delete':
        console.log('Deleting item...')
        break
      default:
        console.log('Unknown button action')
    }
  } else if (target.tagName === 'A') {
    console.log(`Link clicked: ${target.href}`)
  }
}

// Add delegated event listener
mockParent.addEventListener('click', handleDelegatedClick)

// Simulate clicks
mockParent.dispatchEvent = function(event) {
  handleDelegatedClick(event)
}

mockParent.dispatchEvent({ target: mockParent.children[0] })
mockParent.dispatchEvent({ target: mockParent.children[1] })
mockParent.dispatchEvent({ target: mockParent.children[2] })

// 9. Local Storage Simulation
console.log("\n9. Local Storage Simulation:")
// Simulating localStorage
const mockLocalStorage = {
  data: {},
  
  setItem: function(key, value) {
    this.data[key] = value
    console.log(`Stored: ${key} = ${value}`)
  },
  
  getItem: function(key) {
    const value = this.data[key]
    console.log(`Retrieved: ${key} = ${value}`)
    return value
  },
  
  removeItem: function(key) {
    delete this.data[key]
    console.log(`Removed: ${key}`)
  },
  
  clear: function() {
    this.data = {}
    console.log('Local storage cleared')
  },
  
  key: function(index) {
    const keys = Object.keys(this.data)
    return keys[index]
  },
  
  get length() {
    return Object.keys(this.data).length
  }
}

// Use localStorage
mockLocalStorage.setItem('username', 'john_doe')
mockLocalStorage.setItem('theme', 'dark')
mockLocalStorage.setItem('language', 'en')

console.log('Username:', mockLocalStorage.getItem('username'))
console.log('Storage length:', mockLocalStorage.length)
console.log('First key:', mockLocalStorage.key(0))

mockLocalStorage.removeItem('language')
mockLocalStorage.clear()

// 10. AJAX Simulation
console.log("\n10. AJAX Simulation:")
// Simulating AJAX requests
const mockXMLHttpRequest = {
  open: function(method, url, async) {
    this.method = method
    this.url = url
    this.async = async
    console.log(`Opened ${method} request to ${url}`)
  },
  
  setRequestHeader: function(header, value) {
    console.log(`Set header: ${header} = ${value}`)
  },
  
  send: function(data) {
    console.log(`Sending data: ${data}`)
    
    // Simulate async response
    setTimeout(() => {
      if (this.onreadystatechange) {
        this.readyState = 4
        this.status = 200
        this.responseText = JSON.stringify({ message: 'Success', data: 'Mock response' })
        this.onreadystatechange()
      }
    }, 1000)
  }
}

// AJAX request handler
function makeAjaxRequest(url, method = 'GET', data = null) {
  const xhr = mockXMLHttpRequest
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText)
      console.log('AJAX Response:', response)
    }
  }
  
  xhr.open(method, url, true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(data)
}

// Make AJAX request
makeAjaxRequest('/api/users', 'GET')

console.log("\n=== END OF DOM MANIPULATION LESSON ===")
