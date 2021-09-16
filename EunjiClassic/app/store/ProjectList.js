Ext.define('EunjiClassic.store.ProjectList', {
    extend: 'Ext.data.Store',
    alias: 'store.projectlist',

    model: 'EunjiClassic.model.ProjectList',

    // data: { items: []},
    pageSize: 10,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        actionMethods: {
            create : 'POST',
            read : 'GET',
            update : 'POST',
            destroy : 'POST'
        },
        api : {
            create : "https://localhost:5001/projectList/setSampleData",
            read : "https://localhost:5001/projectList/getSampleData",
            update : "https://localhost:5001/projectList/modifySampleData",
            destroy : "https://localhost:5001/projectList/removeSampleData",
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        },
        // enablePaging: true
    }
});
