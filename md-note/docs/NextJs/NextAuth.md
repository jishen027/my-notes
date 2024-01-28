## Next Auth 

- 1. Install Next Auth
```bash
yarn add next-auth
# or
npm install next-auth
```

- 2. Create a file in the root of your project called pages/api/auth/[...nextauth]/routes.js
```js
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // ...add more providers here
  ],
  database: process.env.DATABASE_URL
}

export default (req, res) => NextAuth(req, res, options)
```

- 3. Add the following to your pages/_app.js file
```js
import { Provider } from 'next-auth/client'

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}
```

- 4. Setup OAuth Provider
  - 4.1. Create a new OAuth App on GitHub
  - 4.2. Add the following to your .env.local file
  ```bash
  GITHUB_ID=YOUR_GITHUB_ID
  GITHUB_SECRET=YOUR_GITHUB_SECRET
  ```
  - 4.3. Add the following to your pages/api/auth/[...nextauth].js file
  ```js
  import NextAuth from 'next-auth'
  import Providers from 'next-auth/providers'

  const options = {
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      })
    ]
  }

  export default (req, res) => NextAuth(req, res, options)
  ```

- 5. Add the following to your pages/index.js file
```js
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [ session, loading ] = useSession()

  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={signIn}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={signOut}>Sign out</button>
    </>}
  </>
}
```

- 6. Protecting Pages
```js
import { useSession } from 'next-auth/client'

export default function Page() {
  const [ session, loading ] = useSession()

  if(session) { return <p>Protected content</p> }

  return <p>Access Denied</p>
}
```

- 7. Accessing Session Data
```js
import { useSession } from 'next-auth/client'

export default function Page() {
  const [ session, loading ] = useSession()

  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={signIn}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>}
  </>
}
```