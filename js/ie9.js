/*
* @Author: JMW
* @Date:   2017-04-24 14:38:19
* @Last Modified by:   JMW
* @Last Modified time: 2017-04-24 14:38:23
*/

'use strict';
$(function(){
    var txtHolder=$("#txt").attr("placeholder");
    var pwdHolder=$("#pwdSpan").attr("placeholder");
    $("#txt").val(txtHolder).addClass("hint");
    $("#pwdSpan").val(pwdHolder).addClass("hint").show();
    $("#pwd").hide();
    $("#txt").focus(function(){
        if($(this).val() == txtHolder){
            $(this).val("").removeClass("hint");
        }
    }).blur(function(){
        if($(this).val().trim() === ""){
            $(this).val(txtHolder).addClass("hint");
        }
    });

    $("#pwdSpan").focus(function(){
        $(this).css("display", "none");
        $("#pwd").show().focus();
    })

    $("#pwd").blur(function(){
        if($("#pwd").val().trim() == ""){
            $(this).hide();
            $("#pwdSpan").show();
        }
    })

})