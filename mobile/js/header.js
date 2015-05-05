﻿"use strict";
var isLocal = /^file\:\/\/\//i.test(location.href);
var pufii = 20;
var danna = 19;
function initShoppingCart() {
    var cartlist = [{ "MerNo": "DP7384", "MerNo1": "P7384", "MerName": "細肩帶無痕罩杯背心小可愛 4色 - 帕妃PUFII", "Color": "藍", "Size": "依賣場", "Price": 198, "Num": 1, "PhotoSmPath": "http://photo.danna.com.tw/20150312/8898.gif", "ColorPhotoPath": "" }, { "MerNo": "DP7384", "MerNo1": "P7384", "MerName": "細肩帶無痕罩杯背心小可愛 4色 - 帕妃PUFII", "Color": "粉", "Size": "依賣場", "Price": 198, "Num": 1, "PhotoSmPath": "http://photo.danna.com.tw/20150312/8898.gif", "ColorPhotoPath": "" }, { "MerNo": "DP7384", "MerNo1": "P7384", "MerName": "細肩帶無痕罩杯背心小可愛 4色 - 帕妃PUFII", "Color": "白", "Size": "依賣場", "Price": 198, "Num": 1, "PhotoSmPath": "http://photo.danna.com.tw/20150312/8898.gif", "ColorPhotoPath": "" }];
    function getdata(cartList) {
        var count = 0;
        var total = 0;
        try {
            if (cartList[0].MerName) {
                for (var i = 0; i < cartList.length; i++) {
                    count += cartList[i].Num;
                    total += cartList[i].Num * cartList[i].Price;
                }
                $(".cart>a").html("<span>" + (count === 0 ? "" : count) + "</span>");
            }
        } catch (e) {
        }
    }
    if (isLocal) {
        getdata(cartlist);
    } else {
        $.getJSON("../../../../Common/CartList.ashx", function (cartList) {
            getdata(cartList);
        });
    }
}
$(function () {
    
    function QueryString(name, url) {
        if (url === undefined) {
            url = window.location.search.substring(1);
        } else {
            url = url.split("?")[1] || url.split("?")[0];
        }
        var allValues = url;
        var values = allValues.split("&");
        for (var i = 0; i < values.length; i++) {
            var value = values[i].split("=");
            if (value[0].toUpperCase() == name.toUpperCase()) return value[1];
        }
        return "";
    }

    (function() {
        $(".menu").click(function() {
            if (!$(".menubox").hasClass("open")) {
                $(".menubox").addClass("open");
                setTimeout(function() {
                    $(".close").addClass("open");
                    $(".slide").addClass("open");
                    $(".searchlink>span").show();
                    $(".searchlink>.hide").hide();
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
    })(); //menu open

    (function() {
        $(".searchlink").click(function() {
            $(this).find("span").hide();
            $(this).find("div").show();
        });
    })(); //searchlink

    (function() {
        var data = [{"Idno":20,"Name":"PUFII","MouseoverName":"","PhotoPath":"http://photo.danna.com.tw/2015web/left_c_01.png","MainPhoto":"http://xovera.verawang.com/uploads/Image/2013-10-10-Ded/WVW_image1.jpg","ShowType":0,"OrderNum":2,"V1":"","SubClass":[{"Idno":121,"Name":"http://photo.danna.com.tw/2015web/left_e_02.png","MouseoverName":"http://photo.danna.com.tw/2015web/left_c_02.png","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"NEW IN","ordernum":100,"Level":0,"List":[]},{"Idno":122,"Name":"http://photo.danna.com.tw/2015web/left_e_03.png","MouseoverName":"http://photo.danna.com.tw/2015web/left_c_03.png","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"BEST","ordernum":100,"Level":0,"List":[]},{"Idno":123,"Name":"http://photo.danna.com.tw/2015web/left_e_04.png","MouseoverName":"http://photo.danna.com.tw/2015web/left_c_04.png","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"ALL","ordernum":100,"Level":0,"List":[]},{"Idno":124,"Name":"http://photo.danna.com.tw/2015web/left_e_05.png","MouseoverName":"http://photo.danna.com.tw/2015web/left_c_05.png","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"OUTER","ordernum":100,"Level":0,"List":[]}]},{"Idno":19,"Name":"DANNA","MouseoverName":"","PhotoPath":"http://photo.danna.com.tw/2015web/left_c_13.png","MainPhoto":"http://www.womangettingmarried.com/wp-content/uploads/2013/11/WVW_ebony_350x225.jpg","ShowType":0,"OrderNum":100,"V1":"","SubClass":[{"Idno":119,"Name":"http://photo.danna.com.tw/2015web/left_e_05.png","MouseoverName":"http://photo.danna.com.tw/2015web/left_c_05.png","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"OUTER","ordernum":100,"Level":0,"List":[{"Idno":120,"Name":"NEW","MouseoverName":"","TopIdno":119,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]}]}];
        function getdata(data) {
            var html = "";
            for (var i = 0, imax = data.length; i < imax; i++) {
                if (data[i].Idno == (QueryString("m") || pufii)) {
                    for (var j = 0, jmax = data[i].SubClass.length; j < jmax; j++) {
                        if (data[i].SubClass[j].ShowType === 2 || data[i].SubClass[j].ShowType === 3) {
                            html += "<a href=\"" + data[i].SubClass[j].V1 + "\"";
                            if (data[i].SubClass[j].ShowType === 3) {
                                html += " target=\"_blank\"";
                            }
                            html += ">" + data[i].SubClass[j].Name;
                        } else {
                            html += "<a href=\"../../../../Common/m/Main/Shop/itemList.aspx?m=" + data[i].Idno + "&p=" + data[i].SubClass[j].Idno + "\">";
                        }
                        html += "<div class=\"row\">";
                        html += "<span>" + data[i].SubClass[j].V1 + "</span>";
                        html += "<span class=\"flag\"></span>";
                        html += "</div>";
                        html += "</a>";
                    }
                }
            }
            $(".searchlink").after(html);
            
            (function () {
                $(".searchtext").attr("class", "searchtext");
                $(".searchtext").parent().removeAttr("class").css("box-shadow", "none");
                $(".searchbrand").parent().removeAttr("class").css("box-shadow", "none").parent().removeAttr("class");
            })(); //ui adjust

            (function() {
                $(".menubox").addClass("open");
		        var old = $(".menubox.open>.slide").css("margin-left");
		        $(".menubox.open>.slide").css("margin-left", 0);
		        var a = new IScroll(".slide", {
		            mouseWheel: true,
		            click: true
		        });
		        $(".menubox.open>.slide").removeAttr("style");
		        $(".menubox").removeClass("open");
    		})(); //menu iscroll apply

        }
        if (isLocal) {
            getdata(data);
        } else {
            $.getJSON("../../../../common/ajax/menucmd.ashx", function(data) {
                getdata(data);
            });
        }
    })(); //build menu data

    (function() {
    	if (QueryString("m")===danna.toString()) {
    		$(".welcome>span").text("danna");
    	}
    	$(".danna>a").attr("href",$(".danna>a").attr("href")+"?m="+danna);
    })(); //switch brand

    (function () {
        initShoppingCart();
    })(); //initilizing

});