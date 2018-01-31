Template.registerHelper("currentMode", ()=>{
    if(!Session.get("viewMode")) Session.set("viewMode","login");
    return Session.get("viewMode");
});

Template.registerHelper("ago", (timestamp)=>{

    return Session.get('localtime') && moment(timestamp).fromNow();

});

Tracker.autorun(function(){
  if(Meteor.userId()){
    //do your stuff
    return Session.set("viewMode","chatMain");
  }
});


Meteor.startup(()=>{
    /* 추가  */
    Session.set("localtime",1);
    Meteor.setInterval(function() {
        Session.set("localtime", Random.id());
    }, 1000);
});
