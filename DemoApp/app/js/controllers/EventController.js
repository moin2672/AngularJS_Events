'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData,$routeParams, $route){

        $scope.sortOrder="name";

        eventData.getEvent($routeParams.eventId)
                 .$promise
                 .then(function(event){$scope.event=event; console.log(event);})
                 .catch(function(response){console.log(response);});
       
        $scope.reload =function(){
            $route.reload();
        }

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