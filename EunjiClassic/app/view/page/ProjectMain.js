Ext.define('EunjiClassic.view.page.ProjectMain', {
    extend: 'Ext.panel.Panel',
    xtype: 'project-main',
    title: 'ttt',
    controller: 'project-main',
    id: null,
    listeners: {
        afterrender: 'onProjectMain'
    },
    items: [
        {
            xtype: 'panel',
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
                }

            ]
        }]
});