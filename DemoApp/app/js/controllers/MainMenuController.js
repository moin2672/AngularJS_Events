'use strict';

eventsApp.controller('MainMenuController', 
    function MainMenuController($scope, $location){

        console.log('absUrl: ', $location.absUrl());
        console.log('protocol: ', $location.protocol());
        console.log('port: ', $location.port());
        console.log('host: ', $location.host());

        //below given methods are both getter and setter
        console.log('path: ', $location.path());
        console.log('search: ', $location.search());
        console.log('hash: ', $location.hash());
        console.log('url: ', $location.url());

        // to test http://localhost:8000/newEvent?foobar=avc&eventId=2#qwerty

        $scope.createEvent = function(){
            $location.replace(); // replaces the current page to new page not navigating to the new page
            $location.url('newEvent');
        }
    }
);