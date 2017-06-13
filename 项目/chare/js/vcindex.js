/**
 * Created by Administrator on 2017/4/20.
 */


//        首屏轮播图
//        window.onload = function(){
//            点击左右
//        }

$(function(){
    //          首屏轮播图
    //            获取要超控的元素
    //        获取小圆点
    var circle = $("#circle").children();
    //            左右按钮
    var  leftbtn = $("#leftbtn");
    var rightbtn = $("#rightbtn");
    //            ul
    var ul = $("#ul");
    var li = ul.children();
    //            console.log(li.length)
    var current = 0;

    //            console.log(ul)
    //            左右点击,图片却换到下一张
    //            左边
    leftbtn.on('click',function(){

        if(current==0){
            current = li.length-1
            ul.css("left",-current*1349)
        };
        current--;
        ul.animate({left:-current*1349},100)
        circle.removeClass("bgred");
        var index = current;
        circle.eq(index).addClass("bgred")
    })
    //            右边
    function clickrightHendle(){
        if(current>=li.length-1){
            current = 0;
            ul.css("left",0);
        }
        current++;
        ul.animate({left:-current*1349},100)
        circle.removeClass("bgred");
        var index = current;
        if(current==li.length-1){
            index = 0;
        }
        circle.eq(index).addClass("bgred")
    }
    rightbtn.on("click",clickrightHendle);

    //             鼠标移动到小圆点上,图片却换到相应的
    circle.on("mouseover",function(){
        var index = circle.index(this);
        //                   ul.offset({left:index*1349*-1})
        ul.animate({left:-index*1349},100)
        circle.removeClass("bgred");
        circle.eq(index).addClass("bgred")
    });
    //            自动播放
    var timer = setInterval(clickrightHendle,2000);
    //            鼠标悬停轮播停止 鼠标移开继续
    ul.hover(function(){
        clearInterval(timer)
    },function(){
        //                clearInterval(timer)
        timer = setInterval(clickrightHendle,2000)
    })
    //产品充值table栏
    //思路 鼠标移动到a 上面背景图片就会垂直上移54px,鼠标移开就恢复原状,点击背景图片就会垂直上移54px,并却下面产品栏会显示出来
    //获取要超控的元素
    //获取导航栏的li标签
    var lis = $("#producutNav").children();
    var producutimg = $("#producutimg").children();

    lis.on("click",function(){
        //
        lis.children().css("top",0)
        $(this).children().css({top:"-52px"})

        producutimg.removeClass("pud")
        var index = lis.index(this);
        $(producutimg[index]).addClass("pud")
    });
    //            鼠标移动到里上面,图片变大
    //            获取所有的li
    var imglis = producutimg.find("li");
//        var imglis =
//        console.log(imglis)
    imglis.hover(function() {
            $(this).find("img").animate({width:258.5,height:150,left:-10,top:-10,zIndex:2},20).css("boxShadow","#ccc 0 0 4px 3px")},
        function(){$(this).find("img").animate({width:249,height:140,left:0,top:0,zIndex:0},20).css("boxShadow","")} )

});


