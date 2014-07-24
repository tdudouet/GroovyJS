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