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
    title: 'New Project',
    draggable: true,
    items: [
        {
            xtype: 'form',
            height:450,
            defaults:{
                margin: '12 50 12 50',
                anchor: '100%',
                allowBlank:false,
                msgTarget: 'under',
                blankText: 'This field is required'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'title',
                    fieldLabel: 'Title',
                }, {
                    xtype: 'datefield',
                    name: 'startDate',
                    fieldLabel: 'StartDate',
                    submitFormat: 'Y-m-d',
                    format: 'Y-m-d',
                    value: new Date()  // defaults to today
                }, {
                    xtype: 'datefield',
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
                }, {
                    xtype: 'combobox',
                    store: ['SILKROAD Template', 'DOOSAN'],
                    displayField: 'MenuTemplate',
                    name: 'menuTemplate',
                    value: 'SILKROAD Template',
                    fieldLabel: 'MenuTemplate'
                }, 
            ]
        }],
        buttons:[{
            text:'OK',
            handler:'onAddClick',
            formBind:true
        },{
            text:'Close',
            handler:'onCloseClick',
        },{
            text:'Delete',
            handler:'onDeleteClick',
            formBind:true
        }]

});
