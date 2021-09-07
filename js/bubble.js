
class Bubble {

    constructor(color = 'rgba(255, 255, 255, 0.5)', y = 3.3) {

        this.r = this.random(20, 10);
        this.x  = this.random(window.innerWidth /2, window.innerWidth /2);
        this.y  = this.random((window.innerHeight/3), (window.innerHeight/2 + 7));
        this.alpha = 1;
        // this.c = "rgba(255, 255, 255,"+ this.alpha +")";
        this.vx = this.random(-3, 3);
        this.vy = this.random(.1, .5) + y;
        this.vr = 0;
        this.life = true;

        this.gravity = 0.05;
        this.gravitySpeed = 0;
        this.hitBottom = false;
        
    }

    startUpdate() {

        this.vx += .012;
        this.vr += .07;
        this.y -= this.vy;
		this.x += this.vx;
        this.alpha -= 0.05;

		if ( this.r > 1 ) {
            this.r -= this.vr;
        }

        if (this.r <= 1) {
            this.life = false;
        }

    }

    stopUpdate() {
        this.y += this.vy;
    }

    draw(ctx) {
        ctx.beginPath();	
		ctx.arc( this.x, this.y, this.r, 0, 2*Math.PI );
		ctx.fillStyle = "rgba(255, 255, 255,"+ this.alpha +")";
		ctx.fill();
    }

    /**
     * 
     * @returns {boolean}
     */
    getLife(){
        return this.life;
    }

    /**
     * returned random number min and max range.
     * @param {int} min 
     * @param {int} max 
     * @returns {int}
     */
    random(min, max) {
        return (Math.random() * (max - min + 1)) + min;
    }

    /**
     * Return object literal of a class.
     * @returns {Object} 
     */
    toArray() {
        return Object.fromEntries(
            Object.entries(this)
        );
    }

}

// var bubble = new Bubble();

// bubble.update();
// bubble.draw();

// https://codepen.io/Capse/pen/xVMObM


