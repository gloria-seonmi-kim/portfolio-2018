$(function(){
	var ht=$(window).height();
	$("article").height(ht);

	$(window).on("resize",function(){
		var ht=$(window).height();
		$("article").height(ht);
	});

	//about button 
	$('header>#home #fbtn').hover(function(){
			$("header>#home #ftxt").css("display","block");
		},function(){
			$("header>#home #ftxt").css("display","none");
		},1000);
	
	//img vegas
	$("article div#imgCircle").vegas({
    	slides: [
     	   { src: '../images/aboutMain1.jpg' },
     	   { src: '../images/aboutMain2.png' },
   		 ],animation: 'random'
	},500);

	//main img show
	$("article div#imgCircle").animate({
		"margin-top":0
	},1000);
	$("article div#bgCircle").delay(500).animate({
		"opacity":1,
		"margin-top":0
	},1000);
	$("article h3").delay(300).animate({
		"opacity":1,
		"margin-top":0
	},1000);
	$("article h4,article h5,article>section>img").delay(1000).animate({
		"opacity":1,
		"margin-top":0
	},1000);

	$(window).scroll(function(){
		var st=$(this).scrollTop();
		console.log(st);

		if(st>=100){
			$("div#wrap>#mainTxt p").animate({
				"opacity":1,
				"margin-top":0
			},1000);
		}
		if(st>=106){
			$("header>aside").css("color","#1d544a");
			$("header>p").css("display","none");
		}else{
			$("header>aside").css("color","#1d544a");
			$("header>p").css("display","block");
		}		
		if(st>=400){
			$("div#wrap>#mainTxt ul").animate({
				"opacity":1,
				"margin-top":0
			},1000);
		}
		if(st>=600){
			$("section#profile>div#life").animate({
				"opacity":1,
				"margin-top":100
			},1000);
			$("#life>div,#life>ul").delay(500).animate({
				"opacity":1,
				"margin-top":0
			},1000);
		}
		if(st>=1100){
			$("section#profile>div#like").animate({
				"opacity":1,
				"margin-top":100
			},1000);
			$("#like>div,#like>ul").delay(500).animate({
				"opacity":1,
				"margin-top":0
			},1000);
		}
		if(st>=1450){
			$("section#profile>div#skill").animate({
				"opacity":1,
				"margin-top":100
			},1000);
			$("#skill>div,#skill>ul").delay(500).animate({
				"opacity":1,
				"margin-top":0
			},1000);
		}
	});

	//profile list click
	$("#gnb>p").click(function(){
		$("#profile>div").show();
	});

	$("#listLife").click(function(){
		$("#profile>div").hide();
		$("#life").show();
		
	});
	$("#listLike").click(function(){
		$("#profile>div").hide();
		$("#like").show();
		
	});
	$("#listSkill").click(function(){
		$("#profile>div").hide();
		$("#skill").show();
		
	});

});	