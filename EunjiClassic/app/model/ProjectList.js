Ext.define('EunjiClassic.model.ProjectList', {
    extend: 'EunjiClassic.model.Base',
    fields: [
        'title', 'id', 'status', 'description', 'menuTemplate',
        {name: 'endDate',  type: 'date', dateFormat: 'Y-m-d',
         convert: function(value){
             if(value) value = new Date(value);
             return value;
         }},
        {name: 'startDate',  type: 'date', dateFormat: 'Y-m-d',
         convert: function(value){
            if (value) value = new Date(value);
            return value;
        }}
    ],
    //idProperty: 'projectID',
    //clientIdProperty: 'clientID' // parent id와 clientid(server에서 사용)아이디 분리하기 위한 작업
    
});
