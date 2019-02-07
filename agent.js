class Agent {
    constructor(position, seed, angle, p) {
        this.position = position;
        this.previousPosition = this.position.copy();
        this.angle = angle;
        this.stepSize = 1;
        this.isPositionResetWhenOutside = true;
        this.seed = seed;
        this.p = p
    }
    updatePosition(position) {
        // randomSeed(this.seed);
        this.previousPosition = this.position.copy();
        this.position.x += this.p.cos(this.angle) * this.stepSize;
        this.position.y += this.p.sin(this.angle) * this.stepSize;
        if (this.isPositionResetWhenOutside && this.isOutsideSketch() > 0) {
            this.position = position;
            this.previousPosition = this.position.copy();
        }
    }
    isOutsideSketch() {
        if (this.position.y < -300) {
            return 1;
        } else if (this.position.x > this.p.width + 300) {
            return 2;
        } else if (this.position.y > this.p.height + 300) {
            return 3;
        } else if (this.position.x < -300) {
            return 4;
        } else {
            return 0;
        }
    }
}
