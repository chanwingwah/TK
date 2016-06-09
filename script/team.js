

function $(id){
    return typeof id==='string'?document.getElementById(id):id;
}


 var sum=0;
 var i=0;
 // 当add的为1，向左动
 var add;
 // 复原指标
 var resetTag;
  // 复原后的偏移
 var resetvalue;
  // 复原后的i初始值
 var ivalue; 
 var b;
 
add=1;
resetTag=15;
resetvalue=0;
ivalue=0;
b=-1;



 var time;
 var speed=600; 
 var intervalTime = 1200;
 var area = $("member-card");
 var bnl = $("bnl");
 var bnr = $("bnr");



 window.onload=function () {
 	time=setInterval("scroll()",intervalTime);

	bnr.onclick=function () {
		add=1;
		resetTag=15;
		resetvalue=0;
		ivalue=0;
		b=-1;
		var n=0;
		speed=600; 
 		intervalTime = 0;
	 	clearInterval(time);
	 	time=setInterval(function () { 
		 if(n>=5){
		 		speed=600; 
 				intervalTime = 1200;
				clearInterval(time);
	 			time=setInterval("scroll()",intervalTime);
			 }else{
					scroll();n++;
				}	
		 
		 }, intervalTime);
	}
	bnl.onclick=function () {
		add=-1;
		ivalue=15;
		resetTag=-1;
		resetvalue=-150;
		b=0;
		var n=0;
		speed=600; 
 		intervalTime = 0;
	 	clearInterval(time);
	 	time=setInterval(function () { 
		 if(n>=5){
		 		speed=600; 
 				intervalTime = 1200;
				clearInterval(time);
	 			time=setInterval("scroll()",intervalTime);
			 }else{
					scroll();n++;
				}	
		 
		 }, intervalTime);
	}


 var kk=area.getElementsByClassName("member-cardi");

for (var i = 0; i < kk.length; i++) {
kk[i].onmouseover=function () {
 		clearInterval(time);
}
kk[i].onmouseout=function () {
 	time=setInterval("scroll()",intervalTime);
}

}

}

function scroll () {
		scrollmove();
		if(i==resetTag){fuyuan();}
		}

function scrollmove() {
        sum=(-i+b)*10;       
        area.style.transform="translate("+sum+"em,0em) translateZ(0px)";
		area.style.transition="transform "+speed+"ms ease-out";
		i+=add; 
	}


function fuyuan() {
	sum=resetvalue;
	i=ivalue;
	setTimeout(function () {
			area.style.transform="translate("+sum+"em,0em) translateZ(0px)";
			area.style.transition="";
	}, speed);

	}



// function fuyuan() {
// 	sum=resetvalue;
// 	i=ivalue;
// 	setTimeout(function () {
// 			area.style.transform="translate("+sum+"em,0em) translateZ(0px)";
// 			area.style.transition="";
// 	},speed);
// }















//  var kk=area.getElementsByClassName("member-cardi");

//  var bnl = $("bnl");
//  var bnr = $("bnr");
//  var a=1;
//  var speed = 1;//滚动的速度
//  var time;
//  var time2;
//  var delay= 1000;

//  var b=0; 
//  area.scrollLeft=b;

//  var iliHeight = Math.floor(area.scrollWidth/10);//单行滚动的高度

// window.onload=slipper;
// // window.onresize=function () {
// // // bnr.onclick=null;
// // // bnl.onclick=null;
// // // for (var i = 0; i < kk.length; i++) {
// // // kk[i].onmouseover=null;
// // // kk[i].onmouseout=null;
// // // }
// // 	slipper();
// // }	





// function slipper(){
// time2=setTimeout(startScroll,delay);
// bnr.onclick=null;
// bnl.onclick=null;
// for (var i = 0; i < kk.length; i++) {
// kk[i].onmouseover=null;
// kk[i].onmouseout=null;
// }



// bnr.onclick=function () {
// iliHeight = Math.floor(area.scrollWidth/10)
// 	var n=0;
// 	 a=1;
// 	 b=0;
//  	clearTimeout(time2);
//  	clearInterval(time);
//  	time=setInterval(function () { 
// 	 if(n>200){
// 		clearInterval(time);
// 		time2=setTimeout(startScroll,delay);
// 		 }else{
// 			 area.scrollLeft=area.scrollLeft+iliHeight/40;
		
// 				if(area.scrollLeft>=(area.scrollWidth/2)){
// 				 area.scrollLeft =0;
// 				 }	
// 				 n++;
// 			 }
// 	 }, 5);
// }
// bnl.onclick=function () {
// iliHeight = Math.floor(area.scrollWidth/10)
// 	var n=0;
// 	 a=-1;
// 	 b=area.scrollWidth/2;
//  	clearTimeout(time2);
//  	clearInterval(time);
//  	time=setInterval(function () { 
// 	 if(n>200){
// 		 clearInterval(time);
// 		time2=setTimeout(startScroll,delay);
// 		 }else{
// 			 area.scrollLeft=area.scrollLeft-iliHeight/40;
		
// 				if(area.scrollLeft<=0){
// 				 area.scrollLeft =b;
// 				 }	
// 				 n++;
// 			 }
// 	 }, 5);
// }



// for (var i = 0; i < kk.length; i++) {
// kk[i].onmouseover=function () {
//  		clearTimeout(time2);
//  		clearInterval(time);
// }
// kk[i].onmouseout=function () {
// 		time2=setTimeout(startScroll,delay);
// }


// }



// }


//  function startScroll(){
// 	 area.scrollLeft=area.scrollLeft+a;
// 	 time=setInterval("scrollUp()",1);

// 	 }

//  function scrollUp(){
//  	iliHeight=Math.floor(area.scrollWidth/10);
// 	 if(area.scrollLeft % (iliHeight)==0){
// 		 clearInterval(time);
// 		time2=setTimeout(startScroll,delay);
// 		 }else{
// 			 area.scrollLeft=area.scrollLeft+a;

// 			 if(b==area.scrollWidth/2){
// 			 if(area.scrollLeft <=0){
// 				 area.scrollLeft =b;
// 				 }				
// 				}else {
// 				if(area.scrollLeft>=iliHeight*5){
// 				 area.scrollLeft =0;
// 				 }	
// 				}

// 			 }
// 	 }
