'use strict';

eventsApp.directive('upvote', function(){
    return {
        restrict:'E',
        replace: true, //to make the <event-thumbnail></event-thumbnail> of EventList.html invisible
        templateUrl: '/templates/directives/upvote.html',
        scope:{
            upvote:"&", // to bind a local scope property to a function you want to execute in the parent scope
            downvote: "&",
            count:"=" // to pass integer directly 
        }
    }
});