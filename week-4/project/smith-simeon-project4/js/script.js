$(window).load(function(){
	//TOGGLE AWESOME SECTION
	$('#awesomeClps').click(function(){
		var id = '#awesomeClps';
		if($(id).hasClass('expand')){
			$(id).parent().siblings().slideToggle();
			$(id).removeClass('expand');
		}else{
			$(id).parent().siblings().slideToggle();
			$(id).addClass('expand');
		}
	});
	
	//TOGGLE HISTORY SECTION
	$('#historyClps').click(function(){
		var id = '#historyClps';
		if($(id).hasClass('expand')){
			$(id).parent().siblings().slideToggle();
			$(id).removeClass('expand');
		}else{
			$(id).parent().siblings().slideToggle();
			$(id).addClass('expand');
		}
	});
	
	//TOGGLE CONSTRUCTION SECTION
	$('#constructClps').click(function(){
		var id = '#constructClps';
		if($(id).hasClass('expand')){
			$(id).parent().siblings().slideToggle();
			$(id).removeClass('expand');
		}else{
			$(id).parent().siblings().slideToggle();
			$(id).addClass('expand');
		}
	});
	
	//TOGGLE FACILITIES SECTION
	$('#facilitiesClps').click(function(){
		var id = '#facilitiesClps';
		if($(id).hasClass('expand')){
			$(id).parent().siblings().slideToggle();
			$(id).removeClass('expand');
		}else{
			$(id).parent().siblings().slideToggle();
			$(id).addClass('expand');
		}
	});
	
	//TOGGLE PRICING SECTION
	$('#pricingClps').click(function(){
		var id = '#pricingClps';
		if($(id).hasClass('expand')){
			$(id).parent().siblings().slideToggle();
			$(id).removeClass('expand');
		}else{
			$(id).parent().siblings().slideToggle();
			$(id).addClass('expand');
		}
	});
	
	//TOGGLE RECORDS SECTION
	$('#recordsClps').click(function(){
		var id = '#recordsClps';
		if($(id).hasClass('expand')){
			$(id).parent().siblings().slideToggle();
			$(id).removeClass('expand');
		}else{
			$(id).parent().siblings().slideToggle();
			$(id).addClass('expand');
		}
	});
	
	//TOGGLE DEATHS SECTION
	$('#deathsClps').click(function(){
		var id = '#deathsClps';
		if($(id).hasClass('expand')){
			$(id).parent().siblings().slideToggle();
			$(id).removeClass('expand');
		}else{
			$(id).parent().siblings().slideToggle();
			$(id).addClass('expand');
		}
	});
	
	//TOGGLE POP CULTURE SECTION
	$('#popCultClps').click(function(){
		var id = '#popCultClps';
		if($(id).hasClass('expand')){
			$(id).parent().siblings().slideToggle();
			$(id).removeClass('expand');
		}else{
			$(id).parent().siblings().slideToggle();
			$(id).addClass('expand');
		}
	});
});

