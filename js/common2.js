/*
* @Author: JMW
* @Date:   2017-04-25 17:51:02
* @Last Modified by:   JMW
* @Last Modified time: 2017-04-26 10:26:05
*/
$(document).ready(function(){
	//左侧导航栏跟随
    var explorer =navigator.userAgent;
    if (explorer.indexOf("MSIE 9.0") >= 0||explorer.indexOf("rv:11.0")>=0||explorer.indexOf("MSIE 10.0") >= 0) {
        var l=$(".left-nav").offset().left;
        console.log(l);
        $(window).scroll( function() {
            var m =$(document).scrollTop();
            if(m>570&&$(window).width()>=1200){
                $(".left-nav").css({"position":"fixed","top":"50px","left":l+"px","marginLeft":"0"});
            }else if(m>570&&$(window).width()<1200&&l<=0){
                $(".left-nav").css({"position":"fixed","top":"50px","left":"0"});
            }else{
                $(".left-nav").css({"position":"absolute","top":"50px","left":"0"});
            }
        });
    }else{
        $(window).scroll( function() {
            var m =$(document).scrollTop();
            if(m>570){
                $(".left-nav").css("top",(m-480)+"px");
            }else{
                $(".left-nav").css("top","50px");
            }
        });
    }   
    if(explorer.indexOf("MSIE 8.0") >= 0){
    	$(".culture-con").find("iframe").attr("src","../timeline2/index.html");
    }
})