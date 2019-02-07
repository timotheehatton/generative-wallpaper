class PerlinField {
    constructor(fieldIntensity, fieldScale, p) {
        this.fieldIntensity = fieldIntensity;
        this.fieldScale = fieldScale;
        this.p = p
        p.noiseSeed(seed)
    }
    getFieldValue(position, seed) {
        return this.p.noise(position.x / this.fieldScale, position.y / this.fieldScale) * this.fieldIntensity;
    }
}
