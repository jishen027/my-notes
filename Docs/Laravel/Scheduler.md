# How to setup a scheduler in Laravel

### context

```
Laravel 9.0

The Consultation can be scheduled with a start and end date.

when the consultation is scheduled, the consultation is added to the scheduler.

when start date is reached, the scheduler sends an email to the user.

when end date is reached, the scheduler sends an email to the user.

```

1. Create a new command

```bash
php artisan make:command SendEmails
```

2. Add the command to the schedule method in the app/Console/Kernel.php file

```php
protected function schedule(Schedule $schedule)
{
    $schedule->command('emails:send')->daily();
}
```

3. Add the command to the app/Console/Commands/SendEmails.php file

```php
public function handle()
{
    // get all consultations that are scheduled for today
    $consultations = Consultation::whereDate('start_date', Carbon::today())->get();

    // send email to each user
    foreach ($consultations as $consultation) {
        Mail::to($consultation->user)->send(new ConsultationStart($consultation));
    }

    // get all consultations that are scheduled for today
    $consultations = Consultation::whereDate('end_date', Carbon::today())->get();

    // send email to each user
    foreach ($consultations as $consultation) {
        Mail::to($consultation->user)->send(new ConsultationEnd($consultation));
    }
}
```

4. start the scheduler

```bash
php artisan schedule:work
```

5. add the scheduler to the cronjob

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```
