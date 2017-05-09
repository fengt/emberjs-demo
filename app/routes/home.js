import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
			customers: this.store.findAll('customer'),
			products: this.store.findAll('product')
		});
	}
	// model() {
	//     return this.get('store').findAll('partner');
	// }
});