describe("Array.prototype.gEach", function() {

    it("Should throw an error if no callback is given", function() {
        expect([].gEach.bind(null)).toThrowError("Callback function is required !");
    });

    it("Should give the value as the first callback argument", function() {
        var result = [];
        [ 1, 2 ].gEach(function(value) { result.push(value); });
        expect(result).toEqual([ 1, 2 ]);
    });

    it("Should give the index as the second callback argument", function() {
        var result = [];
        [ 1, 2 ].gEach(function(value, id) { result.push(id); });
        expect(result).toEqual([ 0, 1 ]);
    });

    it("Should iterate over all the array items", function() {
        var i = 0;
        [ 1, 2, 3, 4, 5, 6 ].gEach(function(value) { i++; });
        expect(i).toEqual(6);
    });

});
