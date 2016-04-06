$(function() {
	$(window).load(function() {
		$("img[src]").each(function() {
			var src = $(this).attr("src");
			if (/\?t=/i.test(src)) {
				src+="?t=" + Math.random().toString().substr(2);
				$(this).attr("src", src);	
			}
		});
		console.log("changed");
	});
});