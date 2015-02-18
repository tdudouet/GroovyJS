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

if(!Object.prototype.gEach) {

    Object.defineProperty(Object.prototype, 'gEach', { value: function(callback) {
        // Callback is required
        if(callback === undefined) {
            throw new Error("Callback function is required !");
        }
        //
        for(var key in this) {
            if(this.hasOwnProperty(key)) {
                callback(key, this[key]);
            }
        }
    }});

}