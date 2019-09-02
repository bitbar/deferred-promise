# Deferred Promise

Simple jQuery `Deferred()` port using native `Promise`.

## Install

```sh
npm install --save @bitbar/deferred-promise
```

## Use

```js
const DeferredPromise = require('@bitbar/deferred-promise');

const first = new DeferredPromise();
const second = new DeferredPromise();

first.then( () => console.log('O, hello!') );
second.then( () => console.log('Yupi!') );

Promise.all([ first, second ]).then( () => console.log('Ow yeah!') );

setTimeout(first.resolve, 1000);
second.resolve();

```

## License

This project is using [ISC license](LICENSE).
