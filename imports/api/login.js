// api/login.js
import { Accounts } from "meteor/accounts-base";

Template.body.events({
  "submit .login"(event) {
    // nix default submit event
    event.preventDefault();
    console.log("login logic loaded");
    // get email
    const target = event.target;
    const email = target.user.email;
  },
});
