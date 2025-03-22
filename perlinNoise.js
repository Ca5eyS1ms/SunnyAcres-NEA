class PerlinNoise{
    constructor(){
        this.gradients = {};
}

randomGradient(x, y){

    let angle = Math.random() * 2 * Math.PI;
    return {x: Math.cos(angle), y: Math.sin(angle)};
}//end of randomGradient function

fetchGradient(ix, iy){
    let key = ix + "," + iy;
    if(!(key in this.gradients)){ // if the key is not in the gradients object it generates and stores one ensures that each grid point only gets assigned a gradient once
        this.gradients[key] = this.randomGradient(ix, iy);
        }

        return this.gradients[key];

    }//end of fetchGradient function


dotProduct(ix, iy, x, y){
    let gradient = this.fetchGradient(ix, iy);
    let dx = x - ix;
    let dy = y - iy;
    return (dx * gradient.x + dy * gradient.y);
}//end of dotProduct function


fade(t){
    return t * t * t * (t * (t * 6 - 15) + 10); //fade function

}//end of fade function


lerp(a, b, t){
    return a + t * (b - a); //lerp function
}//end of lerp function

noise(x, y){
    let x0 = Math.floor(x);
    let x1 = x0 + 1;
    let y0 = Math.floor(y);
    let y1 = y0 + 1;

    let sx = x - x0;
    let sy = y - y0;

    let n0, n1, ix0, ix1, value;

    n0 = this.dotProduct(x0, y0, x, y);
    n1 = this.dotProduct(x1, y0, x, y);
    ix0 = this.lerp(n0, n1, this.fade(sx));

    n0 = this.dotProduct(x0, y1, x, y);
    n1 = this.dotProduct(x1, y1, x, y);
    ix1 = this.lerp(n0, n1, this.fade(sx));

    value = this.lerp(ix0, ix1, this.fade(sy));
    return value;
}

    

}//end of perlinNoise class