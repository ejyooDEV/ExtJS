Ext.define("EunjiClassic.view.second.lefttree.LeftTree",{
    extend:'Ext.tree.Panel',
    alias:'widget.lefttree',
    controller:'lefttree',
    title:'트리1',
    rootVisible: false,
    displayField: 'name',
    //autoSync:true,
    // useArrows: true,
    
    bind: {
        store: '{leftstore}', // ProjectMainModel.js 내 bind data
    },
    
    columns: [
        {
            xtype: 'treecolumn',
            dataIndex: 'name',
            flex: 1,
            editor: {
                xtype :'textfield',
                allowBlank: false,
                listeners: {
                    specialkey : function(field,event,eOpts){
                        if(event.getKey() == event.TAB){
                            
                            Ext.Msg.alert('TAB');
                        }else if(event.getKey() == event.ENTER){
                            Ext.Msg.alert('ENTER');
                        }
                    } 
                }
            },
        },
    ],

    plugins: {
        cellediting: {
            clicksToEdit: 2,
            listeners: {
                //beforeedit: 'gridBeforeEdit',
                //canceledit: 'gridCancelEdit',
                //validateedit: 'validateedit',
                edit: 'treeEdit'
            }
        }
    },

    header:{
        itemPosition:1,
        items:[{
            xtype:'button',
            text:'노드추가',
            handler:'nodeAppendChild'
        },{
            xtype:'button',
            text:'노드삭제',
            handler:'nocdRemoveChild'
        }]
    },
    
    //listeners:{
        //select:'onMenuClick'
    //}
});