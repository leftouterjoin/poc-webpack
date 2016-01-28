//document.write("Hello webpack");
var print = require("./print");
print("Hello webpack!!!");

var Vue = require('vue');
var demo = new Vue({
	el: '#demo',
	data: {
		message: 'Hello Vue.js!'
	}
});

