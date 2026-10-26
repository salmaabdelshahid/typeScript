"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    Password;
    Phone;
    _age;
    notebooks = [];
    constructor(id, name, email, Password, Phone, _age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.Password = Password;
        this.Phone = Phone;
        this._age = _age;
        if (_age < 18 || _age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
    displayInfo() {
        return console.log(`${this.name}, ${this.id}, ${this.email}, #${this.Password}, ${this.Phone}, ${this._age}`);
    }
}
class Admim extends User {
    adminRole;
    constructor(id, name, email, Password, Phone, age, adminRole) {
        super(id, name, email, Password, Phone, age);
        this.adminRole = adminRole;
    }
    manageNotes() {
        console.log(`[Admin Panel] ${this.name} (${this.adminRole}) is managing system notes: adding, editing, or deleting entries.`);
    }
}
class Note {
    id;
    title;
    content;
    auther;
    constructor(id, title, content, auther) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.auther = auther;
    }
    displayInfoNote() {
        return console.log(`${this.id}, ${this.title}, ${this.content}, ${this.auther}`);
    }
}
class NoteBook {
    userId;
    conllection;
    constructor(userId) {
        this.userId = userId;
        this.conllection = [];
        userId.addNotebook(this);
    }
    addNote({ id, title, content, userId }) {
        const note = new Note(id, title, content, userId);
        this.conllection.push(note);
    }
    removeNote(id) {
        const updateCollection = this.conllection.filter(ele => ele.id !== id);
        this.conllection = updateCollection;
    }
}
class Storage {
    data;
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    getAllItems() {
        return this.data;
    }
    removeItem(item) {
        this.data = this.data.filter(ele => ele !== item);
    }
}
