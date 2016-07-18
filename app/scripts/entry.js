import $ from 'jquery';
// window.$
import Backbone from 'backbone';

import settings from './settings';
import session from './models/session';

import router from './router';



$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax){
  console.log('interecepted');
  if (session.authtoken) {
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + session.authtoken);
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
  }
});

if (sessionStorage.session){
  session.username = JSON.parse(sessionStorage.session).username;
  session.authtoken = JSON.parse(sessionStorage.session).authtoken;
}

Backbone.history.start();

if (!session.username) {
  router.navigate('login', {trigger:true});
}
