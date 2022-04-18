const Employee = require("./Employee");

// engineer class and its method
class Engineer extends Employee{
    constructor(info){
    super(info)
    const {github} = info
  this.github = github
    }
getGithub() {
    return this.github
}

}



module.exports = Engineer