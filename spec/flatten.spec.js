describe("Array.prototype.gFlatten", function() {

    it("Should return an empty array if the array is empty", function() {
        expect([].gFlatten()).toEqual([]);
    });

    it("Should return a flatten array", function() {
        expect([ "a", "b", [ "c", { "d": "e" } ] ].gFlatten()).toEqual([ "a", "b", "c", { "d": "e" } ]);
    });

});
