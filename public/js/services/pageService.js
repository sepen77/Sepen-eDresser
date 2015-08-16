//SERVICE
//Main.pageService
//For serving 'pages' to the main view
app.service("pageService", function($rootScope){
	//====  VARS  ====
	var currentPage = "dresser";
	var pageToTitle = {
		dresser:"Dresser",
		history:"History",
		clothes:"Clothes and Outfits",
		settings:"Settings"
	};
	var pageTitle = pageToTitle[currentPage];
	
	//====  FUNCTIONS  ====
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
});
