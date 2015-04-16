var isLocal = /^file\:\/\/\//i.test(location.href);
var pufii = 20;
var danna = 19;
function initShoppingCart() {
	var cartlist = [{"MerNo":"DP7384","MerNo1":"P7384","MerName":"細肩帶無痕罩杯背心小可愛 4色 - 帕妃PUFII","Color":"藍","Size":"依賣場","Price":198,"Num":1,"PhotoSmPath":"http://photo.danna.com.tw/20150312/8898.gif","ColorPhotoPath":""},{"MerNo":"DP7384","MerNo1":"P7384","MerName":"細肩帶無痕罩杯背心小可愛 4色 - 帕妃PUFII","Color":"粉","Size":"依賣場","Price":198,"Num":1,"PhotoSmPath":"http://photo.danna.com.tw/20150312/8898.gif","ColorPhotoPath":""},{"MerNo":"DP7384","MerNo1":"P7384","MerName":"細肩帶無痕罩杯背心小可愛 4色 - 帕妃PUFII","Color":"白","Size":"依賣場","Price":198,"Num":1,"PhotoSmPath":"http://photo.danna.com.tw/20150312/8898.gif","ColorPhotoPath":""}];
	function getdata(cartlist) {
		var html = "";
		var count = 0;
		var total = 0;
		try {
			if (cartlist[0].MerName) {
				for (var i = 0; i < cartlist.length; i++) {
					html += "<table width=\"100%\">";
					html += "<tr>";
					html += "<td align=\"left\" width=\"140\"><img src=\"" + cartlist[i].PhotoSmPath + "\" width=\"120\" height=\"120\"></td>";
					html += "<td align=\"left\">";
					html += "<div>" + cartlist[i].MerName + "</div>";
					html += "<div>" + cartlist[i].Color + " , " + cartlist[i].Size + " x " + cartlist[i].Num +  "</div>";
					html += "<div>&nbsp;</div>";
					html += "<div>MT." + cartlist[i].Price + "</div>";
					html += "</td>";
					html += "</tr>";
					html += "</table>";
					count += cartlist[i].Num;
					total += cartlist[i].Num * cartlist[i].Price;
				}
				$(".cartbox>.list").html(html);
				$(".count").text(count);
				$(".total").text(total);

				$(".cartbox").show();
				$(".cartbox>.list").mCustomScrollbar({
				    autoDraggerLength: false,
				    mouseWheel: "auto",
				    scrollButtons: {
				        enable: false
				    }
				});
				$(".cartbox").hide();
			}
		} catch (e) {
		}
	}
	if (isLocal) {
		getdata(cartlist);
	} else {
		$.getJSON("../Common/CartList.ashx", function(cartlist) {
			getdata(cartlist);
		});
	}
}

$(function() {
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
		var data={"IsLogin":true};
		function getdata(data) {
			if (data !== null && data.IsLogin) {
				$(".inbox>.login").addClass("logout").attr("href","../common/loginout.aspx");
			}
		}
		if (isLocal) {
			getdata(data);
		} else {
			$.getJSON("../Common/LoginStatus.ashx",function(data){
				getdata(data);
			});
		}
	})(); //loginstatus

    (function() {
        if (QueryString("m") === danna.toString()) {
            $(".main>.logo").addClass("danna");
        }
    })(); //change logo

    (function() {
        var data = [{"Idno":20,"Name":"PUFII","MouseoverName":"","PhotoPath":"http://photo.danna.com.tw/2015web/left_c_01.png","MainPhoto":"http://xovera.verawang.com/uploads/Image/2013-10-10-Ded/WVW_image1.jpg","ShowType":0,"OrderNum":2,"V1":"","SubClass":[{"Idno":121,"Name":"http://photo.danna.com.tw/2015web/left_e_02.png","MouseoverName":"http://photo.danna.com.tw/2015web/left_c_02.png","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":122,"Name":"http://photo.danna.com.tw/2015web/left_e_03.png","MouseoverName":"http://photo.danna.com.tw/2015web/left_c_03.png","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":123,"Name":"http://photo.danna.com.tw/2015web/left_e_04.png","MouseoverName":"http://photo.danna.com.tw/2015web/left_c_04.png","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":124,"Name":"http://photo.danna.com.tw/2015web/left_e_05.png","MouseoverName":"http://photo.danna.com.tw/2015web/left_c_05.png","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":19,"Name":"DANNA","MouseoverName":"","PhotoPath":"http://photo.danna.com.tw/2015web/left_c_13.png","MainPhoto":"http://www.womangettingmarried.com/wp-content/uploads/2013/11/WVW_ebony_350x225.jpg","ShowType":0,"OrderNum":100,"V1":"","SubClass":[{"Idno":119,"Name":"http://photo.danna.com.tw/2015web/left_e_05.png","MouseoverName":"http://photo.danna.com.tw/2015web/left_c_05.png","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[{"Idno":120,"Name":"NEW","MouseoverName":"","TopIdno":119,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]}]}];
        function getdata(data) {
            var html = "";
            for (var i = 0, imax = data.length; i < imax; i++) {
                if (data[i].Idno == (QueryString("m") || pufii)) {
                    if (data[i].ShowType === 2 || data[i].ShowType === 3) {
                        html += "<a href=\"" + data[i].V1 + "\" text=\"" + data[i].MouseoverName + "\"";
                        if (data[i].ShowType === 3) {
                            html += " target=\"_blank\"";
                        }
                        html += ">" + data[i].Name + "</a>";
                    } else {
                        html += "<a href=\"../Shop/itemList.aspx?m=" + data[i].Idno + "\"><img src=\"" + data[i].PhotoPath + "\"></a>";
                    }
                    for (var j = 0, jmax = data[i].SubClass.length; j < jmax; j++) {
                        if (data[i].SubClass[j].ShowType === 2 || data[i].SubClass[j].ShowType === 3) {
                            html += "<a href=\"" + data[i].SubClass[j].V1 + "\" text=\"" + data[i].SubClass[j].MouseoverName + "\"";
                            if (data[i].SubClass[j].ShowType === 3) {
                                html += " target=\"_blank\"";
                            }
                            html += ">" + data[i].SubClass[j].Name + "</a>";
                        } else {
                            html += "<a href=\"../Shop/itemList.aspx?m=" + data[i].Idno + "&p=" + data[i].SubClass[j].Idno + "\"><img src=\"" + data[i].SubClass[j].Name + "\" hover=\"" + data[i].SubClass[j].MouseoverName + "\"></a>";
                        }
                    }
                }
            }
            $(".header>.search>.outbox>.menu>div").prepend(html).find("img[hover]").on("mouseenter mouseleave", function() {
                var $this = $(this);
                var hover = $this.attr("hover");
                $this.attr("hover", $this.attr("src"));
                $this.attr("src", hover);
            });
            $(".danna").attr("href", "?m=" + danna);
        }
        if (isLocal) {
            getdata(data);
        } else {
            $.getJSON("../common/ajax/menucmd.ashx", function(data) {
                getdata(data);
            });
        }
    })(); //load menu

	(function() {
		initShoppingCart();
	})(); //init    
});
