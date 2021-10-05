Ext.define("EunjiClassic.view.page.tree.window.Window",{
    extend:'Ext.window.Window',
    alias:'createnode',

    controller:'nodewindow',
    viewModel:'nodewindow',
    width:300,
    height:200,
    title:'New Node',
    items:[
        {
            xtype:'form',
            items:[
                {
                    xtype:'textfield',
                    name:'title',
                    fieldLabel:'Title',
                    allowBlank:false
                },{
                    xtype:'panel',
                    layout:'hbox',
                    margin:'20 0 0 0',
                    bodyPadding:20,
                    defaults:{
                        xtype:'button',
                        margin:'0 12 0 0'
                    },
                    items: [{
                        text:'OK',
                        handler:'onAddClick'
                    },{
                        text:'Close',
                        handler:'onCloseClick'
                    }]
                }
                
            ]
        }
    ]
});