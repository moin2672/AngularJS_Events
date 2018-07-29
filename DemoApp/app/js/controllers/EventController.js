'use strict';

eventsApp.controller('EventController',
    function EventController($scope){

        $scope.snippet='<span style="color:red;">hi there</span>';

        $scope.boolValue=false;

        $scope.myStyle={color:'red'};

        $scope.myclass='blue';

        $scope.event={
            name: 'Angular Boot Camp',
            date: '1/1/2013',
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
                    abstract:'In this session you will learn about directives.',
                    upVoteCount:0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName:'John Doe',
                    duration:'30 mins',
                    level:'Introductory',
                    abstract:'In this session you will learn about the benefits of scopes.',
                    upVoteCount:0
                },
                {
                    name: 'Well behaved controllers',
                    creatorName:'Jane doe',
                    duration:'2 hr',
                    level:'Intermediatory',
                    abstract:'Controllers are the begining of everything that Angular does.',
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