# Dependency Inversion Principle

- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Abstractions should not depend on details. Details should depend on abstractions.
- In other words, we should depend on abstractions, not on concretions.

```javascript
class UserManager {
  // constructor injection
  constructor(database) {
    this.database = database;
  }

  addUser(user) {
    this.database.add(user);
  }
}

class MySQLDatabase {
  add(user) {
    console.log(`${user} added to MySQL database`);
  }
}

class MongoDBDatabase {
  add(user) {
    console.log(`${user} added to MongoDB database`);
  }
}

const mysql = new MySQLDatabase();
const mongodb = new MongoDBDatabase();

const userManager1 = new UserManager(mysql);
const userManager2 = new UserManager(mongodb);

userManager1.addUser("John Doe");
userManager2.addUser("John Doe");
```

- in the above example, the UserManager class is a high-level module, it should not depend on low-level modules, such as MySQLDatabase and MongoDBDatabase

- the UserManager class should depend on abstractions, such as Database, not on concretions, such as MySQLDatabase and MongoDBDatabase

- the MySQLDatabase and MongoDBDatabase classes are low-level modules, they should not depend on high-level modules, such as UserManager

```javascript
// Functional Programming - Dependency Inversion Principle
interface Database {
  add(user: string): void;
}

const mysql: Database = {
  add: (user) => {
    console.log(`${user} added to MySQL database`);
  },
};

const mongodb: Database = {
  add: (user) => {
    console.log(`${user} added to MongoDB database`);
  },
};

const userManager1 = (database: Database) => {
  const addUser = (user: string) => {
    database.add(user);
  };

  return { addUser };
};

const userManager2 = (database: Database) => {
  const addUser = (user: string) => {
    database.add(user);
  };

  return { addUser };
};

userManager1(mysql).addUser("John Doe");
userManager2(mongodb).addUser("John Doe");
```
