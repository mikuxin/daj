/**
 * Created by user on 2017/6/19.
 */

//   top-js


$(function () {
    // 1 顶部左边的导航栏
    var $lis =$(".top-nav>ul").children("li");
    //  当鼠标经过的时候，让li对应的div显示，让li的兄弟透明度变为0.4
    $lis.mouseenter(function () {
        $(this).children().css("display","block");
        $(this).siblings().css("opacity","0.4");
    });
    // 当鼠标离开的时候，让li对应的div隐藏，让li的兄弟的透明度恢复1
    $lis.mouseleave(function () {
        $(this).children().css("display","none");
        $(this).siblings().css("opacity","1");
    });


    // 2 搜索框的特效
    var index =0;
    //  点击搜索图标让input框显示，再次点击消失
    $(".top-search>i").click(function () {
        index++;
        if(index%2!=0){
            $(this).siblings("input").css("display","block").focus();
        }else{
            $(this).siblings("input").css("display","none").blur();
        }
    });
    // 当input框失去焦点的时候，让input框隐藏
    $(".top-search>input").blur(function () {
        $(this).hide();

        $("#pop").hide();
    })
    $(".subNav-l>p").mouseenter(function () {
        // $(".subNav-pic .fly-two").css("display","none");
        $(".subNav-pic .fly-first").show();
    });

   $(".subNav-l>ul>li").mouseenter(function () {
        var idx =$(this).index();
        $(".subNav-pic .fly-first").hide();
        $(".subNav-pic .fly-two ul li:eq("+idx+")").show().siblings().hide();
   })

    // 3 登录注册
    $(".top-user").children("i").click(function () {
        $(this).siblings(".all-lg").show();
        // $("body").css("background-color","rgba(255,255,255,.4)");
    });
    $(".login>.close").click(function () {
        $(this).parent().parent(".all-lg").hide();
    })

});



(function () {
    //  顶部表单验证

    function checkReg(element,reg) {
        element.onblur=function () {
            var content = this.value;
            if(reg.test(content)){
                this.nextElementSibling.innerHTML="正确";
                this.nextElementSibling.style.color="green";
            }else {
                this.nextElementSibling.innerHTML = "不正确";
                this.nextElementSibling.style.color = "red";
            }
        }
    }


    checkReg(document.getElementById("email"), /^\w+@\w+(\.\w+)+$/ );
    checkReg(document.getElementById("myPhone"), /^1[345678]\d{9}$/ );
    checkReg(document.getElementById("pw1"), /^\d{6,12}$/ );
    checkReg(document.getElementById("pw2"), /^\d{6,12}$/ );


//  顶部搜索

    var datas =["胡聪聪","胡聪聪真帅","胡聪聪爱开车","胡聪聪，永远的男神","姜婷婷女神",
        "姜婷婷最最最最最最美","姜婷婷最美乡村女教师","姜婷婷已经有男朋友了，你们这群凡人!!!",
        "黄瑞瑞不爱看车展","黄瑞瑞最爱晚上补课","黄瑞瑞是我的男神by我的同桌", "黄瑞瑞帅遍传智无敌手",
        "大疆无人机","大疆天下第一","666666的大疆无人机"];

    var textSearch=document.getElementById("textSearch");
    var box =document.getElementById("box");
    textSearch.onkeyup=function () {
        var pop =document.getElementById("pop");
        if(pop){
            box.removeChild(pop);
        }
        var newArr=[];
        var content = this.value;
        for(var i = 0; i < datas.length; i ++){
            if(datas[i].indexOf(content)!=-1){
                newArr.push(datas[i]);
            }
        }
        if(content == ""||content==0){
            return;
        }
        var div =document.createElement("div");
        div.id ="pop";
        box.appendChild(div);
        var ul =document.createElement("ul");
        div.appendChild(ul);
        for(var i = 0; i < newArr.length; i ++){
            var li =document.createElement("li");
            ul.appendChild(li);
            li.innerHTML=newArr[i];
        }

    };
}());