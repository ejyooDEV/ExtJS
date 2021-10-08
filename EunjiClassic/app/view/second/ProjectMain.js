Ext.define('EunjiClassic.view.second.ProjectMain', {
    extend: 'Ext.panel.Panel',
    xtype: 'project-main',
    
    controller: 'project-main',
    viewModel: 'project-main',

    id: null,
    layout: 'border',
    listeners: {
        afterrender: 'onProjectMain'
    },
    items: [
        {
            xtype: 'toolbar',
            region: 'north',
            hidden: true,
            items: [
                {
                    xtype: 'columnfilter',
                }
            ]
        },
        {
            xtype:'lefttree',
            region:'center',
            border: true,
            flex:1
        },
        {
            xtype:'righttree',
            region:'east',
            border: true,
            flex:1
        }
    ]
});