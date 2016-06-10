

function $(id){
    return typeof id==='string'?document.getElementById(id):id;
}

var nav=document.getElementsByClassName("nav_bg")[0];
var content2=document.getElementsByClassName("content-2_bg")[0];
var movespeed=50;
var  time3;







window.onload=tab;
function tab(){
window.onmousewheel = document.onmousewheel =  scrollFunc;  


  // 初始化引索与定时器
  var index=0;
  var timer=null;
  var timer2=null;

  // 获取所要切换的内容
  var tabs=$('tabs');
  var lis=$('tabsul').getElementsByTagName('li');
  var divs=$('tabss').getElementsByTagName('div');

  // 遍历绑定事件
  for(var i=0;i<lis.length;i++){
    lis[i].id=i;

    lis[i].onmouseout=function(){  
      timer=setInterval(autoPlay,3500); 
      clearTimeout(timer2);
   
    }
    lis[i].onmouseover=function(){
      clearInterval(timer);
      clearTimeout(timer2);
      var that=this; // 用that这个变量来引用当前滑过的li
      timer2=setTimeout(function(){ changeOption(that.id)},350);
    }


// 在浏览图片是就不要跳了
    divs[i].onmouseover=function(){
      clearInterval(timer);
    }

    divs[i].onmouseout=function(){  
      timer=setInterval(autoPlay,3500);    
    }

  }
  


//优化定时器防止开过多的定时器
  if(timer){
    clearInterval(timer);
    timer=null;
  } 

  // 添加定时器
  timer=setInterval(autoPlay,3500);

  function autoPlay(){
      index++;
      if(index>=lis.length){
         index=0;
      }
      changeOption(index);
  }


  function changeOption(curIndex){
    for(var j=0;j<lis.length;j++){
       lis[j].className='';
   if (index>curIndex) {
       divs[j].className='hider';
    }else {
       divs[j].className='hidel';
      
    }

    }
    // 切换
    lis[curIndex].className='on';
    if (index>curIndex) {
      divs[curIndex].className='chuxianl';
    }else {
      divs[curIndex].className='chuxianr';
      
    }
    index=curIndex;
  }
}


   var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件 

              if (e.wheelDelta > 0) { //当滑轮向上滚动时
                  if (window.scrollY>=(content2.offsetTop+movespeed)) { 
                  window.onmousewheel = document.onmousewheel = null;  
                  time3=setInterval(function () {
                          var a=window.scrollY;
                          GoGo(-movespeed);
                          if (window.scrollY<=(content2.offsetTop+movespeed)||(a==window.scrollY)) {
                            clearInterval(time3);
                            window.onmousewheel = document.onmousewheel = scrollFunc;  
                          }
                    }, 1);
                    }else {
                      window.onmousewheel = document.onmousewheel = null;  
                          time3=setInterval(function () {
                          var a=window.scrollY;
                          GoGo(-movespeed);
                          if (window.scrollY<=nav.offsetTop||(a==window.scrollY)) {
                            clearInterval(time3);
                            window.onmousewheel = document.onmousewheel = scrollFunc;  
                          }
                    }, 1);  
                    } 

              }else { //当滑轮向下滚动时
                  if (window.scrollY<=content2.offsetTop) {
                      window.onmousewheel = document.onmousewheel = null;    
                      time3=setInterval(function () {
                                var a=window.scrollY;
                                GoGo(movespeed);
                                if ( (window.scrollY>=content2.offsetTop) ||(a==window.scrollY) ) {
                                    clearInterval(time3);
                                    window.onmousewheel = document.onmousewheel = scrollFunc;  
                                    i++;
                                }
                        }, 1);

                    }
              }
        }

    }


function GoGo (yy) {
      window.scrollBy(0, yy);//yy即为滚动速度
}
                  