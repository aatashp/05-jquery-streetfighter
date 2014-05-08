
$(document).ready(function() {

	// VARIABLES
	var mouseIsDown = false,
			keyIsDown = false,
			hadoukenSound = $('#hadouken-sound'),
			soundVolume = 0.5;
			ryu = $('.ryu'),
			ryuStill = $('.ryu-still'),
			ryuReady = $('.ryu-ready'),
			ryuCool = $('.ryu-cool'),
			ryuThrowing = $('.ryu-throwing'),
			hadouken = $('.hadouken'),
			keyNumber = 88;



	// FUNCTIONS
	function playHadouken () {
	  hadoukenSound[0].volume = soundVolume;
	  hadoukenSound[0].load();
	  hadoukenSound[0].play();
	}

	function ryuEnter() {
		hideAllRyu();
		ryuReady.toggle();
	}

	function ryuLeave() {
		hideAllRyu();
		ryuStill.toggle();
	}

	function ryuClicked() {
		hideAllRyu();
		ryuThrowing.toggle();
		playHadouken();
		hadouken.finish().show()
									.animate(
										{'left': '372px'},
										300,
										function() {
											$(this).hide();
											$(this).css('left', '-140px');
										}
									);
	}

	function ryuUnClicked() {
		hideAllRyu();
		ryuReady.toggle();
	}

	function keyPressed(event) {
		if(event.which == keyNumber) {
			hideAllRyu();
			ryuCool.toggle();
		}
	}

	function keyUnPressed(event) {
		if(event.which == keyNumber) {
			ryuStill.toggle();
			ryuCool.toggle();
		}
	}

	function hideAllRyu() {
		$('div[class^="ryu-"]').hide();		
	}



	// EVENT HANDLERS
	ryu.on('mouseenter', ryuEnter);

	ryu.on('mouseleave', ryuLeave);

	ryu.on('mousedown', ryuClicked);

	ryu.on('mouseup', ryuUnClicked);

	$(document).on('keydown', keyPressed);

	$(document).on('keyup', keyUnPressed);

})

