const gaussian = new p5((p5) => {
    const width = 500;
    const height = 500;

    p5.setup = () => {
        p5.createCanvas(width, height);
    };

    p5.draw = () => {
        p5.colorMode(p5.HSB, 360, 100, 100, 1);
        p5.noLoop();
        p5.noStroke();
        for (let i = 0; i < 3000; i++) {
            const hue = p5.randomGaussian(180, 30);
            p5.fill(hue, 100, 70, 0.4);
            p5.circle(
                p5.randomGaussian(width / 2, 70),
                p5.randomGaussian(height / 2, 70),
                10
            );
        }
    };
}, 'sketch');
