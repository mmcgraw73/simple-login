import { Template } from "meteor/templating";

import { MESSAGES } from "../api/messages";

import "./body.html";
import "../ui/login/login.html";

Template.bodymover.helpers({
  messages() {
    return MESSAGES.find({}, { sort: { createdAt: -1 } });
  },
});

BlazeLayout.render("bodymover", { top: "header", main: "login" });
