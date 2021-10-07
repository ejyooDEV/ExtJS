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
            treeModel: this.getView().getSelectionModel()
        }).show();
        // 플러그인 테스트 중..
        // var model = new EunjiClassic.model.TreeStoreList({
        //     name: 'New Child',
        //     leaf: true
        // });
        
        // var treeModel = this.getView().getSelectionModel();
        // var selectedNode = treeModel.getLastSelected();

        // selectedNode.appendChild(model);
        // if(!selectedNode.isExpanded())
        //     selectedNode.expand();

        // view.setSelection(model); // 노드 선택
        // //this.setNewItemListSetting('Folder');  
        // setTimeout(function () { // 아이콘이 변하는 이벤트와 edit 플러그인 적용되는 시점  차 오류 발생
        //     view.editingPlugin.startEdit(model,0);
        // }, 100);

        //view.setLoading(false);
    },
    nocdRemoveChild:function(){
        var tree = this.getView().getView();
        var treeModel = this.getView().getSelectionModel();
        var parentNode = treeModel.getLastSelected().parentNode;
        var childNode = treeModel.getLastSelected();
        parentNode.removeChild(childNode);
        parentNode.commit();
        //this.getView().getStore().load({node:parentNode}); // 해당 노드에 트리노드가 삽입된것 같이 적용됨.
    },

    // 노드 더블클릭
    treeEdit: function(editor, row){
        console.log('test');
    }

});