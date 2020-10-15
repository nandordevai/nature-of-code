const randomWalk = new p5((p5) => {
    const width = 500;
    const height = 500;
    let w = null;

    class Walker {
        constructor() {
            this.x = width / 2;
            this.y = height / 2;
        }

        display() {
            p5.stroke(0);
            p5.point(this.x, this.y);
        }

        step() {
            switch (Math.floor(p5.random(4))) {
                case 0:
                    this.x++;
                    break;
                case 1:
                    this.x--;
                    break;
                case 2:
                    this.y++;
                    break;
                case 3:
                    this.y--;
                    break;
            };
        }
    }

    p5.setup = () => {
        p5.createCanvas(width, height);
        w = new Walker();
    };

    p5.draw = () => {
        w.step();
        w.display();
    };
}, 'sketch');
