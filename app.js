new Vue({
	el: '#vue-app',
	data: {
		name: "anas",
		job: "Web Developer",
		website: "http://google.com",
		websiteTag: '<a href="http://google.com">ggl</a>',
		age: 21,
		x: 0,
		y: 0,

		// Computed property tut
		a: 0,
		b: 0,
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
		},
		
		// for computed add inner to computed propscomputed Properties 
		// addToA: function() {
		// 	console.log('AddToA');
		// 	return this.a + this.age;
		// },
		// addToB: function() {
		// 	console.log('AddToB');
		// 	return this.b + this.age;
		// }
		// ./computed Properties

	},
	computed: {
		addToA: function() {
			console.log('AddToA');
			return this.a + this.age;
		},
		addToB: function() {
			console.log('AddToB');
			return this.b + this.age;
		}
	}
})