angular.module("app").controller("ChartCtrl", ['$scope', '$rootScope', '$state', 'PostsSvc',  function ($scope, $rootScope, $state, PostsSvc) {
	$scope.lostData = [10, 10];
	PostsSvc.getAll()
		.success( (data) => {
			$scope.posts = data.postArray;
			$scope.posts.forEach(function(item, i, arr){
				if (item.type=="lost"){
					$scope.lostData[1]++;
				}
				if (item.type=="found"){
					$scope.lostData[0]++;
				}
			});
		})
		.error ( (err) => {
			console.log(err);
		});

	$scope.pieLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012']; //just arrays
	$scope.pieData = [300, 500, 100, 50, 20, 120, 300];
	$scope.lostLabels = ['Найдено', 'Утеряно']; //just arrays


	$scope.barLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	$scope.barSeries = ['Series A'];
	$scope.barData = [
		[65, 59, 80, 81, 56, 55, 40]
	];
}]);
