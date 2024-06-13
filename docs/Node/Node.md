# Node.js Fundamentals

## Introduction

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

## Node.js Features

- Asynchronous and Event Driven
- Very Fast
- Single Threaded but Highly Scalable
- No Buffering
- License


## Node.js Module Wrapper Function

Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:

```javascript
(function(exports, require, module, __filename, __dirname) {
    // Module code actually lives in here
});
```

## Node.js Global Object

In Node.js, the global object is `global` and all global variables are part of the global object.

```javascript
console.log(global);
```

## Node.js Path Module

The `path` module provides utilities for working with file and directory paths.

```javascript
const path = require('path');

path.parse(__filename);

```

## Node.js OS Module

The `os` module provides operating system-related utility methods and properties.

```javascript
const OS = require('os');

const totlaMemory = OS.totalmem();
const freeMemory = OS.freemem();

// ES6/ES2015 : ECMAScript 6
console.log(`Total Memory: ${totlaMemory}`);
console.log(`Free Memory: ${freeMemory}`);
```

## Node.js File System Module

The `fs` module provides file system-related functionality.

```javascript
const fs = require('fs');

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});
```

## Node.js Events Module

The `events` module provides a way of working with events. event is a signal that something has happened.

```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function() {
    console.log('Listener called');
});

// Raise an event
emitter.emit('messageLogged');
```


## Node.js HTTP Module

The `http` module provides a way of working with HTTP.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);
