# Next JS Server Action

## Server Action

Server Action is a function that runs on the server side. It can be used to perform tasks such as fetching data from a database, sending emails, or any other server-side operation.

Server Actions can be used like any other function in your Next.js application. They can be called from any page or API route.

## Creating a Server Action

### use "use server" flag to create a server action.

```js
"use client";

async function getPosts() {
  "use server";
  const username = formData.get("username");
  // ...
}
```

The example above is use function level server action. this function will run on the server side.

### use "use server" flag on module level

```js
"use server";

export async function getPosts() {
  const username = formData.get("username");
  // ...
}
```

The example above is use module level server action. this function will run on the server side.

### Important

If use server action in client component, the return value from server action has to be `plain object` (`JSON`).

## Why we use server action ?

1. Less code
2. No need to create API routes
3. No need to handle CORS
4. Less client side code
