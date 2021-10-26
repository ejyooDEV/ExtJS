Ext.define("EunjiClassic.view.second.lefttree.LeftTree",{
    extend:'Ext.tree.Panel',
    alias:'widget.lefttree',
    controller:'lefttree',
    title:'트리1',
    rootVisible: false,
    displayField: 'name',
    //autoSync:true,
    // useArrows: true,
    
    viewConfig: {
        markDirty: false
    },
    
    bind: {
        store: '{leftstore}', // ProjectMainModel.js 내 bind data
    },
    
    multiSelect: true,
    
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
            xtype: 'button',
            iconCls: 'fas fa-redo-alt',
            handler: 'onTreeRefresh',
            html: '&nbsp;&nbsp;새로고침'
        },{
            xtype:'button',
            text:'노드추가',
            handler:'nodeAppendChild'
        },{
            xtype:'button',
            text:'노드삭제',
            handler:'nocdRemoveChild'
        }]
    },
    
    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop',
            ddGroup: 'selDD',
            dragGroup: 'selDD'
        },
        copy: false,
        listeners: {
            beforedrop : 'onDropDepthCheck',
            drop: 'onDropLeft'
        }
    },

    listeners: {
        afteritemexpand: 'onExpanded',
        afteritemcollapse: 'onCollapse'
    }
});