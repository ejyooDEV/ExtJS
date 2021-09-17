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
        timeout: 60*1000*60
        // writer: {
        //     writeAllFields: true //데이터 수정 시 서버에 모든 데이터가 날라가도록 하는 코드
        // }
        // enablePaging: true
    }
});
