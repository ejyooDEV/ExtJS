Ext.define("EunjiClassic.view.page.tree.LeftTree",{
    extend:'Ext.tree.Panel',
    alias:'widget.lefttree',
    controller:'lefttree',
    title:'트리',
    rootVisible: false,
    displayField: 'name',
    useArrows: true,
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
    bind: {
        store: '{treestore}', // ProjectMainModel.js 내 bind data
    },
    listeners:{
        //itemclick:'onMenuClick'
        select:'onMenuClick'
    }
});