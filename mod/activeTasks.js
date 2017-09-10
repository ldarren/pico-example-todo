function renderTask(self, model){
	if (!model.state) return
	self.spawn(self.deps.activeTask, [model.id])
}

return {
	deps:{
		tasks:'models',
		activeTask:'view'
	},
	create:function(deps, params){
		deps.tasks.callback.on('add', function(evt, coll, id){
			renderTask(this, coll.get(id))
		},this)
	}
}
