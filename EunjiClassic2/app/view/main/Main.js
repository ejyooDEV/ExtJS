Ext.define('EunjiClassic2.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'EunjiClassic2.view.main.MainController',
        'EunjiClassic2.view.main.MainModel',
        'EunjiClassic2.view.grid.ProjectList'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'border',

    items: [{
        xtype: 'panel',
        region: 'north',
        items:[
            {
                xtype: 'toolbar',
                items:[
                    '->',
                    {
                        xtype:'textfield',
                        name: 'searchText',
                        emptyText: 'enter search term'
                    },
                    {
                        xtype:'button',
                        iconCls:'fas fa-search'
                    },
                    {
                        xtype:'button',
                        iconCls:'fas fa-filter'
                    },
                    '-',
                    {
                        xtype:'button',
                        iconCls:'fas fa-user',
                        handler:'onClickButton'
                    },
                    '유은지'
                ]
            },
            {
                xtype:'segmentedbutton',
                items:[
                    {
                        text:'Ongoing',
                        pressed:true
                    },
                    {
                        text:'Planning'
                    },
                    {
                        text:'Postponed'
                    },
                    {
                        text: 'Finished'
                    }
                ]
            }
        ]
    },
    {
        xtype:'projectlist', //grid_ProjectList.js
        border:true,
        region:'center',
        flex:4
    },
    {
        xtype:'panel',
        border:true,
        region:'east',
        title:'to-do List',
        flex:2,
        html:'to-do List content'
    },
    {
        xtype:'panel',
        border:true,
        region: 'south',
        layout:'border',
        flex:1,
        items:[
            {
                xtype:'panel',
                border:true,
                region:'west',
                title:'board',
                flex:2,
                html:'Notice content'
            },
            {
                xtype:'panel',
                border:true,
                region:'center',
                title:'Notice',
                flex:1,
                html:'Notice content'
            }
        ]
    }]
});
