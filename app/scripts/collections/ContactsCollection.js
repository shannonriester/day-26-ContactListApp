import $ from 'jquery';
import Backbone from 'backbone';
import settings from '../settings';
import Contact from '../models/contactModel';

const Contacts = Backbone.Collection.extend({
  model: Contact,
  url: `https://baas.kinvey.com/appdata/${settings.appId}/blogPosts`
});


let contactsCollection = new Contact();

export default contactsCollection;
