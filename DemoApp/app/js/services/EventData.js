eventsApp.factory('eventData', function($resource){
    return{
        getEvent:function(){
            return $resource('/data/event/1',{id:'@id'}).get({id:1});
        }
    };
});