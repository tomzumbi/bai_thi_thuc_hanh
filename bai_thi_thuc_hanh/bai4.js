class Rectangle {
    x;
    y;
    width;
    height;
    color;

    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render(canvas) {
        let context = canvas.getContext("2d");
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

let canvas = document.getElementById("canvas");
let hcn = new Rectangle(100, 100, 300, 200, "black");
hcn.render(canvas);