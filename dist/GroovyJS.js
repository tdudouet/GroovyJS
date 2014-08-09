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

if(!Array.prototype.gFind) {

    Array.prototype.gFind = function(callback) {
        for(var i=0 ; i<this.length ; i++) {
            var item = this[i];
            if(callback === undefined || callback(item, i)) {
                return item;
            }
        }
        return null;
    };

}

if(!Array.prototype.gFindAll) {

    Array.prototype.gFindAll = function(callback) {
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

if(!Array.prototype.gFirst) {

    Array.prototype.gFirst = function() {
        if(this.length === 0) {
            return null;
        }
        return this[0];
    };

}

if(!Array.prototype.gJoin) {

    Array.prototype.gJoin = function(separator) {
        var result = '';
        for(var i=0 ; i<this.length ; i++) {
            result += this[i];
            if(separator !== undefined && i < this.length - 1) {
            	result += separator;
            }
        }
        return result;
    };

}

if(!Array.prototype.gLast) {

    Array.prototype.gLast = function() {
        if(this.length === 0) {
            return null;
        }
        return this[this.length - 1];
    };

}
