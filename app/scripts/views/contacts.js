import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import Contact from '../models/contactModel';

function renderContacts() {
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

    let $contact = $(`
      <li>
        <h4>Full name</h4>
        <p>nickname</p>
        <div class="view-contact">
          <i class="fa fa-eye viewIcon" aria-hidden="true"></i>
        </div>
      </li>
      `);

    return $contact;
}


export default renderContacts;
