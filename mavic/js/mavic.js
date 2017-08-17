/**
 * Created by user on 2017/6/22.
 */

function animate(element,obj,fn) {
    clearInterval(element.timer);
    element.timer= setInterval(function () {
        var flag=true;
        for(var k in obj){
            var attr =k;
            var target =obj[k];

            //对opacity做特殊处理即可
            //1. parseInt改成parseFloat (获取到的透明度是个小数)
            //2. 把leader和target都放大了1000倍。 算出来的step也是放大了1000倍
            //3. 设置回去的时候，让leader/1000   把px给去掉了
            if(attr == "opacity"){
                var leader = getStyle(element,attr);
                leader =parseFloat(leader)||0;
                leader =leader*1000;
                target = target*1000;

                var step = (target - leader) / 10;
                step =step>0?Math.ceil(step):Math.floor(step);
                leader += step;

                element.style[attr] = leader/1000;
                if(leader!=target){
                    flag = false;
                }
            }else if(attr == "zIndex"){
                //层级不需要动画，直接设置即可。
                element.style.zIndex = target;
            }else{
                var leader = getStyle(element,attr);
                leader =parseInt(leader)||0;

                var step = (target - leader) / 10;
                step =step>0?Math.ceil(step):Math.floor(step);
                leader += step;

                element.style[attr] = leader + "px";
                if(leader!=target){
                    flag = false;
                }
            }
        }
        if(flag){
            clearInterval(element.timer);
            fn && fn();
        }
    }, 15)
}

function getStyle(element,attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(element,null)[attr];
    }else{
        return element.currentStyle[attr];
    }
}





var datas =[
    {
        "width": 256,
        "height": 160,
        "left": -40,
        "top": 30,
        "opacity": 0,
        "zIndex": 0
    },
    {
        "width": 256,
        "height": 160,
        "left": -40,
        "top": 30,
        "opacity": 0,
        "zIndex": 0
    },
    {
        "width": 256,
        "height": 160,
        "left": -40,
        "top": 30,
        "opacity": 0.5,
        "zIndex": 1
    },
    {
        "width": 320,
        "height": 200,
        "left": 0,
        "top": 0,
        "opacity": 1,
        "zIndex": 2
    },
    {
        "width": 256,
        "height": 160,
        "left": 110,
        "top": 30,
        "opacity": 0.5,
        "zIndex": 0
    },
    {
        "width": 256,
        "height": 160,
        "left": -40,
        "top": 30,
        "opacity": 0,
        "zIndex": 0
    },
    {
        "width": 256,
        "height": 160,
        "left": -40,
        "top": 30,
        "opacity": 0,
        "zIndex": 0
    }
];
var wrap =document.getElementById("wrap");
var slide =document.getElementById("slide");
var lis = slide.getElementsByTagName("li");
var arrow =document.getElementById("arrow");
var arrLeft =document.getElementById("arrLeft");
var arrRight =document.getElementById("arrRight");

for(var i = 0; i < lis.length; i ++){
    animate(lis[i],datas[i]);
}
slide.onmouseover=function () {
    animate(arrow,{opacity:1});
};
slide.onmouseout=function () {
    animate(arrow,{opacity:0});
};

//  给箭头注册点击事件，让最后一张图切换到第一张，
var lock =true;
arrRight.onclick=function () {
    if(lock){
        lock = false;
        datas.unshift(datas.pop());
        for(var i = 0; i < lis.length; i ++){
            animate(lis[i],datas[i],function () {
                lock = true;
            });
        }
    }

};
arrLeft.onclick =function () {
    if(lock){
        lock=false;
        datas.push(datas.shift());
        for(var i = 0; i < lis.length; i ++){
            animate(lis[i],datas[i],function(){
                lock =true;
            });
        }
    }

};





//  固定导航栏
$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop()>$(".banner").height()+$(".top").height()){
            $(".menu").addClass("fixed");
            $(".main-top").css("marginTop",60);
        }else{
            $(".menu").removeClass("fixed");
            $(".main-top").css("marginTop",0);
        }
    })


});

//  第二屏  轮播图

$(function () {

    var $li = $(".slider li");
    var arrowLeft = $(".arrow-left");
    var arrowRight = $(".arrow-right");


    var index = 0;//现在下标为0的那个li显示的
    arrowRight.click(function () {

        index++;
        if(index == $li.length){
            index = 0;
        }
        //让下一个li淡入，其他li淡出
        $li.eq(index).fadeIn().siblings().fadeOut();

    });


    arrowLeft.click(function () {

        index--;
        if(index == -1){
            index = $li.length - 1;
        }
        //让下一个li淡入，其他li淡出
        $li.eq(index).fadeIn().siblings().fadeOut();
    })


});
