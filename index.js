$(function(){
	var ht=$(window).height();
	$("article").height(ht);

	$(window).on("resize",function(){
		var ht=$(window).height();
		$("article").height(ht);
	});

	//img vegas
	$("article").vegas({
    	slides: [
     	   { src: 'images/main1.png' },
     	   { src: 'images/main2.png' },
     	   { src: 'images/main3.png' },
     	   { src: 'images/main4.png' }
   		 ],animation: 'random'
	},500);	

	//about button 
	$('header>#about #fbtn').hover(function(){
			$("header>#about #ftxt").css("display","block");
		},function(){
			$("header>#about #ftxt").css("display","none");
		},1000);

	//potfolio img mouseover
	$('#pflist>a').on('mouseenter',function(){
				$(this).children("#pfImg").css('opacity','.8');
				$(this).children("#imgInside").css("display","block");
			});
	$('#pflist>a').on('mouseleave',function(){
				$(this).children("#pfImg").css('opacity','1');
				$(this).children("#imgInside").css("display","none");
			});

	//potfolio hide 
	$("#pflist>a,#pflist>div").slideUp();

	//scroll top
	$(window).scroll(function(){
		var st=$(this).scrollTop();
		console.log(st);
		if(st>=106){
			$("div#wrap>#mainTxt h2").slideDown(1000);
			$("header>aside").css("color","#1d544a");
			$("header>p").css("display","none");
		}else{
			$("div#wrap>#mainTxt h2").css("display","none");
			$("header>aside").css("color","#fff");
			$("header>p").css("display","block");
		} 
		if(st>=600){
			$("section#pflist>a#pf1").delay().slideDown(2000);
			$("section#pflist>a#pf2").delay(500).slideDown(2000);
			$("section#pflist>#pf1_2").delay(1000).slideDown(2000);
			$("section#pflist>a#pf3").delay(2000).slideDown(2000);
			$("section#pflist>a#pf4").delay(2500).slideDown(2000);
			$("section#pflist>#pf3_4").delay(3000).slideDown(2000);
		}
		if(st>=900){
			$("header>h1>a,header>#about").css("color","#1d544a");
			$("header>#about #fbtn").css({
					"color":"#1d544a",
					"background-color":"#fff",
					"border-color":"#1d544a"
				});

			$('header>#about #fbtn').on('mouseenter',function(){
				$(this).css({
					"color":"#fff",
					"background-color":"#1d544a",
					"border-color":"#fff"
				});
			});
			$('header>#about #fbtn').on('mouseleave',function(){
				$(this).css({
					"color":"#1d544a",
					"background-color":"#fff",
					"border-color":"#1d544a"
				});
			});	
		}else{
			$("header>h1>a,header>#about").css("color","#fff");
			$("header>#about #fbtn").css({
					"color":"#fff",
					"background-color":"transparent",
					"border-color":"#fff"
				});
			$('header>#about #fbtn').on('mouseenter',function(){
				$(this).css({
					"color":"#1d544a",
					"background-color":"#fff",
					"border-color":"transparent"
				});
			});
			$('header>#about #fbtn').on('mouseleave',function(){
				$(this).css({
					"color":"#fff",
					"background-color":"transparent",
					"border-color":"#fff"
				});
			});
		}
	});
});