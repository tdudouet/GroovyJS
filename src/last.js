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
