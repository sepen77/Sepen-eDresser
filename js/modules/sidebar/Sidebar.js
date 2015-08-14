//Sidebar Module
angular.module("Sidebar",[])
.directive("sidebar", function(){
	return {
		scope: {
			data: "=",
		},
		templateUrl: "/templates/sidebar.html",
		replace: true,
		controller: "sidebarCtrl",
		controllerAs: "ctrl"
	};
})
.controller("sidebarCtrl", function($scope, pageService){
	//====  INITIALIZATION  ====
	$scope.b_sbExpanded = false;

	//====  FUNCTION DEF  ====
	this.onClick_sbbtn = function(btn){
		pageName = btn;
		if ($scope.b_sbExpanded)
			sbCollapse();
		$scope.b_sbExpanded = false;
		if (pageService.currentPage != pageName)
			pageService.changePageTo(pageName);
	}
	
	this.onClick_sbExpandMenu = function(){
		if ($scope.b_sbExpanded){
			sbCollapse();
		} else {
			sbExpand();
		}
		$scope.b_sbExpanded = !$scope.b_sbExpanded;
	};

	//====  SHARED DATA  ====
	this.btnArr = [
		{
			properties:{
				name:"dresser",
				title:"Open Dresser",
				icn_img:"/img/icn_dresser.svg",
				label:"Open Dresser"
			},
			onClick:this.onClick_sbbtn
		},
		{
			properties:{
				name:"history",
				title:"View History",
				icn_img:"/img/icn_history.svg",
				label:"History"
			},
			onClick:this.onClick_sbbtn
		},
		{
			properties:{
				name:"clothes",
				title:"See Clothes and Outfits",
				icn_img:"/img/icn_clothes.svg",
				label:"Clothes & Outfits"
			},
			onClick:this.onClick_sbbtn
		},
		{
			properties:{
				name:"settings",
				title:"Change Settings",
				icn_img:"/img/icn_settings.svg",
				label:"Settings"
			},
			onClick:this.onClick_sbbtn
		}
	];
});
