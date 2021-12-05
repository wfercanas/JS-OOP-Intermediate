const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },

  editA() {
    this.a = 'AAAA';
  },
};

console.log('obj1:', obj1);

const stringified = JSON.stringify(obj1);
console.log('stringified:', stringified);

const parsed = JSON.parse(stringified);
console.log('parsed:', parsed);

obj1.a = 'AAA';
obj1.c.d = 'DDD';

console.log('---------------------- Change obj1');
console.log('obj1:', obj1);
console.log('stringified:', stringified);
console.log('parsed:', parsed);
