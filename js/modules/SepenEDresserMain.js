//App Main Module
var app = angular.module("Main",[
	"Sidebar",
	"SidebarBtn",
	"SidebarBtnMenu"
	])

.service("pageService", function($rootScope){
	//====  DATA  ====
	var currentPage = "dresser";
	var pageToTitle = {
		dresser:"Dresser",
		history:"History",
		clothes:"Clothes and Outfits",
		settings:"Settings"
	};
	var pageTitle = pageToTitle[currentPage];
	
	var changePageTo = function(page){
		$("#sbbtn-"+this.currentPage).css("background-color","");
		this.currentPage = page;
		this.pageTitle = pageToTitle[page];
		$rootScope.$broadcast("changing_page", this.pageTitle);
		$("#sbbtn-"+page).css("background-color","#555555");
		if (page == "dresser"){
			//$scope.loadPageDresser();
		} else if (page == "history"){
			//$scope.loadPageHistory();
		} else if (page == "clothes"){
			//$scope.loadPageClothes();
		} else if (page == "settings"){
			//$scope.loadPageSettings();
		} else {
			//scope.loadPageError();
		}
	};
	
	//====  MAKE PUBLIC  ====
	return{
		currentPage:currentPage,
		pageTitle:pageTitle,
		changePageTo:changePageTo
	};
})
.controller("mainCtrl", function($scope, pageService){
	//====  INITIALIZATION  ====
	$scope.pageTitle = pageService.pageTitle;
	
	angular.element(document).ready(function(){
		pageService.changePageTo('dresser');
	});
	
	//====  EVENT LISTENERS  ====
	$scope.$on("changing_page", function(e, data){
		$scope.pageTitle = data;
	});
});