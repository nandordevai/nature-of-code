const sketch = new p5((p5) => {
    const width = 500;
    const height = 500;
    let w = null;

    class Walker {
        constructor() {
            this.x1 = width / 2;
            this.y1 = height / 2;
            this.x2 = width / 2;
            this.y2 = height / 2;
        }

        display() {
            p5.stroke(0);
            p5.line(this.x1, this.y1, this.x2, this.y2);
            this.x1 = this.x2;
            this.y1 = this.y2;
        }

        getStepSize() {
            let size = null;
            let probability = null;
            do {
                size = Math.floor(p5.random(10));
                probability = Math.floor(p5.random(10));
            } while (size < probability);
            return size;
        }

        step() {
            const stepSize = this.getStepSize();
            switch (Math.floor(p5.random(4))) {
                case 0:
                    this.x2 = this.x1 + stepSize;
                    break;
                case 1:
                    this.x2 = this.x1 - stepSize;
                    break;
                case 2:
                    this.y2 = this.y1 + stepSize;
                    break;
                case 3:
                    this.y2 = this.y1 - stepSize;
                    break;
            };
        }
    }

    p5.setup = () => {
        p5.pixelDensity(p5.displayDensity());
        p5.createCanvas(width, height);
        w = new Walker();
    };

    p5.draw = () => {
        w.step();
        w.display();
    };
}, 'sketch');
