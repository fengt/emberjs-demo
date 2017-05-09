import Ember from 'ember';
// import $ from 'jquery';

export default Ember.Component.extend({
	click: function () {
		this.$(".navbar-collapse").collapse('hide');    
	}
});
