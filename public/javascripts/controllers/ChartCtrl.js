/**
 * Created by User on 07.05.2016.
 */
angular.module("app").controller("ChartCtrl", function ($scope) {
	$scope.pieLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012']; //just arrays
	$scope.pieData = [300, 500, 100, 50, 20, 120, 300];
	$scope.lostLabels = ['Найдено', 'Утеряно']; //just arrays
	$scope.lostData = [3720, 5430];

	$scope.barLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	$scope.barSeries = ['Series A'];
	$scope.barData = [
		[65, 59, 80, 81, 56, 55, 40]
	];
});
