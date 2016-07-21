angular
	.module("todo")
	.controller("IndexController", IndexController);



	function IndexController(todoService){
		var self = this;
		self.todoService = todoService;
		self.texto = '';
		console.log(todoService);
	}