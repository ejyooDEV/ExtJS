var intViewportWidth = window.innerWidth;
Ext.define('EunjiClassic.view.second.filter.ColumnFilter',{
    extend:'Ext.panel.Panel',
    xtype:'columnfilter',
    layout:{
        type: 'table',
        columns: 4,
    },
    autoScroll : true,
    width: intViewportWidth,
    style: {
        overflowY: 'scroll',
    },
    defaults:{
        padding: '0 10 0 10',
        readOnly:true,
    },
    items: [
        {
            xtype: 'textfield',
            name: 'title',
            fieldLabel: 'Title',
            bind: '{item.title}'
        }, {
            xtype: 'datefield',
            name: 'startDate',
            fieldLabel: 'StartDate',
            submitFormat: 'Y-m-d',
            format: 'Y-m-d',
            bind: {
                value: '{item.startDate}'
            }
        }, {
            xtype: 'datefield',
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
        },  {
            xtype: 'combobox',
            store: ['SILKROAD Template', 'DOOSAN'],
            displayField: 'MenuTemplate',
            name: 'menuTemplate',
            bind: '{item.menuTemplate}',
            fieldLabel: 'MenuTemplate'
        },{
            xtype: 'textareafield',
            grow: true,
            name: 'description',
            bind: '{item.description}',
            fieldLabel: 'Description',
        },
    ]
});