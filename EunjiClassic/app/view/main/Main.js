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
            style:{
                backgroundColor:'#515f75'
            },
            items: [
                {
                    xtype:'button',
                    iconCls:'fas fa-home',
                    text:'홈으로',
                    handler:'onPageChangeHome'
                },
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
                    handler: 'onClickButton',
                    html: '&nbsp;&nbsp;유은지'
                },
                // {
                //     xtype: 'button',
                //     iconCls: 'fas fa-user',
                //     text: '트리 테스트',
                //     handler: 'ExtWidgetTest'
                // },
            ]
        }, {
            region: 'center',
            xtype: 'content'
        }
    ]
});