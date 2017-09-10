return {
	deps:{
		tasks:'models',
		activeTask:'view'
	},
	create:function(deps, params){
		deps.tasks.callback.on('add', function(){
			console.log('added completed task')
		})
	}
}
