```js
const delay = 1000;

const clap = function() {
    console.log('CLAP!');
}

setTimeout(clap, delay);
```

1. Three `setTimeout`-ers, three function callers.

2. Function callers: write a `delay` value on the post-it,
   and pass it to the three `setTimeout`-ers.

3. `setTimeout`-ers: count to `delay` seconds.

