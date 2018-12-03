$(function(){

	//about button 
	$('header>#about #fbtn').hover(function(){
			$("header>#about #ftxt").css("display","block");
		},function(){
			$("header>#about #ftxt").css("display","none");
		},1000);

	$("article").animate({
		"opacity":1
	},1000);
	$("article>img").delay(500).animate({
		"opacity":1,
		"margin-top":0
	},1000);
	$("article>section").delay(300).animate({
		"opacity":1,
		"margin-top":0
	},1000);
	$("article>h2").delay(1000).animate({
		"opacity":1
	},1000);

	$(window).scroll(function(){
		var st=$(this).scrollTop();
		console.log(st);

		if(st>50){
			$("div#mainTxt").animate({
				"opacity":1,
				"margin-top":60
			},1000);
		}
	});
});