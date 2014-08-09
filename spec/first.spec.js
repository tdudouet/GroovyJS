describe("Array.prototype.gFirst", function() {

    it("Should return null if the array is empty", function() {
        expect([].gFirst()).toBe(null);
    });

    it("Should return the first item of the array", function() {
        expect([ 1 ].gFirst()).toBe(1);
        expect([ 1, 2 ].gFirst()).toBe(1);
    });

});
