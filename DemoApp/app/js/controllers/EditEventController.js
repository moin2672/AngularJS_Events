"use strict";

eventsApp.controller("EditEventController", 
    function EditEventController($scope) {
        $scope.saveEvent=function(event){
            window.alert(event.name + '... Saved.!!!!');
        };

        $scope.cancelEvent=function(){
            window.location="/EventDetails.html";
        }
    }
);
