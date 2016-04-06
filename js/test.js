$(function() {
	$(window).load(function() {
		$("img[src]").each(function(){
			console.log($(this).attr("src"));
		});
	});
});