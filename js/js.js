
$(function (){
    //标语和扫码部分

    //喇叭转动
    var counter = 0;
    setInterval(function () {
        counter++;
        $(function () {
            $("#trumpet,#encir .circle").css("transform", "rotate(" + counter + "deg)");
        });
        if (counter == 360) {
            counter = 0;
        }
    }, 10);
    //安卓下载
    $("#andr").bind({"mouseover":function (){
        $(this).css("backgroundPosition","-300px -115px");
    },"mouseout":function (){
        $(this).css("backgroundPosition","-300px -173px");
    }});
    //苹果下载
    $("#apple").bind({"mouseover":function (){
        $(this).css("backgroundPosition","1px -414px");
    },"mouseout":function (){
        $(this).css("backgroundPosition","-225px -357px");
    }});
    //公测大礼包
    $("#package").bind({"mouseover":function (){
        $(this).css("top","5px");
    },"mouseout":function (){
        $(this).css("top","10px");
    }});

    //公测和新闻部分轮播图
    $("#bIndex span").mouseover(function(){
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
        $("#mainSlider").animate({left:''+$(this).index()*-1*686+''});
    });

    //新闻部分
    $("#mainNew li").click(function(){
        $("#newList ul").removeClass("show").css("opacity","0.2");
        $("#newList ul").eq($(this).index(".iList")).addClass("show").animate({opacity:'1'},800);
    });
    //入口部分
    $("#newsEntr i").hover(function (){
        $(this).animate({opacity:'0.5'}).animate({opacity:'1'});
    },function (){
        //$(this).animate({opacity:'0.5'}).animate({opacity:'1'});
    });

    //游戏资料部分
    var slogObj = [{
        bgPosition:"-190px -300px",
        bgImages:"url(images/ts1.png)"
    }, {
        bgPosition:"-3px -300px",
        bgImages:"url(images/ts2.png)"
    }, {
        bgPosition:"0 -358px",
        bgImages:"url(images/ts3.png)"
    }, {
        bgPosition:"-293px -232px",
        bgImages:"url(images/ts4.png)"
    }];
    $("#slidCir i").click(function(){
        $(this).siblings().removeClass("on");
        $("#abgaPic img").css("opacity","0");
        $(this).addClass("on");
        $("#abgaPic img").eq($(this).index()).animate({opacity:'1'},800);
        $("#slidSlo i").eq(0).animate({left:'-150',opacity:'0'}).css("backgroundPosition",slogObj[$(this).index()].bgPosition).animate({left:'0',opacity:'1'});
        $("#slidPic i").eq(0).animate({right:'-200',opacity:'0'}).css("backgroundImage",slogObj[$(this).index()].bgImages).animate({right:'0',opacity:'1'});
    });
    //四大热爱者联盟部分
    $("#unList li").hover(function (){
        $("#unList img").eq($(this).index()).css("display", "block").animate({width: '53', height: '61', left: '11', top: '3'});
    },function (){
        $("#unList img").eq($(this).index()).animate({width: '20', height: '20', left: '24', top: '24'},function (){$(this).css("display", "none")});
    });
    //点击箭头进行轮播
    autoSlide();
    //左右轮播按钮
    $("#uSlidI i").hover(function (){
        if($(this).prop("className") == "prev onPrev"){
            $(this).removeClass("onPrev");
        }else{
            $(this).removeClass("onNext");
        }
    },function (){
        if($(this).prop("className") == "prev"){
            console.log("a");
            $(this).addClass(" onPrev");
        }else{
            $(this).addClass(" onNext");
        }
    });
    //设定各张轮播大图位置
    var uSliderObj = [{top:0}, {top:"-142px"}, {top:"-66px"}, {top:"-45px"},  {top:"0"}];
    $("#uSlider .big img").each(function (index,ele){
        if(index == 5){
            index = 4;
        }
        $(ele).css("top",uSliderObj[index].top);
    });

    //精彩影音部分
    var timer = null;
    $("#videoList li").hover(function (){
        var xz = 0;
        $(this).children().children("i").css("backgroundPosition","-152px -86px");
        $(this).children().children("i").siblings().stop().animate({width:'180',height:'180',left:'-7',top:'-7'});
        var that = this;
        clearInterval(timer);
        timer = setInterval(function (){
            xz+=5;
            $(that).children().children("i").css("transform", "rotate(" + xz + "deg)");
            if(xz == 360){
                clearInterval(timer);
            }
        }, 1);
    },function (){
        $(this).children().children("i").css("backgroundPosition","-416px -300px");
        $(this).children().children("i").siblings().stop().animate({width:'165',height:'165',left:'0',top:'0'});
    });

    <!--角色介绍部分-->
    //效果一,鼠标移入更多闪烁
    $("#more").hover(function(){
        $(this).css({"background-image":"url(images/part3-more0.jpg)","box-shadow":"0px 0px 10px 10px #fff"});
    },function(){
        $(this).css({"background-image":"url(images/part3-more.jpg)","box-shadow":""});
    });

    //二小图的鼠标移入事件
    //事件3
    var flag = true;
    var sma = $("#smallImg>ul>li");
    sma.hover(function(){
        flag = true;
        var index = $(this).index();
//                   背景图片换
        $(this).children("i").css({"background":"url(images/part3-s"+(index+1)+"0.png) no-repeat",top:"-23px",height:"143px"});
    },function(){
        var index = $(this).index();
        if(flag){
            $(this).children("i").css({"background":"url(images/part3-s"+(index+1)+".jpg) no-repeat",top:0,height:"114px"});
        }
    });

    var  mine  =$("#mine").children();// 每个介绍
    sma.on("click",function(){
        flag = false;
        var index = $(this).index();
        //点击就让对应的出现
        for(var i =0;i < mine.length-2;i++){
            mine.eq(i).css("display","none");
            sma.eq(i).children("i").css({"background":"url(images/part3-s"+(i+1)+".jpg) no-repeat",top:0,height:"114px"});
        }
        mine.eq(index).css("display","block");
        //让字变色
        sma.children("span").removeClass("current");
        $(this).children("span").addClass("current");
        sma.eq(index).children("i").css({"background":"url(images/part3-s"+(index+1)+"0.png) no-repeat",top:"-23px",height:"143px"});

    });
    //左右箭头的事件
    var ind = 0;
    $("#arrowLeft").on("click",function(){
        if(ind == 0){
            ind = mine.length-2;
        }
        ind--;
        getT();

    });
    $("#arrowRight").on("click",function(){
        if(ind == mine.length-3){
            ind = -1;
        }
        ind++;
        getT();
    });

    function getT(){
        for(var i =0;i < mine.length-2;i++){
            mine.eq(i).css("display","none");
            sma.eq(i).children("i").css({"background":"url(../images/part3-s"+(i+1)+".jpg) no-repeat",top:0,height:"114px"});
        }
        mine.eq(ind).css("display","block");
        //让字变色
        sma.children("span").removeClass("current");
        sma.eq(ind).children("span").addClass("current");
        sma.eq(ind).children("i").css({"background":"url(../images/part3-s"+(ind+1)+"0.png) no-repeat",top:"-23px",height:"143px"});
    }
    //尾部
    //            网易顶部部分  鼠标移入背景变化
    $("#huTopbar").find(".bianhua").hover(function(){
        $(this).css({"backgroundColor":"#ccc","borderBottom":"3px solid #bc2e2e"})
    },function(){
        $(this).css({"backgroundColor":"#fbfbfb","borderBottom":""})
    })
//                顶部右边自动轮播字体
    var index = 0;
    setInterval(function() {
        if(index==2){
            $("#upDown").css({"top":0})
            index=-1
        }
        index++
        $("#upDown").animate({"top": -52*index}, 500)
        console.log(index)
    }, 1000)


//            迷雾头部关注微信部分
//    $("#weixin").hover(function(){
//        $("#weixin .Huweixincode").css({"display":"block",})
//    },function(){
//        $("#weixin .Huweixincode").css({"display":"none"})
//    });
});

//四大热爱者联盟 自动轮播函数
function autoSlide(){
    var count1 = -873;
    var count2 = 0;
    timer = setInterval(function (){
        if(count1 == -6293){
            $("#uSlider ul").css("margin-left","-873px");
            count1 = -873;
        }
        count1 -= 1355;
        $("#uSlider ul").animate({marginLeft:count1},500);
        count2++;
    },2000);
}






