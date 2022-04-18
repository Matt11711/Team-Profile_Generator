const Employee = require("./Employee");
// intern class and its method
class Intern extends Employee{
    constructor(info){
    super(info)
    const {school} = info
  this.school = school
    }

getSchool() {
    return this.school
}
}



module.exports = Intern