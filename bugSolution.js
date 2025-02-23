function foo(a, b) {
  if (a === null || b === null) {
    // Option 1: Return NaN
    return NaN; 
    // Option 2: Throw an error
    // throw new TypeError('Parameters cannot be null');
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // NaN
console.log(foo(1, null)); // NaN
console.log(foo(null, null)); // NaN