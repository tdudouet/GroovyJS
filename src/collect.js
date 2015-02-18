if(!Array.prototype.gCollect) {

    Array.prototype.gCollect = function(callback) {
        var result = [];
        for(var i=0 ; i<this.length ; i++) {
            if(callback === undefined) {
                result.push(this[i]);
            } else {
                result.push(callback(this[i], i));
            }
        }
        return result;
    };

}

if(!Object.prototype.gCollect) {

    Object.prototype.gCollect = function(callback) {
        // Callback is required
        if(callback === undefined) {
            throw new Error("Callback function is required !");
        }
        //
        var result = [];
        for(var key in this) {
            if(this.hasOwnProperty(key)) {
                result.push(callback(key, this[key]));
            }
        }
        return result;
    };

}
