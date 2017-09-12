return {
	deps:{
		task:'model'
	},
	create:function(deps,params){
		this.el.textContent = deps.task.text
	}
}
