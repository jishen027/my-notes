# Single Responsibility Principle

A class should have a singular focus, encompassing only one responsibility, job, purpose, or area of concern.

```javascript
// This Class only for manage the contacts
class ContactManager {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }
}

// This Class only for update the UI
class ContactUI {
  static addContactToDOM(contact) {
    document.querySelector("#contacts").innerHTML += `
      <div>
        <h3>${contact.name}</h3>
        <p>${contact.phone}</p>
      </div>
    `;
  }
}

// create a new instance of ContactManager
const manager = new ContactManager();
// create a new instance of ContactUI
const contact = { name: "John Doe", phone: "555-555-5555" };
// add the contact to the manager
manager.addContact(contact);
// add the contact to the UI
ContactUI.addContactToDOM(contact);
```

- in the above example, the ContactManager class has a singular focus, encompassing only one responsibility, job, purpose, or area of concern, it only for manage the contacts

- the ContactUI class has a singular focus, encompassing only one responsibility, job, purpose, or area of concern, it only for update the UI

```javascript
// Functional Programming - Single Responsibility Principle
interface Contact {
  name: string;
  phone: string;
}

const contacts: Contact[] = [];

// this function only for manage the contacts
const addContact = (contact) => {
  contacts.push(contact);
};

// this function only for update the UI
const addContactToDOM = (contact) => {
  document.querySelector("#contacts").innerHTML += `
    <div>
      <h3>${contact.name}</h3>
      <p>${contact.phone}</p>
    </div>
  `;
};

const contact = { name: "John Doe", phone: "555-555-5555" };
addContact(contact);
addContactToDOM(contact);
```
