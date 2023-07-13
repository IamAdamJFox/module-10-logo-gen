//import

//required packages
const fs = require("fs");
const inquier = require("inquirer");
//array questions
const questions = [
    {
        type: "input",
        name: "text",
        message: "",
    },
    {
        type: "input",
        name: "text",
        message: "",
    },
    {
        type: "input",
        name: "text",
        message: "",
    }
    {
        type: "input",
        name: "text",
        message: "",
    },
    {
        type: "input",
        name: "text",
        message: "",
    },
    {
        type: "input",
        name: "text",
        message: "",
    }

]

//function to write file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (error) {
            return console.log(err);
        }
        
        console.log("logo made successfully")
    });

}