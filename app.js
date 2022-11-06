const app = Vue.createApp({

data(){
	return {
		manualClass: '',
		selected: true,
		manualColor: '',

	};
},

methods: {
	toggleSelected(){
		var toggle = this.selected;
		this.selected = !toggle;
		console.log(this.selected);
	},
}


});

app.mount("#assignment");