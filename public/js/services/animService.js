//SERVICE
//Main.animService
//For animations
app.service("animService", function(){
	//====  VARS  ====
	var ANOPT_DEF = {duration: 500, easing: 'easeOutExpo', queue: false};
	//====  FUNCTIONS  ====
	var sbExpand = function(){
		$("div.sbbtn-text").fadeIn({duration: 500, always:function(){
			$("div.sbbtn-text").show();
		}, fail:function(){
			$("div.sbbtn-text").show();
		}});
		$("div.sbbtn-text").animate({"left":"9rem"}, ANOPT_DEF);
		$("#pagelet_sidebar").animate({"width":"40rem"}, ANOPT_DEF);
		$("#sbbtn-menu a").prop("title", "Collapse Menu");
	};
	
	var sbCollapse = function(){
		$("div.sbbtn-text").fadeIn({duration: 500, always:function(){
			$("div.sbbtn-text").hide();
		}, fail:function(){
			$("div.sbbtn-text").hide();
		}});
		$("#pagelet_sidebar").animate({"width":"8rem"}, ANOPT_DEF);
		$("div.sbbtn-text").animate({"left":"-23rem"}, ANOPT_DEF);
		$("#sbbtn-menu a").prop("title", "Expand Menu");
	};

	////====  MAKE PUBLIC  ====
	return{
		sbExpand:sbExpand,
		sbCollapse:sbCollapse
	};
});
