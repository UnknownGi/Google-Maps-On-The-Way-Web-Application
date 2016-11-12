$(document).ready(function() {
	$("#devTeam .row .col-sm-3 img").on("mouseenter", function() {
		$(this).animate({
			height: '+=50px',
			width: '+=50px'
		}, "slow");
	});
	
	$("#devTeam .row .col-sm-3 img").on("mouseleave", function() {
		$(this).animate({
			height: '-=50px',
			width: '-=50px'
		}, "slow");
	});
});