// The conrstructor intializes a color and setColor sets a color value
    class Shape{
        constructor(){
            this.color=''
            }
        setColor(color){
            this.color=(color);
        }
    }
//each shape should return a polygon with color input
//Circle class is extended and is rendered with position, size, and color based on inputs
class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`
    }
}

//Triangle class is extended and is rendered with position, size, and color based on inputs
class Triangle extends Shape{
    render(){
        return `<polygon height="100%" width="100%" points="0,180 300,180 150,0" fill="${this.color}" />`
    }
}

////Square class is extended and is rendered with position, size, and color based on inputs
class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}" />`

    }
}


module.exports = {Circle, Triangle, Square}