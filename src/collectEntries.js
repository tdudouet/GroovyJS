if(!Array.prototype.collectEntries) {

    Array.prototype.collectEntries = function(callback) {
        // Callback is required
        if(callback === undefined) {
            throw new Error("Callback function is required !");
        }
        //
        var result = {};
        for(var i=0 ; i<this.length ; i++) {
            var items = callback(this[i], i);
            // Check transformation
            if(!(items instanceof Array) || items.length != 2) {
                throw new Error("Callback function should return an array of two items !");
            }
            //
            result[items[0]] = items[1];
        }
        return result;
    };

}
