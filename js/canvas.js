class Canvas {
    constructor() {
        
        this.canvas        = document.getElementById('canvas');
        this.canvas.height = window.innerHeight;
        this.canvas.width  = window.innerWidth;       
        this.ctx           = this.canvas.getContext('2d');
        this.bubbles       = [];
        this.isRunning     = false;
    }

    addBubbles(range = 0) {

        for (let i = 0; i<range; i++) {
            if (typeof this.bubbles[i] == "undefined") {
                this.bubbles[i] = [];
            }

            if (typeof this.bubbles[i+1] != "undefined") {
                this.bubbles[i+1].push(new Bubble("rgba(255, 255, 255, 0.5)", .03));
            }

            this.bubbles[i].push(new Bubble("#ffffff", 3.07));
        }
    }

    startUpdate() {

        for (let i = 0; i<this.bubbles.length; i++) {
            
            for (let v = this.bubbles[i].length -1; v >=0; v--) {
                this.bubbles[i][v].startUpdate();

                if (!this.bubbles[i][v].getLife()) {
                    this.bubbles[i].splice(v, 1);
                }
            }

        }

        if (this.bubbles.length < ( window.innerWidth / 4 )) {
            this.addBubbles(2);
        }

    }


    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = 0; i<this.bubbles.length; i++) {
            for (let c = this.bubbles[i].length -1; c >= 0; c--) {
                if (typeof this.bubbles[i][c] != "undefined") {  
                    this.bubbles[i][c].draw(this.ctx);
                }
            }
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

    stop() {
        if (this.isRunning) {
            this.isRunning = false;
        }
    }

    listOfBubbles() {
        return this.bubbles;
    }
}


window.onload = () => {
    var bubble = new Canvas();
        bubble.start();
}