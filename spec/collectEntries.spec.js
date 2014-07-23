describe("Array.prototype.collectEntries", function() {

    it("Should return an empty object if the array is empty", function() {
        expect([].collectEntries(function(value) {})).toEqual({});
    });

    it("Should throw an error if no callback is given", function() {
        expect([].collectEntries.bind(null)).toThrowError("Callback function is required !");
    });

    it("Should give the value as the first callback argument", function() {
        expect([ 1 ].collectEntries(function(value) { return [ 1, value ]; })).toEqual({ 1: 1 });
    });

    it("Should give the index as the second callback argument", function() {
        expect([ 1 ].collectEntries(function(value, id) { return [ 1, id ]; })).toEqual({ 1: 0 });
    });

    it("Should throw an error if the given callback doesn't return an array of two items", function() {
        expect([].collectEntries.bind([ 1 ], function(value) {
          return value;
        })).toThrowError("Callback function should return an array of two items !");
        expect([].collectEntries.bind([ 1 ], function(value) {
          return [];
        })).toThrowError("Callback function should return an array of two items !");
        expect([].collectEntries.bind([ 1 ], function(value) {
          return [ value ];
        })).toThrowError("Callback function should return an array of two items !");
    });

    it("Should return items mapped using the given callback", function() {
        expect([ 1, 2 ].collectEntries(function(value, id) {
            return [ id, value ];
        })).toEqual({ 0: 1, 1: 2 });
    });

});
