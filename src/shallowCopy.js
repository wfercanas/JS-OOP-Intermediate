const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
};

console.log('obj1:', obj1);

// Copy using a for loop
// Works only if there aren't nested objects.
const obj2 = {};
for (prop in obj1) {
  obj2[prop] = obj1[prop];
}
obj2.c.d = 'DDDDD';
obj2.c.e = 'EEEEE';
console.log('obj2:', obj2);
console.log('--> obj1:', obj1);

// Has the same effect as using the for loop
const obj3 = Object.assign({}, obj1);
obj3.c.d = 'DDDDD';
obj3.c.e = 'EEEEE';
console.log('obj3:', obj3);
console.log('--> obj1:', obj1);

// Creates a new object and all properties will appear in __proto__
// Works when changing primitives, but not when changing nested objects.
// __proto__ properties point to the copied object. If this object changes, so does this __proto__
const obj4 = Object.create(obj1);
obj4.a = 'AAAA';
obj4.c.d = 'KKKK';
obj4.c.e = 'FFFF';
console.log('obj4:', obj4);
console.log('obj4.prototype:', obj4.__proto__);
console.log('--> obj1:', obj1);
