(function (global) {
  'use strict';

  function ComboTurtle(turtles) {
    // ComboTurtle is a turtle that combines the methods of each of
    // the turtles in `turtles` by executing them in the order.
    this.turtles = Array.isArray(turtles) ? turtles : [];
    this.active = true;
    this.turtle_type = "Combo";
    console.log("ComboTurtle initiated");
    this.turtles.forEach(turtle => {
      console.log("Adding a turtle...");
      const proto = Object.getPrototypeOf(turtle);
      for (let method of Object.getOwnPropertyNames(proto)) {
        if (typeof proto[method] === 'function' && !this[method]) {
          console.log(`Adding method ${method}`);
          this[method] = function(...args) {
            for (let o of this.turtles) {
              if (typeof o[method] === 'function') {
                o[method](...args);
              }
            }
          }
        }
      }
    });
  }

  global.ComboTurtle = ComboTurtle;

}(self));
