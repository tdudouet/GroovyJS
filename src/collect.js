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
