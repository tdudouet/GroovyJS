describe("Array.prototype.gGroupBy", function() {

    it("Should return an empty associative array if the array is empty", function() {
        expect([].gGroupBy(function(value) {})).toEqual({});
    });

    it("Should throw an error if no callback is given", function() {
        expect([].gGroupBy.bind(null)).toThrowError("Callback function is required !");
    });

    it("Should give the value as the first callback argument", function() {
        expect([ 1 ].gGroupBy(function(value) { return value + 1;  })).toEqual({ 2: [ 1 ] });
    });

    it("Should give the index as the second callback argument", function() {
        expect([ 1 ].gGroupBy(function(value, id) { return id + 1;  })).toEqual({ 1: [ 1 ] });
    });

    it("Should return items grouped using the given callback", function() {
        expect([ 1, 2, 3, 4 ].gGroupBy(function(value, id) {
            return value % 2;
        })).toEqual({
            0: [ 2, 4 ],
            1: [ 1, 3 ]
        });
    });

});
