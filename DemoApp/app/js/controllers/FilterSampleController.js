'use strict';

eventsApp.controller('FilterSampleController', 
    function FilterSampleController($scope, $filter){
        $scope.data={};

        var duration = $filter('duration');

        $scope.data.duration1 = duration(1);
        $scope.data.duration2 = duration(2);
        $scope.data.duration3 = duration(3);
        $scope.data.duration4 = duration(4);
        
    }
);