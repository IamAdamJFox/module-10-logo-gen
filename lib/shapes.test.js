const {circle} = require("./shapes")

describe('Circle', () => {
    test('render successfully', () => {
        const shape = new Circle();
        var color = ('yellow')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});