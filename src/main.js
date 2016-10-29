import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './App';
import Welcome from './components/Welcome';
import Dir from './components/pages/dir';
import View from './components/pages/view';
import Answer from './components/pages/answer';
import Results from './components/pages/results';

const routes = [{
	path: '/',
	component: Welcome
}, {
	path: '/dir',
	component: Dir
}, {
	path: '/view',
	component: View
}, {
	path: '/answer',
	component: Answer
}, {
	path: '/results',
	component: Results
}];

const router = new VueRouter({
	routes,
	// exact: true
});

console.log(router);


const interviewApp = new Vue({
	el: '#app',
	router,
	render: h => h(App)
});