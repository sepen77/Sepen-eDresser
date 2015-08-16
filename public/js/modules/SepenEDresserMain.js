//MODULE
//Main, Main.mainCtrl
//Main module wrapping entire html body
var app = angular.module("Main",[
	"Sidebar",
	"SidebarBtn",
	"SidebarBtnMenu"
	]);

app.controller("mainCtrl", function($scope, pageService){
	//====  INITIALIZATION  ====
	$scope.pageTitle = pageService.pageTitle;
	
	//====  EVENT LISTENERS  ====
	$scope.$on("changing_page", function(e, data){
		$scope.pageTitle = data;
	});
    $scope.$on("sidebarBtn_loaded", function(e){
		$("#sbbtn-dresser").css("background-color","#555555"); 
	});
});
