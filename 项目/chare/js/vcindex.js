/**
 * Created by Administrator on 2017/4/20.
 */


//        �����ֲ�ͼ
//        window.onload = function(){
//            �������
//        }

$(function(){
    //          �����ֲ�ͼ
    //            ��ȡҪ���ص�Ԫ��
    //        ��ȡСԲ��
    var circle = $("#circle").children();
    //            ���Ұ�ť
    var  leftbtn = $("#leftbtn");
    var rightbtn = $("#rightbtn");
    //            ul
    var ul = $("#ul");
    var li = ul.children();
    //            console.log(li.length)
    var current = 0;

    //            console.log(ul)
    //            ���ҵ��,ͼƬȴ������һ��
    //            ���
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
    //            �ұ�
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

    //             ����ƶ���СԲ����,ͼƬȴ������Ӧ��
    circle.on("mouseover",function(){
        var index = circle.index(this);
        //                   ul.offset({left:index*1349*-1})
        ul.animate({left:-index*1349},100)
        circle.removeClass("bgred");
        circle.eq(index).addClass("bgred")
    });
    //            �Զ�����
    var timer = setInterval(clickrightHendle,2000);
    //            �����ͣ�ֲ�ֹͣ ����ƿ�����
    ul.hover(function(){
        clearInterval(timer)
    },function(){
        //                clearInterval(timer)
        timer = setInterval(clickrightHendle,2000)
    })
    //��Ʒ��ֵtable��
    //˼· ����ƶ���a ���汳��ͼƬ�ͻᴹֱ����54px,����ƿ��ͻָ�ԭ״,�������ͼƬ�ͻᴹֱ����54px,��ȴ�����Ʒ������ʾ����
    //��ȡҪ���ص�Ԫ��
    //��ȡ��������li��ǩ
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
    //            ����ƶ���������,ͼƬ���
    //            ��ȡ���е�li
    var imglis = producutimg.find("li");
//        var imglis =
//        console.log(imglis)
    imglis.hover(function() {
            $(this).find("img").animate({width:258.5,height:150,left:-10,top:-10,zIndex:2},20).css("boxShadow","#ccc 0 0 4px 3px")},
        function(){$(this).find("img").animate({width:249,height:140,left:0,top:0,zIndex:0},20).css("boxShadow","")} )

});


