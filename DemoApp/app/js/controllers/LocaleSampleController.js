'use strict';

eventsApp.controller('LocaleSampleController',
function LocaleSampleController($scope, $locale){
    
    console.log($locale);

    $scope.myDate = Date.now();
    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
    //$scope.myFormat = $locale.DATETIME_FORMATS.shortDate;

    // https://code.angularjs.org/1.4.0/i18n

    throw{message: 'error message'};
});