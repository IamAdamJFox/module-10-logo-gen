//import
const {Circle, Triangle, Square} = require("./lib/shapes");
//required packages
const fs = require("fs");
const inquirer = require("inquirer");
//Makes it so the SVG class has a constructor with 3 methods
//first method is rendering
//the sencond and third are for setting text and shape elements in the SVG string
class Svg {
    constructor() {
      this.logoText = '';
      this.logoShape = '';
    }
  
    render() {
      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.logoShape}${this.logoText}</svg>`;
    }
  
    setShapeElement(shape) {
      this.logoShape = shape.render();
    }
  
    setLogoText(text, color) {
      this.logoText = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`;
    }
  }
  //the starting function asks questions that will be passed on to generate the SVG logo 
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
  //takes answers sets them in place then checks to see what shape to apply to userShape and then console logs it
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
    //New Svg instance has text and shape elements added
    const svg = new Svg();
    svg.setLogoText(text, textColor);
    svg.setShapeElement(userShape);
    const svgString = svg.render();
    //logs the shape
    console.log("Displaying shape:\n\n" + svgString);
  
    console.log("Shape generation complete!");
    console.log("Writing shape to file...");
    writeToFile(svgFile, svgString);
  }
  //writes to file and console logs a success
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



