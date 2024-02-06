# Vue Router

1. what is Vue router

- Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. Features include:
  - Nested route/view mapping
  - Modular, component-based router configuration
  - Route params, query, wildcards
  - View transition effects powered by Vue.js' transition system
  - Fine-grained navigation control
  - Links with automatic active CSS classes
  - HTML5 history mode or hash mode, with auto-fallback in IE9
  - Customizable Scroll Behavior
  - Restore scroll position when going back in history mode
  - URL params encoding/decoding
  - Navigation Cancellation
  - Route meta fields
  - Links Prefetching
  - Named Routes
  - Named Views
  - Redirect and Alias
  - Keep-alive
  - Transitions on page load / leaving
  - Lazy Loading of Routes
  - Scroll to Anchor
  - Customizable Loading Component
  - Global "before" Guards
  - Per-Route Guard
  - Per-Route Error Handler
  - Lazy Loading Error Handling
  - Router instance methods
  - Router instance properties
  - Router constructor options
  - Router configuration options
  - Router instance options
  - Router life-cycle hooks
  - Router events
  - Router mode
  - Router base
  - Router link active class
  - Router scroll behavior
  - Router parseQuery / stringifyQuery

2. core concepts of Vue router

- Route Matching

```js
// Routes are evaluated in the order they are defined. The first route that matches the URL is the one that is used.
const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: "/user/:id", component: User },
  ],
});
```

- Nested Routes
```js
// Nested routes are child routes of the parent route. The nested routes are defined in the children property of the parent route.
const router = new VueRouter({
  routes: [
    { path: "/user/:id", component: User,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: '', component: UserHome },
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        { path: 'profile', component: UserProfile },
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        { path: 'posts', component: UserPosts }
      ]
    }
  ]
})
```

- Programmatic Navigation
```js
// programmatically navigate to a different URL
/**
 location can be a string:
 
 onComplete: Function
  A callback to call once the navigation is complete. The callback is called with the same arguments as those of router.push.

  onAbort: Function
  A callback to call when the navigation is aborted. The callback is called with the same arguments as those of router.push.

 */

router.push(location, onComplete?, onAbort?)
```
 

- Named Routes
- Named Views
- Redirect and Alias
- Navigation Guards
- Data Fetching
- Scroll Behavior
- Lazy Loading Routes
- Meta Fields
- Transitions
- Composition API
- Navigation Failure
- HTML5 History Mode
- Hash Mode
- Abstract Mode
- Custom History Implementation
- Router Instance
- Router Constructor Options
- Router Configuration Options
- Router Instance Options
- Router Lifecycle Hooks
- Router Events
- Router Mode
- Router Base
- Router Link Active Class
- Router Scroll Behavior
- Router ParseQuery / StringifyQuery
