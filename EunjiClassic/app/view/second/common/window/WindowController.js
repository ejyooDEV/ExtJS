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
                leaf:true
            });
            view.getRootNode().appendChild(model);
        }else{
            model = new EunjiClassic.model.TreeStoreList({
                name:title,
                leaf:true
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