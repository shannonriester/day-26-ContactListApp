import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';

function renderContacts() {
  let $contact = $(`
    <div id="contacts">
      <main>
        <input type="search" name="search" placeholder="search: " value="">
        <button class="search-btn">search</button>
        <ul class="ul-contact-list">
          <li>
            <h4>Full name</h4>
            <p>nickname</p>
            <div class="view-contact">
              <i class="fa fa-eye viewIcon" aria-hidden="true"></i>
            </div>
          </li>
        </ul>
      </main>
    </div>
    `);

    


    return $contact;
}


export default renderContacts;
