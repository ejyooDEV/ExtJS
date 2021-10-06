Ext.define("EunjiClassic.view.page.tree.LeftTree",{
    extend:'Ext.tree.Panel',
    alias:'widget.lefttree',
    controller:'lefttree',
    title:'트리',
    rootVisible: false,
    displayField: 'name',
    // useArrows: true,
    
    bind: {
        store: '{testtreestore}', // ProjectMainModel.js 내 bind data
    },
    // plugins: {
    //     cellediting: {
    // //        clicksToEdit: 2, // dblclick 으로 이벤트 validation 수행하기 위해 추가
    // //         listeners: {
    // //             //beforeedit: 'treeBeforeEdit',
    // //             edit: 'treeEdit',
    // //             canceledit: 'treeCancelEdit'
    // //         }
    //     }
    // },
    
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
            listeners: {

                beforeedit: function(editor, context, eOpts){
                    //debugger
                },
                // edit: 'treeEdit',
                // canceledit: function (editor, context) {
                //     if (context.record.crudState === 'C') context.record.remove();
                // }
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