
 var area = document.getElementById("member-card");
 var bnl = document.getElementById("bnl");
 var bnr = document.getElementById("bnr");
 var a=-1;
 var speed = 1;//滚动的速度
 var time;
 var time2;
 var delay= 1000;
 area.innerHTML+=area.innerHTML;//克隆一份一样的内容 
 area.scrollLeft=area.scrollWidth/2;
 var b=area.scrollWidth/2;
 var iliHeight = area.scrollWidth/10;//单行滚动的高度

window.onload=slipper;
function slipper(){
time2=setTimeout(startScroll,delay);

bnr.onclick=function () {
	var n=0;
	 a=1;
	 b=0;
 	clearTimeout(time2);
 	clearInterval(time);
 	time=setInterval(function () { 
	 if(n>200){
		 clearInterval(time);
		time2=setTimeout(startScroll,delay);
		 }else{
			 area.scrollLeft=area.scrollLeft+iliHeight/40;
		
				if(area.scrollLeft>=iliHeight*5){
				 area.scrollLeft =b;
				 }	
				 n++;
			 }
	 }, 5);

}
bnl.onclick=function () {
	var n=0;
	 a=-1;
	 b=area.scrollWidth/2;
 	clearTimeout(time2);
 	clearInterval(time);
 	time=setInterval(function () { 
	 if(n>200){
		 clearInterval(time);
		time2=setTimeout(startScroll,delay);
		 }else{
			 area.scrollLeft=area.scrollLeft-iliHeight/40;
		
				if(area.scrollLeft<=0){
				 area.scrollLeft =b;
				 }	
				 n++;
			 }
	 }, 5);
}



var kk=area.getElementsByClassName("member-cardi");

for (var i = 0; i < kk.length; i++) {
kk[i].onmouseover=function () {
 		clearTimeout(time2);
 		clearInterval(time);
}
kk[i].onmouseout=function () {
		time2=setTimeout(startScroll,delay);
}


}





}


 function startScroll(){
	 time=setInterval("scrollUp()",speed);
	 area.scrollLeft=area.scrollLeft+a;
	 }

 function scrollUp(){
	 if(area.scrollLeft % iliHeight==0){
		 clearInterval(time);
		time2=setTimeout(startScroll,delay);
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