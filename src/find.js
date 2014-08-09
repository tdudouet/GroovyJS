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
