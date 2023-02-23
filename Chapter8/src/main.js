import Vue from 'vue';
import App from './App.vue';
import store from './store';

new Vue({
	el: '#app',
	store,
	render: h => h(App),
	computed: {
		message() {
			return this.$store.getters.message;
		}
	}
});