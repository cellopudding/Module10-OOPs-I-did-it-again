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
          name: 'officeNumber',
          message: 'What is the team manager office number?',
                                    },
        
  ]).then((userAnswers) => {
        const manager = new Manager(userAnswers.managerName, userAnswers.managerId, userAnswers.managerEmail, 
            userAnswers.officeNumber)
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

function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID number?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }
  
  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }

function createMyTeam(){
    if(!fs.existsSync(DIST_DIR)){
        fs.mkdirSync(DIST_DIR)
    }
    fs.writeFileSync(distPath, generateTeam(teamArray),"utf-8")
}
createManager()
}

init();