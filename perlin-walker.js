const sketch = new p5((p5) => {
    const width = 500;
    const height = 500;
    let tx = 0;
    let ty = 100;

    p5.setup = () => {
        p5.colorMode(p5.HSB, 360, 100, 100, 1);
        p5.createCanvas(width, height);
        p5.fill(120, 60, 80);
        p5.noStroke();
    };

    p5.draw = () => {
        p5.background(0, 0, 100, 0.02);
        p5.circle(
            p5.map(p5.noise(tx), 0, 1, 0, width),
            p5.map(p5.noise(ty), 0, 1, 0, height),
            10
        );
        tx += 0.006;
        ty += 0.006;
    };
}, 'sketch');
