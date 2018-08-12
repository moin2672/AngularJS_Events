'use strict';

eventsApp.directive('eventThumbnail', function(){
    return {
        restrict:'E',
        replace: true, //to make the <event-thumbnail></event-thumbnail> of EventList.html invisible
        templateUrl: '/templates/directives/eventThumbnail.html',
        scope:{
            event:"="
        }
    }
});