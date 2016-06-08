
 var area = document.getElementById("member-card");
 var bnl = document.getElementById("bnl");
 var bnr = document.getElementById("bnr");
 var a=-1;
 var iliHeight = 201;//单行滚动的高度
 var speed = 1;//滚动的速度
 var time;
 var time2;
 var delay= 500;
 area.innerHTML+=area.innerHTML;//克隆一份一样的内容 
 area.scrollLeft=area.scrollWidth/2;
 var b=area.scrollWidth/2;
window.onload=slipper;
function slipper(){
setTimeout(startScroll,delay);
bnr.onmousedown=function () {
	 a=10;
	 b=0;
}
bnr.onmouseup=function () {
	 a=1;
}
bnl.onmousedown=function () {
	 a=-10;
	 b=area.scrollWidth/2;
}
bnl.onmouseup=function () {
	 a=-1;
}

area.onmouseover=function () {
delay=2000;
}
area.onmouseout=function () {
delay=500;
}
}


 function startScroll(){
	 time=setInterval("scrollUp()",speed);
	 area.scrollLeft=area.scrollLeft+a;
	 }

 function scrollUp(){
	 if(area.scrollLeft % iliHeight==0){
		 clearInterval(time);
		 setTimeout(startScroll,delay);
		 }else{
			 area.scrollLeft=area.scrollLeft+a;

			 if(b==area.scrollWidth/2){
			 if(area.scrollLeft <=0){
				 area.scrollLeft =b;
				 }				
				}else {
				if(area.scrollLeft>=area.scrollWidth/2){
				 area.scrollLeft =b;
				 }	
				}

			 }
	 }