Ext.define("EunjiClassic.view.second.common.window.Window",{
    extend:'Ext.window.Window',
    alias:'createnode',

    controller:'nodewindow',
    //viewModel:'nodewindow',
    width:300,
    height:150,
    title:'New Node',
    items:[
        {
            xtype:'form',
            height:50,
            defaults:{
                margin:'12 50 12 50',
                anchor: '100%'
            },
            items:[
                {
                    xtype:'textfield',
                    name:'title',
                    fieldLabel:'Title',
                    allowBlank:false
                }
            ]
        }
    ],
    buttons:[{
        text:'OK',
        handler:'onAddClick',
        formBind:true
    },{
        text:'Close',
        handler:'onCloseClick',
    }]
});