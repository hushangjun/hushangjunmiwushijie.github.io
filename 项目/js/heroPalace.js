$(function() {
//������������,��һ��Ӣ�۽��ܵ���
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
//������������,Ĭ�ϵ�һ��Ӣ��ͷ��ѡ��
    $(".heroPhotosLh").children().eq(0).css("display","none");
    $(".heroPhotosLh").children().eq(1).css("display","block");

//�ײ�Ӣ��ͷ�����Ұ�ťѡ�и���
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
//������Ұ�ť����¼�
    $(".btnRightLh").click(function(){
        $(".headPhotoLh").animate({left:-1062},2000);

    });
    $(".btnLeftLh").click(function(){
        $(".headPhotoLh").animate({left:0},2000);
    });

//�ײ�Ӣ��ͷ��ѡ��
    $(".heroPhotosLh").hover(function(){
        $(this).children("i").css("display","block");
    },function(){
        $(this).children("i").css("display","none");
    });
//ѡ��ͷ�����
    $("#obj li").click(function(){
        $("#obj li a").children("#heroPhotoLhOne").css("display","block");
        $("#obj li a").children("#heroPhotoLhTow").css("display","none");
        $(this).children().children("#heroPhotoLhOne").css("display","none");
        $(this).children().children("#heroPhotoLhTow").css("display","block");
//������Ӣ����������,��ǰ��ʾ
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

    //Ĭ��ÿ��Ӣ�۵ĵ�һ�����ܱ�ѡ��
        $(".skillLh").eq(index).children("li").eq(0).find("em").css("display","block");
        $(".skillLh").eq(index).children("li").eq(0).children("p").css("display","block");

    //������뼼��emʱ,��ʾ���ܽ���p
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

