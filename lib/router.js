FlowRouter.route("/login/", {
  action: function (params, queryParams) {
    console.log("Yeah! We are on the post:");
  },
});

var adminRoutes = FlowRouter.group({
  prefix: "/admin",
  name: "admin",
  triggersEnter: [
    function (context, redirect) {
      console.log("and go get yourself some cheap sunglasses...");
    },
  ],
});
