Ext.define("EunjiClassic.view.second.righttree.RightTree",{
    extend:'Ext.tree.Panel',
    alias:'widget.righttree',
    controller:'righttree',
    title:'트리2',
    rootVisible: false,
    displayField: 'name',
    //autoSync:true,
    // useArrows: true,
    
    bind: {
        store: '{rightstore}', // ProjectMainModel.js 내 bind data
    },

    multiSelect: true,
    
    columns: [
        {
            xtype: 'treecolumn',
            dataIndex: 'name',
            flex: 1,
            editor: 'textfield'
        },
    ],

    plugins: {
        cellediting: {
            clicksToEdit: 2,
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
            drop: 'onDropRight'
        }
    },

    listeners: {
        afteritemexpand: 'onExpanded',
        afteritemcollapse: 'onCollapse'
    }
});