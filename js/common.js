/*
* @Author: JMW
* @Date:   2017-03-27 16:43:07
* @Last Modified by:   JMW
* @Last Modified time: 2017-04-26 10:26:49
*/
jQuery(document).ready(function($) {
	//改变窗口大小浏览器自动刷新
	// window.onresize=function(){ 
 //        location.reload(); 
 //    }; 
	//logo切换
    var flag=0;
    $(".logo").click(function(){
        if(flag==1){
            $(".logo").find("img").attr("src","../images/logo2.png");
            flag=0;
        }else{
            $(".logo").find("img").attr("src","../images/logo1.png");
            flag=1;
        }
    });
	// 导航下拉
    $('#nav-bar .nav li').mouseenter(function(event) {
        $(this).addClass('on').siblings('li').removeClass('on');
        $(this).find('dl').stop().slideDown().parents('li').siblings('li').find('dl').stop().slideUp();
    }).mouseleave(function(event) {
        $(this).removeClass('on');
        $(this).find('dl').stop().slideUp(); 
    });
});