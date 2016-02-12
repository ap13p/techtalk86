```javascript
Number.EPSILON
Number.isInteger(Infinity) // false
Number.isNaN("NaN") // false

Math.acosh(3) // 1.762747174039086
Math.hypot(3, 4) // 5
Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2) // 2

"abcde".includes("cd") // true
"abc".repeat(3) // "abcabcabc"

Array.from(document.querySelectorAll('*')) // Returns a real Array
Array.of(1, 2, 3) // Similar to new Array(...), but without special one-arg behavior
[0, 0, 0].fill(7, 1) // [0,7,7]
_.find([1,2,3], function (x) { return x == 4; })
[1, 2, 3].find(x => x == 3) // 3
[1, 2, 3].findIndex(x => x == 2) // 1
[1, 2, 3, 4, 5].copyWithin(3, 0) // [1, 2, 3, 1, 2]
["a", "b", "c"].entries() // iterator [0, "a"], [1,"b"], [2,"c"]
["a", "b", "c"].keys() // iterator 0, 1, 2
["a", "b", "c"].values() // iterator "a", "b", "c"

Object.assign(Point, { origin: new Point(0,0) });
_.assign(asd, as)
var obj = {};
var obj2 = { name: 'as' };
Object.assign(obj, obj2, { age: 12 })

var obj3 = Object.freeze({...obj});
obj3.kelas = 'IT';
obj3 === { name: 'as' }
obj3.kelas === undefined

obj4 = obj
obj4.kelas = 12;
obj4 === { name: 'as', kelas: 12 };
obj === { name: 'as' }
```
