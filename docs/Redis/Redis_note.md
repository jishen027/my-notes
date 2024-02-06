# Redis Basics

1. what is redis?
- Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker.

2. what is redis used for?
- Redis is an in-memory data structure store, used as a database, cache and message broker.

3. Data Types
- Strings
- Lists
- Sets  
- Sorted Sets
- Hashes
- Bitmaps
- HyperLogLogs
- Geospatial Indexes

4. Redis Commands
- SET key value
 Set the string value of a key. e.g. SET mykey "Hello"

- GET key
  Get the value of a key. e.g. GET mykey

- DEL key
  Delete a key. e.g. DEL mykey

- EXISTS key
  Determine if a key exists. e.g. EXISTS mykey

- MSET key value [key value ...]
  Set multiple keys to multiple values. e.g. MSET key1 "Hello" key2 "World"

- MGET key [key ...]
  Get the values of all the given keys. e.g. MGET key1 key2

- RANGE key start stop
  Get a substring of the string stored at a key. e.g. RANGE mykey 0 3, RANGE mykey -2 -1

- SETRANGE key offset value
  Overwrite part of a string at key starting at the specified offset. e.g. SETRANGE mykey 0 "Hello"


5. Redis Configuration
- Redis configuration file is located at /etc/redis/redis.conf
- Redis configuration file is divided into sections, denoted by square brackets. e.g. [section_name]
- Redis configuration file is composed of simple key-value pairs. e.g. bind
- Docker redis configuration file is located at /usr/local/etc/redis/redis.conf
```bash
docker run -d --name redis -p 6379:6379 redis redis-server --appendonly yes -v /Users/zhengyansheng/redis/redis.conf:/usr/local/etc/redis/redis.conf
```

6. Redis Options
- SET name "zhengyansheng" EX 10 NX
  EX seconds -- Set the specified expire time, in seconds. 
  NX -- Only set the key if it does not already exist.

- SET name "zhengyansheng" PX 10000 NX
  PX milliseconds -- Set the specified expire time, in milliseconds. 

- SET name "zhengyansheng" XX
  XX -- Only set the key if it already exist.

- SET name "zhengyansheng" GET
  GET -- Get the value of a key and set its value to a new one.

7. Sets
- SADD key member [member ...]
  Add one or more members to a set. e.g. SADD myset "Hello"

- SMEMBERS key
  Get all the members in a set. e.g. SMEMBERS myset

- SISMEMBER key member
  Determine if a given value is a member of a set. e.g. SISMEMBER myset "Hello"

- SREM key member [member ...]
  Remove one or more members from a set. e.g. SREM myset "Hello"

- SUNION key [key ...]
  Add multiple sets. e.g. SUNION set1 set2

8. Lists
- LPUSH key value [value ...]
  Prepend one or multiple values to a list. e.g. LPUSH mylist "World"

- RPUSH key value [value ...]
  Append one or multiple values to a list. e.g. RPUSH mylist "World"

- LRANGE key start stop
  Get a range of elements from a list. e.g. LRANGE mylist 0 3

- LPOP key
  Remove and get the first element in a list. e.g. LPOP mylist

- RPOP key
  Remove and get the last element in a list. e.g. RPOP mylist

- LLEN key
  Get the length of a list. e.g. LLEN mylist

- LREM key count value
  Remove elements from a list. e.g. LREM mylist 2 "Hello"

- LSET key index value
  Set the value of an element in a list by its index. e.g. LSET mylist 0 "Hello"

- LTRIM key start stop
  Trim a list to the specified range. e.g. LTRIM mylist 0 2

 
10. Hashes
- HSET key field value
  Set the string value of a hash field. e.g. HSET myhash field1 "Hello"

- HGET key field
  Get the value of a hash field. e.g. HGET myhash field1

- HGETALL key
  Get all the fields and values in a hash. e.g. HGETALL myhash

- HDEL key field [field ...]
  Delete one or more hash fields. e.g. HDEL myhash field1

- HEXISTS key field
  Determine if a hash field exists. e.g. HEXISTS myhash field1

- HINCRBY key field increment
  Increment the integer value of a hash field by the given number. e.g. HINCRBY myhash field1 5

- HKEYS key
  Get all the fields in a hash. e.g. HKEYS myhash

- HLEN key
  Get the number of fields in a hash. e.g. HLEN myhash

- HMGET key field [field ...]
  Get the values of all the given hash fields. e.g. HMGET myhash field1 field2

- HMSET key field value [field value ...]
  Set multiple hash fields to multiple values. e.g. HMSET myhash field1 "Hello" field2 "World"

- HSETNX key field value
  Set the value of a hash field, only if the field does not exist. e.g. HSETNX myhash field1 "Hello"

- HVALS key
  Get all the values in a hash. e.g. HVALS myhash
