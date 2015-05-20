$(function() {
    var isLocal = /^file\:\/\/\//i.test(location.href);
    var data = [{"name":"EE","value":[{"img":"http://rico.tw.rakuten-static.com/260X260/573-43963-260.jpg","url":"../Shop/itemDetail.aspx?mNo1=AC02&m=20&p=121","txt":"TEST商品2","p":0,"op":null},{"img":"http://pic.vsuch.com/2013/0328/20130328055336866.jpg","url":"../Shop/itemDetail.aspx?mNo1=A13156&m=15&p=91","txt":"襯衫-直條紋撞色口袋限定款","p":980,"op":199},{"img":"http://pic.vsuch.com/2013/0328/20130328055336866.jpg","url":"../Shop/itemDetail.aspx?mNo1=A13163&m=15&p=91","txt":"襯衫-古著水洗刷色牛仔襯衫","p":980,"op":null},{"img":"http://rico.tw.rakuten-static.com/260X260/573-43963-260.jpg","url":"../Shop/itemDetail.aspx?mNo1=AC01&m=20&p=121","txt":"MIT 蝙蝠俠熱感應短T‧情侶款(男)","p":480,"op":null},{"img":"http://rico.tw.rakuten-static.com/260X260/573-43963-260.jpg","url":"../Shop/itemDetail.aspx?mNo1=AC05&m=20&p=121","txt":"TEST商品5","p":100,"op":null},{"img":"http://rico.tw.rakuten-static.com/260X260/573-43963-260.jpg","url":"../Shop/itemDetail.aspx?mNo1=AC04&m=20&p=121","txt":"TEST商品4","p":0,"op":null},{"img":"http://rico.tw.rakuten-static.com/260X260/573-43963-260.jpg","url":"../Shop/itemDetail.aspx?mNo1=AC03&m=20&p=121","txt":"TEST商品3","p":100,"op":null}]},{"name":"GG","value":[{"img":"http://rico.tw.rakuten-static.com/260X260/573-43963-260.jpg","url":"../Shop/itemDetail.aspx?mNo1=AC03&m=20&p=121","txt":"TEST商品3","p":100,"op":null}]},{"name":"HH","value":[{"img":"http://rico.tw.rakuten-static.com/260X260/573-43963-260.jpg","url":"../Shop/itemDetail.aspx?mNo1=AC01&m=20&p=121","txt":"MIT 蝙蝠俠熱感應短T‧情侶款(男)","p":480,"op":null}]}];

    function getData(data) {
        var html = "";
        for (var i = 0, imax = data.length; i < imax; i++) {
            if (data[i].name !== "") {
                html += "<div class=\"itemLabel\"><li>" + data[i].name + "</li></div>";
            }
            for (var j = 0, jmax = data[i].value.length; j < jmax; j++) {
                html += "<div class=\"itemListDiv\">";
                html += "  <div class=\"ilImg1\">";
                html += "    <center>";
                html += "      <a href=\"" + data[i].value[j].url + "\"><img src=\"" + data[i].value[j].img + "\" border=\"0\"></a>";
                html += "    </center>";
                html += "  </div>";
                html += "  <div class=\"itemListMerName\"><a href=\"itemDetail.aspx?mNo1=AC01&amp;m=20&amp;p=121\">" + data[i].value[j].txt + "</a></div>";
                if (data[i].value[j].op !== null) {
                    html += "  <span class=\"itemListOrigMoney\" style=\"text-decoration: line-through;\"><span class=\"itemPrice\">" + data[i].value[j].op + "</span></span>";
                }
                html += "<span class=\"itemListMoney itemHasOrig\">NT.<span class=\"itemPrice\">" + data[i].value[j].p + "</span></span>";
                html += "</div>";
            }
        }
        $("#ctl00_ContentPlaceHolder1_ilItems").html(html);
    }
    if (isLocal) {
        getData(data);
    } else {
        $.getJSON("../shop/customuc/c34pufii201404/data/?type=newaction", function(data) {
            getData(data);
        });
    }
});
