import { Template } from "meteor/templating";

import { login } from "../api/login";
import { MESSAGES, messages } from "../api/messages";

import "../ui/login/login.html";

Template.body.helpers({
  messages() {
    return MESSAGES.find({});
  },
});

var appId = FlowRouter.getParam("appId");

console.log("hey beash i got the id", appId);
