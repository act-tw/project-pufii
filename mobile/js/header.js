"use strict";
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

$(function() {

    function queryString(name, url) {
        if (url === undefined || url === null) {
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
        var data = [{ "Idno": 20, "Name": "PUFII", "MouseoverName": "", "PhotoPath": "http://photo.danna.com.tw/2015web/left_c_01.png", "MainPhoto": "http://xovera.verawang.com/uploads/Image/2013-10-10-Ded/WVW_image1.jpg", "ShowType": 0, "OrderNum": 2, "V1": "", "SubClass": [{ "Idno": 121, "Name": "http://photo.danna.com.tw/2015web/left_e_02.png", "MouseoverName": "http://photo.danna.com.tw/2015web/left_c_02.png", "TopIdno": 99999, "Visible": false, "MobileVisibleType": 1, "MainIdno": 0, "ShowType": 0, "V1": "NEW IN", "ordernum": 100, "Level": 0, "List": [] }, { "Idno": 122, "Name": "http://photo.danna.com.tw/2015web/left_e_03.png", "MouseoverName": "http://photo.danna.com.tw/2015web/left_c_03.png", "TopIdno": 99999, "Visible": false, "MobileVisibleType": 1, "MainIdno": 0, "ShowType": 0, "V1": "BEST", "ordernum": 100, "Level": 0, "List": [] }, { "Idno": 123, "Name": "http://photo.danna.com.tw/2015web/left_e_04.png", "MouseoverName": "http://photo.danna.com.tw/2015web/left_c_04.png", "TopIdno": 99999, "Visible": false, "MobileVisibleType": 1, "MainIdno": 0, "ShowType": 0, "V1": "ALL", "ordernum": 100, "Level": 0, "List": [] }, { "Idno": 124, "Name": "http://photo.danna.com.tw/2015web/left_e_05.png", "MouseoverName": "http://photo.danna.com.tw/2015web/left_c_05.png", "TopIdno": 99999, "Visible": false, "MobileVisibleType": 1, "MainIdno": 0, "ShowType": 0, "V1": "OUTER", "ordernum": 100, "Level": 0, "List": [] }] }, { "Idno": 19, "Name": "DANNA", "MouseoverName": "", "PhotoPath": "http://photo.danna.com.tw/2015web/left_c_13.png", "MainPhoto": "http://www.womangettingmarried.com/wp-content/uploads/2013/11/WVW_ebony_350x225.jpg", "ShowType": 0, "OrderNum": 100, "V1": "", "SubClass": [{ "Idno": 119, "Name": "http://photo.danna.com.tw/2015web/left_e_05.png", "MouseoverName": "http://photo.danna.com.tw/2015web/left_c_05.png", "TopIdno": 99999, "Visible": false, "MobileVisibleType": 1, "MainIdno": 0, "ShowType": 0, "V1": "OUTER", "ordernum": 100, "Level": 0, "List": [{ "Idno": 120, "Name": "NEW", "MouseoverName": "", "TopIdno": 119, "Visible": false, "MobileVisibleType": 1, "MainIdno": 0, "ShowType": 0, "V1": "", "ordernum": 100, "Level": 0, "List": [] }] }] }];

        function getdata(dataItem) {
            var html = "";
            for (var i = 0, imax = dataItem.length; i < imax; i++) {
                if (dataItem[i].Idno == (queryString("m") || pufii)) {
                    for (var j = 0, jmax = dataItem[i].SubClass.length; j < jmax; j++) {
                        if (dataItem[i].SubClass[j].ShowType === 2 || dataItem[i].SubClass[j].ShowType === 3) {
                            html += "<a href=\"" + dataItem[i].SubClass[j].V1 + "\"";
                            if (dataItem[i].SubClass[j].ShowType === 3) {
                                html += " target=\"_blank\"";
                            }
                            html += ">" + dataItem[i].SubClass[j].Name;
                        } else {
                            html += "<a href=\"../../../../Common/m/Main/Shop/itemList.aspx?m=" + dataItem[i].Idno + "&p=" + dataItem[i].SubClass[j].Idno + "\">";
                        }
                        html += "<div class=\"row\">";
                        html += "<span>" + dataItem[i].SubClass[j].V1 + "</span>";
                        html += "<span class=\"flag\"></span>";
                        html += "</div>";
                        html += "</a>";
                    }
                }
            }
            $(".searchlink").after(html);

            (function() {
                $(".searchtext").attr("class", "searchtext");
                $(".searchtext").parent().removeAttr("class").css("box-shadow", "none");
                $(".searchbrand").parent().removeAttr("class").css("box-shadow", "none").parent().removeAttr("class");
            })(); //ui adjust

            (function() {
                $(".menubox").addClass("open");
                $(".menubox.open>.slide").css("margin-left", 0);
                (function() {
                    return new IScroll(".slide", {
                        mouseWheel: true,
                        click: true
                    });
                })();
                $(".menubox.open>.slide").removeAttr("style");
                $(".menubox").removeClass("open");
            })(); //menu iscroll apply

            /itemlist.aspx/i.test(location.href) && (function() {
                var navi = "";
                navi += "<div class=\"navi\">";
                navi += "<span class=\"flag\">&gt;&gt;</span>";
                navi += "<span>HOME</span>";
                navi += "<span class=\"flag\">&gt;&gt;</span>";
                navi += "<span>";
                for (var k = 0, kmax = dataItem.length; k < kmax; k++) {
                    if (dataItem[k].Idno == (queryString("m") || pufii)) {
                        if (queryString("p") === "") {
                            navi += dataItem[k].Name;
                        } else {
                            for (var l = 0, lmax = dataItem[k].SubClass.length; l < lmax; l++) {
                                if (dataItem[k].SubClass[l].Idno == queryString("p")) {
                                    navi += dataItem[k].SubClass[l].V1;
                                }
                            }
                        }
                    }
                }
                navi += "</span>";
                navi += "</div>";
                $(".ui-content").prepend(navi);
            })(); //add navi for itemlist

        }

        if (isLocal) {
            getdata(data);
        } else {
            $.getJSON("../../../../common/ajax/menucmd.ashx", function(dataItem) {
                getdata(dataItem);
            });
        }
    })(); //build menu data

    (function() {
        if (queryString("m") === danna.toString()) {
            $(".welcome>span").text("danna");
        }
        $(".danna>a").attr("href", $(".danna>a").attr("href") + "?m=" + danna);
    })(); //switch brand

/* 2015/5/12 會影響到 mobile itemList 預設版型 , 新增 header-mobile.css 取代 viewport　by WB
    (function() {
        $("meta[name='viewport']").attr("content", "width=720;");
    })(); //adjust
*/

    (function () {
        var $goTop = $(".goTop");
        if ($goTop.length === 0) {
            $("body").append("<div class=\"goTop\"></div>");
            $goTop = $(".goTop");
        }
        $goTop.click(function () {
            $("html,body").stop().animate({ "scrollTop": 0 }, "slow");
        });
        $(window).scroll(function () {
            var top = $(this).scrollTop();
            if (top > 0) {
                if ($goTop.is(":hidden")) {
                    $goTop.stop().fadeIn();
                }
            } else {
                if ($goTop.is(":visible")) {
                    $goTop.stop().fadeOut();
                }
            }
        });
    })(); //go top

    (function() {
        initShoppingCart();
    })(); //initilizing

});