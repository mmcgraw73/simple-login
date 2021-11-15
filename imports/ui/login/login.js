// login.js

import "../../api/login";

console.log("login logic");

Template.body.events({
  ".login"(event) {
    debugger;
    // nix default submit event
    event.preventDefault();
    console.log("login logic loaded");
    // get email
    const target = event.target;
    const email = target.user.email;
  },
});
