//import
const {Circle} = require("./lib/shapes");
//required packages
const fs = require("fs");
const inquirer = require("inquirer");

class Svg{
    constructor(){
        this.logoText = ''
        this.logoShape = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.logoShape}${this.logoText}</svg>`
    }
    setShapeElement(shape){
    setlogoShape = shape.render
    }
    setlogoText(text, color){
        this.logoText = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`
    }
}

//function to handle questions and pass it on 
function Generate() {
    inquirer
    .prompt ([
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters:",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color KEYWORD(or a hexadecimal #) for the text:",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color KEYWORD(or a hexadecimal #) for the shape:",
    },
    {
        type: "input",
        name: "shape",
        message: "What shape would you like for your logo:",
        choices: ["Circle", "Triangle", "Square"]
    }

])
    .then((answers) => {
        if(answers.text.length > 3) {
            console.log("Text cannot be longer then 3 characters");
            Generate()
        } else{
            console.log(answers)
        }  
    }
    )
    .init() => {
    console.log(starting)
    var svgString = ""
    var svg_file = "logo.svg"

    const { text, textColor, shapeColor, shape } = answers;

    let userShape;
    if (shape === 'Circle') {
      userShape = new Circle();
    } else if (shape === 'Square') {
      userShape = new Square();
    } else if (shape === 'Triangle') {
      userShape = new Triangle();
    } else {
      console.log('Invalid shape!');
      return;
    }
    userShape.setColor(shapeColor);

    const svg = new Svg();
    svg.setTextElement(text, textColor);
    svg.setShapeElement(userShape);
    const svgString = svg.render();
  }
}


//function to write file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err)
        }
        
        console.log("logo made successfully")
    });

}

Generate();