import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import settings from '../settings';

import session from '../models/session';

import renderLogin from './login';

function renderHeader(){
  let $header = $(`
    <header>
      <section>
        <h2>Your Contacts</h2>
        <button>logout</button>
      </section>
      <nav class="nav-main">
        <ul class="ul-nav">
          <li id="contacts-link">Contacts</li>
          <li id="create-new-link">Create New</li>
          <li>Settings</li>
        </ul>
      </nav>
    </header>
    `);

    $header.find('button').on('click',function(evt){
      sessionStorage.removeItem('session');
      $.ajax({
        type: 'POST',
        url: `https://baas.kinvey.com/user/${settings.appKey}/_logout`,
        headers: {
          Authorization: `Kinvey ${session.authtoken}`
        },
        contentType: 'application/json',
        success: function(response){
          router.navigate('login', {trigger:true});
          console.log('you logged out!');
        },
        error: function(){
          console.log('Error! You failed to logout! Check header.js');
        }
      });

    });


  return $header;
}

export default renderHeader;
