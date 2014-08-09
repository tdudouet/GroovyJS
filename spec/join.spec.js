describe("Array.prototype.gJoin", function() {

    it("Should return an empty string if the array is empty", function() {
        expect([].gJoin()).toBe("");
    });

    it("Shoud join the array elements using the given separator", function() {
        expect([ "a", "b", "c" ].gJoin()).toBe("abc");
        expect([ "a", "b", "c" ].gJoin(",")).toBe("a,b,c");
    });

});
