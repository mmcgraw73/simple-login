FlowRouter.route("/login", {
  // login page route
  triggersEnter: [trackRouteEntry],
  action: function () {
    // do something you like
  },
  // calls when we decide to move to another route
  // but calls before the next route started
  triggersExit: [trackRouteClose],
});

FlowRouter.route("/dashboard", {
  name: "dashboard",
  triggersEnter: [
    function (context, redirect) {
      // auth check
      redirect("/login");
    },
  ],
});

function trackRouteEntry(context) {}

function trackRouteClose(context) {}

FlowRouter.route("/", {
  triggersEnter: [
    function (context, redirect) {
      redirect("/login");
    },
  ],
  action: function (_params) {
    throw new Error("this should not get called");
  },
});
