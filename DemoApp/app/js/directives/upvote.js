'use strict';

eventsApp.directive('upvote', function(){
    return {
        restrict:'E',
        replace: true, //to make the <event-thumbnail></event-thumbnail> of EventList.html invisible
        templateUrl: '/templates/directives/upvote.html',
        scope:{
            upvote:"&",
            downvote: "&",
            count:"@" 
        }
    }
});