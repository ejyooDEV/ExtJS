Ext.define('EunjiClassic.view.second.righttree.RightTreeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.righttree',
    //onMenuClick:function(treeModel, record, index, eOpts){},
    /**
     * 노드 추가 버튼 클릭했을 때
     */
    nodeAppendChild: function () {
        var vm = this.getViewModel();
        var view = this.getView();
        Ext.create("createnode", {
            viewModel:{
                parent:vm
            },
            treeView: view,
            treeModel: view.getSelectionModel()
        }).show();
    },
    nocdRemoveChild: function () {
        //var tree = this.getView().getView();
        var treeModel = this.getView().getSelectionModel();
        var parentNode = treeModel.getSelection()[0].parentNode;
        var child_record = treeModel.getSelection()[0];
        var store = this.getViewModel().get('rightstore');
        parentNode.removeChild(child_record);
        store.sync({
            success: function () {
                Ext.Msg.alert('Success', '정상적으로 삭제되었습니다.');
                store.reload();
            },
            failure: function () {
                Ext.Msg.alert('Failed', '삭제 실패하였습니다.');
                store.reload();
            }
        });
        treeModel.deselectAll();
        //this.getView().getStore().load({node:parentNode}); // 해당 노드에 트리노드가 삽입된것 같이 적용됨.
    },

    /**
     * 새로고침 버튼 클릭 시 store reload, expand 처리
     */
    onTreeRefresh: function (btn) {
        var store = this.getViewModel().get('rightstore');
        store.reload({
            // callback: function (treeModels, options) {
            //     //store.getRoot().expandChildren(true);
            // }
        });
    },

    /**
     * 오른쪽 트리에 drop 이벤트 실행
     * @param {*} node 드랍시점에 하이라이트 된 노드
     * @param {*} data 드래그되는 노드 아이템 이벤트 현황 등 정보 데이터
     * @param {*} overModel 드랍시점의 트리 스토어 모델
     * @param {*} dropPosition after
     * @param {*} eOpts 이벤트 명
     */
    onDropRight : function(node, data, overModel, dropPosition, eOpts){
        this.getView().up('project-main').getController().dragDropEvent(data,"right");
    },

    onDropDepthCheck: function (node, data, overModel, dropPosition, dropHandlers, eOpts) {
        this.getView().up('project-main').getController().dropDepthCheck(data,dropHandlers);
    },

    onExpanded: function(node, index, item, eOpts){
        var jsonData = new Object;
        jsonData.id = node.data.id;
        jsonData.expanded = true;
        this.getView().up('project-main').getController().setExpanded(jsonData);
    },

    onCollapse: function(node, index, items, eOpts){
        var jsonData = new Object;
        jsonData.id = node.data.id;
        jsonData.expanded = false;
        this.getView().up('project-main').getController().setExpanded(jsonData);
    }
});