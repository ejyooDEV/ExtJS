Ext.define('EunjiClassic.view.second.common.window.WindowController',{
    extend: 'Ext.app.ViewController',
    alias:'controller.nodewindow',
    init:function(){
        console.log(this.getViewModel());
        
    },
    onAddClick: function(btn){
        var treeView = this.getView().treeView;
        var treeModel = this.getView().treeModel;
        var form = btn.up('window').down('form');
        var title = form.getValues().title;
        var selectRecord = treeModel.getSelection()[0];
        var store = this.getViewModel().get('rightstore');

        selectRecord ? selectRecord = selectRecord : selectRecord = treeView.getRootNode();

        var model = new EunjiClassic.model.TreeStoreList({
            name: title,
            leaf: true,
            mode: 'right'
        });
        //client 처리
        selectRecord.appendChild(model);

        if(selectRecord.id == "root"){
            model.set("parentId", 0);
        }

        if (!selectRecord.isExpanded())
           selectRecord.expand();

           treeView.setSelection(model);

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

        btn.up('window').close();
    },
    onCloseClick:function(btn){
        var win = btn.up('window');
        win.close();
    }
});