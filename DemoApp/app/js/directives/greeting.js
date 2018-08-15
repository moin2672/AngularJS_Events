"use strict";

eventsApp
    .directive("greeting", function() {
        return {
            restrict: "E",
            replace: true,
            priority: -1,
            template: '<button class="btn" ng-click="sayHello()">Say Hello</button>',
            controller: function($scope) {
                var greetings=["Hello"];
                $scope.sayHello = function() {
                    alert(greetings.join());
                };
                this.addGreeting = function(greeting){
                    greetings.push(greeting);
                }
            }
        };
    })
    .directive("finnish", function(){
        return {
            restrict: 'A',
            require: 'greeting',
            priority:-1,
            terminal: true, // it will make no directives with a lower priority will execute (i.e here the ng-click, thus change the priority to -ve)
            //directives of lower order will not execute
            link: function(scope, element, attrs, controller){
                controller.addGreeting('hei');
            }

        }
    })
    .directive("hindi", function(){
        return {
            restrict: 'A',
            require: 'greeting',
            priority:-2,
            link: function(scope, element, attrs, controller){
                controller.addGreeting('नमस्ते');
            }
        }
    })