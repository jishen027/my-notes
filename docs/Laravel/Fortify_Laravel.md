# Fortify Setting for Laravel API Server
- Set Laravel to fortify as an API server,  request headers add accept: application/json, or you will be redirected to the home route.
- Set \App\Providers\FortifyServiceProvider::class in app.php from settings.
- If 2FA is enabled at fortify.php, login without 2FA will return unauthenticated.
