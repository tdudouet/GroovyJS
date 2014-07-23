describe("Array.prototype.findAll", function() {

    it("Should return an empty array if the array is empty", function() {
        expect([].findAll()).toEqual([]);
    });

    it("Should return all the items if no callback is given", function() {
        expect([ "a", "b" ].findAll()).toEqual([ "a", "b" ]);
    });

    it("Should give the value as the first callback argument", function() {
        expect([ 1 ].findAll(function(value) { return value == 1;  })).toEqual([ 1 ]);
    });

    it("Should give the index as the second callback argument", function() {
        expect([ 1 ].findAll(function(value, id) { return id === 0;  })).toEqual([ 1 ]);
    });

    it("Should return an empty array if there is no item matching the given callback", function() {
        expect([ "a", "b", "c" ].findAll(function(value) {
            return value == "d";
        })).toEqual([]);
    });

    it("Should return all the items matching the given callback", function() {
        expect([ 1, 2, 3, 4, 5, 6 ].findAll(function(value) {
            return value % 3 === 0;
        })).toEqual([ 3, 6 ]);
        expect([ 1, 2, 3, 4, 5, 6 ].findAll(function(value, id) {
            return id % 4 === 0;
        })).toEqual([ 1, 5 ]);
        expect([ 1 ].findAll()[0]).toBe(1);
    });

});
