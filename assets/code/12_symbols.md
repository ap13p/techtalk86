```javascript
var MyClass = (function() {

  // module scoped symbol
  var key = Symbol("key");
  function MyClass(privateData) {
    const key2 = 'key2';
    this[key] = privateData;
    this[key2] = 'asd';
  }

  MyClass.prototype = {
    doStuff: function() {
      ... this[key] ...
    }
  };

  return MyClass;
})();

var c = new MyClass("hello")
c["key"] === undefined
```
