const sketch = new p5((p5) => {
    const width = 200;
    const height = 200;
    const d = 50;
    let t = 0;

    p5.setup = () => {
        p5.colorMode(p5.HSB, 360, 100, 100, 1);
        p5.createCanvas(width, height);
    };

    p5.draw = () => {
        // p5.noLoop();
        p5.background(255);
        for (x = 0; x < width / d; x += 1 / d) {
            for (y = 0; y < height / d; y += 1 / d) {
                p5.stroke(0, 0, p5.map(p5.noise(x, y, t), 0, 1, 0, 100));
                p5.point(x * d, y * d);
            }
        }
        t += 0.02;
    };
}, 'sketch');
