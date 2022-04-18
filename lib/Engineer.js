const Employee = require("./Employee");

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