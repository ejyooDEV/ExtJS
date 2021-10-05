Ext.define('EunjiClassic.view.page.ProjectMain', {
    extend: 'Ext.panel.Panel',
    xtype: 'project-main',
    title: '프로젝트 상세페이지',
    
    controller: 'project-main',
    viewModel: 'project-main',

    id: null,
    listeners: {
        afterrender: 'onProjectMain'
    },
    items: [
        {
            xtype: 'toolbar',
            region: 'north',
            items: [
                {
                    xtype: 'columnfilter',
                }
            ]
        },
        {
            xtype:'panel',
            region:'center',
            items: [
                {
                    xtype: 'lefttree',
                }
            ]
        }
    ]
});