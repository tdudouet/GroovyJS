describe("Array.prototype.last", function() {

    it("Should throw an error if the array is empty", function() {
        expect([].last.bind([])).toThrowError("Cannot access last() element of an empty array !");
    });

    it("Should return the last item of the array", function() {
        expect([ 1 ].last()).toBe(1);
        expect([ 1, 2 ].last()).toBe(2);
    });

});
