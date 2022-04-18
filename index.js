// Set up dependencies
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const startTeam = () => {
    return inquirer.prompt([
        {
            // Question #1 - Manager Name
            type: "input",
            name: "name",
            message: "Enter the manager's name",
        },
        {
        // Question #2 - Manager Employee ID
         {
    type: "input",
    message: "Please enter the manager's Employee Id",
    name: 'id'
        },


    ])
} 