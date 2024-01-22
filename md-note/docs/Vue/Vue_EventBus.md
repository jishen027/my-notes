# Use mitt as eventBus in vue3 with Inject/Provide

step1: install mitt

```bash
npm install mitt
```

step2: create a mitt instance and provide it
```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
const app = createApp(App)
app.provide('mitt', mitt())
app.mount('#app')
```

step3: inject it in your component and use it to emit event
```js
// component1.vue
import { inject } from 'vue'
export default {
  setup() {
    const emitter = inject('mitt')
    const handleClick = () => {
      emitter.emit('event-name', eventData)
    }
    return {
      handleClick
    }
  }
}
```

step4: inject it in your component and use it to listen event
```js
// component2.vue
import { inject, onMounted } from 'vue'
export default {
  setup() {
    const emitter = inject('mitt')
    const handleEvent = (data) => {
      console.log(data)
    }
    onMounted(() => {
      emitter.on('event-name', (eventData)=> handleEmit)
    })
    return {}
  }
}
```

