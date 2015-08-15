// JavaScript Document
//==============================================
//////     zhaostephen.eDresserView.js     //////
//==============================================
//VIEW VARs
//==============================================
var b_sbExpanded = false;

//==============================================
//ANIMATION VARs
//==============================================
var ANOPT_DEF = {duration: 500, easing: 'easeOutExpo', queue: false};

//==============================================
//VIEW CONTROLLER FUNCTIONS
//==============================================
function sbExpand(){
	$("div.sbbtn-text").fadeIn({duration: 500, always:function(){
		$("div.sbbtn-text").show();
	}, fail:function(){
		$("div.sbbtn-text").show();
	}});
	$("div.sbbtn-text").animate({"left":"9rem"}, ANOPT_DEF);
	$("#pagelet_sidebar").animate({"width":"40rem"}, ANOPT_DEF);
	$("#sbbtn-menu a").prop("title", "Collapse Menu");
}
	
function sbCollapse(){
	$("div.sbbtn-text").fadeIn({duration: 500, always:function(){
		$("div.sbbtn-text").hide();
	}, fail:function(){
		$("div.sbbtn-text").hide();
	}});
	$("#pagelet_sidebar").animate({"width":"8rem"}, ANOPT_DEF);
	$("div.sbbtn-text").animate({"left":"-23rem"}, ANOPT_DEF);
	$("#sbbtn-menu a").prop("title", "Expand Menu");
}

//==============================================
//DOCUMENT READY
//==============================================
$(function(){
	$("div.sbbtn-text").hide();
	$("#appContainer").children(":not(#pagelet_sidebar)").find("*").click(function(e){
		if (b_sbExpanded) {
			sbCollapse();
			b_sbExpanded = false;
		}
	});
});