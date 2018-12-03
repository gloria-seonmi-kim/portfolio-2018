$(function(){

	var ht=$(window).height();
	var wt=$(window).width();

	$(window).on("resize",function(){
		var ht=$(window).height();
	});
	$(window).on("resize",function(){
		var wt=$(window).width();
	});

	if(wt>1024){
		$("div#wrap>ul#item>li").height(ht-80);
		$("#mainTxt,footer").height(ht*.4);
		$("div#wrap>ul#item>li>a>div").css("opacity",0);
	}else if(769<=wt&&wt<=1024){
		$("div#wrap>ul#item>li").height((ht-80)/3);
		$("#mainTxt,footer").height((ht/3)+13);
	}else if(415<=wt&&wt<=768){
		$("div#wrap>ul#item>li").height((ht-80)/2);
		$("#mainTxt,footer").height(ht/2);


	}else{
		$("div#wrap>ul#item>li").height(ht/2);
		$("#mainTxt,footer").height(ht*.7);

	}

	if(ht<700){
		$("div#wrap>ul#mainTxt>li>div>p").css("font-size",10);

	}

	setInterval(function(){
	var now=new Date();
	var hr=now.getHours();
	var min=now.getMinutes();
	var sec=now.getSeconds();

		$("aside>p#time>span").eq(0).text(hr);
		$("aside>p#time>span").eq(1).text(min);
		$("aside>p#time>span").eq(2).text(sec);
	},1000);

	$("div#wrap>ul#item>li>a").hover(function(){
		$(this).children().css("opacity","1");
	},function(){
		$(this).children().css("opacity","0");
	});

	$(window).scroll(function(){
		var st=$(this).scrollTop();
	
		var hd=$("header").height();
		var wrap=$("div#wrap").height();
		var ht=$(window).height();
		var ft=(hd+wrap-ht);

		console.log(st);
		console.log(ft);

		if(st>ft){
			$("aside").css({
				"position":"absolute",
				"height":hd+wrap+2
			});
		}else{
			$("aside").css({
				"position":"fixed",
				"height":"100%"
			});
		}

	});

});	