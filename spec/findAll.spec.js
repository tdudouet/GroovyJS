describe("Array.prototype.gFindAll", function() {

    it("Should return an empty array if the array is empty", function() {
        expect([].gFindAll()).toEqual([]);
    });

    it("Should return all the items if no callback is given", function() {
        expect([ "a", "b" ].gFindAll()).toEqual([ "a", "b" ]);
    });

    it("Should give the value as the first callback argument", function() {
        expect([ 1 ].gFindAll(function(value) { return value === 1;  })).toEqual([ 1 ]);
    });

    it("Should give the index as the second callback argument", function() {
        expect([ 1 ].gFindAll(function(value, id) { return id === 0;  })).toEqual([ 1 ]);
    });

    it("Should return an empty array if there is no item matching the given callback", function() {
        expect([ "a", "b", "c" ].gFindAll(function(value) {
            return value === "d";
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

describe("Object.prototype.gFindAll", function() {

    it("Should return an empty object if the object is empty", function() {
        expect({}.gFindAll()).toEqual({});
    });

    it("Should return all the items if no callback is given", function() {
        expect({ "a": 1, "b": 2 }.gFindAll()).toEqual({ "a": 1, "b": 2 });
    });

    it("Should give the key as the first callback argument", function() {
        expect({ "a": 1 }.gFindAll(function(key) { return key === "a";  })).toEqual({ "a": 1 });
    });

    it("Should give the value as the second callback argument", function() {
        expect({ "a": 1 }.gFindAll(function(key, value) { return value === 1;  })).toEqual({ "a": 1 });
    });

    it("Should return an empty object if there is no item matching the given callback", function() {
        expect({ "a": 1, "b": 2, "c": 3 }.gFindAll(function(key, value) {
            return value >= 4;
        })).toEqual({});
    });

    it("Should return all the items matching the given callback", function() {
        expect({ "a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6 }.gFindAll(function(key, value) {
            return value % 3 === 0;
        })).toEqual({ "c": 3, "f": 6 });
        expect({ "a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6 }.gFindAll(function(key, value) {
            return key === "a" || key === "e";
        })).toEqual({ "a": 1, "e": 5 });
        expect({ "a": 1 }.gFindAll().a).toBe(1);
    });

});
