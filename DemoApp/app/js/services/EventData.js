eventsApp.factory('eventData', function(){
    return{
        event:{
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
                    duration:1,
                    level:'Advanced',
                    abstract:'In this session you will learn about directives. Introductory',
                    upVoteCount:0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName:'John Doe',
                    duration:2,
                    level:'Introductory',
                    abstract:'In this session you will learn about the benefits of scopes. Intermediatory',
                    upVoteCount:0
                },
                {
                    name: 'Well behaved controllers',
                    creatorName:'Jane doe',
                    duration:4,
                    level:'Intermediatory',
                    abstract:'Controllers are the begining of everything that Angular does. Advanced',
                    upVoteCount:0
                }
            ]
        }
    };
});