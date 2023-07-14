const {circle} = require("./shapes")

describe('Circle', () => {
    test('renders successfully', () => {
      const shape = new Circle();
      const color = 'yellow';
      shape.setColor(color);
      const expectedSVG = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`;
      expect(shape.render()).toEqual(expectedSVG);
    });
  });