class Canvas {
    constructor() {
        
        this.canvas        = document.getElementById('canvas');
        this.canvas.height = window.innerHeight;
        this.canvas.width  = window.innerWidth;       
        this.ctx           = this.canvas.getContext('2d');
        this.bubbles       = [];
        this.isRunning     = false;

    }

    addBubbles(isLoop = false, range = 0) {

        if (!isLoop) {
            this.bubbles.push(new Bubble("#cccccc", 3.5))
        } else {
            while (this.bubbles.length < range) {
                this.bubbles.push(new Bubble("#ffffff", 3.5))
            }
        }

    }

    startUpdate() {
        
        for (let i = this.bubbles.length - 1; i >= 0; i--) {
            
            this.bubbles[i].startUpdate();

            if (!this.bubbles[i].getLife()) {
                this.bubbles.splice(i, 1);
            }
        }

        if (this.bubbles.length < ( window.innerWidth / 4 )) {
            this.addBubbles();
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = this.bubbles.length - 1; i >= 0; i--) {
            this.bubbles[i].draw(this.ctx);
        }
    }

    run() {
        
        this.startUpdate();
        this.draw();

        if (this.isRunning) {
            window.requestAnimationFrame(this.run.bind(this));
        }
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.run();
        }
    }

    stop(){

        this.draw();

        if (this.isRunning) {
            this.isRunning = false;
        }
    }
}


window.onload = () => {
    var bubble = new Canvas();
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');

        start.onclick = () => {
            console.log("ff")
            bubble.start();
        }

        stop.onclick = () => {
            bubble.stop();
        }
}