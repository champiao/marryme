var stupidButton = {
	init: function() {
		this.attachEvents();
	},

	attachEvents: function() {
		$('#runaway').on('hover', this.flyAway);
		$('#stop').on('click', this.showWin);
	},

	flyAway: function(e) {
		mLeft = Math.random() * 300;
		mTop = Math.random() * 300;

		$('#runaway-container').css('margin-left', mLeft);
		$('#runaway-container').css('margin-top', mTop);
	},

	showWin: function(e) {
		alert('Que pena, tento mais tarde');
	}
};

stupidButton.init();
