# Express Passport JS
- [Passport JS](https://www.npmjs.com/package/passport)

### Passport JS
- What is Passport JS?
- Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

#### HTTP headers and Cookies
- HTTP is a stateless protocol. This means that each request is independent of the other. The server does not know if two requests are coming from the same client. This is where cookies and sessions come in. Cookies and sessions are used to store information about the user. This information can be used to identify the user or store user preferences.

- HTTP head
HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value. Whitespace before the value is ignored.

- Cookies
Cookies are small pieces of data that are stored on the client-side and are sent to the server with every request. Cookies are used to store information about the user. This information can be used to identify the user or store user preferences. Cookies are stored in the browser and remain there until they expire or are deleted. 

- Sessions
Sessions are used to store user data on the **server-side**. Unlike cookies, sessions are not stored on the client-side. A session is created on the server-side every time a user visits a website. The session data is stored on the server and the session ID is sent to the client as a cookie. The session ID cookie is then sent back to the server with every request. The server uses the session ID to retrieve the session data. The session data is stored on the server and not on the client-side. This makes sessions more secure than cookies.

### middleware
- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

```js
// middleware function
function myMiddleware(req, res, next) {
  // do something
  next();
}
```

- Global middleware
- Global middleware is defined on the app object and is used to modify the request and the response objects. Global middleware is called in the order they are defined on the app object. 

```js
// global middleware
app.use(function(req, res, next) {
  // do something
  next();
});
```

- Route middleware
- Route middleware is defined on the router object and is used to modify the request and the response objects. Route middleware is called in the order they are defined on the router object. 

```js
// route middleware
router.use(function(req, res, next) {
  // do something
  next();
});
```

### express session
- [express-session](https://www.npmjs.com/package/express-session)

- express-session is a middleware for ExpressJS. It is used to manage sessions. A session is a place to store data that you want access to across requests. Each user that visits your website has a unique session. You can use sessions to store and access user data as they browse your application.