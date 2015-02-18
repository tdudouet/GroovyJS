describe("Array.prototype.gCollectEntries", function() {

    it("Should return an empty object if the array is empty", function() {
        expect([].gCollectEntries(function(value) {})).toEqual({});
    });

    it("Should throw an error if no callback is given", function() {
        expect([].gCollectEntries.bind(null)).toThrowError("Callback function is required !");
    });

    it("Should give the value as the first callback argument", function() {
        expect([ 1 ].gCollectEntries(function(value) { return [ 1, value ]; })).toEqual({ 1: 1 });
    });

    it("Should give the index as the second callback argument", function() {
        expect([ 1 ].gCollectEntries(function(value, id) { return [ 1, id ]; })).toEqual({ 1: 0 });
    });

    it("Should throw an error if the given callback doesn't return an array of two items", function() {
        expect([].gCollectEntries.bind([ 1 ], function(value) {
          return value;
        })).toThrowError("Callback function should return an array of two items !");
        expect([].gCollectEntries.bind([ 1 ], function(value) {
          return [];
        })).toThrowError("Callback function should return an array of two items !");
        expect([].gCollectEntries.bind([ 1 ], function(value) {
          return [ value ];
        })).toThrowError("Callback function should return an array of two items !");
    });

    it("Should return items mapped using the given callback", function() {
        expect([ 1, 2 ].gCollectEntries(function(value, id) {
            return [ id, value ];
        })).toEqual({ 0: 1, 1: 2 });
    });

});

describe("Object.prototype.gCollectEntries", function() {

    it("Should return an empty object if the object is empty", function() {
        expect({}.gCollectEntries()).toEqual({});
    });

    it("Should return non modified items if no callback is given", function() {
        expect({ "a": 1, "b": 2 }.gCollectEntries()).toEqual({ "a": 1, "b": 2 });
    });

    it("Should give the key as the first callback argument", function() {
        expect({ "a": 1 }.gCollectEntries(function(key) { return [ 1, key ]; })).toEqual({ 1: "a" });
    });

    it("Should give the value as the second callback argument", function() {
        expect({ "a": 1 }.gCollectEntries(function(key, value) { return [ 2, value ]; })).toEqual({ 2: 1 });
    });

    it("Should throw an error if the given callback doesn't return an array of two items", function() {
        expect({}.gCollectEntries.bind([ 1 ], function(value) {
          return value;
        })).toThrowError("Callback function should return an array of two items !");
        expect({}.gCollectEntries.bind([ 1 ], function(value) {
          return [];
        })).toThrowError("Callback function should return an array of two items !");
        expect({}.gCollectEntries.bind([ 1 ], function(value) {
          return [ value ];
        })).toThrowError("Callback function should return an array of two items !");
    });

    it("Should return items mapped using the given callback", function() {
        expect({ "a": 1, "b": 2 }.gCollectEntries(function(key, value) {
            return [ value, key ];
        })).toEqual({ 1: "a", 2: "b" });
    });

});
