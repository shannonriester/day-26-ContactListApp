import $ from 'jquery';
import Backbone from 'backbone';

import settings from '../settings';

const Contact = Backbone.Mode.Extend({
  idAttribute: '_id',
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appId}/contacts`,
  defaults: {
    fullname: '',
    nickname: '',
    email: '',
    phone: ''
  }
});

let contact = new Contact();
export default contact;
