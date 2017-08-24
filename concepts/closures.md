__closure__: a stateful function. combination of a function with the context of which the function was declared.

With `var` you have function scoping. Each iteration shares the same binding. the variable is hoisted outside the loop scope
```js
for(var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
}
```

With `let` you have a block scope and when used in the `for` loop you get a new binding for each iteration
```js
for(let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
}
```
