

function $(id){
    return typeof id==='string'?document.getElementById(id):id;
}

window.onload=tab;

function tab(){
  // 初始化引索与定时器
  var index=0;
  var timer=null;

  // 获取所要切换的内容
  var tabs=$('tabs');
  var lis=$('tabsul').getElementsByTagName('li');
  var divs=$('tabs').getElementsByTagName('div');

  // 遍历绑定事件
  for(var i=0;i<lis.length;i++){
    lis[i].id=i;
    lis[i].onmouseover=function(){
      clearInterval(timer);
      changeOption(this.id);
    }
    lis[i].onmouseout=function(){  
      timer=setInterval(autoPlay,3500);    
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
       divs[j].className='hide';
    }
    // 切换
    lis[curIndex].className='on';
    divs[curIndex].className='';
    index=curIndex;
  }
}

                  