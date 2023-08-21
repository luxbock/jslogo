(function (global) {
  'use strict';

  function LoggerTurtle() {
    this.active = true;
    this.turtle_type = "Logger";
  }

  Object.defineProperties(LoggerTurtle.prototype, {

    forward: {value: function(d) {
      console.log(`forward ${d}`);
    }},

    back: {value: function(d) {
      console.log(`back ${d}`);
    }},

    left: {value: function(d) {
      console.log(`left ${d}`);
    }},

    right: {value: function(d) {
      console.log(`right ${d}`);
    }}

  });

  global.LoggerTurtle = LoggerTurtle;
}(self));
