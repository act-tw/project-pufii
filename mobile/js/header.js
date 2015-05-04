$(function() {
	$(".menu").click(function() {
		if (!$(".menubox").hasClass("open")) {
			$(".menubox").height($(document).height()).addClass("open");
			setTimeout(function() {
				$(".close").addClass("open");
				$(".slide").addClass("open");
			}, 0);
		}
	});
	$(".close").click(function() {
		if ($(".menubox").hasClass("open")) {
			setTimeout(function() {
				$(".close").removeClass("open");
				$(".slide").removeClass("open");
			}, 0);	
		}
	});
	$(".close").bind("transitionend",function(){
		if (!$(".close").hasClass("open")) {
			$(".menubox").removeClass("open");
		}
	});

});