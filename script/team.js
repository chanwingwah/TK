
 var area = document.getElementById("member-card");
 var bnl = document.getElementById("bnl");
 var bnr = document.getElementById("bnr");
 var a=-1;
 var speed = 1;//滚动的速度
 var time;
 var delay= 1000;
 area.innerHTML+=area.innerHTML;//克隆一份一样的内容 
 area.scrollLeft=area.scrollWidth/2;
 var b=area.scrollWidth/2;
 var iliHeight = area.scrollWidth/10;//单行滚动的高度

window.onload=slipper;
function slipper(){
setTimeout(startScroll,delay);
bnr.onmousedown=function () {
	 a=20;
	 b=0;
}
bnr.onmouseup=function () {
	 a=1;
}
bnl.onmousedown=function () {
	 a=-20;
	 b=area.scrollWidth/2;
}
bnl.onmouseup=function () {
	 a=-1;
}

area.onmouseover=function () {
delay=5000;
}
area.onmouseout=function () {
delay=1000;
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
				if(area.scrollLeft>=iliHeight*5){
				 area.scrollLeft =b;
				 }	
				}

			 }
	 }