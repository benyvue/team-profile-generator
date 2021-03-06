const Employee = require('./Employee');


class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 

        this.school = school; 
    }

    // gets school
    getSchool () {
        return this.school;
    }

    // override employee role to intern
    getRole () {
        return "Intern";
    }
}


module.exports = Intern; 