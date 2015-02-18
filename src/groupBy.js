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

if(!Object.prototype.gGroupBy) {

    Object.prototype.gGroupBy = function(callback) {
        // Callback is required
        if(callback === undefined) {
            throw new Error("Callback function is required !");
        }
        //
        var result = {};
        for(var key in this) {
            if(this.hasOwnProperty(key)) {
                var group = callback(key, this[key]);
                if(result[group] === undefined) {
                    result[group] = {};
                }
                result[group][key] = this[key];
            }
        }
        return result;
    };

}