Ext.define('EunjiClassic.view.tree.page.LeftTreeController',{
    extend:'Ext.app.ViewController',
    alias:'controller.lefttree',
    onMenuClick:function(treeModel, record, index, eOpts){
        debugger;
        //var treeModel1 = treeModel;
        //var treeModel2 = this.getView().getSelectionModel();

        // var node2 = treeModel.getSelection()[0];
        // var node3 = treeModel.selected.items[0]
        // var node = treeModel.getLastSelected();
        // node.appendChild({
        //     leaf: true,
        //     text: 'New Child'
        // });

        // // The tree lines won't join up without a refresh
        // tree.getView().refresh();

        // // Not strictly required but...
        // node.expand();
    },
    nodeAppendChild:function(){
        Ext.create("createnode").show();
        var treeModel = this.getView().getSelectionModel();
        var node = treeModel.getLastSelected();
        node.appendChild({
            leaf:true,
            name: 'New Child'
        });
        node.expand();
        node.commit();
    },
    nocdRemoveChild:function(){
        
        var tree = this.getView().getView();
        var treeModel = this.getView().getSelectionModel();
        var parentNode = treeModel.getLastSelected().parentNode;
        var childNode = treeModel.getLastSelected();
        parentNode.removeChild(childNode);
        //this.getView().getStore().load({node:parentNode}); // 해당 노드에 트리노드가 삽입된것 같이 적용됨.
    }
});