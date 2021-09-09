
class Bubble {

    constructor(color = '', y = 3.3) {

        this.r      = this.random(5, 20);
        this.x      = this.random((window.innerWidth/2), (window.innerWidth/2));
        this.y      = this.random(window.innerHeight/3, window.innerHeight/2);
        this.alpha  = 1;
        this.colors = ["rgba(255, 255, 255, 0.5)", "#ffffff"];

        this.c      = color;
        this.vx     = this.random(-3, 3);
        this.vy     = this.random(.1, .5) + y;
        this.vr     = 0;
        this.life   = true;

    }

    startUpdate() {

        this.vx    += .012;
        this.vr    += .07;
        this.y     -= this.vy;
	this.x     += this.vx;
        this.alpha -= 0.05;

	if (this.r > 1) {
            this.r -= this.vr;
        }

        if (this.r <= 1) {
            this.life = false;
        }
    }

    randomColor() {
        return this.colors[Math.floor(Math.random()*this.colors.length)];
    }

    draw(ctx) {
        ctx.beginPath();	
	ctx.arc( this.x, this.y, this.r, 0, 2*Math.PI );
	ctx.fillStyle = this.c;
	ctx.fill();
    }

    /**
     * 
     * @returns {boolean}
     */
    getLife() {
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
