if(!Array.prototype.gFlatten) {

    var flatten = function(items, target) {
      // For each element
      items.forEach(function(it) {
        if(it instanceof Array) {
          flatten(it, target);
        } else {
          target.push(it);
        }
      });
      //
      return target;
    };

    Array.prototype.gFlatten = function() {
        return flatten(this, []);
    };

}
