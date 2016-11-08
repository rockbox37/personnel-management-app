import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('personnel');
  this.route('insights');
  this.route('main',{ path: '/' });
});

export default Router;
