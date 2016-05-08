angular.module("app").controller("ChartCtrl", function ($scope) {
	$scope.pieLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012']; //year-count mass
	$scope.pieData = [300, 500, 100, 50, 20, 120, 300];
	$scope.lostLabels = ['Найдено', 'Утеряно']; //found lost mass
	$scope.lostData = [3720, 5430];
	$scope.barLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	$scope.barSeries = ['Series A'];
	$scope.barData = [
		[65, 59, 80, 81, 56, 55, 40]
	];
});
