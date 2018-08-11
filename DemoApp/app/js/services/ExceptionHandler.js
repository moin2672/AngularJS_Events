'use strict';

// '$' in name of the service is given to overwrite the existing function
eventsApp.factory('$exceptionHandler', function(){
    return function(exception){
        console.log("exception handled: "+ exception.message);
    };
});