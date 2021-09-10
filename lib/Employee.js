const init = require("../index")

class Employee {
   constructor(name, id, email){
       this.name = name;
       this.id = id;
       this.email = email;
    }
    getName() {
       return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
        // is it return Employee?
    }
}

module.exports = Employee;