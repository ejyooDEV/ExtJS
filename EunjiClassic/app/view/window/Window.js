Ext.define('EunjiClassic.view.window.Window', {
    extend: 'Ext.window.Window',
    alias: 'createProject',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'EunjiClassic.view.window.WindowController'
    ],

    controller: 'projectWindow',
    width: 800,
    height: 500,
    title: 'New Project',
    draggable: true,
    items: [
        {
            xtype: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'title',
                    fieldLabel: 'Title',
                    allowBlank: false
                }, {
                    xtype: 'datefield',
                    anchor: '100%',
                    name: 'startDate',
                    fieldLabel: 'StartDate',
                    submitFormat: 'Y-m-d',
                    format: 'Y-m-d',
                    value: new Date()  // defaults to today
                }, {
                    xtype: 'datefield',
                    anchor: '100%',
                    name: 'endDate',
                    fieldLabel: 'EndDate',
                    format: 'Y-m-d',
                    value: new Date()  // defaults to today
                }, {
                    xtype: 'combobox',
                    store: ['Ongoing', 'Planning', 'Postponed', 'Finished'],
                    name: 'status',
                    value: 'Ongoing',
                    fieldLabel: 'Status'
                }, {
                    xtype: 'textareafield',
                    grow: true,
                    name: 'description',
                    fieldLabel: 'Description',
                    anchor: '100%'
                }, {
                    xtype: 'combobox',
                    store: ['SILKROAD Template', 'DOOSAN'],
                    queryMode: 'local',
                    displayField: 'MenuTemplate',
                    valueField: 'data',
                    name: 'menuTemplate',
                    value: 'SILKROAD Template',
                    fieldLabel: 'MenuTemplate'
                }, {
                    xtype: 'panel',
                    layout: 'hbox',
                    margin: '20 0 0 0',
                    bodyPadding: 20,
                    defaults: {
                        xtype: 'button',
                        margin: '0 12 0 0'
                    },
                    items: [{
                        text: 'OK',
                        handler: 'onAddClick'
                    }, {
                        text: 'Close',
                        handler: 'onCloseClick'
                    }, {
                        text: 'Delete',
                        margin: 0,
                        handler: 'onDeleteClick'
                    }]
                }

            ]
        }]
});
