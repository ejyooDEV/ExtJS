Ext.define('EunjiClassic.store.TemplateCombobox',{
    extend: 'Ext.data.Store',

    alias : 'store.templatecombobox',

    model : 'EunjiClassic.model.Combobox',

    data : {
        items : [
            {"data":"b1", "name":"Ongoing"},
            {"data":"b2", "name":"Planning"},
            {"data":"b3", "name":"Postponed"},
            {"data":"b4", "name":"Finished"}
        ]
    },

    proxy : {
        type : 'memory',
        reader : {
            type : 'json',
            rootProperty : 'items'
        }
    }
})