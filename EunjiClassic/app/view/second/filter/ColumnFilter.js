Ext.define('EunjiClassic.view.second.filter.ColumnFilter',{
    extend:'Ext.panel.Panel',
    xtype:'columnfilter',
    layout:'hbox',
    items: [
        {
            xtype: 'textfield',
            name: 'title',
            fieldLabel: 'Title',
            allowBlank: false,
            bind: '{item.title}'
        }, {
            xtype: 'datefield',
            anchor: '100%',
            name: 'startDate',
            fieldLabel: 'StartDate',
            submitFormat: 'Y-m-d',
            format: 'Y-m-d',
            bind: {
                value: '{item.startDate}'
            }
        }, {
            xtype: 'datefield',
            anchor: '100%',
            name: 'endDate',
            fieldLabel: 'EndDate',
            format: 'Y-m-d',
            bind: '{item.endDate}'
        }, {
            xtype: 'combobox',
            store: ['Ongoing', 'Planning', 'Postponed', 'Finished'],
            name: 'status',
            bind: '{item.status}',
            fieldLabel: 'Status'
        }, {
            xtype: 'textareafield',
            grow: true,
            name: 'description',
            bind: '{item.description}',
            fieldLabel: 'Description',
            anchor: '100%'
        }, {
            xtype: 'combobox',
            store: ['SILKROAD Template', 'DOOSAN'],
            queryMode: 'local',
            displayField: 'MenuTemplate',
            valueField: 'data',
            name: 'menuTemplate',
            bind: '{item.menuTemplate}',
            fieldLabel: 'MenuTemplate'
        }

    ]
});