module.controller('searchController', function($scope, searchService) {
	$scope.authcode;
	$scope.getAuthCode=function(){
		searchService.getBase64authCode("brmsAdmin","password@1",function(data) {
			$scope.authcode = data;
		});
	}
	$scope.brms = function(searchData){
		searchService.brms(searchData,$scope.authcode,function(data) {
			$scope.returndata = data;
			alert("observation inside controller "+JSON.stringify($scope.returndata));
			//var resultVal = $scope.returndata.result.execution-results.results;
			alert(JSON.stringify($scope.returndata));
		})


} ;

})