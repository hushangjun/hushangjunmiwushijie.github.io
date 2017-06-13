$(function () {

    $("#huTopbar").find(".bianhua").hover(function(){
        $(this).css({"backgroundColor":"#ccc","borderBottom":"3px solid #bc2e2e"})
    },function(){
        $(this).css({"backgroundColor":"#fbfbfb","borderBottom":""})
    })
////                顶部右边自动轮播字体
    var index1 = 0;
    setInterval(function() {
        if(index1==2){
            $("#upDown").css({"top":0})
            index1=-1
        }
        index1++
        $("#upDown").animate({"top": -52*index1}, 500)
    }, 1000);
//
////            迷雾头部关注微信部分
    $("#weixin").hover(function(){
        $("#weixin .Huweixincode").css({"display":"block",})
    },function(){
        $("#weixin .Huweixincode").css({"display":"none"})
    });

//..........
    function $id(id) {
        return document.getElementById(id);
    }

    function animate1(element, target) {
        clearInterval(element.timer);
        element.timer = setInterval(hanshu, 100);
        function hanshu() {
            var currentTop = element.offsetTop;
            var step = 10;
            //currentTop += target > currentTop ? step : -step;
            currentTop +=step;
            element.style.top = currentTop + "px";
            if (currentTop == target ) {
                currentTop = 0;
            }
            element.style.top = currentTop + "px";
        }
    }
    animate1(($id("sweep")), 170);
    $id("gm_swee").onmouseover = function(){
        $id("gm_gong").style.display ="block";
    }
    $id("gm_gong").onmouseover = function(){
        $id("gm_gong").style.display ="block";
    }
    $id("gm_gong").onmouseout = function(){
        $id("gm_gong").style.display ="none";
    }
    var index = 0;
    var width = $(".gmp2_tight_center").width();
    //点击数字注册事件
    $(".gm_foc").on("click",function(){
         index = $(".gm_foc").index(this);
        var target = index*width*-1;
        $(".gm_ulpa").css("left",target);
        $(".gm_blue.gm_foc").removeClass("gm_blue");
        $(this).addClass("gm_blue");
        $("#gm_nextnone").css("display","block");
        $(".gm_disnone").css("visibility","visible");
        if(index == $(".gm_foc").length-1){
            $("#gm_nextnone").css("display","none");
        }
        if(index == 0){
            $(".gm_disnone").css("visibility","hidden");
        }
        $(".gm_indexye").html("第 "+parseInt(index+1) +" 页");
    });
    //点击下一页注册事件
     $(".gm_next").on("click",function(){
        //if(index == $(".gm_foc").length-1 ){
        //    index = $(".gm_foc").length-2;
        //    target = index*width*-1;
        //    $(".gm_ulpa").css("left",target);
        //}
        if(index == $(".gm_foc").length-2 ) {
                $("#gm_nextnone").css("display","none");
        }
        index ++;
        var target = index*width*-1;
        $(".gm_ulpa").css("left",target);
         $(".gm_disnone").css("visibility","visible");
        $(".gm_blue.gm_foc").removeClass("gm_blue");
        $(".gm_foc").eq(index).addClass("gm_blue");
        $(".gm_indexye").html("第 "+parseInt(index+1) +" 页");
    });
    //末页
    $(".gm_moye").on("click",function(){
        index = 4;
        target = index*width*-1;
        $(".gm_ulpa").css("left",target);
        $("#gm_nextnone").css("display","none");
        $(".gm_blue.gm_foc").removeClass("gm_blue");
        $(".gm_foc").eq(index).addClass("gm_blue");
    });
    //上一页点击事件
    $(".gm_pre").on("click",function(){
        if(index == 1 ){
            $(".gm_disnone").css("visibility","hidden");
        }
        index --;
        var target = index*width*-1;
        $(".gm_ulpa").css("left",target);
        $("#gm_nextnone").css("display","block");
        $(".gm_blue.gm_foc").removeClass("gm_blue");
        $(".gm_foc").eq(index).addClass("gm_blue");
        $(".gm_indexye").html("第 "+parseInt(index+1) +" 页");
        $(".gm_foc").eq(index).href = "javascrip：void(0);";
    });
    //首页
    $(".gm_souye").on("click",function(){
        index = 0;
        target = index*width*-1;
        $(".gm_ulpa").css("left",target);
        $(".gm_disnone").css("visibility","hidden");
        $(".gm_blue.gm_foc").removeClass("gm_blue");
        $(".gm_foc").eq(index).addClass("gm_blue");
    });
    //更多
    $(".gm_gengduo").on("mouseover",function(){
        $(".gmp2_tight_bottom_share_more").css("display","block");
        $(".gmp2_tight_bottom_share_more").on("mouseover",function(){
            $(".gmp2_tight_bottom_share_more").css("display","block");
        });
        $(".gmp2_tight_bottom_share_more").on("mouseout",function(){
            $(".gmp2_tight_bottom_share_more").css("display","none");
        });
    });
    //$(".gmp2_tight_bottom_share_more").on("mouseover",function(){
    //    $(".gmp2_tight_bottom_share_more").css("display","block");
    //});
    $(".gm_gengduo").on("mouseout",function(){
        $(".gmp2_tight_bottom_share_more").css("display","none");
    });
    //$(".gmp2_tight_bottom_share_more").on("mouseout",function(){
    //    $(".gmp2_tight_bottom_share_more").css("display","none");
    //});
});