"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log(`渲染一个半径为${this.radius},颜色为${this.color}的圆`);
    }
}
const circle = new Circle(20, '红色');
circle.render();
//# sourceMappingURL=index2.js.map