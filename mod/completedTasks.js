function renderTask(self, model){
	if (model.state) return
	self.spawn(self.deps.completedTask, [model.id])
}

return {
	deps:{
		tasks:'models',
		completedTask:'view'
	},
	create:function(deps, params){
		deps.tasks.callback.on('update', function(evt, coll, id){
			renderTask(this, coll.get(id))
		},this)

		deps.tasks.list((err, models) => {
			if (err) return console.error(err)
			models.filter( m => !m.state ).forEach( m => renderTask(this, m) )
		})
	}
}
