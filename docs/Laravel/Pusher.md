# Laravel Broadcasting using pusher

## context

```
Laravel 9.0

When Consultation Owner invite other user to join the consultation, the other user can see the invitation notification real-time using pusher.

```

1. Install pusher

```bash
composer require pusher/pusher-php-server "~4.0"
```

2. Create pusher account and get the credentials

3. Add the credentials to .env file

```bashs
PUSHER_APP_ID=your_app_id
PUSHER_APP_KEY=your_app_key
PUSHER_APP_SECRET=your_app_secret
PUSHER_APP_CLUSTER=your_app_cluster

// change the broadcast driver to pusher
BROADCAST_DRIVER=pusher
```

4. Create the event

```bash
php artisan make:event ConsultationInvitation
```

5. Edit the event

```php
<?php
// app/Events/ConsultationInvitation.php
/**
 * Create a new event instance.
 *
 * @return void
 */
public function __construct($consultation)

/**
 * Get the channels the event should broadcast on.
 *
 * @return \Illuminate\Broadcasting\Channel|array
 */
public function broadcastOn()
{
    return new PrivateChannel('consultation.'.$this->consultation->id);
}

/**
 * The event's broadcast name.
 *
 * @return string
 */
public function broadcastAs()
{
    return 'consultation.invitation';
}

/**
 * Get the data to broadcast.
 *
 * @return array
 */
public function broadcastWith()
{
    return [
        'consultation' => $this->consultation,
    ];
}
```

6. Edit the controller

```php
<?php
// app/Http/Controllers/ConsultationController.php
/**
 * Invite other user to join the consultation
 *
 * @param  \Illuminate\Http\Request  $request
 * @param  \App\Models\Consultation  $consultation
 * @return \Illuminate\Http\Response
 */
public function invite(Request $request, Consultation $consultation)
{
    $this->authorize('update', $consultation);

    $user = User::findOrFail($request->user_id);

    $consultation->users()->attach($user);

    event(new ConsultationInvitation($consultation));

    return response()->json([
        'message' => 'Invitation sent successfully',
    ]);
}
```

7. For SPA, install pusher-js to Vue project

```bash
npm install --save pusher-js
```

8. add the pusher credentials to .env file

```bash
VITE_PUSHER_APP_KEY=your_app_key
VITE_PUSHER_APP_CLUSTER=your_app_cluster
```

9. setup the pusher in Vue project and add the event listener

```js
// resources/js/main.js
import { createApp } from "vue";
import App from "./App.vue";
...

import Pusher from "pusher-js";

window.Pusher = new Pusher(import.meta.env.VITE_APP_PUSHER_KEY, {
  cluster: import.meta.env.VITE_APP_PUSHER_CLUSTER,
});

window.Pusher.logToConsole = true;

// add the event listener
window.Pusher.subscribe(`consultation.${consultation.id}`).bind(
  "consultation.invitation",
  (data) => {
    console.log(data);
  }
);

const app = createApp(App);
```
