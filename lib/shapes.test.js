const {Circle, Triangle, Square} = require("./shapes")

describe('Shapes', () => {
  const testShapeRendering = (ShapeClass, expectedSVG) => {
    test('renders successfully', () => {
      const shape = new ShapeClass();
      const color = 'yellow';
      shape.setColor(color);
      expect(shape.render()).toEqual(expectedSVG);
    });
  };

  testShapeRendering(Circle, `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="yellow" />`);
  testShapeRendering(Triangle, `<polygon height="100%" width="100%" points="0,180 300,180 150,0" fill="yellow" />`);
  testShapeRendering(Square, `<rect x="50" height="200" width="200" fill="yellow" />`);
});