//Sidebar Button Menu Module
angular.module("SidebarBtnMenu",[])
.directive("sidebarBtnMenu", function(){
	return {
		scope: {
			onClick:"="
		},
		templateUrl: "/templates/sidebarBtnMenu.html",
		replace: true,
		controller: "sidebarBtnMenuCtrl",
		controllerAs: "ctrl"
	};
})
.controller("sidebarBtnMenuCtrl", ["$scope", function($scope){

}]);