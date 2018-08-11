'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData,$routeParams, $route){

        $scope.sortOrder="name";

        eventData.getEvent($routeParams.eventId)
                 .$promise
                 .then(function(event){$scope.event=event; console.log(event);})
                 .catch(function(response){console.log(response);});
        console.log($route.current.params.eventId);
        console.log($route.current.params.foo);
        console.log($route.current.pathParams.foo);//display's only if it is defined in route
        // http://localhost:8000/#/event/1?foo=bar

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };
        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };

        $scope.scrollToSession = function(){
            $anchorScroll();
        };

    }
);