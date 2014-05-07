var mouseIsDown = false;
var keyIsDown = false;

$(document).ready(function() {

	$('.ryu').on('mouseenter', function() {
		hideAllThree();
		if (keyIsDown) {
			showCool();
		} else {
			showReady();
		}
	});

	$('.ryu').on('mouseleave', function() {
		mouseIsDown = false;
		$('.ryu-throwing').hide();
		hideAllThree();
		if (keyIsDown) {
			showCool();
		} else {
			showStill();
		}
	});

	$('.ryu').on('mousedown', function() {
		mouseIsDown = true;
		hideAllThree();
		// play hadouken sound
		playHadouken();
		$('.ryu-throwing').show();
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
		mouseIsDown = false;
		$('.ryu-throwing').hide();
		hideAllThree();

		if (keyIsDown) {
			showCool();
		} else {
			showReady();
		}
	});

	$(document).on('keydown', function(event) {
		if(event.which == 88 && !mouseIsDown) {
			keyIsDown = true;
			hideAllThree();
			showCool();
		}
	});

	$(document).on('keyup', function(event) {
		if(event.which == 88) {
			keyIsDown = false;
			hideAllThree();
			if($('.ryu').is(':hover') && !mouseIsDown) {
				showReady();
			} else if(!mouseIsDown) {
				showStill();
			}
		}
	});

})

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function showStill() {
	$('.ryu-still').show();
	$('.ryu-ready').hide();
	$('.ryu-cool').hide();
}

function showReady() {
	$('.ryu-still').hide();
	$('.ryu-ready').show();
	$('.ryu-cool').hide();
}

function showCool() {
	$('.ryu-still').hide();
	$('.ryu-ready').hide();
	$('.ryu-cool').show();
}

function hideAllThree() {
	$('.ryu-still').hide();
	$('.ryu-ready').hide();
	$('.ryu-cool').hide();
}
