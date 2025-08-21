📘 JavaScript Methods Cheatsheet (with Examples)


---

🔹 Array Methods

Add / Remove

let arr = [1,2];
arr.push(3);   // [1,2,3]

arr.pop();     // [1,2]

arr.unshift(0); // [0,1,2]

arr.shift();    // [1,2]

Search / Find

[10,20,30].indexOf(20);     // 1
[10,20,10].lastIndexOf(10); // 2
[1,2,3].includes(2);        // true

[5,12,8].find(x => x > 10);       // 12
[5,12,8].findIndex(x => x > 10);  // 1

Iterate / Transform

[1,2,3].forEach(x => console.log(x)); // 1,2,3
[1,2,3].map(x => x*2);                // [2,4,6]
[1,2,3,4].filter(x => x%2==0);        // [2,4]
[1,2,3].reduce((a,b)=>a+b,0);         // 6

Order

[20,5,1].sort((a,b)=>a-b); // [1,5,20]
[1,2,3].reverse();         // [3,2,1]

Slice / Splice

[1,2,3,4].slice(1,3);       // [2,3]

let arr=[1,2,3];
arr.splice(1,1,9);          // [1,9,3]

[1,2].concat([3,4]);        // [1,2,3,4]

[1,[2,[3]]].flat(2);        // [1,2,3]

Other

[1,2,3].join("-");          // "1-2-3"
[2,4,6].every(x=>x%2==0);   // true
[1,3,4].some(x=>x%2==0);    // true
[1,2,3].fill(0,1);          // [1,0,0]

Array.from("abc");          // ["a","b","c"]
Array.isArray([1,2]);       // true


---

🔹 Object Methods

Keys & Values

Object.keys({a:1,b:2});   // ["a","b"]
Object.values({a:1,b:2}); // [1,2]
Object.entries({a:1,b:2}); // [["a",1],["b",2]]

Create / Copy

Object.assign({}, {a:1}, {b:2}); // {a:1,b:2}
let copy = structuredClone({x:1}); // deep copy

let proto = {x:1};
let obj = Object.create(proto); // obj inherits from proto

Locking

let obj = {a:1};
Object.freeze(obj); // no change allowed
Object.seal(obj);   // no add/remove

Other

Object.is(NaN,NaN); // true
Object.fromEntries([["a",1],["b",2]]); // {a:1,b:2}
Object.hasOwn({a:1},"a"); // true


---

🔹 Math Methods

Rounding

Math.abs(-5);    // 5
Math.round(4.6); // 5
Math.floor(4.9); // 4
Math.ceil(4.1);  // 5
Math.trunc(4.9); // 4

Extremes

Math.max(1,5,3); // 5
Math.min(1,5,3); // 1

Random & Power

Math.random();    // e.g. 0.37
Math.pow(2,3);    // 8
Math.sqrt(16);    // 4
Math.cbrt(27);    // 3

Signs & Logs

Math.sign(-5);  // -1
Math.log(1);    // 0
Math.log10(100); // 2
Math.exp(1);     // 2.718...

Trigonometry

Math.sin(Math.PI/2); // 1
Math.cos(0);         // 1
Math.tan(Math.PI/4); // 1

Constants

Math.PI; // 3.14159...
Math.E;  // 2.718...

