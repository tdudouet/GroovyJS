if(!Array.prototype.collect) {

    Array.prototype.collect = function(callback) {
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

if(!Array.prototype.each) {

    Array.prototype.each = function(callback) {
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

if(!Array.prototype.find) {

    Array.prototype.find = function(callback) {
        for(var i=0 ; i<this.length ; i++) {
            var item = this[i];
            if(callback === undefined || callback(item, i)) {
                return item;
            }
        }
        return null;
    };

}

if(!Array.prototype.findAll) {

    Array.prototype.findAll = function(callback) {
        var result = [];
        for(var i=0 ; i<this.length ; i++) {
            var item = this[i];
            if(callback === undefined || callback(item, i)) {
                result.push(item);
            }
        }
        return result;
    };

}

if(!Array.prototype.first) {

    Array.prototype.first = function() {
        // Check if at least one item exists
        if(this.length === 0) {
            throw new Error("Cannot access first() element of an empty array !");
        }
        //
        return this[0];
    };

}

if(!Array.prototype.last) {

    Array.prototype.last = function() {
        // Check if at least one item exists
        if(this.length === 0) {
            throw new Error("Cannot access last() element of an empty array !");
        }
        //
        return this[this.length - 1];
    };

}
