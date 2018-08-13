'use strict';

eventsApp.directive('gravatar', function(gravatarUrlBuilder){
    return {
        restrict:'E',
        template: '<img />',
        replace: true,
        link: function(scope, element, attrs, controller){
            //name of the attribute to observe, function 
            attrs.$observe("email", function(newValue, oldValue){
                if(newValue!==oldValue){
                    attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue))
                }
            })
        }
    }
});