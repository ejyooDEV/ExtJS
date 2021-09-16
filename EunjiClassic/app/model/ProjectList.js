Ext.define('EunjiClassic.model.ProjectList', {
    extend: 'EunjiClassic.model.Base',
    fields: [
        'id', 'title',  'endDate', 'status', 'description', 'menuTemplate',
        'startDate'
        //{name: 'startDate',  type: 'date', format: 'Y-m-d'},
    ],
    //clientIdProperty: 'ClientId'
});
