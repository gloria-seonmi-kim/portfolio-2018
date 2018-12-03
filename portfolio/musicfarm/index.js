$(function(){

	var ht=$(window).height();
	var wt=$(window).width();

	$(window).on("resize",function(){
		var ht=$(window).height();
	});
	$(window).on("resize",function(){
		var wt=$(window).width();
	});

	//사용자 속성 data-를 이용한 클릭
	$("img#play").click(function(){
		var btn=$(this).attr("data-click");
		if(btn=="play"){//첫번째 클릭시
			$(this).attr({
				"data-click":"pause",
				"src":"images/pause.png"
			});
		}else{//두번째 클릭시
			$(this).attr({
				"data-click":"play",
				"src":"images/play.png"
			});
		}
	});

	$("img#info").click(function(){
		var btn=$(this).attr("data-click");
		if(btn=="info"){//첫번째 클릭시
			$(this).attr({
				"data-click":"close",
				"src":"images/close.png"
			});
		}else{//두번째 클릭시
			$(this).attr({
				"data-click":"info",
				"src":"images/info.png"
			});
		}
	});

	$("div#menu>div#menu-wrap>ul>li>span").click(function(){
		var btn=$("div#menu>div#menu-wrap>ul>li>span>i").attr("data-click");
		if(btn=="menu"){//첫번째 클릭시
			$("div#menu>div#menu-wrap>ul>li>span>i").attr({
				"data-click":"close",
				"class":"fas fa-times"
			});
			$("div#menu>div#menu-wrap>ul ul").animate({
				"top":0
			});
		}else{//두번째 클릭시
			$("div#menu>div#menu-wrap>ul>li>span>i").attr({
				"data-click":"menu",
				"class":"fas fa-bars"
			});
			$("div#menu>div#menu-wrap>ul ul").animate({
				"top":-52
			});
		}
	});

	//img vegas
	$("div#wrap>a#img").vegas({
		delay: 2000,
		transition: 'fade',
    	transitionDuration: 1000,
		slides: [
     		{ src: 'images/mfarm.png' },
     		{ src: 'images/leejuck.png' },
     		{ src: 'images/kwak.png' },
     		{ src: 'images/kimdongryul.png' },
     		{ src: 'images/johnpark.png' },
     		{ src: 'images/thomas.png' }
    	],
	});

	if(wt<=414){
		$("body").css({
			"position":"relative"
		});
		$("footer").css({
			"position":"absolute",
			"bottom":0,
			"left":0,
			"right":0,
			"margin":"auto",
			"padding-top":"20px"
		});
	}
});