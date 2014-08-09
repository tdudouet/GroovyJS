if(!Array.prototype.gEach) {

    Array.prototype.gEach = function(callback) {
        // Callback is required
        if(callback === undefined) {
            throw new Error("Callback function is required !");
        }
        //
        for(var i=0 ; i<this.length ; i++) {
            callback(this[i], i);
        }
    };

}
