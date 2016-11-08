import Ember from 'ember';
let personnel = [{
  id: '134',
  firstName: 'Mike',
  lastName: 'X',
  yrs: '5'
}, {
  id: '345',
  firstName: 'Test',
  lastName: 'New',
  yrs: '7'
}]
export default Ember.Route.extend({
  model() {
    return personnel;
  }
});
