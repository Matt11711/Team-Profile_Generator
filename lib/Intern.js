const Employee = require("./Employee");

class Intern extends Employee{
    constructor(info){
    super(info)
    const {school} = info
  this.school = school
    }


}



module.exports = Intern