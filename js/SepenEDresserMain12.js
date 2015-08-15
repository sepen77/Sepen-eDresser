//==============================================
//////   zhaostephen.eDresserAngular.js   //////
//==============================================



app.controller("SEDCtrl", function($scope){
	//Initialization
	$scope.pageTitle = "Dresser";
	
	//=================================
	// Load page from server functions
	//=================================
	
	
	
	//Change Page Function
	$scope.changePage = function(){
		$scope.tbTitle = currentPage;
		if (b_sbExpanded) {
			sbCollapse();
			b_sbExpanded = false;
		}
		if (currentPage == "Dresser"){
			$scope.loadPageDresser();
		} else if (currentPage == "History"){
			$scope.loadPageHistory();
		} else if (currentPage == "Clothes and Outfits"){
			$scope.loadPageClothes();
		} else if (currentPage == "Settings"){
			$scope.loadPageSettings();
		} else {
			$scope.loadPageError();
		}
	}
	
	
	//===============================
	// Mouse on click event handlers
	//===============================

	$scope.onCLick_sbExpandMenu = function(){
		if (b_sbExpanded){
			sbCollapse();
		} else {
			sbExpand();
		}
		b_sbExpanded = !b_sbExpanded;
	};
	
	$scope.onClick_sbDresser = function(){
		if (currentPage != "Dresser") 
			currentPage = "Dresser";
		$scope.changePage();
	};
	
	$scope.onClick_sbHistory = function(){
		if (currentPage != "History") 
			currentPage = "History";
		$scope.changePage();
	};
	
	$scope.onClick_sbClothes = function(){
		if (currentPage != "Clothes and Outfits") 
			currentPage = "Clothes and Outfits";
		$scope.changePage();
	};
	
	$scope.onClick_sbSettings = function(){
		if (currentPage != "Settings") 
			currentPage = "Settings";
		$scope.changePage();
	};
});