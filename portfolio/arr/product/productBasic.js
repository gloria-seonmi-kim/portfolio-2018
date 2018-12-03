$(function(){
	var ht=$(window).height();
	var wt=$(window).width();

	$(window).on("resize",function(){
		var ht=$(window).height();
	});
	$(window).on("resize",function(){
		var wt=$(window).width();
	});

	if(769<=wt){
		// selectTab width
		var selectW=$("div#selectTab>div#selectTab_top").width();
		$("div#selectTab>div#selectTab_top").on("resize",function(){
			var selectW=$("div#selectTab>div#selectTab_top").width();
		});
		$("div#selectTab>div#selectTab_top>a#option").css({
			"width":selectW-162
		});

		var optionW=$("div#selectTab>div#selectTab_top>a#option").width();
		$("div#selectTab>div#selectTab_top>a#option").on("resize",function(){
			var optionW=$("div#selectTab>div#selectTab_top>a#option").width();
		});

		$("div#selectTab>div#selectTab_top>a#option>div").css({
			"width":optionW-122
		});

		$("div#txtWrap").css({
			"height":ht-200
		});
		$("div#selectTab_bottom_click").css({
			"width":(wt/2)-80,
			"margin-left":-((wt/2)-80)
		});
		$("div#selectTab_top_click>div>i").click(function(){
			$("div#selectTab_top_click").animate({
				"margin-right":"-50%"
			});
		});
		$("div#selectTab_bottom_click>div#cartWrap>h3+i").click(function(){
			$("div#selectTab_bottom_click").animate({
				"margin-left":-((wt/2)-80)
			});
			$("aside").animate({
				"margin-left":0
			});				
		});

	}else if(415<=wt&&wt<=768){
		
		$("div#txtWrap").css({
			"height":ht-280
		});

		var optionW=$("div#selectTab>div#selectTab_top>a#option").width();
		$("div#selectTab>div#selectTab_top>a#option>div").css({
			"width":optionW-122
		});
		$("div#selectTab_bottom_click").css({
			"width":(wt/2)-80,
			"margin-left":-((wt/2)-80)
		});
		$("div#selectTab_top_click>div>i").click(function(){
			$("div#selectTab_top_click").animate({
				"margin-right":"-50%"
			});
		});
		$("div#selectTab_bottom_click>div#cartWrap>h3+i").click(function(){
			$("div#selectTab_bottom_click").animate({
				"margin-left":-((wt/2)-80)
			});
			$("aside").animate({
				"margin-left":0
			});				
		});		

	}else{
		var optionW=$("div#selectTab>div#selectTab_top>a#option").width();
		$("div#selectTab>div#selectTab_top>a#option>div").css({
			"width":optionW-80
		});	

		$("div#selectTab_bottom_click").css({
			"width":(wt/2)-80,
			"margin-left":-((wt/2)-80)
		});

		$("div#selectTab_top_click>div>i").click(function(){
			$("div#selectTab_top_click").animate({
				"margin-right":"-100%"
			});
		});
		$("div#selectTab_bottom_click>div#cartWrap>h3+i").click(function(){
			$("div#selectTab_bottom_click").animate({
				"margin-left":-wt
			});
			$("aside").animate({
				"margin-left":0
			});				
		});
		$("div#selectTab_bottom_click").css({
			"width":wt,
			"margin-left":-wt
		});

	}

	if(ht<700){
		$("div#productImg>div#img2").height(500);
		$("div#productImg>div#img2>p").css({
			"font-size":12,
			"left":50
		});
		$("div#selectTab_top_click>div#detailClick>div").css("top",130);
		$("div#selectTab_top_click>div#detailClick>div>ul>li").css({
			"font-size":10,
			"margin-top":10,
			"margin-bottom":10,
			"line-height":1.4
		});
		$("div#selectTab_bottom_click>div#cartWrap>div#total>p").css({
			"font-size":12
		});
		$("#cartWrap>h3").css("top",47);
		$("#cartWrap>h3+i").css("top",30);
		$("div#selectTab_bottom_click>div#cartWrap>ul#itemWrap").css("top",100);
		$("div#selectTab_bottom_click>div#cartWrap>div#total").css("bottom",30);
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



	// selectTab top click
	$("div#selectTab>div#selectTab_top>a#option").click(function(){
		$("div#selectTab_top_click").animate({
			"margin-right":0
		});
		$("#optionClick").css("display","block");
		$("#detailClick").css("display","none");
	});

	$("div#selectTab>div#selectTab_top>a#detailTxt").click(function(){
		$("div#selectTab_top_click").animate({
			"margin-right":0
		});
		$("#optionClick").css("display","none");
		$("#detailClick").css("display","block");
	});

	// selectTab option 세부내용 클릭시
	$("div#selectTab_top_click>div#optionClick>div#item>ul>li").on('click',function(){
		$("div#item>ul>li").css({'background-color':'#fff',"color":"#000"});
		$(this).css({'background-color':'#000',"color":"#fff"});
		var txt=$(this).text();
		$("div#selectTab>div#selectTab_top>a#option>div>p").text(txt);
	});

	//selectTab bottom click 

	$("div#selectTab>div#selectTab_bottom>a#now").click(function(){
		
		$("div#selectTab_bottom_click").animate({
			"margin-left":0
		});
		
		$("aside").animate({
			"margin-left":((wt/2)-80)
		});
		
		$("div#selectTab_bottom_click>div#cartWrap ul").css("display","block");

		$("#sum").text(1);

		var sum=$("#sum").text();
		$("aside>p:first-child,header>div").text(sum).animate({
			"width":30,
			"height":30,
			"line-height":30
		});

		$("aside>p:first-child,header>div,div#selectTab_bottom_click>div#cartWrap>h3>span").text(sum);	
	});

	$("div#selectTab>div#selectTab_bottom>a#add").click(function(){
		$("aside>p:first-child,header>div").text("1").animate({
			"width":30,
			"height":30,
			"line-height":30
		});
	});

	//selectTab_bottom 의 세부내용 클릭

	$("#plus").click(function(){
		var sum=$("#sum").text();
		sum=Number(sum);
		$("#sum").text(sum+=1);
		$("aside>p:first-child,header>div,div#selectTab_bottom_click>div#cartWrap>h3>span").text(sum);
	});

	$("#minus").click(function(){
		var sum=$("#sum").text();
		sum=Number(sum);
		$("#sum").text(sum-=1);
		$("aside>p:first-child,header>div,div#selectTab_bottom_click>div#cartWrap>h3>span").text(sum);
	});

	$("ul#itemWrap ul>li:nth-child(5)>i").click(function(){
		$(this).parents("ul").css("display","none");
		$("aside>p:first-child,header>div").text("").animate({
			"width":20,
			"height":20,
			"line-height":20
		});
		$("div#selectTab_bottom_click>div#cartWrap>h3>span,#sum").text("0");
	});

	$(window).scroll(function(){
		var st=$(this).scrollTop();
	
		var wrap=$("div#productImg").height();
		var ht=$(window).height();
		var ft=(wrap-ht);

		console.log(st);
		console.log(ft);

		if(415<=wt&&st>ft){
			$("aside").css({
				"position":"absolute",
				"height":wrap
			});
			$("div#txtWrap").css("display","none");
			$("div#selectTab").css({
				"position":"absolute",
				"bottom":((ht-wrap)+2)
			});

		}else if(415>wt&&st>ft){
			$("div#selectTab").css({
				"position":"absolute",
				"bottom":((ht-wrap)+2)
			});

		}else{
			$("aside").css({
				"position":"fixed",
				"height":"100%"
			});
			$("div#txtWrap").css("display","block");
			$("div#selectTab").css({
				"position":"fixed",
				"bottom":0
			});
		}
	});
});