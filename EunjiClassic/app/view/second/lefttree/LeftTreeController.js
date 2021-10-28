Ext.define('EunjiClassic.view.second.lefttree.LeftTreeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.lefttree',
    //onMenuClick:function(treeModel, record, index, eOpts){},

    /**
     * 노드 추가 버튼 클릭했을 때
     */
    nodeAppendChild: function () {
        var view = this.getView();
        var treeModel = view.getSelectionModel();

        var selectRecord = treeModel.getSelection()[0];
        var setChildIndex;
        selectRecord ? selectRecord = selectRecord : selectRecord = view.getRootNode();
        var model = new EunjiClassic.model.TreeStoreList({
            name: 'leftTree',
            leaf: true,
            mode: 'left'
        });
        
        selectRecord.appendChild(model);

        if (selectRecord.id == "root") {
            model.set("parentId", 0);
            // view.getRootNode().commit(); // commit은 서버에 날리지 않는다는 가정하에 사용할 것
        }

        if (!selectRecord.isExpanded())
           selectRecord.expand();

        view.setSelection(model); // 노드 선택

        setTimeout(function () { // 아이콘이 변하는 이벤트와 edit 플러그인 적용되는 시점  차 오류 발생
            view.editingPlugin.startEdit(model, 0);
        }, 100);
    },
    nocdRemoveChild: function () {
        //var tree = this.getView().getView(); //'Ext.tree.View'
        //var parentNode = treeModel.getSelection()[0].parentNode;
        var treeModel = this.getView().getSelectionModel();
        var child_record = treeModel.getSelection()[0]; // record
        var store = this.getViewModel().get('leftstore');
        child_record.remove();
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

    treeEdit: function (editor, e) {
        var store = editor.view.getStore();
        store.sync({
            success: function (batch, options) {
                Ext.Msg.alert('Success', "입력한 데이터가 저장되었습니다.");
                store.reload();
            },
            failure: function (batch, options) {
                Ext.Msg.alert('Failed', "데이터 저장이 실패하였습니다.");
                store.reload();
            }
        });
    },

    /**
     * 새로고침 버튼 클릭 시 store reload, expand 처리
     */
    onTreeRefresh: function (btn) {
        var store = this.getViewModel().get('leftstore');
        var treeModel = this.getView().getSelectionModel();
        treeModel.deselectAll();
        store.reload({
            // callback: function (treeModels, options) {
            //     //store.getRoot().expandChildren(false);
            // }
        });
    },

    /**
     * 왼쪽 트리에 drop 이벤트 실행
     * @param {*} node 드랍시점에 하이라이트 된 노드
     * @param {*} data 드래그되는 노드 아이템 이벤트 현황 등 정보 데이터
     * @param {*} overModel 드랍시점의 트리 스토어 모델
     * @param {*} dropPosition after
     * @param {*} eOpts 이벤트 명
     */
    onDropLeft: function(node, data, overModel, dropPosition, eOpts){
        var after = overModel.data;
        var before = data.records[0].data;
        this.getView().up('project-main').getController().dragDropEvent(data,before,after);
    },

    onDropDepthCheck: function (node, data, overModel, dropPosition, dropHandlers, eOpts) {
        this.getView().up('project-main').getController().dropDepthCheck(data,dropHandlers);
    },

    onExpanded: function ( node, index, item, eOpts ) {
        var id = node.data.id;
        var expanded = true;
        this.getView().up('project-main').getController().setExpanded(id,expanded);
    },

    onCollapse: function ( node, index, item, eOpts ) {
        var id = node.data.id;
        var expanded = false;
        this.getView().up('project-main').getController().setExpanded(id,expanded);
    }
});