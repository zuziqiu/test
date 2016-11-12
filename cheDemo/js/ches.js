window.onload = function() {
	change();
//	window.onresize = function() {
//		change();
//	}
};

var change = function() {
	var complete = document.getElementsByClassName('complete')[0];
	var width = complete.offsetWidth;
	var carbox = document.getElementsByClassName('car_menu')[0];
	var complete=document.getElementsByClassName('complete')[0];
	var shezhi = document.getElementsByClassName('shezhi')[0];
	var startX;
	var endX;
	var offset = Math.abs(width / 8);
	/*设置缩放时间*/
	var addtransitions =function(q){
		shezhi.style.transition = "all "+q+"s ease 0s";
		shezhi.style.webkitTransition = "all "+q+"s ease 0s";
		complete.style.transition = "all "+q+"s ease 0s";
		complete.style.webkitTransition = "all "+q+"s ease 0s";
	}
	/*去除缩放时间*/
	var removetransitions =function(){
		shezhi.style.transition = "none";
		shezhi.style.webkitTransition = "none";
		complete.style.transition = "none";
		complete.style.webkitTransition = "none";
	}
	/*设置移动时间*/
	var addtransition = function(p){
		carbox.style.transition = "all "+p+"s ease 0s";
		carbox.style.webkitTransition = "all "+p+"s ease 0s";
	}
	/*设置移动距离*/
	var setTransform = function(t){
		carbox.style.transform = 'translateX('+t+')';
		carbox.style.webkitTransform = 'translateX('+t+')';
	}
	/*点击左/右上角切换*/
	document.getElementsByClassName('top_carpic')[0].onclick=function(){
		addtransition(0.3);
		setTransform("-50%");
		removetransitions();
		shezhi.style.transform="scale(1)";
	};
	document.getElementsByClassName('top_rigthpic')[0].onclick=function(){
		addtransition(0.3);
		setTransform("-50%");
		removetransitions();
		shezhi.style.transform="scale(1)";
	};
	window.onresize=function(){width=complete.offsetWidth;}
	document.getElementsByClassName('back')[0].onclick=function(){
		addtransition(0.3);
		setTransform(0);
		removetransitions();
		complete.style.transform="scale(1)";
	};
	/*触摸滑动*/
	carbox.addEventListener('touchstart', function(event) {
		var touch = event.targetTouches[0]
		startX = touch.clientX;
	});
	carbox.addEventListener('touchmove', function(event) {
//		event.preventDefault();
		var touch = event.targetTouches[0]
		endX = touch.clientX;
		var distances = endX - startX;
		var distance = Math.abs(distances);
		if(distances < 0) {
			if(distances + width > 0) {
				shezhi.style.transform="scale("+Math.abs(distances/width)+")";
				complete.style.transform="scale("+(1-Math.abs(distances/width))+")";
				carbox.style.transform = 'translateX(' + distances + 'px)';
				/*左滑动缩放延时+滑动距离*/
				if(distance>offset){
					for(var i=distances;i<=width;i++){
					addtransitions(1);
					shezhi.style.transform="scale("+Math.abs(i/width)+")";
//					complete.style.transform="scale("+(1.5-Math.abs(i/width))+")";
					addtransition(1);
					setTransform("-50%");
					}
				}
			}
		} else {
			if(distances < width) {
				shezhi.style.transform="scale("+(1-distances/width)+")"
				complete.style.transform="scale("+(Math.abs(distances/width))+")";
				carbox.style.transform = 'translateX(' +(distances-width) + 'px)';
				/*右滑动缩放延时+滑动距离*/
				if(distance>offset){
					for(var j=distances;j<=width;j++){
					addtransitions(1);
					complete.style.transform="scale("+Math.abs(j/width)+")";
//					shezhi.style.transform="scale("+(1.5-Math.abs(j/width))+")";
					addtransition(1);
					setTransform(0);
					}
				}
			}
		}

	});

}