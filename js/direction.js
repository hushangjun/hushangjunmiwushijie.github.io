/**
 * Created by Administrator on 2017-4-23.
 */



//侧边导航栏效果
$(function () {
    var sideNav = $(".side-nav").children().children();
    //sideNav.on("click",function(){
    //    sideNav.removeClass("current");
    //    $(this).addClass("current");
    //
    //});
    sideNav.eq(0).on("click", function () {
        $('html,body').stop().animate({scrollTop: '600px'}, 800)
    });

    sideNav.eq(1).on("click", function () {
        $('html,body').stop().animate({scrollTop: '911px'}, 800)
    });
    sideNav.eq(2).on("click", function () {
        $('html,body').stop().animate({scrollTop: '2100'}, 800)
    });
    sideNav.eq(3).on("click", function () {
        $('html,body').stop().animate({scrollTop: '2750px'}, 800)
    });
    sideNav.eq(5).on("click", function () {
        $('html,body').stop().animate({scrollTop: '0px'}, 800)
    });
    onclick = "js_method()";
    //滑动对应屏幕显示当前样式
    $(window).scroll(function () {
        if ($(window).scrollTop() < 830 && $(window).scrollTop() >= 600) {
            sideNav.removeClass("current");
            sideNav.eq(0).addClass("current");
        }
        if ($(window).scrollTop() < 2100 && $(window).scrollTop() >= 911) {
            sideNav.removeClass("current");
            sideNav.eq(1).addClass("current");
        }
        if ($(window).scrollTop() < 2750 && $(window).scrollTop() >= 2100) {
            sideNav.removeClass("current");
            sideNav.eq(2).addClass("current");
        }
        if ($(window).scrollTop() >= 2750) {
            sideNav.removeClass("current");
            sideNav.eq(3).addClass("current");
        }
    });

    //为了测高度
    $(window).scroll(function () {
        console.log($(window).scrollTop());
    });

});



//轮播图部分

$(function(){
    var titles = $(".introduce-con li");
    var big = $(".imgs-box li");
    var bigImgs = $(".imgs-box ul");
    var smallImgs = $(".option-con li");
    var imgWidth =$(".imgs-box").width();
    var target = 0;
    //console.log(titles);
    //console.log(bigImgs);
    //console.log(smallImgs);
    //console.log(imgWidth);
    //点击小图，显示对应的大图以及介绍
    smallImgs.on("click", function (){
        titles.hide();
        titles.eq($(this).index()).show();
        //获取目标值
        target = -$(this).index() * imgWidth;
        bigImgs.stop().animate({left:target});
        times = $(this).index();

    });

    //右按钮轮播
    var btns = $(".btn").children();
    var times = 0;
    btns.eq(1).on("click",function() {
        times++;
        if (big.length == times) {
            bigImgs.css("left", 0);
            //bigImgs[0].style.left = 0;
            times = 1;

        }
        if(times == 6){
            titles.hide();
            titles.eq(0).show();
        }
        else{
            titles.hide();
            titles.eq(times).show();
        }

        target = -imgWidth * times;
        bigImgs.stop().animate({left:target});

    });

    //左按钮轮播
    btns.eq(0).on("click",function() {
        times--;
        if (times == -1) {
            target = -imgWidth * (big.length -1);
            bigImgs.css("left", target);
            //bigImgs[0].style.left = -imgWidth * (big.length -1) +"px";
            times = big.length - 2;
        }
        target = -imgWidth * times;
        bigImgs.stop().animate({left:target});
        titles.hide();
        titles.eq(times).show();
    });


});





