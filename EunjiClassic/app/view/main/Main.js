Ext.define('EunjiClassic.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',
    layout: 'border',

    controller: 'main',
    plugins: 'viewport',
    viewModel: 'main',

    items: [
        {
            region: 'north',
            xtype: 'toolbar',
            cls: 'ejyoo-maintoolbar-background-color',
            items: [
                {
                    xtype:'button',
                    //id: 'changeHome',
                    handler:'onPageChangeHome',
                    html:'<i class="fas fa-home fa-2x" style="cursor:pointer"></i>',
                    baseCls:'',
                    cls: 'button-text',
                    tooltip: 'Go to home.',
                    //listeners:{
                        //afterrender: 'onQuickTipManager',
                        //destroy: 'onDestoryQuickTipManager',
                        //click: 'onPageChangeHome',
                    //}
                },
                '->',
                {
                    xtype: 'textfield',
                    name: 'field1',
                    emptyText: 'enter search term',
                    cls: 'styled-textfield',
                    inputWrapCls: '', // 입력필드 길이 최대치
                    triggerWrapCls: '', // 검색 입력 필드 테두리 제거
                    fieldStyle: 'background:none' // 모서리 설정
                },
                {
                    xtype: 'button',
                    html:'<i class="fas fa-search" style="color:white"></i>',
                    baseCls:'',
                    cls: 'button-text',
                },
                {
                    xtype: 'button',
                    html:'<i class="fas fa-filter" style="color:white"></i>',
                    baseCls:'',
                },
                '-',
                {
                    
                    html:'<i class="fas fa-user" style="color:white;cursor:pointer">&nbsp;&nbsp;유은지</i>&nbsp;&nbsp;<i class="fas fa-angle-down" style="color:white;cursor:pointer"></i>',
                    baseCls:'',
                    menu: {
                        xtype: 'menu',
                        plain: true,
                        items: {
                            xtype: 'buttongroup',
                            title: 'User options',
                            columns: 2,
                            defaults: {
                                xtype: 'button',
                                scale: 'large',
                                iconAlign: 'left',
                                handler: 'onButtonClick'
                            },
                            items: [{
                                text: 'User<br/>manager',
                                iconCls: 'x-fa fa-user-md',
                                displayText: 'User manager',
                                height: '4em'
                            }, {
                                iconCls: 'x-fa fa-user-plus',
                                tooltip: 'Add user',
                                width: 40,
                                displayText: 'Add user',
                                height: '4em'
                            }, {
                                colspan: 2,
                                width: '100%',
                                text: 'Logout',
                                scale: 'small'
                            }, {
                                src: '../../resourceimage/image/cord/nonuser.png',
                                colspan: 2,
                                width: '100%',
                                text: 'Who is online?',
                                scale: 'small'
                            }]
                        }
                    }
                },
            ]
        }, {
            region: 'center',
            xtype: 'content'
        }
    ],
});