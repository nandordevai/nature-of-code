const sketch = new p5((p5) => {
    const width = 800;
    const height = 600;
    const r = 30;
    let location;
    let velocity;

    p5.setup = () => {
        p5.colorMode(p5.HSB, 360, 100, 100, 1);
        p5.createCanvas(width, height);
        location = p5.createVector(width / 2, height / 2);
        velocity = p5.createVector(4, 2);
        p5.stroke(0);
        p5.fill(150);
    };

    p5.draw = () => {
        p5.background(255);
        p5.circle(location.x, location.y, r);
        location.add(velocity);
        if (location.x >= (width - (r / 2)) || location.x <= (r / 2)) {
            velocity.x *= -1;
        }
        if (location.y >= (height - (r / 2)) || location.y <= (r / 2)) {
            velocity.y *= -1;
        }
    };
}, 'sketch');
