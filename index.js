//import
const {Circle} = require("./lib/shapes");
//required packages
const fs = require("fs");
const inquier = require("inquirer");
//array questions


const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter a color KEYWORD for the text:",
    },
    {
        type: "input",
        name: "shape-color",
        message: "Enter a color KEYWORD for the shape:",
    },
    {
        type: "input",
        name: "shape",
        message: "What shape would you like for your logo:",
        choices: ["Circle"]
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