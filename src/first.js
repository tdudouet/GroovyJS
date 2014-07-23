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
