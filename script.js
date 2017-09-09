$('.overlay').hide();
$('.example').hide();
//event handler for showing the overlay
$('a').click(function (e) {
	'use strict';
	e.preventDefault();
	$('.overlay').show();
	//add image to option box
	$('.option-box').prepend("<img src = 'images/" + this.id + ".png'>");
	$('.option-box img').addClass('image');
	return false;
});

//event handler for hiding the overlay
$('.overlay').click(function (e) {
	'use strict';
	e.preventDefault();
	//excluding elements of option box from triggering the hide event
	if (!$(e.target).is('.option-box, .btn, .image, .button, .example, .words')) {
		$(this).hide();
		$('.example').hide();
		$('.option-box img').remove();
	}
});

//event handler for showing examples
$('#example').click(function (e) {
	'use strict';
	e.preventDefault();
	$('.example').slideToggle(200, function () {
		var word = ['mon1_green', 'mon1_seat', 'mon1_tree',
					'mon2_fish', 'mon2_grin', 'mon2_sit',
					'mon3_foot', 'mon3_good', 'mon3_pull',
					'mon4_food', 'mon4_rule', 'mon4_shoe',
					'mon5_bet', 'mon5_head', 'mon5_said',
					'mon6_about', 'mon6_ladder', 'mon6_teacher',
					'mon7_earth', 'mon7_girl', 'mon7_nurse',
					'mon8_door', 'mon8_four', 'mon8_walk',
					'mon9_apple', 'mon9_had', 'mon9_lamb',
					'mon10_cup', 'mon10_love', 'mon10_money',
					'mon11_dark', 'mon11_fast', 'mon11_heart',
					'mon12_hot', 'mon12_on', 'mon12_stop',
					'dip1_beer', 'dip1_deer', 'dip1_ear',
					'dip2_bathe', 'dip2_eight', 'dip2_they',
					'dip3_pure', 'dip3_sure', 'dip3_tourist',
					'dip4_choice', 'dip4_joy', 'dip4_noise',
					'dip5_arrow', 'dip5_joke', 'dip5_throw',
					'dip6_chair', 'dip6_hair', 'dip6_there',
					'dip7_dice', 'dip7_my', 'dip7_thigh',
					'dip8_house', 'dip8_lounge', 'dip8_out',
					'con1_apple', 'con1_pea', 'con1_stop',
					'con2_about', 'con2_beer', 'con2_bet',
					'con3_stop', 'con3_tree', 'con3_want',
					'con4_door', 'con4_food', 'con4_said',
					'con5_chair', 'con5_choice', 'con5_teacher',
					'con6_joke', 'con6_joy', 'con6_lounge',
					'con7_cup', 'con7_dark', 'con7_walk',
					'con8_girl', 'con8_green', 'con8_grin',
					'con9_fish', 'con9_food', 'con9_four',
					'con10_observer', 'con10_vote', 'con10_vow',
					'con11_earth', 'con11_thigh', 'con11_throw',
					'con12_bathe', 'con12_there', 'con12_they',
					'con13_fast', 'con13_sit', 'con13_stop',
					'con14_noise', 'con14_observer', 'con14_president',
					'con15_fish', 'con15_shoe', 'con15_sure',
					'con16_casual', 'con16_measure', 'con16_pleasure',
					'con17_lamb', 'con17_money', 'con17_my',
					'con18_green', 'con18_grin', 'con18_nurse',
					'con19_drank', 'con19_english', 'con19_sing',
					'con20_head', 'con20_heart', 'con20_hot',
					'con21_love', 'con21_pull', 'con21_rule',
					'con22_grin', 'con22_red', 'con22_rule',
					'con23_want', 'con23_way', 'con23_where',
					'con24_year', 'con24_yellow', 'con24_yes'];
		var imgSrc = $('.option-box img').attr('src');
		var id = imgSrc.substr(7, imgSrc.length - 11);
		//loop through word
		for (let i = 0; i < word.length; i++) {
			//collect words that match the id
			if (word[i].includes(id + '_')) {
				//if the number in id > 10
				if (id.length == 5) {
					$('.example').append("<div class = 'words' id = '" + word[i] + "'>" + word[i].substr(6, word[i].length) + "</div>");
				} else {
					$('.example').append("<div class = 'words' id = '" + word[i] + "'>" + word[i].substr(5, word[i].length) + "</div>");
				}
			}
		}	
	});
	$('.words').detach();
});

//event handler for playing sound of the sound-button
$('#sound').click(function (e) {
	'use strict';
	e.preventDefault();
	var id = $('.option-box img').attr('src'),
		audio = new Audio("sounds/" + id.substr(7, id.length - 11) + ".mp3");
	audio.play();
});

//event handler for playing sound of example words using "delegate"
$('.example').delegate('.words', 'click', function (e) {
	'use strict';
	e.preventDefault();
	var audio = new Audio ("sounds/" + this.id + ".mp3");
	audio.play();
});