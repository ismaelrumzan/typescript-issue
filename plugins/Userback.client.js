function dynamicallyLoadScript() {
  Userback = window.Userback || {};
  Userback.access_token = '112GftuwY87UWgm5kfaH';
  (function (id) {
    var s = document.createElement('script');
    s.async = 1;
    s.src = 'https://static.userback.io/widget/v1.js';
    var parent_node = document.head || document.body;
    parent_node.appendChild(s);
  })('userback-sdk');
}

dynamicallyLoadScript();
