Ext.define('ExtJS6Class.view.main.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'ExtJS6Class.view.menu.LeftMenu',
        'ExtJS6Class.view.user.UserShow'
    ],
    xtype: 'main',
    controller: 'main',
    viewModel: {
        type: 'main',
    },
    layout:{
        type: 'border'
    },
    items:[{
        region:'north',
        height:50,
        bodyStyle:'background-color:black',
        html:'<h2><font color="white">&nbsp;&nbsp;&nbsp;회원관리</font></h2>',
    },{
        region:'west',
        xtype:'leftmenu',
        width:200,
        collapsible:true, //접는 기능
    },{
        region:'center',
        xtype:'tabpanel',
        name:'mainbar',
        items:[
            {
                xtype:'usershow'
            }
        ]
    },{
        region:'south',
        height:30,
        html:'도움말'
    }]
});
