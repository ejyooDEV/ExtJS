Ext.define('EunjiClassic.view.second.lefttree.LeftTreeController',{
    extend:'Ext.app.ViewController',
    alias:'controller.lefttree',
    //onMenuClick:function(treeModel, record, index, eOpts){},
    /**
     * 노드 추가 버튼 클릭했을 때
     */
    nodeAppendChild:function(){
        var view = this.getView();
        var model;
        var treeModel = this.getView().getSelectionModel();
        var selectedNode = treeModel.getSelection()[0];
        var parentNode;

        if(!selectedNode){
            parentNode = view.getRootNode().id;
            model = new EunjiClassic.model.TreeStoreList({
                name: 'New Child',
                leaf: true, //true : 하위 노드 생성(아이콘 + 없음) , false : 하위 노드 생성(아이콘 + 있음)
                parentId: parentNode.id
            });
            view.getRootNode().appendChild(model);
        }else{
            model = new EunjiClassic.model.TreeStoreList({
                name: 'New Child',
                leaf: true,
                parentId: selectedNode.id
            });
            selectedNode.appendChild(model);
            if(!selectedNode.isExpanded())
            selectedNode.expand();
            selectedNode.commit();
        }

        view.setSelection(model); // 노드 선택
        setTimeout(function () { // 아이콘이 변하는 이벤트와 edit 플러그인 적용되는 시점  차 오류 발생
        view.editingPlugin.startEdit(model,0);
        }, 100);
        //view.setLoading(false);
    },
    nocdRemoveChild:function(){
        var tree = this.getView().getView(); //'Ext.tree.View'
        var treeModel = this.getView().getSelectionModel();
        var parentNode = treeModel.getSelection()[0].parentNode;
        var childNode = treeModel.getSelection()[0];
        // tree.getRecord(childNode).remove(true);
        parentNode.removeChild(childNode);
        treeModel.deselectAll();
        console.log(childNode);
        // parentNode.removeChild(childNode); // BufferedRenderer#scrollTo error 발생!
        //this.getView().getStore().load({node:parentNode}); // 해당 노드에 트리노드가 삽입된것 같이 적용됨.
    },

    treeEdit:function(editor, e){
        console.log("treeEdit..");
        Ext.Msg.alert('Success', "입력한 데이터가 저장되었습니다.");
        this.getView().getSelectionModel().getSelection()[0].commit();
        debugger;
        // editor.view.getStore().save({
        //     success: function (response) {
        //         Ext.Msg.alert('Success', "입력한 데이터가 저장되었습니다.");
        //         //editor.view.getStore().reload();
        //     },
        //     failure: function (respsonse) {
        //         Ext.Msg.alert('Failed', "데이터 저장이 실패하였습니다.");
        //     }
        // });
    },
});