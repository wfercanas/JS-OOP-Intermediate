const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["HTML & CSS"],

  addCourse(newCourse) {
    console.log("this", this);
    console.log("this.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

// Print the keys of an object within an array
console.log("keys:", Object.keys(juan));

// Print the keys of an object within an array
console.log("getOwnPropertyNames:", Object.getOwnPropertyNames(juan));

// Print an array of arrays, where the outer array contains in each position
// an array with the key-value of each property.
console.log("entries:", Object.entries(juan));

// Print an object where their propertiea match the properties of the
// object that is passed as an argument. The value of each property is an object
// that includes:
// value (of the passed-in property object), writable, enumerable, configurable
console.log(
  "getOwnPropertyDescriptors:",
  Object.getOwnPropertyDescriptors(juan)
);

// Closures
// The following code results in an error: "Cannot read property 'push' of undefined"
// 'this' is the array that holds the function: ['addCourse', [Function: addCourse]];
// 'this.approvedCourses' is undefined
console.log(Object.entries(juan)[3][1]("Grid"));

// Create a new property in an object, customizing its writable, enumerable and
// configurable attributes
Object.defineProperties(juan, "username", {
  value: "juandc",
  writable: true,
  enumerable: true,
  configurable: true,
});
