return {
	deps:{
		tasks:'models'
	},
	events:{
		'click button': function(e, target){
			var input = this.el.querySelector('input')
			this.deps.tasks.create({
				id:Date.now(),
				text:input.value,
				state:1
			})
			input.value=''
		}
	}
}
