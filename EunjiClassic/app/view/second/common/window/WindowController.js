Ext.define('EunjiClassic.view.second.common.window.WindowController',{
    extend: 'Ext.app.ViewController',
    alias:'controller.nodewindow',

    onAddClick: function(btn){
        var view = this.getView().treeView;
        var treeModel = this.getView().treeModel;
        var form = btn.up('window').down('form');
        var title = form.getValues().title;
        var selectedNode = treeModel.getSelection()[0];

        var model;
        if(!selectedNode){
            model = new EunjiClassic.model.TreeStoreList({
                name:title,
                leaf: true,
                //parentId: parentId.id
            });
            view.getRootNode().appendChild(model);
            
            // treeEdit:function(editor, e){
            //     console.log("treeEdit..");
            //     // this.getView().getSelectionModel().getSelection()[0].commit();
            //     // debugger;
            //     editor.view.getStore().save({
            //         success: function (response) {
            //             Ext.Msg.alert('Success', "입력한 데이터가 저장되었습니다.");
            //             editor.view.getStore().reload();
            //         },
            //         failure: function (response) {
            //             Ext.Msg.alert('Failed', "데이터 저장이 실패하였습니다.");
            //         }
            //     });
            // },
        }else{
            model = new EunjiClassic.model.TreeStoreList({
                name:title,
                leaf: true,
                //parentId: parentId.id
            });
            selectedNode.appendChild(model);
            if(!selectedNode.isExpanded())
            selectedNode.expand();
            selectedNode.commit();
        }
        view.setSelection(model);
        btn.up('window').close();
    },
    onCloseClick:function(btn){
        var win = btn.up('window');
        win.close();
    }
});