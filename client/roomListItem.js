Template.roomListItem.onCreated(function() {
  var self = this;
  self.userOnwers = self.subscribe("userData");
});

Template.roomListItem.helpers({
    roomOwners() {
      let ownerName = Meteor.users.findOne({_id: this.owner});
      if(ownerName && ownerName.username) {
        return ownerName.username;
      } else {
        return null;
      }
    },
    owerPicture() {
      let ownerName = Meteor.users.findOne({_id: this.owner});
      if(ownerName) {
        emails = ownerName.emails[0].address ? ownerName.emails[0].address : ownerName.emails;
        return "http://www.gravatar.com/avatar/"+Gravatar.hash(emails)+"?s=45&d=wavatar";
      } else {
        return null;
      }
    }
});
