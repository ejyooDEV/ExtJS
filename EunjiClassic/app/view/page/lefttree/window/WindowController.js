Ext.define('EunjiClassic.view.page.tree.window.WindowController',{
    extend: 'Ext.app.ViewController',
    alias:'controller.nodewindow',

    onAddClick: function(btn){
        var form = btn.up('window').down('form');
        var title = form.getValues().title;
        var treeModel = this.getView().treeModel;
        var node = treeModel.getLastSelected();
        node.appendChild({
            leaf:true,
            name:title
        });
        node.expand();
        node.commit();

        btn.up('window').close();
    },
    onCloseClick:function(btn){
        var win = btn.up('window');
        win.close();
    }
});