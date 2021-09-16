Ext.define('EunjiClassic.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',
    layout: 'border',
    // renderTo : Ext.getBody(),

    requires: [
        'EunjiClassic.view.main.MainController',
        'EunjiClassic.view.main.MainModel',
        'EunjiClassic.view.main.Grid'
    ],

    controller: 'main',
    plugins: 'viewport',
    viewModel: 'main',
    
    items: [
        {
            xtype: 'panel',
            region: 'north',
            // flex: 1,
            items: [
                {
                    xtype: 'toolbar',
                    items: [
                        {

                            xtype: 'image',
                            src: 'img/top_logo_debug.png',
                            mode: 'image'
                        },
                        '->',
                        {
                            xtype: 'textfield',
                            name: 'field1',
                            emptyText: 'enter search term'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'fas fa-search'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'fas fa-filter'
                        },
                        '-',
                        {
                            xtype: 'button',
                            iconCls: 'fas fa-user',
                            handler: 'onClickButton'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'fas fa-user',
                            text: '트리 테스트',
                            handler: 'ExtWidgetTest'
                        },
                        '유은지'
                    ]
                },
                {
                    xtype: 'segmentedbutton',
                    listeners: {
                        toggle: 'onButtonChange',
                        afterrender: 'onButtonAfterrender'
                    },
                    items: [
                        {
                            text: 'Ongoing',
                            pressed: true
                        },
                        {
                            text: 'Planning'
                        },
                        {
                            text: 'Postponed'
                        },
                        {
                            text: 'Finished'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'mainprojectlistgrid',
            border: true,
            region: 'center',
            flex:4
        },
        {
            xtype: 'panel',
            border: true,
            region: 'east',
            title: 'To-do List',
            flex:2,
        },
        {
            xtype: 'panel',
            border: true,
            region: 'south',
            layout: 'border',
            flex: 1,
            items: [
                {
                    xtype: 'panel',
                    border: true,
                    region: 'west',
                    flex:2,
                    title: 'board'
                },
                {
                    xtype: 'panel',
                    border: true,
                    region: 'center',
                    flex:1,
                    title: 'Notice',
                }
            ]
        }
    ]
});