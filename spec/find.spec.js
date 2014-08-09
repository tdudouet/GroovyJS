describe("Array.prototype.gFind", function() {

    it("Should return null if the array is empty", function() {
        expect([].gFind()).toEqual(null);
    });

    it("Should return the first item if no callback is given", function() {
        expect([ "a", "b" ].gFind()).toBe("a");
    });

    it("Should give the value as the first callback argument", function() {
        expect([ 1 ].gFind(function(value) { return value == 1;  })).toBe(1);
    });

    it("Should give the index as the second callback argument", function() {
        expect([ 1 ].gFind(function(value, id) { return id === 0;  })).toBe(1);
    });

    it("Should return null if there is no item matching the given callback", function() {
        expect([ "a", "b", "c" ].gFind(function(value) {
            return value == "d";
        })).toEqual(null);
    });

    it("Should return the first item matching the given callback", function() {
        expect([ 1, 2, 3, 4, 5, 6 ].gFind(function(value) {
            return value % 3 === 0;
        })).toBe(3);
        expect([ 1, 2, 3, 4, 5, 6 ].gFind(function(value, id) {
            return id % 4 === 0;
        })).toBe(1);
    });

});
