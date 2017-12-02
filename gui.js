var Gui = function(dispatcher) {
	var initialize = function() {
		$('#test').html('test')
	};
	dispatcher.Subscribe('Initialize', initialize);
};