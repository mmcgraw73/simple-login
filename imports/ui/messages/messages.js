// components/messages/messages.js
// message ui logic

Template.body.events({
  "submit .new-message"(event) {
    // nix default submit event
    event.preventDefault();

    // get message text from input
    const target = event.target;
    const txt = target.message.text;
  },
});
