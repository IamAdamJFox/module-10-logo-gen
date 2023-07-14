const {Circle, Triangle, Square} = require("./shapes")

describe('Circle', () => {
    test('renders successfully', () => {
      const shape = new Circle();
      const color = 'yellow';
      shape.setColor(color);
      const expectedSVG = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`;
      expect(shape.render()).toEqual(expectedSVG);
    });
  });
  describe('Triangle', () => {
    test('renders successfully', () => {
      const shape = new Triangle();
      const color = 'yellow';
      shape.setColor(color);
      const expectedSVG = `<height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`;
      expect(shape.render()).toEqual(expectedSVG);
    });
  });
  describe('Square', () => {
    test('renders successfully', () => {
      const shape = new Square();
      const color = 'yellow';
      shape.setColor(color);
      const expectedSVG = `<rect x="50" height="200" width="200" fill="${color}">`;
      expect(shape.render()).toEqual(expectedSVG);
    });
  });