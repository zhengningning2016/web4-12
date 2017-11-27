//1.获取相关元素
//2.确定事件类型 onmouseover onmouseout onload
//3.事件处理需要的函数
window.onload=function(){
	var picScroll=document.getElementById("picScroll");
	var picScroll1=document.getElementById("picScroll1");
	var id=setInterval(changeToLeft,10);
	function changeToLeft(){
		if(picScroll.scrollLeft>=picScroll1.offsetWidth){
			picScroll.scrollLeft=0;
		}
		picScroll.scrollLeft+=1;
	}
    picScroll.onmouseover=function(){
    	clearInterval(id);
    }
    picScroll.onmouseout=function(){
        id=setInterval(changeToLeft,10);
    }
}