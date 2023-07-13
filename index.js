//import
const {Circle} = require("./lib/shapes");
//required packages
const fs = require("fs");
const inquirer = require("inquirer");
//array questions

function Generate() {
    inquirer
    .questions ([
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

])
    .then((answers) => {
        if(answers.text.length > 3) {
            console.log("Text cannot be longer then 3 characters");
            questions();
        } else{
            console.log(answers)
        }  
    }
    )
}

console.log(questions)

//function to write file

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function (err) {
//         if (error) {
//             return console.log(err);
//         }
        
//         console.log("logo made successfully")
//     });

// }

Generate();