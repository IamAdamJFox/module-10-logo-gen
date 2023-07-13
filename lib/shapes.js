// class for shape?
    class Shape{
        constructor(){
            this.color=''
            }
        setColor(color){
            this.color=(color);
        }
    }
//each shape should return a polygon with color input
//class for circle
class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}
// //class for triangle
// class Triangle extends Shape{
//     render(){
//         return
//     }
// }

// //class for square
// class Square extends Shape{
//     render(){
//         return
//     }
// }