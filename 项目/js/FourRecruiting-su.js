/**
 * Created by ssm on 2017/4/22.
 */

$(function () {
    //公用头部
    // 网易顶部部分  鼠标移入背景变化
    $("#huTopbar").find(".bianhua").hover(function(){
        $(this).css({"backgroundColor":"#ccc","borderBottom":"3px solid #bc2e2e"})
    },function(){
        $(this).css({"backgroundColor":"#fbfbfb","borderBottom":""})
    })
//  顶部右边自动轮播字体
    var index = 0;
    setInterval(function() {
        if(index==2){
            $("#upDown").css({"top":0})
            index=-1
        }
        index++
        $("#upDown").animate({"top": -52*index}, 500)
    }, 1000)

    //content的分享链接部分鼠标移入，显示line_more
    $("#line_su .add").hover(function () {
        $(".line_su .line_more").css({display : "block"});
        $(".line_more").mouseover(function () {
            $(".line_su .line_more").css({display : "block"});
        })
    }, function () {
        $(".line_su .line_more").css({display : "none"});
        $(".line_more").mouseout(function () {
            $(".line_su .line_more").hide()});
    })

    //四大招募主要内容特效

    $("")



    //给share下所有的a标签注册鼠标移入移出事件、
    $(".share_su > a").hover(function () {
        $(this).find(".hide").show();
        $(this).find(".active").css({ "-webkit-animation":"wobble 2s"})
        },
        function () {
        $(this).find(".hide").hide();
        $(this).find(".active").css({ "-webkit-animation":""}) ;
        });
    //点击下载游戏按钮弹出下载窗
    $(".btn_su").on("click",function(){
        $(".pop_upSu").show();
    })
    //点击close关闭弹窗
    $(".pop_upSu .close").on("click", function () {
        $(".pop_upSu").hide();
    })
    //鼠标移入close突出
    $(".pop_upSu .close").hover(function () {
        $(this).css({width : 25 , height :25 , backgroundSize : "25px 25px" , zIndex:2,top: 10,right : 10, "box-shadow " : "0  0  2px 2px"});
    }, function () {
        $(this).css({width : 20, height :20 , backgroundSize : "20px 20px" , zIndex:2,top: 5,right : 5,"box-shadow " : ""});
    })

    //下载模块特效
    $(".dlTop_su .dlclose").on("click", function () {
        $(".dlcon_su").slideUp(600, function () {
            $(".downloan_su").animate({width : 0},600, function () {
                $(".dlTop_su .dlopen").show();
            });
        });

    })
    $(".dlTop_su .dlopen").on("click", function () {
        $(".dlTop_su .dlopen").hide();
        $(".downloan_su").animate({width : 167},600, function () {
            $(".dlcon_su").slideDown(600);
        });
    })
    //iOS、android绑定鼠标移入事件

    $(".dllist_su .iso_dl").hover(function(){
        $(this).css({width : 150 , height :51 , backgroundSize : "150px 51px" , zIndex:2});
    },function(){
        $(".dllist_su .iso_dl").css({width :147 , height :44 , backgroundSize : "147px 44px" , zIndex:0});
    })
    $(".dllist_su .android_dl").hover(function(){
        $(this).css({width : 150 , height :51 , backgroundSize : "150px 51px" , zIndex:2});
    },function(){
        $(".dllist_su .android_dl").css({width :147 , height :44 , backgroundSize : "147px 44px" , zIndex:0});
    })

})




