```javascript
// lib/math.js
export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;
```
```javascript
// app.js
'/[root_app]/node_modules/lib/math';
import * as math from "lib/math";
alert("2π = " + math.sum(math.pi, math.pi));
```
```javascript
// otherApp.js
import {sum, pi} from "lib/math";
alert("2π = " + sum(pi, pi));
```
