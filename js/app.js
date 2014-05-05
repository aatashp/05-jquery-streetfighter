$(document).ready(function() {
	$('.ryu').on('mouseenter', function() {
		$('.ryu-ready').show();
		$('.ryu-still').hide();
	});

	$('.ryu').on('mouseleave', function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});

	$('.ryu').on('mousedown', function() {
		// play hadouken sound
		playHadouken();
		$('.ryu-throwing').show();
		$('.ryu-ready').hide();
		// animate hadouken to the right of the screen
		$('.hadouken').finish().show()
									.animate(
										{'left': '372px'},
										300,
										function() {
											$(this).hide();
											$(this).css('left', '-140px');
										}
									);
	});

	$('.ryu').on('mouseup', function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

})

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}