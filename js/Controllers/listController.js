/**
 * Created by sirisha on 4/20/2016.
 */
mainApp.controller('listController', function($http,$scope) {

    $http.get('../data/sample.json').success(function(data) {
        $scope.objects = data;
    });
});
