import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});

Accounts.onCreateUser(function (options, user) {

    if(user.services.facebook) {
      user.username = user.services.facebook.name;
      user.emails = user.services.facebook.email;
    } else if(user.services.google) {
      user.username = user.services.google.name;
      user.emails = user.services.google.email;
    }
    return user;
});
