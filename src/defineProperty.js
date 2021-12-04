const juan = {
  name: 'Juanito',
  age: 18,
  approvedCourses: ['HTML & CSS'],

  addCourse(newCourse) {
    console.log('this', this);
    console.log('this.approvedCourses', this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

Object.defineProperty(juan, 'navigator', {
  value: 'Chrome',
  enumerable: false,
  writable: true,
  configurable: true,
});

Object.defineProperty(juan, 'kind', {
  value: 'humankind',
  writable: false,
  configurable: false,
  enumerable: false,
});

Object.defineProperty(juan, 'editor', {
  value: 'VS Code',
  writable: false,
  configurable: true,
  enumerable: true,
});

Object.defineProperty(juan, 'terminal', {
  value: 'Windows Terminal',
  writable: true,
  configurable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptors(juan));

// Enumerable
// is false in navigator and kind properties
console.log(juan.navigator, juan.kind) // Both are printed
console.log(Object.keys(juan)) // Neither navigator nor kind are listed in the printed array
console.log(Object.getOwnPropertyNames(juan)) // Both are listed in the printed array
juan.navigator = 'Firefox' // Works
delete juan.navigator // Works

// Writable
// is false in the editor property
console.log(juan) // Is printed
console.log(juan.editor) // Is printed
console.log(Object.keys(juan)) // Is printed
console.log(Object.getOwnPropertyNames(juan)) // Is printed
juan.editor = 'Atom'; // Doesn't work, keeps being 'VS Code'
delete juan.editor; // Works

// Configurable
// is false in the terminal property
console.log(juan) // Is printed
console.log(juan.terminal) // Is printed
console.log(Object.keys(juan)) // Is printed
console.log(Object.getOwnPropertyNames(juan)) // Is printed
juan.terminal = 'PowerShell' // Works
delete juan.terminal // Doesn't work

// ------------------------------------------------ Object.seal()
Object.seal(juan) // Sets all configurable properties to false
Object.freeze(juan) // Sets all writable and configurable properties to false