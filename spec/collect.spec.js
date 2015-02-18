describe("Array.prototype.gCollect", function() {

    it("Should return an empty array if the array is empty", function() {
        expect([].gCollect()).toEqual([]);
    });

    it("Should return non modified items if no callback is given", function() {
        expect([ "a", "b" ].gCollect()).toEqual([ "a", "b" ]);
    });

    it("Should give the value as the first callback argument", function() {
        expect([ 1 ].gCollect(function(value) { return value + 1;  })).toEqual([ 2 ]);
    });

    it("Should give the index as the second callback argument", function() {
        expect([ 1 ].gCollect(function(value, id) { return id + 1;  })).toEqual([ 1 ]);
    });

    it("Should return items transformed using the given callback", function() {
        expect([ 1, 2, 3 ].gCollect(function(value) {
            return value * 2;
        })).toEqual([ 2, 4, 6 ]);
        expect([ 1, 2, 3 ].gCollect(function(value, id) {
            return id;
        })).toEqual([ 0, 1, 2 ]);
    });

});

describe("Object.prototype.gCollect", function() {

    it("Should return an empty array if the object is empty", function() {
        expect({}.gCollect(function() {})).toEqual([]);
    });

    it("Should throw an error if no callback is given", function() {
        expect({ "a": 1, "b": 2 }.gCollect.bind(null)).toThrowError("Callback function is required !");
    });

    it("Should give the key as the first callback argument", function() {
        expect({ "a": 1 }.gCollect(function(key) { return key + 1;  })).toEqual([ "a1" ]);
    });

    it("Should give the value as the second callback argument", function() {
        expect({ "a": 1 }.gCollect(function(key, value) { return value + 1;  })).toEqual([ 2 ]);
    });

    it("Should return items transformed using the given callback", function() {
        expect({ "a": 1, "b": 2 }.gCollect(function(key, value) {
            return "" + key + "_" + value;
        })).toEqual([ "a_1", "b_2" ]);
    });

});
