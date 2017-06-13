$(function() {
//浏览器加载完后,第一个英雄介绍弹出
    $(".heroIntroduceLh").children(".heroImgLh").hide();
    $(".heroIntroduceLh").children(".mainContentLh").children(".detailsLh").children(".affectNameLh").hide();
    $(".heroIntroduceLh").children(".mainContentLh").children(".detailsLh").children(".nameLh").hide();
    $(".heroIntroduceLh").children(".mainContentLh").children(".detailsLh").children(".nameLh").nextAll().hide();
    $(".hero1").children(".heroImgLh").show(800);
    console.log($(".hero1").children(".heroImgLh"));
    $(".hero1").children(".mainContentLh").children(".detailsLh").children(".affectNameLh").show(function (){
        $(".hero1").children(".mainContentLh").children(".detailsLh").children(".affectNameLh").animate({"fontSize": "50px"}, 800, function () {
            $(".hero1").children(".mainContentLh").children(".detailsLh").children(".nameLh").show(function () {
                $(".hero1").children(".mainContentLh").children(".detailsLh").children(".nameLh").animate({"marginTop": 15}, 500);
                $(".hero1").children(".mainContentLh").children(".detailsLh").children(".nameLh").nextAll().show();
                $(".hero1").children(".mainContentLh").children(".detailsLh").children(".nameLh").nextAll().animate({"marginTop": 0}, 500);
            })
        })
    });
//浏览器加载完后,默认第一个英雄头像被选中
    $(".heroPhotosLh").children().eq(0).css("display","none");
    $(".heroPhotosLh").children().eq(1).css("display","block");

//底部英雄头像左右按钮选中高亮
    $(".btnLeftLh").hover(function(){
        $(this).animate({"background-position":"-65px"},500);
    },function(){
        $(this).css({"background-position":0},500);
    });
    $(".btnRightLh").hover(function(){
        $(this).animate({"background-position":0});
    },function(){
        $(this).css("background-position","-65px");
    });
//点击左右按钮点击事件
    $(".btnRightLh").click(function(){
        $(".headPhotoLh").animate({left:-1062},2000);

    });
    $(".btnLeftLh").click(function(){
        $(".headPhotoLh").animate({left:0},2000);
    });

//底部英雄头像选中
    $(".heroPhotosLh").hover(function(){
        $(this).children("i").css("display","block");
    },function(){
        $(this).children("i").css("display","none");
    });
//选中头像高亮
    $("#obj li").click(function(){
        $("#obj li a").children("#heroPhotoLhOne").css("display","block");
        $("#obj li a").children("#heroPhotoLhTow").css("display","none");
        $(this).children().children("#heroPhotoLhOne").css("display","none");
        $(this).children().children("#heroPhotoLhTow").css("display","block");
//把其他英雄资料隐藏,当前显示
        var index = $(this).index();
        $(".heroIntroduceLh").css("display","none");
        $(".heroIntroduceLh").eq(index).css("display","block");
        $(".heroIntroduceLh").eq(index).animate({"display":"block"},500,function(){
            $(".heroImgLh").eq(index).show(800);
            $(".affectNameLh").eq(index).show(function(){
                $(".affectNameLh").eq(index).animate({"fontSize":"50px"},800,function(){
                    $(".nameLh").eq(index).show(function(){
                        $(".nameLh").eq(index).animate({"marginTop": 15},500)
                        $(".nameLh").eq(index).nextAll().show();
                        $(".nameLh").eq(index).nextAll().animate({"marginTop": 0},500);
                    });
            });
            });
        });

    //默认每个英雄的第一个技能被选中
        $(".skillLh").eq(index).children("li").eq(0).find("em").css("display","block");
        $(".skillLh").eq(index).children("li").eq(0).children("p").css("display","block");

    //鼠标移入技能em时,显示技能介绍p
        $(".skillLh").eq(index).children("li").on("mouseover",function(){
            $(".skillLh").eq(index).children("li").children("em").css("display","none");
            $(".skillLh").eq(index).children("li").children("p").css("display","none");
            $(this).find("em").css("display","block");
            $(this).children("p").css("display","block");
        })

        $(".heroIntroduceLh").children(".heroImgLh").hide();
        $(".heroIntroduceLh").children(".mainContentLh").children(".detailsLh").children(".affectNameLh").hide();
        $(".heroIntroduceLh").children(".mainContentLh").children(".detailsLh").children(".nameLh").hide();
        $(".heroIntroduceLh").children(".mainContentLh").children(".detailsLh").children(".nameLh").nextAll().hide();
    })
    $(".skillLh li").on("mouseover",function(){
        $(".skillLh em").css("display","none");
        $(".skillLh p").css("display","none");
        $(this).find("em").css("display","block");
        $(this).children("p").css("display","block");
    })
    $(".skillLh").children("li").eq(0).css("display","block");
    $(".skillLh").children("li").eq(0).children("p").css("display","block");
});

