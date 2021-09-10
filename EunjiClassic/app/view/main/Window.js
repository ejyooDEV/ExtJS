Ext.define('EunjiClassic.view.main.Window', {
    extend: 'Ext.window.Window',
    alias: 'createProject',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'EunjiClassic.view.main.WindowController'
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
                    fieldLabel: 'Name',
                    allowBlank: false
                }, {
                    xtype: 'datefield',
                    anchor: '100%',
                    name: 'startdate',
                    fieldLabel: 'Start Date',
                    format: 'Y m d',
                    value: new Date()  // defaults to today
                }, {
                    xtype: 'datefield',
                    anchor: '100%',
                    name: 'enddate',
                    fieldLabel: 'End Date',
                    format: 'Y m d',
                    value: new Date()  // defaults to today
                }, {
                    xtype: 'combobox',
                    store: ['test1', 'test2'],
                    name: 'status',
                    fieldLabel: 'Status'
                }, {
                    xtype: 'textareafield',
                    grow: true,
                    name: 'description',
                    fieldLabel: 'Description',
                    anchor: '100%'
                }, {
                    xtype: 'combobox',
                    store: {
                        type: 'templatecombobox'
                    },
                    queryMode: 'local',
                    displayField: 'Menu Template',
                    valueField: 'data',
                    name: 'Menu Template',
                    fieldLabel: 'Menu Template'
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
                        selected: true,
                        margin: 0,
                        handler: 'onCloseClick'
                    }]
                }

            ]
        }]
});
