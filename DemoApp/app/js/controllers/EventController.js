'use strict';

eventsApp.controller('EventController',
    function EventController($scope){

        $scope.sortOrder="name";

        $scope.event={
            name: 'Angular Boot Camp',
            date: new Date(),
            time: '10:30 am',
            location: {
                address: 'Google Headquaters',
                city:'Mountain View',
                province:'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions:[
                {
                    name: 'Directives MasterClass',
                    creatorName:'Bob Smith',
                    duration:'1 hr',
                    level:'Advanced',
                    abstract:'In this session you will learn about directives. Introductory',
                    upVoteCount:0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName:'John Doe',
                    duration:'30 mins',
                    level:'Introductory',
                    abstract:'In this session you will learn about the benefits of scopes. Intermediatory',
                    upVoteCount:0
                },
                {
                    name: 'Well behaved controllers',
                    creatorName:'Jane doe',
                    duration:'2 hr',
                    level:'Intermediatory',
                    abstract:'Controllers are the begining of everything that Angular does. Advanced',
                    upVoteCount:0
                }
            ]
        };
        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };
        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };

    }
);