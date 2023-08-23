(function (global) {
  'use strict';

  function RemoteTurtle() {
    this.active = true;
    this.turtle_type = "Remote";
    this.executionContextID = Math.random().toString(36).substr(2, 9);
  }

  RemoteTurtle.prototype.POST = async function(command, args) {

    // FIXME:This feels ugly
    if (typeof args === 'undefined') {
      args = '';
    } else if (Array.isArray(args)) {
      args = '/' + args.join('/');
    } else {
      args = `/${args}`;
    }

    fetch(`/pappy/${command}${args}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        // FIXME: Does this even work?
        commandContext: this.executionContextID
      }
    });
  };

  Object.defineProperties(RemoteTurtle.prototype, {

    forward: {value: function(distance) {
      POST('forward', distance)
        .then(response => response.json())
        .then(data => {
          console.log(`Pappy forward: ${data}`);
        })
        .catch(error => {
          console.log("Pappy forward: error");
        });
    }},

    back: {value: function(distance) {
      POST('back', distance)
        .then(response => response.json())
        .then(data => {
          console.log(`Pappy back: ${data}`);
        })
        .catch(error => {
          console.log("Pappy back: error");
        });
    }},

    left: {value: function(d) {
      POST('left', degrees)
        .then(response => response.json())
        .then(data => {
          console.log(`Pappy forward: ${data}`);
        })
        .catch(error => {
          console.log("Pappy forward: error");
        });
    }},

    right: {value: function(d) {
      POST('left', degrees)
        .then(response => response.json())
        .then(data => {
          console.log(`Pappy forward: ${data}`);
        })
        .catch(error => {
          console.log("Pappy forward: error");
        });
    }}

  });

  global.RemoteTurtle = RemoteTurtle;
}(self));
