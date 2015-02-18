if(!Array.prototype.gCollectEntries) {

    Array.prototype.gCollectEntries = function(callback) {
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

if(!Object.prototype.gCollectEntries) {

    Object.defineProperty(Object.prototype, 'gCollectEntries', { value: function(callback) {
        var result = {};
        for(var key in this) {
            if(this.hasOwnProperty(key)) {
                if(callback === undefined) {
                    result[key] = this[key];
                } else {
                    var items = callback(key, this[key]);
                    // Check transformation
                    if(!(items instanceof Array) || items.length != 2) {
                        throw new Error("Callback function should return an array of two items !");
                    }
                    //
                    result[items[0]] = items[1];    
                }
            }
        }
        return result;
    }});

}
