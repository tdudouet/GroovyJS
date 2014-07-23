describe("Array.prototype.collect", function() {

    it("Should return an empty array if the array is empty", function() {
        expect([].collect()).toEqual([]);
    });

    it("Should return non modified items if no callback is given", function() {
        expect([ "a", "b" ].collect()).toEqual([ "a", "b" ]);
    });

    it("Should give the value as the first callback argument", function() {
        expect([ 1 ].collect(function(value) { return value + 1;  })).toEqual([ 2 ]);
    });

    it("Should give the index as the second callback argument", function() {
        expect([ 1 ].collect(function(value, id) { return id + 1;  })).toEqual([ 1 ]);
    });

    it("Should return items transformed using the given callback", function() {
        expect([ 1, 2, 3 ].collect(function(value) {
            return value * 2;
        })).toEqual([ 2, 4, 6 ]);
        expect([ 1, 2, 3 ].collect(function(value, id) {
            return id;
        })).toEqual([ 0, 1, 2 ]);
    });

});
