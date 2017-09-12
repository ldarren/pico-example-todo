return {
	deps:{
		task:'model'
	},
	create:function(deps,params){
		this.el.innerHTML = `<span>${deps.task.text} </span><button id=${deps.task.id}>Mark As Done</button>`
	},
	events: {
		'click button': function(e, target){
			this.deps.task.state = 0
			this.remove()
		}
	}
}
