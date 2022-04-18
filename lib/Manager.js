const Employee = require("./Employee");
// manager class
class Manager extends Employee{
    constructor(info){
    super(info)
    const {officeNumber} = info
  this.officeNumber = officeNumber
    }


}



module.exports = Manager