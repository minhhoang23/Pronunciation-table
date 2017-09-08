$('.overlay').hide();

//event handler for showing the overlay
$('a').click(function (e) {
	'use strict';
	e.preventDefault();
	var audio = new Audio("sounds/" + this.id + ".mp3");
	audio.play();
	$('.overlay').show();
	//add image and class to the image
	$('.option-box').prepend("<img src = 'images/" + this.id + ".png'>");
	$('.option-box img').addClass('image');
	return false;
});

//event handler for hiding the overlay
$('.overlay').click(function (e) {
	'use strict';
	e.preventDefault();
	//e.stopPropagation(;)
	//excluding elements of "box" from triggering the hide event
	if (!$(e.target).is('.option-box, .btn, .image, .button, .example')) {
		$(this).hide();
		$('.option-box img').remove();
	}
});

//event handler for showing examples
$('#example').click(function (e) {
	'use strict';
	e.preventDefault();
	$('.example').slideToggle(200);
});