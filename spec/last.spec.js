describe("Array.prototype.gLast", function() {

    it("Should return null if the array is empty", function() {
        expect([].gLast()).toBe(null);
    });

    it("Should return the last item of the array", function() {
        expect([ 1 ].gLast()).toBe(1);
        expect([ 1, 2 ].gLast()).toBe(2);
    });

});
