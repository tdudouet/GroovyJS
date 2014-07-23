describe("Array.prototype.find", function() {

    it("Should return null if the array is empty", function() {
        expect([].find()).toEqual(null);
    });

    it("Should return the first item if no callback is given", function() {
        expect([ "a", "b" ].find()).toBe("a");
    });

    it("Should give the value as the first callback argument", function() {
        expect([ 1 ].find(function(value) { return value == 1;  })).toBe(1);
    });

    it("Should give the index as the second callback argument", function() {
        expect([ 1 ].find(function(value, id) { return id === 0;  })).toBe(1);
    });

    it("Should return null if there is no item matching the given callback", function() {
        expect([ "a", "b", "c" ].find(function(value) {
            return value == "d";
        })).toEqual(null);
    });

    it("Should return the first item matching the given callback", function() {
        expect([ 1, 2, 3, 4, 5, 6 ].find(function(value) {
            return value % 3 === 0;
        })).toBe(3);
        expect([ 1, 2, 3, 4, 5, 6 ].find(function(value, id) {
            return id % 4 === 0;
        })).toBe(1);
    });

});
