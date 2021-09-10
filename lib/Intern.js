const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school){
        super(id, name, email)
        this.school = school;
        this.role = "Intern"
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;