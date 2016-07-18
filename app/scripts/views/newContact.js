import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import Contact from '../models/contactModel';
import contactsCollection from '../collections/contactsCollection';

function createNew() {
  let $newContact = $(`
    <main>
    	<form class="form-new-contact">
    		<input type="text" name="fullname" placeholder="fullname">
    		<input type="text" name="nickname" placeholder="fullname">
    		<input type="text" name="email" placeholder="fullname">
    		<input type="text" name="phone" placeholder="fullname">
        <button id="clear">clear</button>
        <button id="cancel">cancel</button>
        <button id="add-new">add new</button>
    	</form>
    </main>
    </div>
      `);
      $contactsPage.find('#add-new').on('click', function(){
        contactsCollection.create({
            fullname: $('input[name="fullname"]').val(),
            nickname: $('input[name="nickname"]').val(),
            email: $('input[name="email"]').val(),
            phone: $('input[name="phone"]').val()
        }, {
        success: function(response){
          router.navigate('contacts', {trigger:true});
        },
        error: function(){
          console.log('Error creating new contact. See newContact.js');
        }
      });
    });

    return $newContact;
}


export default createNew;
