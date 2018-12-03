$(function(){

	var ht=$(window).height();
	var wt=$(window).width();

	$(window).on("resize",function(){
		var ht=$(window).height();
	});
	$(window).on("resize",function(){
		var wt=$(window).width();
	});

	//음악 재생 버튼 클릭 시
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

	//음악 재생 정보 버튼 클릭 시
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

	//메뉴 클릭 시
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

	$("div#wrap>ul.tabs>li").hover(function(){
		$(this).css("color","#45bda5");
	},function(){
		$(this).css("color","#a8a8a8");
		$("div#wrap>ul.tabs>li:first-child").css("color","#000");
	});

	//tab 클릭 시
	$("div#wrap>ul.tabs>li").click(function(){
		$("div#wrap>ul.tabs>li").css({
			"color":"#a8a8a8",
			"font-weight":100,
			"text-decoration": "none"			
		});
		$(this).css({
			"color":"#000",
			"font-weight":400,
			"text-decoration": "line-through"
		});
		$(this).hover(function(){
			$(this).css("color","#45bda5");
		},function(){
			$(this).css("color","#000");
		});

		var idx=$(this).index();
		$("div#wrap>div#bar>div").animate({
			"left":200*idx
		},200);
		$("div#wrap>div.contents>div.contents-wrap>div").css("display","none");
		$("div#wrap>div.contents>div.contents-wrap>div").eq(idx).css({
			"display":"block",
			"width":"100%"
		}).children("img").css("display","none");
		$("div#wrap>div.contents>div.contents-wrap>div").eq(idx).children("img:nth-child(2)").css({"display":"block","margin-left":250});

		$("div#wrap>div.contents>div.contents-wrap>div").eq(idx).children("ul").css("display","block");

	});



	//cd 이미지 클릭 시
	$("div#wrap>div.contents>div.contents-wrap>div").click(function(){
		$("div#wrap>div.contents>div.contents-wrap>div").css("display","none");
		$(this).css({
			"display":"block",
			"width":"100%",
			"boxSizing":"border-box"
		});
		$(this).children().css({"display":"block"});
		$(this).children("img:nth-child(1)").css("display","none");
		$(this).children("img:nth-child(2)").css("margin-left",250);
		
		
		var idx=$(this).index();
		$("div#wrap>div#bar>div").animate({
			"left":200*(idx)
		},200);

		$("div#wrap>ul.tabs>li").css({
			"color":"#a8a8a8",
			"font-weight":100,
			"text-decoration": "none"			
		});
		$("div#wrap>ul.tabs>li").eq(idx).css({
			"color":"#000",
			"font-weight":400,
			"text-decoration": "line-through"
		});
	});

	// all artist 클릭 시
	$("div#wrap>ul.tabs>li#tab1").click(function(){
		$("div#wrap>div.contents>div.contents-wrap>div").css({"display":"block","width":225});
		$("div#wrap>div.contents>div.contents-wrap>div>ul").css("display","none");
		$("div#wrap>div.contents>div.contents-wrap>div").children("img:nth-child(2)").css("display","none");
		$("div#wrap>div.contents>div.contents-wrap>div").children("img:nth-child(1)").css({
			"display":"block",
			"margin-left":0
		});
	});

  if(wt<=414){
  	$("div#wrap>div.contents>div.contents-wrap>div").click(function(){
		$("div#wrap>div.contents>div.contents-wrap>div").css("display","none");
		$(this).css({
			"display":"block",
			"width":"100%",
			"boxSizing":"border-box",
			"margin":0,
			"padding":"5%"
		});
		$(this).children().css({"display":"block"});
		$(this).children("img:nth-child(1)").css("display","none");
		$(this).children("img:nth-child(2)").css({
			"margin-left":"20%",
			"width":"60%"
		});
		$(this).children("ul").css({"width":"100%","margin-left":0,"margin-top":40,"text-align":"center"});
	});
  }

});