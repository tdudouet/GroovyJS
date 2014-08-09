if(!Array.prototype.gLast) {

    Array.prototype.gLast = function() {
        if(this.length === 0) {
            return null;
        }
        return this[this.length - 1];
    };

}
