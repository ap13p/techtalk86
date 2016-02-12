```javascript
// Dynamic loading – ‘System’ is default loader
System.import('lib/math').then(function(m) {
  alert("2π = " + m.sum(m.pi, m.pi));
});

import asd from 'asd';
function test() {
    System.import('./lib/math').then(m => alert(m));
}

// Create execution sandboxes – new Loaders
var loader = new Loader({
  global: fixup(window) // replace ‘console.log’
});
loader.eval("console.log('hello world!');");

// Directly manipulate module cache
var $ = System.get('jquery');
var $ = require('jquery');
System.set('jquery', Module({$: $})); // WARNING: not yet finalized
```
