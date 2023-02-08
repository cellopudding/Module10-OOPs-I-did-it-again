const Manager = require("./lib/Manager.js");

const Engineer = require("./lib/Engineer.js");

const Intern = require("./lib/Intern.js");

const inquirer = require("inquirer");

const path = require("path");

const generateTeam = require("./src/GeneratedTeam");

const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist")

const distPath = path.join(DIST_DIR, "template.html")


const teamArray = []

const idArray = []

function init(){
//series of function with their own inq promps that all a different function
function createManager(){
    console.log("Build your team")
    inquirer.prompt([

        {
        type: 'input',
        name: 'managerName',
        message: 'What is the team manager name?',
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the team managers id?',
                    },
                    {
                        type: 'input',
                        name: 'managerEmail',
                        message: 'What is the team manager email?',
                            },

                            {
                                type: 'input',
                                name: 'managerOfficeNumber',
                                message: 'What is the team manager office number?',
                                    },
        
    ]).then((userAnswers) => {
        const manager = new Manager(userAnswers.managerName, userAnswers.managerId, userAnswers.managerEmail, 
            userAnswers.managerOfficeNumber)
            teamArray.push(manager)
            idArray.push(userAnswers.managerId)
            createTeam()

    
    })
}

function createTeam(){
    inquirer.prompt([

        {
            type: "list",
            name: "memberChoice",
            message: "What kind of team member would you like to add?",
            choices: ["Engineer", "Intern", "I dont want to add anyone"]
        }
    ]).then((userChoice) => {
        switch(userChoice.memberChoice) {
            case "Engineer": 
            addEngineer()
            break
            case "Intern": 
            addIntern()
            break
            default:
                createMyTeam()
        }
    })
}

//addEngineer function same as the manager one (last two), then gnerateTeam 

// // TODO: Create an array of questions for user input
// const questions = [
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the team manager name?',

      
//         },
//     {
//         type: 'input',
//         name: 'id',
//         message: 'What is their employee id?',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is their email?',
//     },
//     {
//         type: 'input',
//         name: 'number',
//         message: 'What is their  office number?',
//     },
// ];






function createMyTeam(){
    if(!fs.existsSync(DIST_DIR)){
        fs.mkdirSync(DIST_DIR)
    }
    fs.writeFileSync(distPath, generateTeam(teamArray),"utf-8")
}
createManager()
}

init();