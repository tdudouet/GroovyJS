describe("Array.prototype.gFindAll", function() {

    it("Should return an empty array if the array is empty", function() {
        expect([].gFindAll()).toEqual([]);
    });

    it("Should return all the items if no callback is given", function() {
        expect([ "a", "b" ].gFindAll()).toEqual([ "a", "b" ]);
    });

    it("Should give the value as the first callback argument", function() {
        expect([ 1 ].gFindAll(function(value) { return value == 1;  })).toEqual([ 1 ]);
    });

    it("Should give the index as the second callback argument", function() {
        expect([ 1 ].gFindAll(function(value, id) { return id === 0;  })).toEqual([ 1 ]);
    });

    it("Should return an empty array if there is no item matching the given callback", function() {
        expect([ "a", "b", "c" ].gFindAll(function(value) {
            return value == "d";
        })).toEqual([]);
    });

    it("Should return all the items matching the given callback", function() {
        expect([ 1, 2, 3, 4, 5, 6 ].gFindAll(function(value) {
            return value % 3 === 0;
        })).toEqual([ 3, 6 ]);
        expect([ 1, 2, 3, 4, 5, 6 ].gFindAll(function(value, id) {
            return id % 4 === 0;
        })).toEqual([ 1, 5 ]);
        expect([ 1 ].gFindAll()[0]).toBe(1);
    });

});
