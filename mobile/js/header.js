$(function() {
    $(".menu").click(function() {
        if (!$(".menubox").hasClass("open")) {
            $(".menubox").addClass("open");
            setTimeout(function() {
                $(".close").addClass("open");
                $(".slide").addClass("open");
                $("#searchlink>span").show();
                $("#searchlink>.hide").hide();
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
    $(".close").bind("transitionend", function() {
        if (!$(".close").hasClass("open")) {
            $(".menubox").removeClass("open");
        }
    });


    (function() {
        $(".menubox").addClass("open")
        var old = $(".menubox.open>.slide").css("margin-left");
        $(".menubox.open>.slide").css("margin-left", 0);
        new IScroll(".slide", {
            mouseWheel: true,
            click: true
        });
        $(".menubox.open>.slide").removeAttr("style");
        $(".menubox").removeClass("open");
    })(); //menu iscroll apply




    /*
	setTimeout(function() {
		open($("#test"));
	},5000);
	*/

    (function() {
        $("#searchlink").click(function() {
            $(this).find("span").hide();
            $(this).find("div").show();
        });

    })(); //searchlink


    function open(elem) {
        if (document.createEvent) {
            var e = document.createEvent("MouseEvents");
            e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            elem[0].dispatchEvent(e);
        } else if (element.fireEvent) {
            elem[0].fireEvent("onmousedown");
        }
    }

});
