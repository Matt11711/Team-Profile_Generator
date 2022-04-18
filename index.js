// import necessary functions/classes
const fs = require('fs')
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require('./src/template')

let employees = [];
// questions to get manager information and then bring us to the teambuilder prompt
const startTeam = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },

    {
      type: "input",
      message: "What is the manager's employee id?",
      name: "id",
    },

    { type: "input", message: "What is the manager's email?", name: "email" },
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNumber",
    }
  ]);
};

// prompts to add team members or finish and generate your page
const buildTeam = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "nextMember",
          message: "If there are additonal members of this team, please select their role.",
          choices: ["Engineer", "Intern", "No one else"],
        },
      ])
      .then((userSelection) => {
        if (userSelection.nextMember === "Engineer") {
          addEngineer();
        } else if (userSelection.nextMember === "Intern") {
          addIntern();
        } else  {
          writeFile(generateHTML(employees))
        }
      });
  };
// adds intern to employee array
function addIntern() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
  
      {
        type: "input",
        message: "What is the intern's employee id?",
        name: "id",
      },
  
      { type: "input", message: "What is the intern's email?", name: "email" },
      {
        type: "input",
        message: "What is the intern's school?",
        name: "school",
      }]).then((data) => {
          data.role = "Intern"
          employees.push(new Intern (data));
          buildTeam();
      })
}
// adds engineer to employee array
function addEngineer() {
   return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
  
      {
        type: "input",
        message: "What is the engineer's employee id?",
        name: "id",
      },
  
      { type: "input", message: "What is the engineer's email?", name: "email" },
      {
        type: "input",
        message: "What is the engineer's github username?",
        name: "github",
      }]).then((data) => {
          data.role = "Engineer"
          employees.push(new Engineer (data));
          buildTeam();
      })
}


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html',fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

startTeam().then((data) => {
  data.role = "Manager";
  employees.push(new Manager(data));
  buildTeam();
});
