import { Meteor } from "meteor/meteor";

import { MESSAGES } from "../imports/api/messages";

import { Accounts } from "meteor/accounts-base";

if (!Accounts.findUserByEmail("user@gmail.com")) {
  Accounts.createUser({
    username: "User",
    email: "user@gmail.com",
    password: "securePassword",
  });
}

Meteor.startup(() => {});
