if(!Array.prototype.gFirst) {

    Array.prototype.gFirst = function() {
        if(this.length === 0) {
            return null;
        }
        return this[0];
    };

}
