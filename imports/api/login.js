// api/login.js
import { Accounts } from "meteor/accounts-base";

Template.body.events({
  "submit .login"(event) {
    // nix default submit event
    event.preventDefault();

    // get email
    const target = event.target;
    const email = target.user.email;
  },
});
