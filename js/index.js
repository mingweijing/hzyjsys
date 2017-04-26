/*
* @Author: JMW
* @Date:   2017-04-12 11:44:49
* @Last Modified by:   hzyjsys
* @Last Modified time: 2017-04-26 14:08:04
*/

'use strict';
jQuery(document).ready(function($) {
    // window.onresize=function(){ 
    //     location.reload(); 
    // }; 
    //logo切换
    var flag=0;
    $(".logo").click(function(){
        if(flag==1){
            $(".logo").find("img").attr("src","images/logo2.png");
            flag=0;
        }else{
            $(".logo").find("img").attr("src","images/logo1.png");
            flag=1;
        }
    })
    //轮播图
    $(".slidershow_paging a").html("");
    $('#slideshow_2').cycle({
        fx: 'fade',
        speed:  2000,
        timeout: 1000,
        pager: '#slider .slideshow_paging',
        prev: '#slider .prev',
        next: '#slider .next',
        before: function(currSlideElement, nextSlideElement) {
            var data = $('.data', $(nextSlideElement)).html();
            $('#slider .slideshow_box').stop(false, false).animate({ bottom:'-150px'}, 400, function(){
                $('#slider .slideshow_box .data').html(data);
            });
            $('#slider .slideshow_box').delay(100).animate({ bottom:'-10px'}, 400);
        }
    });
    $('#slider').mouseenter(function(){
        $('#slideshow_2').cycle('pause');
        $('#slider .prev').stop(true, true).animate({ left:'20px'}, 200);
        $('#slider .next').stop(true, true).animate({ right:'20px'}, 200);
    }).mouseleave(function(){
        $('#slideshow_2').cycle('resume');
        $('#slider .prev').stop(true, true).animate({ left:'-60px'}, 200);
        $('#slider .next').stop(true, true).animate({ right:'-60px'}, 200);
    });
    $('a[href="#"]').click(function(event){
        event.preventDefault();
    });
});