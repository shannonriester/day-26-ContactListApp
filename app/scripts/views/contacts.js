import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import contactsCollection from '../collections/contactsCollection';
import Contact from '../models/contactModel';

function renderContacts(contactsCollection) {
  let $contactsPage = $(`
    <div id="contacts">
      <main>
        <input type="search" name="search" placeholder="search: " value="">
        <button class="search-btn">search</button>
        <ul class="ul-contact-list">
        </ul>
      </main>
    </div>
    `);

 function renderSingleContact(contact){
   let $contact = $(`
     <li>
       <h3 class="contact-title">${contact.get('fullname')}</h3>
       <p class="contact-nickname">${contact.get('nickname')}</p>
       <div class="view-contact">
         <a href="#contacts/"${contact.get('_id')}><i class="fa fa-eye viewIcon" aria-hidden="true"></i></a>
       </div>
     </li>
     `);
     $contactsPage.find('.ul-contact-list').append($contact);
 }
    contactsCollection.on('add', renderSingleContact);
    contactsCollection.forEach(renderSingleContact);

    return $contactsPage;
}


export default renderContacts;
