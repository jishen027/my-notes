### Eloquent Mutators and Casting

- Accessor 

An accessor transform an Eloquent attribute value when it is accessed.

exanple :  when you want to get the first name and last name of a user, you can use the following code:
```php
public function getFullNameAttribute()
{
    return "{$this->first_name} {$this->last_name}";
}
```

Asscessor cashing :  if you want to cash the result of an accessor, you can use the following code:
```php
public function getFullNameAttribute($value)
{
    return Attrubute::make(
      get: fn(string $value) => bcrypt($value),
    )->shouldCache();
    // or withoutObjectCashing();
}
```


- Mutator

A mutator transform an Eloquent attribute value when it is set.

example :  when you want to set the first name and last name of a user, you can use the following code:
```php
protected functuin firstName(): Attribute
{
    return Attribute::make(
        get: fn(string $value) => ucfirst($value),
        set: fn(string $value) => strtolower($value),
    );
}
```

- Casting

Casting is a way to convert an Eloquent attribute value to a native PHP type.

example :  when you want to cast the first name and last name of a user, you can use the following code:
```php
protected $casts = [
    'first_name' => 'string',
    'last_name' => 'string',
];
```








