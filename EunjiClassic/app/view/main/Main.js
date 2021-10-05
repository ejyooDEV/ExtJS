Ext.define('EunjiClassic.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',
    layout: 'border',

    requires: [
        'EunjiClassic.view.main.MainController',
        'EunjiClassic.view.main.MainModel',
        'EunjiClassic.view.grid.Grid'
    ],

    controller: 'main',
    plugins: 'viewport',
    viewModel: 'main',

    items: [
        {
            region: 'north',
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
        }, {
            region: 'center',
            xtype: 'content'
        }
    ]
});