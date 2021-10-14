Ext.define('EunjiClassic.view.second.righttree.RightTreeController',{
    extend:'Ext.app.ViewController',
    alias:'controller.righttree',
    //onMenuClick:function(treeModel, record, index, eOpts){},
    /**
     * 노드 추가 버튼 클릭했을 때
     */
    nodeAppendChild:function(){
        // var vm = this.getViewModel();
        var view = this.getView();
        Ext.create("createnode",{
            // viewModel:{
            //     parent:vm
            // },
            treeView: this.getView(),
            treeModel: this.getView().getSelectionModel()
        }).show();
    },
    nocdRemoveChild:function(){
        var tree = this.getView().getView();
        var treeModel = this.getView().getSelectionModel();
        var parentNode = treeModel.getSelection()[0].parentNode;
        var childNode = treeModel.getSelection()[0];
        parentNode.removeChild(childNode);
        parentNode.commit();
        //this.getView().getStore().load({node:parentNode}); // 해당 노드에 트리노드가 삽입된것 같이 적용됨.
    },
});