
 var area = document.getElementById("member-card");
 var iliHeight = 202;//单行滚动的高度
 var speed = 1;//滚动的速度
 var time;
 var delay= 2000;
 area.scrollLeft=0;
 area.innerHTML+=area.innerHTML;//克隆一份一样的内容
 function startScroll(){
	 time=setInterval("scrollUp()",speed);
	 area.scrollLeft++;
	 }

 function scrollUp(){
	 if(area.scrollLeft % iliHeight==0){
		 clearInterval(time);
		 setTimeout(startScroll,delay);
		 }else{
			 area.scrollLeft++;
			 if(area.scrollLeft >= area.scrollWidth/2){
				 area.scrollLeft =0;
				 }
			 }
	 }
setTimeout(startScroll,delay);
