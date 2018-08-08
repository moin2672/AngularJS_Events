eventsApp.factory('eventData', function($resource){
    var resource=$resource('/data/event/1',{id:'@id'});
    return{
        getEvent:function(){
            return resource.get({id:1});
        },
        save: function(event){
            event.id=998;
            return resource.save(event);
        }
    };
});