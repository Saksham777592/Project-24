class Ball {
    constructor(x, y, d) {
        var options = {
            isStatic: true,
            'resitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.circle(x, y, d, options);

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 20, 20);
    }
}