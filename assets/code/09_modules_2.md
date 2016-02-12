
```javascript
// lib/mathplusplus.js
export * from "lib/math";
export var e = 2.71828182846;

module.exports = function () {}
export default function(x) {
    return Math.log(x);
}
```
```javascript
// app.js
import ln, {pi, e} from "lib/mathplusplus";
alert("2π = " + ln(e)*pi*2);
```
