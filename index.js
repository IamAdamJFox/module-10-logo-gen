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
      .prompt([
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
          type: "list",
          name: "shape",
          message: "What shape would you like for your logo:",
          choices: ["Circle", "Triangle", "Square"],
        },
      ])
      .then((answers) => {
        if (answers.text.length > 3) {
          console.log("Text cannot be longer than 3 characters");
          Generate();
        } else {
          console.log(answers);
          init(answers);
        }
      });
  }
  
  function init(answers) {
    console.log("Starting initialization...");
    const svgFile = "logo.svg";
  
    const { text, textColor, shapeColor, shape } = answers;
  
    let userShape;
    if (shape === "Circle") {
      userShape = new Circle();
    } else if (shape === "Square") {
      userShape = new Square();
    } else if (shape === "Triangle") {
      userShape = new Triangle();
    } else {
      console.log("Invalid shape!");
      return;
    }
    userShape.setColor(shapeColor);
  
    const svg = new Svg();
    svg.setTextElement(text, textColor);
    svg.setShapeElement(userShape);
    const svgString = svg.render();
  
    console.log("Displaying shape:\n\n" + svgString);
  
    console.log("Shape generation complete!");
    console.log("Writing shape to file...");
    writeToFile(svgFile, svgString);
  }
  
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Congratulations! You have generated a logo.svg!");
    });
  }
  
  Generate();

//function to write file

