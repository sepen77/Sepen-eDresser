//Sidebar Button Module
angular.module("SidebarBtn",[])
.directive("sidebarBtn", function() {
	return {
		scope: {
			btn: "=",
		},
		templateUrl: "/templates/sidebarBtn.html",
		replace: true,
		controller: "sidebarBtnCtrl",
		controllerAs: "ctrl"
	};
})
.controller("sidebarBtnCtrl", function($scope, $rootScope, pageService) {
});
