describe("Array.prototype.first", function() {

    it("Should throw an error if the array is empty", function() {
        expect([].first.bind([])).toThrowError("Cannot access first() element of an empty array !");
    });

    it("Should return the first item of the array", function() {
        expect([ 1 ].first()).toBe(1);
        expect([ 1, 2 ].first()).toBe(1);
    });

});
