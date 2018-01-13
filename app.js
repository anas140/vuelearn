new Vue({
	el: '#vue-app',
	data: {
		name: "anas",
		job: "Web Developer",
		website: "http://google.com",
		websiteTag: '<a href="http://google.com">ggl</a>',
		age: 21,
		x: 0,
		y: 0
	},
	methods: {
		greet: function(greet) {
			return "Good " + greet + ' ' + this.name;
		},
		add: function(inc) {
			this.age += inc;
		},
		sub: function(dec) {
			this.age -= dec;
		},
		updateXY(event) {
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		logName: function() {
			console.log(`You Entered ${this.name}`)
		},
		logAge: function() {
			console.log(`You Entered ${this.age}`)
		}
	}
})