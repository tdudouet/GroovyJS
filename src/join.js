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
