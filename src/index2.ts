abstract class Shape {
    constructor(public color: string){
    }
    abstract render(): void
}

class Circle extends Shape {
    constructor(public radius:number, color:string){
        super(color);
    }

    override render() {
        console.log(`渲染一个半径为${this.radius},颜色为${this.color}的圆`);
    }
}

const circle = new Circle(20,'红色')
circle.render()