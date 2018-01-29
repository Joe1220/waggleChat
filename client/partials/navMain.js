Template.navMain.events({
  'click .logout' (evt, tmpl) {
    // Meteor.logout();
    //AccountsTemplates에서 onLogoutHook을 통해 만든 함수를 이용하여 logout에 추가 기능 가능.
    AccountsTemplates.logout();
  },
  'click .user_info_change' (evt, tmpl) {
    //개인정보 수정 팝업
  },
  'click .meteor-home' (evt, tmpl) {
    if(Meteor.user()) {
      return Session.set("viewMode", "chatMain");
    } else {
      return Session.set("viewMode", "login");
    }
  }
});

Template.navMain.helpers({
  userName() {
    if(Meteor.user().profile) {
      return Meteor.user().profile.name;
    }
    return Meteor.user().username;
  }
});
