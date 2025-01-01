const original = [1, 2, [3, 4]];
const shallowCopy = original.slice();
console.log("shallowCopy", shallowCopy);
console.log("shallowCopy[2][0]", shallowCopy[2][0]);

shallowCopy[2][0] = 99;
console.log(original[2][0]); // 99
