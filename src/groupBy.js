if(!Array.prototype.gGroupBy) {

    Array.prototype.gGroupBy = function(callback) {
        // Callback is required
        if(callback === undefined) {
            throw new Error("Callback function is required !");
        }
        //
        var result = {};
        for(var i=0 ; i<this.length ; i++) {
            var key = callback(this[i], i);
            if(result[key] === undefined) {
                result[key] = [];
            }
            result[key].push(this[i]);
        }
        return result;
    };

}
