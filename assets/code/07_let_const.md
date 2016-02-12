```javascript
function f() { {
    let x;
    {
      // okay, block scoped name
      const x = "sneaky";
      // error, const
      x = "foo";
    }
    x == undefined
    // error, already declared in block
    let x = "inner";
  }
}
```
