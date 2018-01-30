//https://github.com/meteor-useraccounts/core/blob/master/Guide.md 참고
//계정 로그인시, register시 각 부분의 특성을 수정 가능.
var myLogoutFunc = function() {
  // console.log('hello');
  alert(' 대마법사 였습니다! 감사합니다! ');
  Session.set("viewMode", "login")
};

AccountsTemplates.configure({
  confirmPassword: true,
  enablePasswordChange: true,
  termsUrl: 'terms-of-use',
  privacyUrl: 'privacyUrl',
  onLogoutHook: myLogoutFunc
});

//계정 등륵을 할 때, register부분에서 입력값을 추가로 넣을 수 있다.
AccountsTemplates.addFields([
  {
    _id: 'username',
    type: 'text',
    displayName: "username",
    required: true,
    maxLength: 10
    // func: function(value){return value !== 'Full Name';},
    // errStr: 'Only "Full Name" allowed!',
  }
]);
