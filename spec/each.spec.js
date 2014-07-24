describe("Array.prototype.each", function() {

    it("Should throw an error if no callback is given", function() {
        expect([].each.bind(null)).toThrowError("Callback function is required !");
    });

    it("Should give the value as the first callback argument", function() {
        var i = 0;
        var result = null;
        [ 1 ].each(function(value) { i++; result = value; });
        expect(i).toEqual(1);
        expect(result).toEqual(1);
    });

    it("Should give the index as the second callback argument", function() {
        var i = 0;
        var result = null;
        [ 1 ].each(function(value, id) { i++; result = id; });
        expect(i).toEqual(1);
        expect(result).toEqual(0);
    });

    it("Should iterate over all the array items", function() {
        var result = [];
        [ 1, 2 ].each(function(value, id) {
            result.push(id);
            result.push(value);
        });
        expect(result).toEqual([ 0, 1, 1, 2 ]);
    });

});
