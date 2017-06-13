/**
 * Created by Sariel on 2017/4/22 0022.
 */

$(function () {
    /**
     * 导航栏缓动动画
     */
    $(".conBtn").hover(function () {
        $(".conBtn").stop().animate(
            {
                width: 125,
                opacity: 1
                //
            }, 300)
        //缓动函数
    }, function () {
        $(".conBtn").stop().animate({
            width: 50,
            opacity: 0.3
        }, 300)
        $(".ck_btn").css({
            backgroundImage: "url('../images/swiperBtn.png')"
        })
    })
    for (var i = 0; i < $(".ck_btn").length; i++) {
        var index = $(".ck_btn").eq(i).index();
    }
    /**
     *
     * scrollTop动画缓动 切换
     */
    var windows=$("window").scrollTop();
    console.log(windows);
    var current=$("body").scrollTop();
    console.log(current);
    $(".ck_btn").on("click",function()
    {
        var index=$(this).index();
        console.log($("body").scrollTop());

        var target=$("body").scrollTop();

    });

    //加点小特效
    //底部特效
    var hero = $(".hero");
    var bgs = $(".bck").next();
    var heros = bgs.next();
    hero.hover(function () {

        var index = $(this).index();
        bgs.eq(index).removeClass("ck_down");
        bgs.eq(index).addClass("font");

        heros.eq(index).removeClass("ck_down");
        heros.eq(index).addClass("person" + index);
    }, function () {
        bgs.addClass("ck_down");
        heros.addClass("ck_down");
    });


    $(".btn2").on("click", function () {
        //scrollTop方法去控制滚动的高度
        //console.log($("html.body").scrollTop);
        $("html.body").animate(function(){
            $("html.body").scrollTop();
        },1000)

    });
    //隐藏或者显示herobox
    $(".ck_ul_hero a").on("click",function(){
        $(".ck_mask").show();
    });
    $(".close").on("click",function(){
        $(".ck_mask").hide();
    });
    //$(".ck_rs").hover(function()
    //{
    //    var img=$(this).children(".ck_ks1");
    //    img.hide();
    //    $(".ck_k").show();
    //
    //},function(){
    //    var img=$(this).children(".ck_ks1");
    //    img.show();
    //    $(".ck_k").hide();
    //})
    //原谅我,实在没思路做出来,只能用c3特效加上jq
    //$(".ck_r1").hover(function()
    //{
    //    var img=$(".ck_r1").children();
    //    img.hide();
    //    $(".ck_k1").show();
    //
    //},function()
    //{
    //    var img=$(".ck_r1").children();
    //    img.show();
    //    $(".ck_k1").hide();
    //
    //})
    //$(".ck_r2").hover(function()
    //{
    //    var img=$(".ck_r2").children();
    //    img.hide();
    //    $(".ck_k2").show();
    //
    //
    //},function()
    //{
    //    var img=$(".ck_r2").children();
    //    img.show();
    //    $(".ck_k2").hide();
    //
    //})
    //$(".ck_r3").hover(function()
    //{
    //    var img=$(".ck_r3").children();
    //    img.hide();
    //    $(".ck_k3").show();
    //},function()
    //{
    //    var img=$(".ck_r3").children();
    //    img.show();
    //    $(".ck_k3").hide();
    //})
    //$(".ck_r4").hover(function()
    //{
    //    var img=$(".ck_r4").children();
    //    img.hide();
    //    $(".ck_k4").show();
    //},function()
    //{
    //    var img=$(".ck_r4").children();
    //    img.show();
    //    $(".ck_k4").hide();
    //})


//    顶部超大轮播图

    $(".ck_rs").on("mouseover",function(){
        var index=$(this).index();
        var cssof=index+1;

        $("#ck_pics_Run").stop().animate({
            left:-850*index,
            opacity:1
        });
        $(".ck_rs").children("img").show();
        $(this).children("img").hide();
        $(".ck_rs").children("span").hide();
        $(this).children(".ck_k"+cssof).show();
    });

    //底部微型轮播
    //直接定步长
    var count=-890;
    var nextp=$(".next");
    nextp.on("click",function() {

        if (count <= -6320) {
            count = 0;

            //$("#ck_ul").css("left",count);
            $("#ck_ul").animate({left: count}, 500);
        }
        count -= 890;
        $("#ck_ul").animate({left: count}, 500);

        console.log(count);

    });
    var prev=$(".prev")
    prev.on("click",function() {

        if (count == 0 ) {
            count = -6230+890;
            console.log(count);
            $("#ck_ul").css("left",count);
        }

        count += 890;

        $("#ck_ul").animate({left: count}, 500);
        console.log(count);


        //if (count <) {
        //    count = 0;
        //    console.log(count);
        //}
    });

    //var index
    //轮播图特效系列
    var lis=$("#ck_ul li");

    var prev=$(".prev");

    var nexts=$(".next");

    var ck_ul=$("#ck_ul");

    var currentidnex=0;
    prev.on("click",function(){
        console.log(lis.eq(lis.index()));
    });
    nexts.on("click",function(){

    });
    function herobox(){

    }
});