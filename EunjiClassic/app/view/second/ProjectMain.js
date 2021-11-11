Ext.define('EunjiClassic.view.second.ProjectMain', {
    extend: 'Ext.panel.Panel',
    xtype: 'project-main',
    
    controller: 'project-main',
    viewModel: 'project-main',

    record_id: null,
    layout: 'border',
    items: [
        {
            xtype: 'toolbar',
            region: 'north',
            //hidden: true,
            items: [
                {
                    xtype: 'columnfilter',
                }
            ]
        },{
            region:'center',
            xtype:'project-content',
        }
    ]
});