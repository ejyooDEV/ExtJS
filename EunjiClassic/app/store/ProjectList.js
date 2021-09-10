Ext.define('EunjiClassic.store.ProjectList', {
    extend: 'Ext.data.Store',
    alias: 'store.project',

    model: 'EunjiClassic.model.ProjectList',

    data: { items: [
        { title: 'Jean Luc', manager: "jeanluc.picard", period: "1111", issue: "Jean" },
        { title: 'Worf',     manager: "worf.moghsson",  period: "2222", issue: "Worf" },
        { title: 'Deanna',   manager: "deanna.troi",    period: "3333", issue: "Deanna" },
        { title: 'Data',     manager: "mr.data",        period: "4444", issue: "Data" }
    ]},
    pageSize: 10,

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        },
        enablePaging: true
    }
});
